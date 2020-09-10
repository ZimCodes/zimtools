/*The Referer URL to obtain more information about an option*/
const REF_URL = <a href="https://ffmpeg.org/ffmpeg.html#Main-options" target="_blank" rel="noreferrer noopener">More Info</a>;

export default (props) => (
        <tr>
            <td className={'align-middle'}>{props.title}</td>
			<td className={`align-middle ${props.hide}`}>
				<input id={props.id} className={props.sector} name="metadata_num" type="number" min="0" size="1" onChange={props.getMetaNum}/>
				<button id={props.sector} className={"btn btn-secondary mt-3"}  type="button" name="output_metadata" onClick={props.resetClick}>Reset</button>
			</td>
            <td className="align-middle">
				<input id={props.id} className={props.sector} name="metadata" type="text" placeholder=":a:2 language=eng" onChange={props.mainTxt}/>
			</td>
            <td className={`text-center`}>Set the <u>[metadata]</u> as a key/value pair. {REF_URL}</td>
        </tr>
);
