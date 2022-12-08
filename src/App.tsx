import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { storeImages } from './store/imagesReducer';
import { fetchImages } from './api/api';
import Tab from './components/Tab/Tab';
import styles from './App.module.css';
import ImagesLayout from './layouts/ImagesLayout/ImagesLayout';
import Sidebar from './components/Sidebar/Sidebar';
import { RootReducerState } from './store/store';

function App() {
  const dispatch = useDispatch();

  const [selected, setSelected] = useState<any>(null);

  const selectImage = (imageDetails: any) => {
    setSelected(imageDetails);
  }

  useEffect(() => {
    const getAndStoreImages = async () => {
      const response = await fetchImages();
      dispatch(storeImages(response.data));
    };
    getAndStoreImages();
  }, []);

  return (
    <div className={styles.app}>
      <div className={styles.home}>
        <header className={styles.appHeader}>
          Photos
        </header>
        <Tab
          components={[
            {
              tabTitle: 'Recently Added',
              component: <ImagesLayout sortBy='createdAt' selected={selected} onClickImage={selectImage}/>
            },
            {
              tabTitle: 'Favorited',
              component: <ImagesLayout filterOn='favorited' selected={selected} onClickImage={selectImage}/>
            }
          ]}
        />
      </div>
      {/** replace with the Sidebar component */}
      <Sidebar selected={selected}/>
    </div>
  );
}

export default App;
