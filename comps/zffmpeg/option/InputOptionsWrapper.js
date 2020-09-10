//The Options Wrapper to use when starting a new category
import styles from '../../../styles/zffmpeg/opts/optswrap.module.css';
import React from 'react';
export default (props) =>(
    <div className="table-responsive-sm">
        <h4 className="text-center py-5"><a id={props.id} className={styles.a} href={`#${props.id}`}>#</a> <span className={styles.span}>{props.title}</span></h4>
        {/*<section className="row">
            <button className="col btn btn-success font-weight-bolder"><em>Main</em></button>
            <button className="col btn btn-success font-weight-bolder"><em>Advanced</em></button>
        </section>*/}
        <table className="table table-striped table-bordered table-hover text-center">
            <thead className={"thead-dark shadow"}>
            <tr>
                <th className={styles.th} style={{color: '#00ff00'}} scope="col">Command</th>
                <th style={{color: '#00ff00'}} scope="col" title="Specifies how many times to use this option">
                    <span className={styles.span}>#</span> <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-info-circle-fill"
                         fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                              d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                    </svg>
                </th>
                <th className={styles.th} style={{color: '#00ff00'}} scope="col">Input</th>
                <th className={styles.th} style={{color: '#00ff00'}} scope="col">Description</th>
            </tr>
            </thead>
            <tbody>
            {props.children}
            </tbody>
        </table>
    </div>
);
