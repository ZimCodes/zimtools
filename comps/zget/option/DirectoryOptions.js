import Options from './optionsWrapper';
const REF_URL = <a href="https://www.gnu.org/software/wget/manual/html_node/Directory-Options.html#Directory-Options" target="_blank" rel="noreferrer noopener">More Info</a>;

const DirectoryOptions = props => <Options title="Directory Options" id={"dir"}>
    <tr>
        <td>No Directories</td>
        <td className="align-middle"><input name="nodir" type="checkbox" onChange={props.dirCheckInput} /></td>
        <td className="text-center">Do not create a hierarchy of directories when retrieving recursively. With this option turned on,
            all files will get saved to the current directory, without clobbering. {REF_URL}</td>
    </tr>
    <tr className="table-primary">
        <td>Force Directories</td>
        <td className="align-middle"><input name="forcedir" type="checkbox" onChange={props.dirCheckInput}  /></td>
        <td className="text-center">Create a hierarchy of directories, even if one would not have been created otherwise. {REF_URL}</td>
    </tr>
    <tr className="table-primary">
        <td>No Host Directories</td>
        <td className="align-middle"><input name="nohostdir" type="checkbox" onChange={props.dirCheckInput} defaultChecked={true}/></td>
        <td className="text-center">Disable generation of host-prefixed directories. {REF_URL}</td>
    </tr>
    <tr>
        <td>Save File(s) Location</td>
        <td className="align-middle"><input name="saveloc" type="text" placeholder="./Cheese/" onChange={props.dirTextInput}/></td>
        <td className="text-center">Where to save the files. If directory(ies) non-existent, one will be created. <em>Default "./"</em>. {REF_URL}</td>
    </tr>
    <tr className="table-primary">
        <td>Cut Directory(ies)</td>
        <td className="align-middle"><input name="cut" type="number" min="0" placeholder="1" onChange={props.dirTextInput}/></td>
        <td className="text-center">Ignore the number of directory components. Ex: <em>ftp.xemacs.org/pub/xemacs/</em>; With '--cut-dirs=1' it will now save locally as <em>ftp.xemacs.org/xemacs/</em> {REF_URL}</td>
    </tr>

</Options>;

export default DirectoryOptions;
