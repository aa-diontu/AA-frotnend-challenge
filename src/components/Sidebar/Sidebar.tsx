import React from 'react';
import { useSelector } from 'react-redux';
import { RootReducerState } from '../../store/store';
import { convertByptesToMegabytes } from '../../util/utils';
import styles from './Sidebar.module.css';

type SidebarProps = {
    selected: any;
}

const Sidebar = ({ selected }: SidebarProps) => {
    
    return (
        <div className={styles.sideBar}>
            {!selected && (
                <div>
                    No Image is selected yet.
                </div>
            )}
            {selected && (
                <>
                    <img src={selected.url} alt={selected.filename} className={styles.image}/>
                    <div>{selected.filename}</div>
                    <div className={styles.byteSize}>{`${convertByptesToMegabytes(selected.sizeInBytes)} MB`}</div>
                    <div className={styles.informationContainer}>
                        <div className={`${styles.informationHeader}`}>Information</div>
                        <div className={styles.informationContent}>
                            <div>Uploaded by</div>
                            <div>Created</div>
                        </div>
                        <div className={styles.informationContent}>
                            <div>Created</div>
                            <div>Uploaded by</div>
                        </div>
                        <div className={styles.informationContent}>
                            <div>Last modified</div>
                            <div>Uploaded by</div>
                        </div>
                        <div className={styles.informationContent}>
                            <div>Dimensions</div>
                            <div>Uploaded by</div>
                        </div>
                        <div className={styles.informationContent}>
                            <div>Resolution</div>
                            <div>Uploaded by</div>
                        </div>
                    </div>
                    {/* description */}
                    <div className={styles.descriptionContainer}>
                        <div>Description</div>
                        <div className={styles.descriptionContentContainer}>
                            <div className={styles.descriptionContent}>Add a description to this image</div>
                            <div>Image</div>
                        </div>
                    </div>
                    {/* shared with */}
                    <div>
                        <div className={`${styles.sharedWithHeader}`}>Shared with</div>
                        {selected.sharedWith.map((shared: any) => (
                            <div className={styles.sharedWithContent}>
                                <div className={styles.sharedWithProfile}>
                                    <img className={styles.sharedWithPic} src={shared.avatar} alt={shared.name} />
                                    <div>{shared.name}</div>
                                </div>
                                <div className={styles.sharedRemovePerson}>Remove</div>
                            </div>
                        ))}
                        <div className={styles.sharedWithAddcontainer}>
                            <div className={styles.sharedWithAddPic}>+</div>
                            <div>Share</div>
                        </div>
                    </div>
                    <div className={styles.buttonGroup}>
                        <div className={styles.downloadButton}>Download</div>
                        <div className={styles.deleteButton}>Delete</div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Sidebar;