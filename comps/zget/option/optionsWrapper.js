const OptionsWrapper = props => <div className="table-responsive-sm">
    <h3 className="text-center py-5"><a id={props.id} style={{textDecoration:'none'}} href={`#${props.id}`}>#</a> <span style={{textDecoration:'underline'}}>{props.title}</span></h3>
    <section className="row">
        <div className="col text-center text-secondary" style={{backgroundColor: "#c3e6cb"}}><em>efficiency</em></div>
        <div className="col text-center text-secondary" style={{backgroundColor: "#ffeeba"}}><em>warning</em></div>
        <div className="col text-center text-secondary" style={{backgroundColor: "#b8daff"}}><em>extra</em></div>
    </section>
    <table className="table table-striped table-bordered table-hover text-center">
        <thead>
        <tr>
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

export default OptionsWrapper;
