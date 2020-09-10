import Options from './optionWrapper';
import styles from '../../../styles/ztube-dl/opts/file.module.css';
const REF_URL = <a href="https://github.com/ytdl-org/youtube-dl/blob/master/README.md#filesystem-options" target="_blank" rel="noreferrer noopener">More Info</a>;
const TEMPLATE_URL = <a href="https://github.com/ytdl-org/youtube-dl/blob/master/README.md#output-template" target="_blank" rel="noreferrer noopener">Template Info</a>;

const File = props => <Options title="Filesystem Options" id="file">
    <tr>
        <td>File of URLS</td>
        <td className="align-middle"><input name="urls" type="text" placeholder="./url_file.txt" onChange={props.fileTextInput}/></td>
        <td className="text-center">File containing URLS to download, <em>one URL per line.</em> {REF_URL}</td>
    </tr>
    <tr>
        <td>Don't Continue</td>
        <td className="align-middle"><input name="nocontinue" type="checkbox" onChange={props.fileCheckInput}/></td>
        <td className="text-center">Do not resume partially downloaded files <em>(Default is continue)</em>.{REF_URL}</td>
    </tr>
    <tr>
        <td>Remove Filesystem Cache</td>
        <td className="align-middle"><input name="nocache" type="checkbox" onChange={props.fileCheckInput} /></td>
        <td className="text-center">Delete all filesystem cache. {REF_URL}</td>
    </tr>
    <tr>
        <td>Save File Location(s)</td>
        <td className="align-middle">
            <textarea name="output" cols="30" rows="5" onChange={props.fileTextInput} />
            <div className="row mx-auto">
                <div className="col">
                    <a className={`${styles.point} text-info`} name="str" onClick={props.addOnBtns}>+ string</a>
                </div>
                <div className="col-1"></div>
                <div className="col">
                    <a className={`${styles.point} text-info`} name="num" onClick={props.addOnBtns}>+ number</a>
                </div>
            </div>
        </td>
        <td className="text-center align-middle">How to output the downloaded files. <strong>USES TEMPLATE</strong> {TEMPLATE_URL}</td>
    </tr>
</Options>;

export default File;
