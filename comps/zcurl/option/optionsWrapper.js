//The Options Wrapper to use when starting a new category
import styles from '../../../styles/zcurl/optswrap.module.css';
export default (props) =>(
    <div className="table-responsive-sm">
        <h3 className="text-center py-5"><a id={props.id} className={styles.a} href={`#${props.id}`}>#</a> <span className={styles.span}>{props.title}</span></h3>
        <section className="row">
            <button name="0" className="col btn btn-info border border-dark" onClick={props.btnClick}>URL #1</button>
            <button name="1" className="col btn btn-info border border-dark" onClick={props.btnClick}>URL #2</button>
            <button name="2" className="col btn btn-info border border-dark" onClick={props.btnClick}>URL #3</button>
            <button name="3" className="col btn btn-info border border-dark" onClick={props.btnClick}>URL #4</button>
        </section>
        <table className="table table-striped table-bordered table-hover text-center">
            <thead>
            <tr className={styles.tr}>
                <th scope="col" className={styles.header}>Command</th>
                <th scope="col" className={styles.header}>Input</th>
                <th scope="col" className={styles.header}>Description</th>
            </tr>
            </thead>
            <tbody>
            {props.children}
            </tbody>
        </table>
    </div>
);
