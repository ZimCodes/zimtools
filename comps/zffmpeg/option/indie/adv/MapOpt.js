/*The Referer URL to obtain more information about an option*/
const REF_URL = <a href="https://ffmpeg.org/ffmpeg.html#Main-options" target="_blank" rel="noreferrer noopener">More Info</a>;

const MapOpt = props => <tr>
    <td className={'align-middle'}>{props.title}</td>
    <td className={`align-middle ${props.hide}`}>
        <input id={props.id} className={props.sector} name="map_num" type="number" min="0" size="1" onChange={props.getMapNum}/><br/>
        <button className={"btn btn-secondary mt-3"} type="button" name="output_map" onClick={props.resetClick}>Reset</button>
    </td>
    <td className="align-middle">
        <input id={props.id} className={props.sector} name="map" type="text" placeholder="0:a:2" onChange={props.advTxt}/>
    </td>
    <td className={`text-center`}>Control input streams as a source for the output file. {REF_URL}</td>
</tr>;

export default MapOpt;
