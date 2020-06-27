import Options from './optionWrapper';
const REF_URL = <a href="https://github.com/ytdl-org/youtube-dl/blob/master/README.md#options" target="_blank" rel="noreferrer noopener">More Info</a>;

export default (props) => (
    <Options title="Before Configuration" id={"config"}>
        <tr>
            <td>Error Downloading</td>
            <td>
                <label className="py-2" htmlFor="">
                    ignore: <input name="error" type="radio" defaultValue={"ignore"} onChange={props.preConfigTextInput}/><span> </span>
                    abort: <input name="error" type="radio" defaultValue={"abort"} onChange={props.preConfigTextInput}/><span> </span>
                </label>
            </td>
            <td>Continue or Abort downloading when an error occurs. If ignored, for example, unavailable videos in a playlist will be skipped. {REF_URL}</td>
        </tr>
        <tr>
            <td>Ignore Config</td>
            <td className="align-middle"><input name="ignore" type="checkbox" onChange={props.preConfigCheckInput}/></td>
            <td className="text-center">Do not read configuration files. {REF_URL}</td>
        </tr>
        <tr>
            <td>Config File Location</td>
            <td className="align-middle"><input name="location" type="text" placeholder="./folder/video" onChange={props.preConfigTextInput}/></td>
            <td className="text-center">Location of the configuration file. {REF_URL}</td>
        </tr>
    </Options>
);
