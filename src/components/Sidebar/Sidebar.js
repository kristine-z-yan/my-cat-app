import { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from "react-redux";

import { fetchCategories } from "../../actions/fetchCategories";

import styles from './Sidebar.module.css';


class Sidebar extends Component {
    componentDidMount() {
        this.props.dispatch(fetchCategories());
    }
      
    render() { 
        const { data } = this.props;

        if (data.categories) {
           const links = data.categories.map((cat) => {
                return (
                    // <li className={`${styles['list-item']} ${styles.active}`}></li>
                    <li key={cat.id} className={styles['list-item']}>
                        <Link to={'/categories/'+ cat.id} >{cat.name}</Link>
                    </li>
                );
            });

            return (
                <div className={styles.navbar}>
                    <div className={styles.sidebar}>
                        <h2>My Cat App</h2>
                        <ul className={styles.list}>
                            {links}
                        </ul>
                    </div>
                </div>
               
            );
        }

        return (
            <div className={styles.sidebar}>
                Loading...
            </div>
        );
    }
}

const mapStateToProps = state => ({
    data: state.categories,
    loading: state.categories.loading,
    error: state.categories.error
  });
  

export default connect(mapStateToProps)(Sidebar);