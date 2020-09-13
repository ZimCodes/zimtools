import Options from './optionsWrapper';//Imports the mandatory Options Wrapper
import {InfoURL} from "../Utility";//The Referer URL to obtain more information about an option
import React from "react";
import styles from "../../../styles/zcurl/opts/all.module.css";


export default (props) => (
    <Options btnClick={props.btnNumClick} title="Download" id="dl">
        <tr className={"table-primary"}>
            <td>Save to File</td>
            <td className="align-middle"><input id={props.curIndex} name="save" type="text" placeholder="myDir/File.json" onChange={props.dlTextInput}/></td>
            <td className={`text-center ${styles.summary}`}>Save output to file.If using {} or [] to fetch multiple documents, you should quote the URL and you can use <em>'#'</em> followed by a number in the <em>[<b>FILE</b>]</em> name.  {InfoURL("https://curl.haxx.se/docs/manpage.html#-o")}</td>
        </tr>
        <tr>
            <td>Create Save Directories</td>
            <td className="align-middle"><input id={props.curIndex} name="savedir" type="checkbox" onChange={props.dlCheckInput} /></td>
            <td className={`text-center ${styles.summary}`}>Creates directories mentioned in the <em>Save to File</em> option. <strong>Must be used with <em>Save to File</em>.</strong> {InfoURL("https://curl.haxx.se/docs/manpage.html#--create-dirs")}</td>
        </tr>
        <tr className={"table-primary"}>
            <td>Save File as Remote Name</td>
            <td className="align-middle"><input id={props.curIndex} name="saveremote" type="checkbox" onChange={props.dlCheckInput} /></td>
            <td className={`text-center ${styles.summary}`}>Save output to a local file named after the remote file name. {InfoURL("https://curl.haxx.se/docs/manpage.html#-O")}</td>
        </tr>
        <tr>
            <td>Max File Size</td>
            <td className="align-middle"><input id={props.curIndex} name="maxsize" type="text" placeholder="200K" onChange={props.dlTextInput} /></td>
            <td className={`text-center ${styles.summary}`}>Specify the maximum size <em>([<b>BYTES</b>])</em> of a file to download. <em>'k'</em> or <em>'K'</em> = <em>kilobytes</em>, <em>'m'</em> or <em>'M'</em> = <em>megabytes</em>, <em>'g'</em> or <em>'G'</em> = gigabytes. {InfoURL("https://curl.haxx.se/docs/manpage.html#--max-filesize")}</td>
        </tr>
        <tr className={"table-primary"}>
            <td>Range</td>
            <td className="align-middle"><input id={props.curIndex} name="range" type="text" placeholder="100-199,500-599" onChange={props.dlTextInput} /></td>
            <td className={`text-center ${styles.summary}`}>Retrieve a <em>[<b>BYTE RANGE</b>]</em> from an HTTP/1.1, FTP, or SFTP server or a local FILE. {InfoURL("https://curl.haxx.se/docs/manpage.html#-r")}</td>
        </tr>


    </Options>
);
