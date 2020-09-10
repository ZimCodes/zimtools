import styles from "../../../styles/zphuber/optswrap.module.css";

const Filtertable = props => <div className="table-responsive-sm">
    <h3 className="text-center py-3"><a id={'exclude'} className={styles.a} href={`#exclude`}>#</a> <span className={styles.span}>Exclusion Table</span></h3>
    <h4 className={'text-center pb-3'}>Click categories to exclude. <strong>[Max: 10]</strong></h4>
    <table className="table table-sm table-striped table-bordered table-hover text-center">
        <thead>
            <tr className={`${styles.tr} shadow table-dark text-warning`}>
                <th scope="col">Column #1</th>
                <th scope="col">Column #2</th>
                <th scope="col">Column #3</th>
                <th scope="col">Column #4</th>
                <th scope="col">Column #5</th>
            </tr>
        </thead>
        <tbody>
            {props.children}
        </tbody>
    </table>
</div>;

export default Filtertable;