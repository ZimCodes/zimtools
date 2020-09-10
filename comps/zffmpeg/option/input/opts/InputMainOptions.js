import Options from '../../InputOptionsWrapper';//Imports the mandatory Options Wrapper
/*The Referer URL to obtain more information about an option*/
const REF_URL = <a href="https://ffmpeg.org/ffmpeg.html#Main-options" target="_blank" rel="noreferrer noopener">More Info</a>;
const FORMAT_URL = <a href="https://ffmpeg.org/ffmpeg-formats.html" target="_blank" rel="noreferrer noopener">Format List</a>;

const InputMainOptions = props => <Options title="Main Options" id={`isector_${props.sector}`}>
    <tr>
        <td>Force Format</td>
        <td className="align-middle invisible">
            <input type="number" min="0" size="1"/>
        </td>
        <td className="align-middle"><input id={props.idNum} className={props.sector} name="format" type="text" placeholder="flv" onChange={props.mainTxt}/></td>
        <td className="text-center">Force the usage of a file <u>[format]</u>. <em>By Default: format is auto-detected</em>. {FORMAT_URL}|{REF_URL}</td>
    </tr>
    {props.children}
</Options>;

export default InputMainOptions;
