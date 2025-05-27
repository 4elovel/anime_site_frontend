import styles from "./Studies.module.css";

export default function StudiesPage() {
    return (
        <div className={styles.container}>
            <img src="/Line 5.svg" className={styles.line5} />
            <img src="/Line 10.svg" className={styles.line10} />
            <img src="/Line 9.svg" className={styles.line9} />
            <header className={styles.header_studies}>
                <img src="/Group 1.svg" className={styles.logo} />
            </header>
            <img src="/Line 6.svg" className={styles.line6} />
            <img src="/Line 8.svg" className={styles.line8} />
            <img src="/Line 7.svg" className={styles.line7} />
        </div>
    );
}