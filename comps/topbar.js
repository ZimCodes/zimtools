import styles from '../styles/main/topbar.module.css';
import Link from 'next/link';
export default (props) => (
    <nav>
        <h1 className={`m-0 text-center bg-dark font-weight-bolder pb-1 ${styles.title}`}>ZimTools ~> <span className={styles.tick}>_</span> </h1>
        <ul className={"nav bg-dark"}>
            <li className={`nav-item`}>
                <Link href={'/about'}>
                    <a className={`nav-link ${styles.subnav}`}>About</a>
                </Link>
            </li>
        </ul>
        <h3 className={"text-center mt-3"}><u>Choose a Configurator:</u></h3>
    </nav>
);