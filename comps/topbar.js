import styles from '../styles/main/topbar.module.css';
import Link from 'next/link';
export default (props) => (
    <nav>
        <h1 className={`m-0 text-center bg-secondary font-weight-bolder pb-1 ${styles.title}`}>Zim's Wizard ~> <span className={styles.tick}>_</span> </h1>
        <ul className={"nav"}>
            <li className={"nav-item bg-secondary"}>
                <Link href={'/about'}>
                    <a className={`nav-link ${styles.subnav}`}>About</a>
                </Link>
            </li>
        </ul>
        <h3 className={"text-center mt-3"}><u>Choose a Wizard:</u></h3>
    </nav>
);