import React from 'react';
import { useSelector } from 'react-redux';
import { RootReducerState } from '../../store/store';
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
                </>
            )}
        </div>
    );
};

export default Sidebar;