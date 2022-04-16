import styles from './Card.module.css';

const Card = (props) => {
    return (
        <div className={styles.card}>
            <img src={props.src}/>
        </div>
    );

};

export default Card;