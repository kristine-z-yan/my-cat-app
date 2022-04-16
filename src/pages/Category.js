import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import Card from '../UI/Card/Card';

import styles from './Category.module.css';

const Category = () => {
    const [ cats, setCats ] = useState([]);
    const [ page, setPage ] = useState(1);
    const [ category, setCategory ] = useState(null);
    let params = useParams();

    useEffect(() => {
        const str = params.id ? "&category_ids=" + params.id : '';
        fetch("https://api.thecatapi.com/v1/images/search?limit=10&page=" + page + str)
        .then(res => res.json())
        .then( response => {
            if (category && category==params.id) {
                setCats([...cats, ...response])
            }
            else if (!category && params.id) {
                setCategory(params.id)
                setCats([...cats, ...response])
            } else {
                setCategory(null)
                setCats(response)
            }
        })
    }, [params.id, page])
  
 return (
    <section className={styles.container}>
        <div className={styles.content}>
            {
                cats && cats.map(cat => {
                    return (
                        <Card src={cat.url} key={cat.id+Math.random()}/>
                    )
                })
            }
            <div>
                <button onClick={() => {
                    setPage(page + 1)
                }}>Load more</button>
            </div>
        </div>
    </section>
 );
};

export default Category;