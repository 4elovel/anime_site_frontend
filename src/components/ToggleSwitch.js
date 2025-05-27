import styles from './ToggleSwitch.module.css';

const ToggleSwitch = () => {
    return (
        <label className={styles.switch}>
            <input type="checkbox" />
            <span className={styles.slider}></span>
        </label>
    );
};

export default ToggleSwitch;