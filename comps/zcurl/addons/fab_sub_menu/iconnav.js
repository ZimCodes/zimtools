import SubNav from "./SubNav";//Imports the Floating Action Button Component
import React from "react";//React dependency
import styles from '../../../../styles/zcurl/nav/icon.module.css'
export default (props)=> (
    <section className={`${styles.section} fixed-bottom`}>
        {/*F.A.B. Sub Menu*/}
        {props.isSubMenuOn && <SubNav subNavClick={props.subNavClick}/>}
        {/*F.A.B*/}
        <div className={`${styles.div} shadow`} onClick={props.subActionBtnClick}>
            <h3 className={styles.icon}>{props.curIndex + 1}</h3>
        </div>
    </section>


);
