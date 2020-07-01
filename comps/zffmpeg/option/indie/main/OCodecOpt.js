/*The Referer URL to obtain more information about an option*/
const REF_URL = <a href="https://ffmpeg.org/ffmpeg.html#Main-options" target="_blank" rel="noreferrer noopener">More Info</a>;
const CODEC_URL = <a href="https://ffmpeg.org/ffmpeg-codecs.html" target="_blank" rel="noreferrer noopener">Codec List</a>;

export default (props) => (
        <tr>
            <td className={'align-middle'}>{props.title}</td>
			<td className={`align-middle ${props.hide}`}>
				<input id={props.id} className={props.sector} name="codec_num" type="number" min="0" size="1" onChange={props.getCodecNum}/><br/>
				<button id={props.sector} className={"btn btn-secondary mt-3"} type="button" name="output_codec" onClick={props.resetClick}>Reset Codecs</button>
			</td>
            <td className="align-middle">
				<input id={props.id} className={props.sector} name="codec" type="text" placeholder=":a:2 ac3" onChange={props.mainTxt}/>
			</td>
            <td className={`text-center`}>1.)Select a <u>[stream type]</u>. <em><strong>:a</strong>=audio, <strong>:v</strong>=video, <strong>:s</strong>=subtitle, <strong>:d</strong>=data <strong>:t</strong>=attachment</em>. Follow by the <u>[stream index]</u><br/><br/>2.)Type an <u>[encoder]</u> to use for the stream.<br/> {CODEC_URL}|{REF_URL}</td>
        </tr>
);
