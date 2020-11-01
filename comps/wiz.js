import Link from "next/link";
import React from "react";
import styles from "../styles/main/global_tools.module.css";
const Wiz = (props) => (
    <div className="col-lg-3">
        <Link href={props.link}>
            <a className={`${styles.noUnderline} `}>
                <div className={`card ${styles.card} text-center rounded-circle ${styles.shadow}`}>
                    <h3 className={`${styles.cardHeader} rounded-pill card-header font-weight-bold ${props.headStyle}`}>{props.title}</h3>
                    <div className="card-body">
                        <div className={"card-text text-dark text-center"}>{props.about}</div>
                    </div>
                </div>
            </a>
        </Link>
    </div>

);
export default Wiz;