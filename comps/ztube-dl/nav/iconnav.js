import SubNav from "./SubNav";
import React from "react";
import styles from '../../../styles/ztube-dl/nav/iconnav.module.css';

const Iconnav = props => <section className={`${styles.section} fixed-bottom`}>
    {props.isSubMenuOn && <SubNav subNavClick={props.subNavClick}/>}
    <div className={`${styles.div} shadow`} onClick={props.subActionBtnClick}>
        <svg className={`${styles.svg} bi bi-plus`} width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor"
             xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M8 3.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H4a.5.5 0 010-1h3.5V4a.5.5 0 01.5-.5z"
                  clipRule="evenodd"/>
            <path fillRule="evenodd" d="M7.5 8a.5.5 0 01.5-.5h4a.5.5 0 010 1H8.5V12a.5.5 0 01-1 0V8z" clipRule="evenodd"/>
        </svg>
    </div>
</section>;

export default Iconnav;
