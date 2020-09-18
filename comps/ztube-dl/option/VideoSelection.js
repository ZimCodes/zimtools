import Options from './optionWrapper';
const REF_URL = <a href="https://github.com/ytdl-org/youtube-dl/blob/master/README.md#video-selection" target="_blank" rel="noreferrer noopener">More Info</a>;
const DATE_URL = <a href="https://github.com/ytdl-org/youtube-dl/#video-selection-1" target="_blank" rel="noreferrer noopener">Format</a>;
const VideoSelection = props => <Options title="Video Selection" id={"select"}>
    <tr>
        <td>Start of Playlist</td>
        <td className="align-middle"><input name="playstart" min="1" type="number" placeholder="4" onChange={props.videoSelectTextInput}/></td>
        <td className="text-center">Playlist video to start at. <em>(Default is 1)</em> {REF_URL}</td>
    </tr>
    <tr>
        <td>End of Playlist</td>
        <td className="align-middle"><input name="playend" type="number" min="1" placeholder="11" onChange={props.videoSelectTextInput}/></td>
        <td className="text-center">Playlist video to end at. <em>(Default is last)</em> {REF_URL}</td>
    </tr>
    <tr>
        <td>Playlist Items</td>
        <td className="align-middle"><input name="playitems" type="text" placeholder="1-3,7,10-13,19" onChange={props.videoSelectTextInput} /></td>
        <td className="text-center">Playlist video items to download. Ex: <em>'1-3,6'</em> downloads videos 1 through 3. Also the 6<sup>th</sup> video. {REF_URL}</td>
    </tr>
    <tr>
        <td>Match/Reject Titles</td>
        <td className="align-middle">
            <label>
                Match: <input name="match" type="text" onChange={props.videoSelectTextInput} /><br/><br/>
                Reject: <input name="reject" type="text" onChange={props.videoSelectTextInput} />
            </label>
        </td>
        <td className="text-center align-middle">Download/skip matching titles. <strong>USES REGEX</strong> {REF_URL}</td>
    </tr>
    <tr>
        <td>Max To Download</td>
        <td className="align-middle"><input name="maxdl" type="number" min="0" onChange={props.videoSelectTextInput} /></td>
        <td className="text-center">Abort after downloading <em>[<strong>NUMBER</strong>]</em> of files. {REF_URL}</td>
    </tr>
    <tr>
        <td>Min/Max File Size</td>
        <td className="align-middle">
            <label>
                Min: <input name="minsize" type="text" placeholder="50k" onChange={props.videoSelectTextInput} /><br/><br/>
                Max: <input name="maxsize" type="text" placeholder="10m" onChange={props.videoSelectTextInput} />
            </label>
        </td>
        <td className="text-center align-middle">Do not download any videos smaller/larger than <em>[<strong>SIZE</strong>]</em>. <em>‘k’ suffix for Kilobytes, ‘m’ suffix for Megabytes.</em> {REF_URL}</td>
    </tr>
    <tr>
        <td><span className="badge badge-warning">*New</span> Date Before</td>
        <td className="align-middle"><input name="datebefore" type="text" placeholder="20091231" onChange={props.videoSelectTextInput} /></td>
        <td className="text-center">Download only videos uploaded on or before this date <em>(inclusive)</em>. {DATE_URL}|{REF_URL}</td>
    </tr>
    <tr>
        <td><span className="badge badge-warning">*New</span> Date</td>
        <td className="align-middle"><input name="date" type="text" placeholder="20000101" onChange={props.videoSelectTextInput} /></td>
        <td className="text-center">Download only videos uploaded on this date. {DATE_URL}|{REF_URL}</td>
    </tr>
    <tr>
        <td><span className="badge badge-warning">*New</span> Date After</td>
        <td className="align-middle"><input name="dateafter" type="text" placeholder="19700101" onChange={props.videoSelectTextInput} /></td>
        <td className="text-center">Download only videos uploaded on or after this date <em>(inclusive)</em>. {DATE_URL}|{REF_URL}</td>
    </tr>
    <tr>
        <td>Min/Max Views</td>
        <td className="align-middle">
            <label>
                Min: <input name="minviews" type="number" placeholder="20" onChange={props.videoSelectTextInput} /><br/><br/>
                Max: <input name="maxviews" type="number" placeholder="5000" onChange={props.videoSelectTextInput} />
            </label>
        </td>
        <td className="text-center align-middle">Do not download any videos with less/more than <em>[<strong>Count</strong>]</em>. {REF_URL}</td>
    </tr>
    <tr>
        <td>No Playlist</td>
        <td className="align-middle"><input name="noplay" type="checkbox" onChange={props.videoSelectCheckInput} /></td>
        <td className="text-center">Download only the video, not the playlist. {REF_URL}</td>
    </tr>

</Options>;

export default VideoSelection;
