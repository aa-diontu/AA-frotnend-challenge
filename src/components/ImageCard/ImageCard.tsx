import React from 'react';
import styles from './ImageCard.module.css';

type ImageProps = {
    image: any;
    imgSrc: string;
    imgName: string;
    size: number;
    selected: boolean;
    onClickImage: any;
}

const ImageCard = ({imgSrc, imgName, size, selected, onClickImage}: ImageProps) => {
    return (
        <div className={styles.card} onClick={() => onClickImage()}>
            <img src={imgSrc} alt={imgName} className={`${styles.cardImage} ${selected ? styles.imageSelected : ''}`} />
            <div className={styles.cardName}>{imgName}</div>
            <div className={styles.cardSize}>{size} MB</div>
        </div>
    );
};

export default ImageCard;