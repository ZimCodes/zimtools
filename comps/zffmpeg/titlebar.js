/*The Title Banner Component*/
import styles from '../../styles/zffmpeg/titlebar.module.css';
import Link from 'next/link';

const Titlebar = props => <nav className={'mx-auto'}>
    <div className={'bg-secondary row'}>
        <Link href={'/'}>
            <a>
                <svg width="3em" height="3em" viewBox="0 0 16 16" className={`${styles.svg} bi bi-arrow-left`} fill="yellow" stroke="yellow" strokeWidth={"1"}
                     xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                          d="M5.854 4.646a.5.5 0 0 1 0 .708L3.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z"/>
                    <path fillRule="evenodd" d="M2.5 8a.5.5 0 0 1 .5-.5h10.5a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </a>
        </Link>
        <h1 className={`${styles.h1} col text-center font-weight-bolder`}>zFFmpeg ~> <span className={styles.span}>_</span> </h1>
        <ul className={"nav bg-secondary"}>
            <li className={`nav-item`}>
                <Link href={'/zffmpeg/tips'} passHref>
                    <a rel='noopener noreferrer' target={'_blank'} className={`nav-link ${styles.subnav}`}>Tips</a>
                </Link>
            </li>
        </ul>
    </div>
</nav>;

export default Titlebar;
