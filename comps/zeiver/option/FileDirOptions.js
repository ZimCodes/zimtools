import Options from './optionsWrapper';//Imports the mandatory Options Wrapper
import {InfoURL} from "../Utility";//The Referer URL to obtain more information about an option
import React from "react";
import styles from "../../../styles/zeiver/opts.module.css";

export default (props) => (
    <Options title="File/Directory Options" id="filedir">
        <tr>
            <td>Input File</td>
            <td className="align-middle"><input id={props.curIndex} name="input" placeholder="./dir/urls.txt" type="text" onChange={props.filedirTextInput}/></td>
            <td className="text-center">Read URLs from a local or external file. {InfoURL("https://github.com/ZimCodes/Zeiver#filedirectory")}</td>
        </tr>
        <tr>
            <td>Save Location</td>
            <td className="align-middle"><input id={props.curIndex} name="save" type="text" placeholder="./downloads/images/save_dir" onChange={props.filedirTextInput}/></td>
            <td className="text-center">Save file location. <em>Default:</em> <code className={styles.code}>./</code>. {InfoURL("https://github.com/ZimCodes/Zeiver#filedirectory")}</td>
        </tr>
        <tr>
            <td>Cut Directory<em>(ies)</em></td>
            <td className="align-middle"><input id={props.curIndex} name="cut" size="5" type="number" min="0" placeholder="0" onChange={props.filedirTextInput}/></td>
            <td className="text-center">Ignores a specified number of remote directories from being created. <em>Default:</em> <code className={styles.code}>0</code>. {InfoURL("https://github.com/ZimCodes/Zeiver#filedirectory")}</td>
        </tr>
        <tr>
            <td>No Directories</td>
            <td className="align-middle"><input id={props.curIndex} name="no-dirs" type="checkbox" onChange={props.filedirCheckInput}/></td>
            <td className="text-center">Do not create a hierarchy of remote directories. {InfoURL("https://github.com/ZimCodes/Zeiver#filedirectory")}</td>
        </tr>
    </Options>
);
