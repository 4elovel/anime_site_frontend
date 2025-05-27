'use client';

import { useRouter } from 'next/navigation';
import styles from "./reset-password.module.css";

export default function ResetPasswordPage() {
    const router = useRouter();

    const handleResetPassword = (e) => {
        e.preventDefault();
        // Здесь будет логика сброса пароля
        // После успешного сброса перенаправляем на страницу входа
        router.push('/signin');
    };

    return (
        <div className={styles.container}>

        </div>
    );
}