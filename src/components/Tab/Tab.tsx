import React, { useState } from 'react';
import { JsxAttribute } from 'typescript';
import styles from './Tab.module.css';

type TabProps = {
    components: {
        tabTitle: string;
        component: JSX.Element;
    }[];
};

const Tab = ({ components }: TabProps) => {
    const [activeTab, setActiveTab] = useState(0);

    const onClickTab = (index: number) => {
        setActiveTab(index);
    };

    return (
        <>
            <div className={styles.tabContainer}>
                {components.map((componentObj, index) => (
                    <button 
                        key={componentObj.tabTitle} 
                        onClick={() => onClickTab(index)} 
                        className={`${styles.tab} ${index === activeTab ? styles.tabActive : ''}`}
                    >
                        {componentObj.tabTitle}
                    </button>
                ))}
            </div>
            {components[activeTab] && components[activeTab].component}
        </>
    );
};

export default Tab;