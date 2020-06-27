import Options from './optionsWrapper';
const REF_URL = <a href="https://www.gnu.org/software/wget/manual/html_node/Download-Options.html#Download-Options" target="_blank" rel="noreferrer noopener">More Info</a>;

export default (props) => (
    <Options title="Download Options" id="dl">
        <tr>
            <td>Attempts</td>
            <td className="align-middle"><input name="tries" type="number" min="0" placeholder="20" onChange={props.dlTextInput}/></td>
            <td className="text-center">Set # of tries to connect to url. Specify "0" infinite retrying. <em>Default is 20</em>. {REF_URL}</td>
        </tr>
        <tr>
            <td>No Clobber</td>
            <td className="align-middle"><input name="clobber" type="checkbox" onChange={props.dlCheckInput} defaultChecked={true}/></td>
            <td className="text-center">If deactivated, downloading the same file in the same directory will result in the original copy of file being preserved and the second copy being named ‘file.1’. {REF_URL}</td>
        </tr>
        <tr className="table-primary">
            <td>Unlink</td>
            <td className="align-middle"><input name="unlink" type="checkbox" onChange={props.dlCheckInput}/></td>
            <td className="text-center">Force Wget to unlink file instead of clobbering existing file. {REF_URL}</td>
        </tr>
        <tr className="table-primary">
            <td>Resume</td>
            <td className="align-middle"><input name="resume" type="checkbox" onChange={props.dlCheckInput}/></td>
            <td className="text-center">Continue downloading a <strong>single</strong> unfinished file. {REF_URL}</td>
        </tr>
        <tr className="table-primary">
            <td>Progression Indicator</td>
            <td className="align-middle">
                <select name="progress" defaultValue="bar" onChange={props.dlTextInput}>
                     <option value="bar">Bar</option>
                     <option value="dot">Dot</option>
                 </select>
             </td>
            <td className="text-center align-middle">The type of the progress indicator you wish to display. {REF_URL}</td>
        </tr>
        <tr className="table-primary">
            <td>Force Show Progression Indicator</td>
            <td className="align-middle"><input name="force" type="checkbox" onChange={props.dlCheckInput}/></td>
            <td className="text-center align-middle">Force wget to display the progress bar in any verbosity. {REF_URL}</td>
        </tr>
        <tr className="table-success">
            <td>Time-Stamping</td>
            <td className="align-middle"><input name="time" type="checkbox" onChange={props.dlCheckInput}/></td>
            <td className="text-center">For each file, Wget will check whether a local file of the same name exists. If it does, and the remote file is not newer, Wget will not download it.
            If the local file does not exist, or the sizes of the files do not match, Wget will download the remote file no matter what the time-stamps say. {REF_URL}
            </td>
        </tr>
        <tr className="table-success">
            <td>Limit Rate</td>
            <td className="align-middle"><input name="limit" type="text" placeholder="2.5k" onChange={props.dlTextInput}/></td>
            <td className="text-center">Limit the download speed. <em>Bytes (default), Kilobytes with the ‘k’ suffix, or Megabytes with the ‘m’ suffix</em>. {REF_URL}</td>
        </tr>
        <tr className="table-success">
            <td>Wait</td>
            <td className="align-middle"><input name="wait" type="text" placeholder="2" onChange={props.dlTextInput}/></td>
            <td className="text-center">Wait the specified number of seconds between each downloads. <em>Seconds(default), Minutes = "m", Hours = "h", Days = "d"</em>. {REF_URL}</td>
        </tr>
        <tr className="table-success">
            <td>Retry Wait</td>
            <td className="align-middle"><input name="retry" type="number" placeholder="10" min="0" onChange={props.dlTextInput}/></td>
            <td className="text-center">Wait between retries of failed downloads in seconds. {REF_URL}</td>
        </tr>
        <tr className="table-primary">
            <td>Random Wait</td>
            <td className="align-middle"><input name="random" type="checkbox" onChange={props.dlCheckInput}/></td>
            <td className="text-center">This option causes the time between requests to vary between <em>0.5</em> and <em>1.5 times wait seconds</em>, where <em>wait was specified using the ‘--wait’ option</em>. {REF_URL}</td>
        </tr>
        <tr className="table-success">
            <td>Quota</td>
            <td className="align-middle"><input name="quota" type="text" placeholder="20k" pattern="[0-9]+(?:k|m)?" onChange={props.dlTextInput}/></td>
            <td className="text-center">Only works when downloading more than one file. Specify download quota for automatic retrievals. Value can be specified in <em>Bytes (default), Kilobytes (with ‘k’ suffix), or Megabytes (with ‘m’ suffix)</em>. {REF_URL}</td>
        </tr>
        <tr className="table-primary">
            <td>Spider</td>
            <td className="align-middle"><input name="spider" type="checkbox" onChange={props.dlCheckInput}/></td>
            <td className="text-center">Wget will behave as a Web spider, which means it will not download the pages, just check that they are there. <strong>Not as functional as a real web spider</strong>. {REF_URL}</td>
        </tr>
        <tr>
            <td>Username</td>
            <td className="align-middle"><input name="user" type="text" onChange={props.dlTextInput}/></td>
            <td className="text-center">Username for both FTP and HTTP file retrieval. {REF_URL}</td>
        </tr>
        <tr>
            <td>Password</td>
            <td className="align-middle"><input name="pass" type="password" onChange={props.dlTextInput}/></td>
            <td className="text-center">Password for both FTP and HTTP file retrieval. {REF_URL}</td>
        </tr>
    </Options>
);
