import Options from './optionsWrapper';
const REF_URL = <a href="https://www.gnu.org/software/wget/manual/html_node/Recursive-Accept_002fReject-Options.html#Recursive-Accept_002fReject-Options" target="_blank" rel="noreferrer noopener">More Info</a>;

const AcceptRejectOptions = props => <Options title="Accept/Reject Options" id={"accrej"}>
    <tr className="table-success">
        <td>File(s) to Accept</td>
        <td>
            {props.accRegex && <strong style={{textShadow: '1pt 1pt 3pt indianred'}} className="text-dark shadow-sm">REGEX MODE: </strong>}
            <input name="accept" type="text" placeholder="azw3,txt,gif" onChange={props.accRejTextInput}/>
        </td>
        <td>A list of file extensions to download during recursive retrieval. <em>If <strong>‘*’, ‘?’, ‘[’ or ‘]’</strong> is typed, <u>input will be treated as a pattern instead</u>.</em> {REF_URL}</td>
    </tr>
    <tr className="table-success">
        <td>File(s) to Reject</td>
        <td>
            {props.rejRegex && <strong style={{textShadow: '1pt 1pt 3pt indianred'}} className="text-dark shadow-sm">REGEX MODE: </strong>}
            <input name="reject" type="text" placeholder="pdf,png,7z" onChange={props.accRejTextInput}/>
            <label className="py-2" htmlFor="">
                <span style={{textDecoration: 'underline'}}>Defaults</span> <br/>
                all: <input name="rejectdefault" type="radio" defaultChecked={true} defaultValue={"all"} onChange={props.accRejTextInput}/><span> </span>
                w/o index: <input name="rejectdefault" type="radio" defaultValue={"noindex"} onChange={props.accRejTextInput}/><span> </span>
                none: <input name="rejectdefault" type="radio" defaultValue={'none'}  onChange={props.accRejTextInput}/>
            </label>
        </td>
        <td className="align-middle">Download all files except the specified extensions in the list. <em>If <strong>‘*’, ‘?’, ‘[’ or ‘]’</strong> is typed, <u>input will be treated as a pattern instead</u>.</em> {REF_URL}</td>
    </tr>
    <tr className="table-success">
        <td>No Parent</td>
        <td><input name="parent" type="checkbox" onChange={props.accRejCheckInput}/></td>
        <td>Do not ever ascend to the parent directory when retrieving recursively. {REF_URL}</td>
    </tr>
</Options>;

export default AcceptRejectOptions;
