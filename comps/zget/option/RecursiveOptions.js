import Options from './optionsWrapper';
const REF_URL = <a href="https://www.gnu.org/software/wget/manual/html_node/Recursive-Retrieval-Options.html#Recursive-Retrieval-Options" target="_blank" rel="noreferrer noopener">More Info</a>;

const RecursiveOptions = props => <Options title="Recursive Options" id={"recursive"}>
    <tr className="table-warning">
        <td>Recursion</td>
        <td className="align-middle"><input name="recursion" type="checkbox" onChange={props.recurseCheckInput}/></td>
        <td className="text-center">Turn on recursive retrieving. <em>Default max depth is 5</em>. {REF_URL}</td>
    </tr>
    <tr className="table-warning">
        <td>Depth Level</td>
        <td className="align-middle"><input name="depth" type="number" placeholder="5" onChange={props.recurseTextInput}/></td>
        <td className="text-center">Specify how far to go during recursion. {REF_URL}</td>
    </tr>
    <tr className="table-primary">
        <td>Convert Links</td>
        <td className="align-middle"><input name="links" type="checkbox" onChange={props.recurseCheckInput}/></td>
        <td className="text-center">Convert all links in the document to make them suitable for local viewing. Links that are not downloaded will use the Internet address Url instead. Example: <em>http://cookie.com/img.gif</em> {REF_URL}</td>
    </tr>
    <tr className="table-warning">
        <td>Mirror</td>
        <td className="align-middle"><input name="mirror" type="checkbox" onChange={props.recurseCheckInput}/></td>
        <td className="text-center">Turn on options suitable for mirroring. This option turns on <strong>recursion</strong> and <strong>time-stamping</strong>,
            sets <strong>infinite recursion depth</strong> and keeps <strong>FTP directory listings</strong>. {REF_URL}</td>
    </tr>
    <tr className="table-primary">
        <td>Page Requisites</td>
        <td className="align-middle"><input name="page" type="checkbox" onChange={props.recurseCheckInput}/></td>
        <td className="text-center">Download all files necessary to properly display a given HTML page. This includes inlined images, sounds, and referenced stylesheets. {REF_URL}</td>
    </tr>
</Options>;

export default RecursiveOptions;
