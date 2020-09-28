/*The Referer URL to obtain more information about an option*/
const REF_URL = <a href="https://ffmpeg.org/ffmpeg.html#Main-options" target="_blank" rel="noreferrer noopener">More Info</a>;

const DispositionOpt = props => <tr>
    <td className={'align-middle'}>{props.title}</td>
    <td className={`align-middle ${props.hide}`}>
        <input id={props.id} className={props.sector} name="dispos_num" type="number" min="0" size="1" defaultValue={"0"} onChange={props.getDisposNum}/>
        <button id={props.sector} className={"btn btn-secondary mt-3"} type="button" name="output_dispos" onClick={props.resetClick}>Reset</button>
    </td>
    <td className="align-middle">
        <input id={props.id} className={props.sector} name="disposition" type="text" placeholder=":a:1 default" onChange={props.mainTxt}/>
    </td>
    <td className={`text-center`}>Sets the <u>[disposition]</u> for a stream. {REF_URL}</td>
</tr>;

export default DispositionOpt;
