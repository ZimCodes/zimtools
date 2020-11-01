//The Options Wrapper to use when starting a new category
import styles from '../../../styles/zeiver/optswrap.module.css';
export default (props) =>(
    <div className="table-responsive-sm">
        <h3 className="text-center py-5"><a id={props.id} className={styles.a} href={`#${props.id}`}>#</a> <span className={styles.span}>{props.title}</span></h3>
        <table className="table table-striped table-bordered table-hover text-center">
            <thead>
            <tr className={`${styles.tr} shadow text-warning`}>
                <th scope="col">Command</th>
                <th scope="col">Input</th>
                <th scope="col">Description</th>
            </tr>
            </thead>
            <tbody className={styles.tbody}>
            {props.children}
            </tbody>
        </table>
    </div>
);
