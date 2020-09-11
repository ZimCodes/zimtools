import Options from './optionWrapper';
const REF_URL = <a href="https://github.com/ytdl-org/youtube-dl/blob/master/README.md#post-processing-options" target="_blank" rel="noreferrer noopener">More Info</a>;

const PostProcess = props => <Options title="Post-processing" id={"post"}>
    <tr>
        <td>Convert to Audio</td>
        <td className="align-middle"><input name="vtoa" type="checkbox" onChange={props.postCheckInput}/></td>
        <td className="text-center">Convert video files to audio files. {REF_URL}</td>
    </tr>
    <tr>
        <td>Audio Format</td>
        <td className="align-middle">
            <select name="format" defaultValue="none" onChange={props.postTextInput}>
                <option value="mp3">mp3</option>
                <option value="wav">wav</option>
                <option value="flac">flac</option>
                <option value="aac">aac</option>
                <option value="m4a">m4a</option>
                <option value="opus">opus</option>
                <option value="vorbis">vorbis</option>
                <option value="none">default</option>
            </select>
        </td>
        <td className="text-center align-middle">Specify audio format: <em>"best"</em>, <em>"aac"</em>, <em>"flac"</em>, <em>"mp3"</em>, <em>"m4a"</em>, <em>"opus"</em>, <em>"vorbis"</em>, or
            <em>"wav"</em>; <em>(Default is "best")</em>; <strong>MUST use <em>'Convert to Audio'</em></strong>. {REF_URL}</td>
    </tr>
    <tr>
        <td><span className="badge badge-warning">*New</span> Recode Video</td>
        <td className="align-middle">
            <select name="reencode" defaultValue="none" onChange={props.postTextInput}>
                <option value="mp4">mp4</option>
                <option value="flv">flv</option>
                <option value="ogg">ogg</option>
                <option value="webm">webm</option>
                <option value="mkv">mkv</option>
                <option value="avi">avi</option>
                <option value="none">default</option>
            </select>
        </td>
        <td className="text-center align-middle">Encode video to another <em>[<strong>Format</strong>]</em>. {REF_URL}</td>
    </tr>
    <tr>
        <td>Audio Quality</td>
        <td className="align-middle"><input name="quality" type="number" min={0} max={9} maxLength={1} onChange={props.postTextInput} /></td>
        <td className="text-center">Specify audio quality. Insert a value between 0 (better) and 9 (worse) for VBR. {REF_URL}</td>
    </tr>
    <tr>
        <td>Embed Subtitles</td>
        <td className="align-middle"><input name="embedsub" type="checkbox" onChange={props.postCheckInput} /></td>
        <td className="text-center">Embed subtitles in videos <em>(only for mp4, webm, and mkv files)</em>. {REF_URL}</td>
    </tr>
    <tr>
        <td>Embed Thumbnail</td>
        <td className="align-middle"><input name="embedthumb" type="checkbox" onChange={props.postCheckInput} /></td>
        <td className="text-center">Embed thumbnail in audio as cover art. {REF_URL}</td>
    </tr>
    <tr>
        <td>Add Metadata</td>
        <td className="align-middle"><input name="meta" type="checkbox" onChange={props.postCheckInput} /></td>
        <td className="text-center">Write metadata to the video file. {REF_URL}</td>
    </tr>
    <tr>
        <td>Prefer Avconv</td>
        <td className="align-middle"><input name="avconv" type="checkbox" onChange={props.postCheckInput} /></td>
        <td className="text-center">Prefer avconv over ffmpeg for running postprocessing. {REF_URL}</td>
    </tr>
    <tr>
        <td>Ffmpeg Location</td>
        <td className="align-middle"><input name="ffmpegloc" type="text" onChange={props.postTextInput} /></td>
        <td className="text-center">Location of ffmpeg. {REF_URL}</td>
    </tr>
    <tr>
        <td>Convert Subtitles</td>
        <td className="align-middle">
            <select name="sub" defaultValue="none" onChange={props.postTextInput}>
                <option value="srt">srt</option>
                <option value="ass">ass</option>
                <option value="vtt">vtt</option>
                <option value="lrc">lrc</option>
                <option value="none">n/a</option>
            </select>
        </td>
        <td className="text-center">Convert Subtitles to other formats. <em>("srt"|"ass"|"vtt"|"lrc")</em>. {REF_URL}</td>
    </tr>
    <tr>
        <td><span className="badge badge-warning">*New</span> Keep Video</td>
        <td className="align-middle"><input name="keepvid" type="checkbox" onChange={props.postCheckInput} /></td>
        <td className="text-center">Keep the video file on disk after post-processing. {REF_URL}</td>
    </tr>
</Options>;

export default PostProcess;
