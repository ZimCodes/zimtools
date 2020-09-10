import Options from './optionWrapper';
const INSECURE_URL = <a href="https://github.com/ytdl-org/youtube-dl/blob/master/README.md#workarounds" target="_blank" rel="noreferrer noopener">More Info</a>;
const DASH_URL = <a href="https://github.com/ytdl-org/youtube-dl/blob/master/README.md#video-format-options" target="_blank" rel="noreferrer noopener">More Info</a>;
const AUTO_URL = <a href="https://github.com/ytdl-org/youtube-dl/blob/master/README.md#subtitle-options" target="_blank" rel="noreferrer noopener">More Info</a>;

const YouTubeOnly = props => <Options title="YouTube Only" id={"only"}>
    <tr>
        <td>Prefer Insecure</td>
        <td><input className="align-middle" name="insecure" type="checkbox" onChange={props.youtubeCheckInput}/></td>
        <td className="text-center">Use an unencrypted connection to retrieve information about the video. <em>(Currently supports only YouTube)</em> {INSECURE_URL}</td>
    </tr>
    <tr>
        <td>Skip DASH Manifest</td>
        <td><input className="align-middle" name="dash" type="checkbox" onChange={props.youtubeCheckInput}/></td>
        <td className="text-center">Do not download the DASH manifests and related data on YouTube videos. {DASH_URL}</td>
    </tr>
    <tr>
        <td>Write Automatic Subtitles</td>
        <td><input className="align-middle" name="autosub" type="checkbox" onChange={props.youtubeCheckInput}/></td>
        <td className="text-center">Write automatically generated subtitle file. {AUTO_URL}</td>
    </tr>
</Options>;

export default YouTubeOnly;
