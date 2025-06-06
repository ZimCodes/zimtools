import Options from './optionWrapper';
const REF_URL = <a href="https://github.com/ytdl-org/youtube-dl/blob/master/README.md#workarounds" target="_blank" rel="noreferrer noopener">More Info</a>;
const GEO_URL = <a href="https://github.com/ytdl-org/youtube-dl/blob/master/README.md#geo-restriction" target="_blank" rel="noreferrer noopener">More Info</a>;
const WorkAround = props => <Options title="Work Around" id={"work"}>
    <tr>
        <td>Don't Check Certificate</td>
        <td className="align-middle"><input name="nocertificate" type="checkbox" onChange={props.workCheckInput}/></td>
        <td className="text-center">Suppress HTTPS certificate validation. {REF_URL}</td>
    </tr>
    <tr>
        <td>User Agent</td>
        <td className="align-middle"><textarea name="useragent" cols="30" rows="6" onChange={props.workTextInput} placeholder="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36"/> </td>
        <td className="text-center align-middle">Specify a custom user agent. {REF_URL}</td>
    </tr>
    <tr>
        <td>Sleep Interval</td>
        <td className="align-middle"><input name="sleep" type="number" min="0" placeholder="20" onChange={props.workTextInput}/> </td>
        <td className="text-center"># of seconds to sleep before each download. <strong>If used with <em>Max Sleep Interval</em> this is the lower bound.</strong> {REF_URL}</td>
    </tr>
    <tr>
        <td>Max Sleep Interval</td>
        <td className="align-middle"><input name="maxsleep" type="number" min="0" placeholder="20" onChange={props.workTextInput}/> </td>
        <td className="text-center">Maximum number of seconds to sleep. <strong>Must be used with <em>Sleep Interval</em></strong>. {REF_URL}</td>
    </tr>
    <tr>
        <td>Geo Bypass</td>
        <td className="align-middle"><input name="geobypass" type="text" maxLength="2" placeholder="CJ" onChange={props.workTextInput}/> </td>
        <td className="text-center">Force bypass geographic restriction by providing the <em>[<strong>ISO Country Code</strong>]</em>. {GEO_URL}</td>
    </tr>
</Options>;

export default WorkAround;
