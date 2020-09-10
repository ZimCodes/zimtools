import Options from './OptionsWrapper';//Imports the mandatory Options Wrapper
/*The Referer URL to obtain more information about an option*/
const REF_URL = <a href="https://ffmpeg.org/ffmpeg.html#Advanced-Subtitle-options" target="_blank" rel="noreferrer noopener">More Info</a>;
const SIZE_URL = <a href="https://ffmpeg.org/ffmpeg-utils.html#Video-size" target="_blank" rel="noreferrer noopener">Size Info</a>;

const GlobalOptions = props => <Options title="Global Options" id="global">
    <tr>
        <td className="align-middle">Fix Subtitle Duration</td>
        <td className="align-middle"><input name="fix" type="checkbox" onChange={props.globalCheck}/></td>
        <td className="text-center">Fix subtitles durations. {REF_URL}</td>
    </tr>
    <tr>
        <td className="align-middle">Subtitle Canvas Size</td>
        <td className="align-middle"><input name="canvas" type="text" placeholder="320x640" onChange={props.globalTxt}/></td>
        <td className="text-center">Set the canvas <u>[size](WxH)</u> used to render subtitles. {SIZE_URL}|{REF_URL}</td>
    </tr>
    <tr>
        <td className="align-middle">V-Sync</td>
        <td className="align-middle">
            <select name="vsync" defaultValue={"auto"} onChange={props.globalTxt}>
                <option value="">auto</option>
                <option value="passthrough">passthrough</option>
                <option value="cfr">cfr</option>
                <option value="vfr">vfr</option>
                <option value="drop">drop</option>
            </select>
        </td>
        <td className="text-center">Video syncing method. {REF_URL}</td>
    </tr>
    {props.children}
</Options>;

export default GlobalOptions;
