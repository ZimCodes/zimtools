import styles from '../../../styles/ztube-dl/optswrap.module.css';

const OptionWrapper = props => <div className="table-responsive-sm">
    <h3 className="text-center py-5"><a id={props.id} className={styles.a} href={`#${props.id}`}>#</a> <span className={styles.span}>{props.title}</span></h3>
    {/*<section className="row">*/}
    {/*    <div className="col text-center text-secondary" style={{backgroundColor: "#c3e6cb"}}><em>efficiency</em></div>*/}
    {/*    <div className="col text-center text-secondary" style={{backgroundColor: "#ffeeba"}}><em>warning</em></div>*/}
    {/*    <div className="col text-center text-secondary" style={{backgroundColor: "#b8daff"}}><em>extra</em></div>*/}
    {/*</section>*/}
    <table className="table table-striped table-bordered table-hover text-center">
        <thead>
        <tr className={`${styles.tr} text-white shadow`}>
            <th scope="col">Command</th>
            <th scope="col">Input</th>
            <th scope="col">Description</th>
        </tr>
        </thead>
        <tbody>
        {props.children}
        </tbody>
    </table>
</div>;

export default OptionWrapper;
