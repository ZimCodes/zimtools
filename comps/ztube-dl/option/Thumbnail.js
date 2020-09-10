import Options from './optionWrapper';
const REF_URL = <a href="https://github.com/ytdl-org/youtube-dl/blob/master/README.md#thumbnail-images" target="_blank" rel="noreferrer noopener">More Info</a>;

const Thumbnail = props => <Options title="Thumbnail Images" id={"thumb"}>
    <tr>
        <td>Write Thumbnail</td>
        <td className="align-middle"><input name="single" type="checkbox" onChange={props.thumbCheckInput}/></td>
        <td className="text-center">Write thumbnail image to disk. {REF_URL}</td>
    </tr>
    <tr>
        <td>Write All Thumbnails</td>
        <td className="align-middle"><input name="all" type="checkbox" onChange={props.thumbCheckInput}/></td>
        <td className="text-center">Write all thumbnail image formats to disk. {REF_URL}</td>
    </tr>
</Options>;

export default Thumbnail;
