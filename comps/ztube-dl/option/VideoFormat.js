import Options from './optionWrapper';
const REF_URL = <a href="https://github.com/ytdl-org/youtube-dl/blob/master/README.md#video-format-options" target="_blank" rel="noreferrer noopener">More Info</a>;
const FORMAT_URL = <a href="https://github.com/ytdl-org/youtube-dl/blob/master/README.md#format-selection" target="_blank" rel="noreferrer noopener">Format Info</a>;
export default (props) =>(
    <Options title="Video Format" id={"format"}>
        <tr>
            <td>Format Selection</td>
            <td className="align-middle"><input name="format" type="text" placeholder="best[filesize<50M]" onChange={props.videoFormatTextInput}/></td>
            <td className="text-center">Control how to format the downloaded video/audio. <strong>USES FORMAT</strong> {FORMAT_URL}</td>
        </tr>
        <tr>
            <td>All Formats</td>
            <td className="align-middle"><input name="all" type="checkbox" onChange={props.videoFormatCheckInput} /> </td>
            <td className="text-center">Download all available video formats. {REF_URL}</td>
        </tr>
    </Options>
);
