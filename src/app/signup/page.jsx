import styles from "./signup.module.css";

export default function SignupPage() {
    return(
        <div className={styles.container}>
            <img src="/Line 5.svg" className={styles.line5} />
            <img src="/Line 10.svg" className={styles.line10} />
            <img src="/Line 9.svg" className={styles.line9} />
            <div className={styles.card}>
                <div>
                    <div className={styles.logo}>
                        <img src="/Group 1.svg" />
                    </div>
                    <div className={styles.login}>
                        <img src="/Line 4.svg" />
                        <h2 className={styles.title}>Реєстрація</h2>
                        <img src="/Line 3.svg" />
                    </div>
                    <div className={styles.inputGroup}>
                        <div className={styles.inputContainer}>
                            <img src="/email.svg" className={styles.Icon} />
                            <input type="email" placeholder="E-mail" className={styles.customInput} />
                        </div>
                    </div>
                    <div className={styles.inputGroup}>
                        <div className={styles.inputContainer}>
                            <img src="/password.svg" className={styles.Icon} />
                            <input type="password" placeholder="Пароль" className={styles.customInput} />
                        </div>
                    </div>
                    <button className={styles.button}>Далі</button>
                    <img src="/Line 3_2.svg" />
                </div>
                <p className={styles.socialText}>Реєстрація за допомогою</p>
                <div className={styles.socialIcons}>
                    <button className={styles.icon}>
                        <img src="/discord.svg" />
                    </button>
                    <button className={styles.icon}>
                        <img src="/google.svg" />
                    </button>
                    <button className={styles.icon}>
                        <img src="/telegram.svg" />
                    </button>
                </div>
            </div>
            <img src="/Line 6.svg" className={styles.line6} />
            <img src="/Line 8.svg" className={styles.line8} />
            <img src="/Line 7.svg" className={styles.line7} />
        </div>
    );
}
