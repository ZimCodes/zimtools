import Options from "./optionsWrapper";
const REF_URL = <a href="https://www.gnu.org/software/wget/manual/html_node/Logging-and-Input-File-Options.html#Logging-and-Input-File-Options" target="_blank" rel="noreferrer noopener">More Info</a>;

const FileOptions = props => <Options title="File & Debug Options" id={"file"}>
    <tr className="table-primary">
        <td>Append Output Logs</td>
        <td className="align-middle"><input name="appendlogs" type="text" placeholder="logfile.txt" onChange={props.fileTextInput}/></td>
        <td className="text-center">Append all messages to a logfile. If logfile does not exist, a new file is created. {REF_URL}</td>
    </tr>
    <tr className="table-primary">
        <td>Debug</td>
        <td className="align-middle"><input name="debug" type="checkbox" onChange={props.fileCheckInput}/></td>
        <td className="text-center">Turn on debug output, which contains various information important to the developers of Wget if it does not work properly. {REF_URL}</td>
    </tr>
    <tr className="table-primary">
        <td>Quiet</td>
        <td className="align-middle"><input name="quiet" type="checkbox" onChange={props.fileCheckInput}/></td>
        <td className="text-center">Turn off Wget’s output. {REF_URL}</td>
    </tr>
    <tr className="table-primary">
        <td>Report Speed</td>
        <td className="align-middle"><input name="bandwidth" type="checkbox" onChange={props.fileCheckInput}/></td>
        <td className="text-center">Output bandwidth <em>(in bits)</em>. {REF_URL}</td>
    </tr>
    <tr className="table-primary">
        <td>Input File</td>
        <td className="align-middle"><input name="inputfile" type="text" placeholder="file.txt" onChange={props.fileTextInput}/></td>
        <td className="text-center">Read URLs from a local or external file. If this function is used, <strong>no URL(s) needs be present on the command line</strong>. {REF_URL}</td>
    </tr>
    <tr className="table-primary">
        <td>Config File</td>
        <td className="align-middle"><input name="config" type="text" placeholder="config.txt" onChange={props.fileTextInput}/></td>
        <td className="text-center">Specify the location of a startup file you wish to use instead of the default one(s). {REF_URL}</td>
    </tr>
</Options>;

export default FileOptions;
