import SubNav from "./SubNav";//Imports the Floating Action Button Component
import React from "react";//React dependency
import styles from '../../../styles/zffmpeg/nav/icon.module.css';

const Iconnav = props => <section className={`${styles.section} fixed-bottom`}>
    {/*F.A.B. Sub Menu*/}
    {props.isSubMenuOn && <SubNav subNavClick={props.subNavClick}/>}
    {/*F.A.B*/}
    <div className={`${styles.div} shadow`} onClick={props.subActionBtnClick}>
        {/*Plus Icon*/}
        <svg className={`${styles.svg} bi bi-plus`} width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor"
             xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M8 3.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H4a.5.5 0 010-1h3.5V4a.5.5 0 01.5-.5z"
                  clipRule="evenodd"/>
            <path fillRule="evenodd" d="M7.5 8a.5.5 0 01.5-.5h4a.5.5 0 010 1H8.5V12a.5.5 0 01-1 0V8z" clipRule="evenodd"/>
        </svg>
    </div>
</section>;

export default Iconnav;
