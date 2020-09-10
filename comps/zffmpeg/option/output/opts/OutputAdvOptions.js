import Options from '../../OutputOptionsWrapper';//Imports the mandatory Options Wrapper
/*The Referer URL to obtain more information about an option*/
const REF_URL = <a href="https://ffmpeg.org/ffmpeg.html#Advanced-options" target="_blank" rel="noreferrer noopener">More Info</a>;
const FILTER_URL = <a href="https://ffmpeg.org/ffmpeg-filters.html" target="_blank" rel="noreferrer noopener">Filters</a>;

const OutputAdvOptions = props => <Options title="Advanced Options" id={`osector_${props.sector}`} stateClick={props.stateClick}>
    <tr>
        <td className={"align-middle"}>Use Filters</td>
        <td className="align-middle invisible">
            <input type="number" min="0" size="1"/>
        </td>
        <td className="align-middle">
            <textarea id={props.idNum} className={props.sector} name="filter" cols="30" rows="7" placeholder="amix=inputs=4:dropout_transition=5" onChange={props.advTxt}>
            </textarea>
        </td>
        <td className="text-center">Define a custom [filtergraph] to be the filter of a file. {FILTER_URL}|{REF_URL}</td>
    </tr>
    {props.children}
</Options>;

export default OutputAdvOptions;
