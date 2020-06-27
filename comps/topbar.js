import styles from './css/topbar.module.css';
export default (props) => (
    <nav>
        <h1 className={`text-center bg-secondary font-weight-bolder pb-1 ${styles.title}`}>Zim's Wizard ~> <span className={styles.tick}>_</span> </h1>
        <h4 className={"text-center mt-5"}><u>Choose a Wizard:</u></h4>
    </nav>
);