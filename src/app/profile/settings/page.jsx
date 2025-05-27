'use client';

// import { useState } from 'react';
import SettingsMenu from '@/components/SettingsMenu';
import styles from "./settings.module.css";

export default function ProfileSettingsPage () {
    // const [activeTab, setActiveTab] = useState('basic_settings');

    return (
        <div className={styles.container}>
            <img src="/Line 5.svg" className={styles.line5} />
            <img src="/Line 10.svg" className={styles.line10} />
            <img src="/Line 9.svg" className={styles.line9} />
            <header className={styles.header_settings}>
                <p style={{ color: '#fff', fontSize: '18px' }}>Налаштування</p>
            </header>
                <SettingsMenu />
            <img src="/Line 6.svg" className={styles.line6} />
            <img src="/Line 8.svg" className={styles.line8} />
            <img src="/Line 7.svg" className={styles.line7} />
        </div>
        // <div className={styles.container}>
        //     {/* Декоративні лінії можна винести в окремий компонент або просто прибрати абсолютні координати */}
        //     <div className={styles.decorations}>
        //         <img src="/Line 5.svg" className={styles.line5} alt="" />
        //         <img src="/Line 6.svg" className={styles.line6} alt="" />
        //         <img src="/Line 7.svg" className={styles.line7} alt="" />
        //         <img src="/Line 8.svg" className={styles.line8} alt="" />
        //         <img src="/Line 9.svg" className={styles.line9} alt="" />
        //         <img src="/Line 10.svg" className={styles.line10} alt="" />
        //     </div>
        //
        //     <header className={styles.headerSettings}>
        //         <p>Налаштування</p>
        //     </header>
        //     <div className={styles.menuWrapper}>
        //         <SettingsMenu />
        //     </div>
        // </div>
    );
}