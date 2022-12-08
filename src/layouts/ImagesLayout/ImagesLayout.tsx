import React from 'react';
import { useSelector } from 'react-redux';
import { RootReducerState } from '../../store/store';
import styles from './ImagesLayout.module.css';
import ImageCard from '../../components/ImageCard/ImageCard';
import { convertByptesToMegabytes } from '../../util/utils';

type ImagesLayoutProps = {
    filterOn?: undefined | 'favorited';
    sortBy?: undefined | 'createdAt';
    selected?: any;
    onClickImage?: any;
};

const ImagesLayout = ({ filterOn, sortBy, selected, onClickImage }: ImagesLayoutProps): JSX.Element => {
    let images = useSelector<RootReducerState, any[]>(state => state.images.list);
    if (filterOn) {
        images = images.filter(image => image[filterOn]);
    }
    if (sortBy) {
        const unsortedImages = [...images];
        unsortedImages.sort((image1, image2) => {
            const date1 = new Date(image1[sortBy]);
            const date2 = new Date(image2[sortBy]);
            return date1.getTime() - date2.getTime();
        });
        images = unsortedImages;
    }

    const onClickImageHandler = (image: any) => {
        onClickImage(image);
    };

    return (
        <div className={styles.layout}>
            {images.map((image) => (
                <ImageCard 
                    key={image.filename}
                    imgSrc={image.url}
                    imgName={image.filename}
                    size={convertByptesToMegabytes(image.sizeInBytes)}
                    selected={selected?.id === image?.id}
                    image={image}
                    onClickImage={() => onClickImageHandler(image)}
                />
            ))}
        </div>
    );
};

export default ImagesLayout;