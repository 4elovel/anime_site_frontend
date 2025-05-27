'use client';

import { useState } from 'react';
import ToggleSwitch from '@/components/ToggleSwitch';
import styles from './SettingsMenu.module.css';

const SettingsMenu = () => {
    const [activeTab, setActiveTab] = useState('basic_settings');

    const tabs = [
        { id: 'basic_settings', label: 'Основні налаштування', icon: <img className={styles.icon} src="/settings.svg" alt="Settings" /> },
        { id: 'profile', label: 'Профіль', icon: <img className={styles.icon} src="/profile-settings.svg" alt="Profile" /> },
        { id: 'security', label: 'Безпека', icon: <img className={styles.icon} src="/security-settings.svg" alt="Security" /> },
        { id: 'list', label: 'Список', icon: <img className={styles.icon} src="/list-settings.svg" alt="List" /> },
        { id: 'payment', label: 'Платіжні дані', icon: <img className={styles.icon} src="/payment-settings.svg" alt="Payment" /> },
        { id: 'notifications', label: 'Сповіщення', icon: <img className={styles.icon} src="/notification-settings.svg" alt="Notification" /> },
        { id: 'customization', label: 'Кастомізація', icon: <img className={styles.icon} src="/customization-settings.svg" alt="Customization" /> }
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'basic_settings':
                return (
                    <div className={styles.content_basic_settings}>
                        <div className={styles.content}>
                            <h2>Уподобання</h2>
                            <p className={styles.content_p_basic_settings}>Вкажіть бажані налаштування мови та відео</p>
                            <div>
                                <p className={styles.content_basic_settings_language}>Мова</p>
                                <select>
                                    <option value="ua">Українська</option>
                                    <option value="en">Англійська</option>
                                </select>
                            </div>
                            <div>
                                <p className={styles.content_basic_settings_language}>Мова аудіо</p>
                                <select>
                                    <option value="ua">Українська</option>
                                    <option value="en">Англійська</option>
                                </select>
                            </div>
                            <div>
                                <p className={styles.content_basic_settings_language}>Мова субтитрів</p>
                                <select>
                                    <option value="ua">Українська</option>
                                    <option value="en">Англійська</option>
                                </select>
                            </div>
                            <div className={styles.content_basic_settings_toggle_after_lang_subt}>
                                <ToggleSwitch />
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }} >
                                    <h3>Показати приховані субтитри</h3>
                                    <p className={styles.content_basic_settings_language} style={{ fontWeight: '400' }}>Увімкнувши це налаштування, ми автоматично <br/> показуватимемо приховані субтитри, коли вони <br/> доступні</p>
                                </div>
                            </div>
                            <div>
                                <p className={styles.content_basic_settings_language}>Обмеження контенту</p>
                                <select>
                                    <option value="16_plus">З 16 років і старше</option>
                                </select>
                            </div>
                            <div>
                                <p style={{ fontWeight: '400', fontFamily: 'Inter', fontSize: '12px', color: '#FFFFFF'}}>Ознайомтеся з нашим <span style={{ color: '#3A7AD9' }}>FAQ щодо обмежень контенту</span>, щоб <br/> дізнатися більше про попередження</p>
                            </div>
                        </div>
                        <div className={styles.content}>
                            <h2>Email сповіщення</h2>
                            <p className={styles.content_p_basic_settings}>Виберіть, які сповіщення ви хочете отримувати на електронну пошту</p>
                            <div>
                                <p className={styles.content_basic_settings_language}>Мова спілкування в Email</p>
                                <select>
                                    <option value="ua">Українська</option>
                                    <option value="en">Англійська</option>
                                </select>
                            </div>
                        </div>
                    </div>
                );
            case 'profile':
                return (
                    <div className={styles.content}>
                        <h2>Профіль</h2>
                        <p>Оновіть інформацію про себе.</p>
                        <button className={styles.editButton}>Оновити профіль</button>
                    </div>
                );
            case 'security':
                return (
                    <div className={styles.content}>
                        <h2>Безпека</h2>
                        <p>Змінити пароль або увімкнути двофакторну автентифікацію.</p>
                        <button className={styles.editButton}>Змінити пароль</button>
                    </div>
                );
            case 'list':
                return (
                    <div className={styles.content}>
                        <h2>Список</h2>
                        <button className={styles.editButton}>Налаштувати</button>
                    </div>
                );
            case 'payment':
                return (
                    <div className={styles.content}>
                        <h2>Платіжні дані</h2>
                        <p>Додайте або оновіть платіжні методи.</p>
                        <button className={styles.editButton}>Додати карту</button>
                    </div>
                );
            case 'notifications':
                return (
                    <div className={styles.content}>
                        <h2>Сповіщення</h2>
                        <p>Управляйте сповіщеннями.</p>
                        <button className={styles.editButton}>Налаштувати сповіщення</button>
                    </div>
                );
            case 'customization':
                return (
                    <div className={styles.content}>
                        <h2>Кастомізація</h2>
                        <p>Налаштуйте зовнішній вигляд.</p>
                        <button className={styles.editButton}>Змінити тему</button>
                    </div>
                );
            default:
                return <div className={styles.content}>Оберіть розділ</div>;
        }
    };

    return (
        <div className={styles.settingsContainer}>
            <aside className={styles.sidebar}>
                <h1 className={styles.settings}>Налаштування</h1>
                <ul className={styles.menu}>
                    {tabs.map((tab) => (
                        <li
                            key={tab.id}
                            className={`${styles.menuItem} ${activeTab === tab.id ? styles.active : ''}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            <span>{tab.icon}</span>
                            <span className={styles.label}>{tab.label}</span>
                        </li>
                    ))}
                </ul>
            </aside>
            <main className={styles.mainContent}>{renderContent()}</main>
        </div>
        // <div className={styles.settingsContainer}>
        //     <aside className={styles.sidebar}>
        //         <ul className={styles.menu}>
        //             {tabs.map(tab => (
        //                 <li
        //                     key={tab.id}
        //                     className={`${styles.menuItem} ${activeTab === tab.id ? styles.active : ''}`}
        //                     onClick={() => onChangeTab(tab.id)}
        //                 >
        //                     <span className={styles.label}>{tab.label}</span>
        //                 </li>
        //             ))}
        //         </ul>
        //     </aside>
        //     <main id="settings-content" className={styles.mainContent}>
        //         {activeTab === 'basic_settings' && (
        //             <div className={styles.content}>
        //                 <h2>Особисті дані</h2>
        //                 {/* … */}
        //             </div>
        //         )}
        //         {/* Далі — інші вкладки за вашим switch */}
        //     </main>
        // </div>
    );
};

export default SettingsMenu;