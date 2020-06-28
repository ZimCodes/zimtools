//The Options Wrapper to use when starting a new category
import styles from '../../../styles/zffmpeg/opts/optswrap.module.css';
export default (props) =>(
    <div className="table-responsive-sm">
        <h4 className="text-center py-5"><a id={props.id} className={styles.a} href={`#${props.id}`}>#</a> <span className={styles.span}>{props.title}</span></h4>
        <section className="row">
            <button name="main" className="col btn btn-success font-weight-bolder" onClick={props.stateClick}><em>Main</em></button>
            <button name="video" className="col btn btn-success font-weight-bolder" onClick={props.stateClick}><em>Video</em></button>
            <button name="advanced" className="col btn btn-success font-weight-bolder" onClick={props.stateClick}><em>Advanced</em></button>
        </section>
        <table className="table table-striped table-bordered table-hover text-center">
            <thead className={"thead-dark shadow"}>
            <tr>
                <th className={styles.th} style={{color:'#00ff00'}} scope="col">Command</th>
                <th className={styles.th} style={{color:'#00ff00'}} scope="col">#</th>
                <th className={styles.th} style={{color:'#00ff00'}} scope="col">Input</th>
                <th className={styles.th} style={{color:'#00ff00'}} scope="col">Description</th>
            </tr>
            </thead>
            <tbody>
            {props.children}
            </tbody>
        </table>
    </div>
);
