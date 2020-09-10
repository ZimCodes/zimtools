import Options from '../../OutputOptionsWrapper';//Imports the mandatory Options Wrapper
/*The Referer URL to obtain more information about an option*/
const REF_URL = <a href="https://ffmpeg.org/ffmpeg.html#Video-Options" target="_blank" rel="noreferrer noopener">More Info</a>;

const OutputVideoOptions = props => <Options title="Video Options" id={`osector_${props.sector}`} stateClick={props.stateClick}>
    <tr>
        <td>Frame Rate</td>
        <td className="align-middle invisible">
            <input type="number" min="0" size="1"/>
        </td>
        <td className="align-middle"><input id={props.idNum} className={props.sector} name="rate" type="text" placeholder="23.97" onChange={props.videoTxt}/></td>
        <td className="text-center">Set frame rate. {REF_URL}</td>
    </tr>
    <tr>
        <td>Frame Size</td>
        <td className="align-middle invisible">
            <input type="number" min="0" size="1"/>
        </td>
        <td className="align-middle"><input id={props.idNum} className={props.sector} name="frame_size" type="text" placeholder="720x480" onChange={props.videoTxt}/></td>
        <td className="text-center">Set the <u>[size](WxH)</u> of each frame. {REF_URL}</td>
    </tr>
    <tr>
        <td>Aspect Ratio</td>
        <td className="align-middle invisible">
            <input type="number" min="0" size="1"/>
        </td>
        <td className="align-middle"><input id={props.idNum} className={props.sector} name="aspect" type="text" placeholder="4:3" onChange={props.videoTxt}/></td>
        <td className="text-center">Set the aspect <u>[ratio]</u> of the video display. {REF_URL}</td>
    </tr>
    {props.children}
</Options>;

export default OutputVideoOptions;
