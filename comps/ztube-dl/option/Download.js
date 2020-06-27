import Options from './optionWrapper';
const REF_URL = <a href="https://github.com/ytdl-org/youtube-dl/blob/master/README.md#download-options" target="_blank" rel="noreferrer noopener">More Info</a>;
export default (props) =>(
    <Options title="Download Options" id="dl">
        <tr>
            <td>Limit Rate</td>
            <td className="align-middle"><input name="limit" type="text" placeholder="44.2M" onChange={props.downloadTextInput}/></td>
            <td className="text-center">Max download rate in bytes per second. <em>‘K’ suffix for Kilobytes, ‘M’ suffix for Megabytes</em> {REF_URL}</td>
        </tr>
        <tr>
            <td>Retries</td>
            <td className="align-middle"><input name="retry" type="text" placeholder="infinite" onChange={props.downloadTextInput}/></td>
            <td className="text-center">Number of retries <em>(Default is 10)</em>. <em>"infinite"</em> is also an option. {REF_URL}</td>
        </tr>
        <tr>
            <td>Buffer Size</td>
            <td className="align-middle"><input name="buffer" type="text" placeholder="(e.g. 1024 or 16K)" onChange={props.downloadTextInput} /></td>
            <td className="text-center">Size of download buffer <em>(Default is 1024)</em>. {REF_URL}</td>
        </tr>
        <tr>
            <td>No Buffer Resize</td>
            <td className="align-middle"><input name="noresize" type="checkbox" onChange={props.downloadCheckInput} /></td>
            <td className="text-center">Do not automatically adjust the buffer size. {REF_URL}</td>
        </tr>
        <tr>
            <td>Use Native HLS Downloader</td>
            <td className="align-middle"><input name="hls" type="checkbox" onChange={props.downloadCheckInput} /></td>
            <td className="text-center">Use the native HLS downloader instead of ffmpeg. {REF_URL}</td>
        </tr>
        <tr>
            <td>Use FFMPEG</td>
            <td className="align-middle"><input name="ffmpeg" type="checkbox" onChange={props.downloadCheckInput} /></td>
            <td className="text-center align-middle">Use ffmpeg instead of the native HLS downloader. {REF_URL}</td>
        </tr>
        <tr>
            <td>Playlist Reversed</td>
            <td className="align-middle"><input name="playreverse" type="checkbox" onChange={props.downloadCheckInput} /></td>
            <td className="text-center">Download playlist videos in reverse order. {REF_URL}</td>
        </tr>
        <tr>
            <td>Playlist Random</td>
            <td className="align-middle"><input name="playrandom" type="checkbox" onChange={props.downloadCheckInput} /></td>
            <td className="text-center">Download Playlist videos in random order. {REF_URL}</td>
        </tr>
    </Options>
);
