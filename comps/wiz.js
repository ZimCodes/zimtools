import Link from "next/link";
import React from "react";
import styles from "../styles/main/global_tools.module.css";
const Wiz = (props) => (
    <div className="col-lg-3">
        <Link href={props.link}>
            <a className={styles.noUnderline}>
                <div className={`card text-center ${styles.shadow}`}>
                    <h3 className={`${styles.cardHeader} card-header font-weight-bold ${props.headStyle}`}>{props.title}</h3>
                    <div className="card-body">
                        <div className="card-text text-dark">{props.about}</div>
                    </div>
                </div>
            </a>
        </Link>
    </div>

);
export default Wiz;