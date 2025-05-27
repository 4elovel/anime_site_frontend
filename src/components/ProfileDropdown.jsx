'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './ProfileDropdown.module.css';

const ProfileDropdown = ({ user, logout }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [menuWidth, setMenuWidth] = useState(null);
    const dropdownRef = useRef(null);
    const nameRef = useRef(null);

    const handleToggle = () => {
        setIsOpen((prev) => !prev);
    };

    // Обрізання імені до 20 символів із додаванням "..."
    const displayName = (name) => {
        if (!name) return 'Default Name';
        return name.length > 20 ? `${name.slice(0, 20)}...` : name;
    };

    useEffect(() => {
        if (nameRef.current && isOpen) {
            const width = nameRef.current.getBoundingClientRect().width + 65; // +65 для padding і зображення
            setMenuWidth(Math.max(width, 250));
        }
    }, [user, isOpen]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div
            className={styles.dropdown}
            ref={dropdownRef}
            aria-expanded={isOpen}
        >
            <Image
                src={ '/default-profile.png'}
                alt="Profile"
                width={40}
                height={40}
                className={styles.profileImage}
                onClick={handleToggle}
            />
            {isOpen && (
                <ul className={styles.menu} style={{ minWidth: menuWidth ? `${menuWidth}px` : '150px' }}>
                    <li className={styles.li_profile_name}>
                        <Image
                            src={ '/default-profile.png'}
                            alt="Profile"
                            width={40}
                            height={40}
                            className={styles.profileImage}
                        />
                        <p ref={nameRef} className={styles.profileName} style={{ color: 'black' }}>
                            {displayName(user?.name || 'BlackVarmirddddddddd')}
                        </p>
                    </li>
                    <li>
                        <Link
                            href="/profile"
                            className={styles.menuItem}
                            onClick={() => setIsOpen(false)}
                        >
                            Профіль
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/profile/favorites"
                            className={styles.menuItem}
                            onClick={() => setIsOpen(false)}
                        >
                            Улюблене
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#"
                            className={styles.menuItem}
                            onClick={() => setIsOpen(false)}
                        >
                            Список аніме
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/profile/settings"
                            className={styles.menuItem}
                            onClick={() => setIsOpen(false)}
                        >
                            Налаштування
                        </Link>
                    </li>
                    <li>
                        <button
                            onClick={() => {
                                logout();
                                setIsOpen(false);
                            }}
                            className={styles.menuItem}
                        >
                            Вихід
                        </button>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default ProfileDropdown;