//The Options Wrapper to use when starting a new category
import styles from '../../../styles/zffmpeg/opts/optswrap.module.css';
import React from "react";

const OptionsWrapper = props => <div className="table-responsive-sm">
    <h3 className="text-center py-5"><a id={props.id} className={styles.a} href={`#${props.id}`}>#</a> <span className={styles.span}>{props.title}</span></h3>
    {/*<section className="row">
        <button className="col btn btn-info"><em>Main</em></button>
        <button className="col btn btn-info"><em>Video</em></button>
        <button className="col btn btn-info"><em>Audio</em></button>
        <button className="col btn btn-info"><em>Subtitle</em></button>
        <button className="col btn btn-info"><em>Advanced</em></button>
    </section>*/}
    <table className="table table-striped table-bordered table-hover text-center">
        <thead className={"thead-dark shadow"}>
        <tr>
            <th className={styles.th} style={{color: '#00ff00'}} scope="col">Command</th>
            <th className={styles.th} style={{color: '#00ff00'}} scope="col">Input</th>
            <th className={styles.th} style={{color: '#00ff00'}} scope="col">Description</th>
        </tr>
        </thead>
        <tbody>
        {props.children}
        </tbody>
    </table>
</div>;

export default OptionsWrapper;
