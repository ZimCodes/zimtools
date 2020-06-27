import styles from './css/topbar.module.css';
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
        <h4 className={"text-center mt-5"}><u>Choose a Wizard:</u></h4>
    </nav>
);