import React from 'react';
import { useSelector } from 'react-redux';
import { RootReducerState } from '../../store/store';
import { convertByptesToMegabytes } from '../../util/utils';
import moment from 'moment';
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
                    <div className={styles.container}>
                        <div className={`${styles.informationHeader}`}>Information</div>
                        <div className={styles.informationContent}>
                            <div>Uploaded by</div>
                            <div>{selected.uploadedBy}</div>
                        </div>
                        <div className={styles.informationContent}>
                            <div>Created</div>
                            <div>{moment(selected.createdAt).format('MMMM d, YYYY')}</div>
                        </div>
                        <div className={styles.informationContent}>
                            <div>Last modified</div>
                            <div>{moment(selected.updatedAt).format('MMMM d, YYYY')}</div>
                        </div>
                        <div className={styles.informationContent}>
                            <div>Dimensions</div>
                            <div>{`${selected.dimensions.width} x ${selected.dimensions.height}`}</div>
                        </div>
                        <div className={styles.informationContent}>
                            <div>Resolution</div>
                            <div>{`${selected.resolution.width} x ${selected.resolution.height}`}</div>
                        </div>
                    </div>
                    {/* description */}
                    <div className={styles.container}>
                        <div>Description</div>
                        <div className={styles.descriptionContentContainer}>
                            <div className={styles.descriptionContent}>Add a description to this image</div>
                            <div>Image</div>
                        </div>
                    </div>
                    {/* shared with */}
                    <div className={styles.container}>
                        <div className={`${styles.sharedWithHeader}`}>Shared with</div>
                        {selected.sharedWith.map((shared: any) => (
                            <div className={styles.sharedWithContent}>
                                <div className={styles.sharedWithProfile}>
                                    <img className={styles.sharedWithPic} src={shared.avatar} alt={shared.name} />
                                    <div>{shared.name}</div>
                                </div>
                                <a className={styles.sharedRemovePerson}>Remove</a>
                            </div>
                        ))}
                        <div className={styles.sharedWithAddcontainer}>
                            <div className={styles.sharedWithAddPic}>+</div>
                            <div>Share</div>
                        </div>
                    </div>
                    <div className={`${styles.buttonGroup} ${styles.container}`}>
                        <div className={styles.downloadButton}>Download</div>
                        <div className={styles.deleteButton}>Delete</div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Sidebar;