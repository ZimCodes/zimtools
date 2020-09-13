import Options from './optionsWrapper';//Imports the mandatory Options Wrapper
import {InfoURL} from "../Utility";
import styles from "../../../styles/zcurl/opts/all.module.css";
import React from "react";
//The Referer URL to obtain more information about an option

export default (props) => (
    <Options btnClick={props.btnNumClick} title="General" id="general">
        <tr className={"table-primary"}>
            <td>Upload File(s)</td>
            <td><input id={props.curIndex} name="upload" type="text" placeholder="{file1.txt,file2.json}" onChange={props.genTextInput} /></td>
            <td className={`text-center ${styles.summary}`}>Transfer the specified local file(s) to the remote URL. {InfoURL("https://curl.haxx.se/docs/manpage.html#-T")}</td>
        </tr>
        <tr>
            <td>Retries</td>
            <td className="align-middle"><input id={props.curIndex} name="retry" type="number" min="0" placeholder="10" onChange={props.genTextInput} /></td>
            <td className={`text-center ${styles.summary}`}>Number of times to retry a transfer. <em>Default is 0</em>. {InfoURL("https://curl.haxx.se/docs/manpage.html#--retry")}</td>
        </tr>
        <tr className={"table-primary"}>
            <td>Retry Delay</td>
            <td className="align-middle"><input id={props.curIndex} name="delay" type="number" min="0" placeholder="10" onChange={props.genTextInput} /></td>
            <td className={`text-center ${styles.summary}`}>Amount of time to wait before each retry when a transfer fails. <em>Default is retry rate will increase exponentially.</em> {InfoURL("https://curl.haxx.se/docs/manpage.html#--retry-delay")}</td>
        </tr>
        <tr>
            <td>Limit Rate</td>
            <td className="align-middle"><input id={props.curIndex} name="rate" type="text" placeholder="50M" onChange={props.genTextInput} /></td>
            <td className={`text-center ${styles.summary}`}>Specify the maximum transfer rate you want curl to use for <em>downloads</em> and <em>uploads</em>. <em>'k'</em> or <em>'K'</em> = <em>kilobytes</em>, <em>'m'</em> or <em>'M'</em> = <em>megabytes</em>, <em>'g'</em> or <em>'G'</em> = gigabytes. {InfoURL("https://curl.haxx.se/docs/manpage.html#--limit-rate")}</td>
        </tr>
        <tr className={"table-primary"}>
            <td>Continue</td>
            <td className="align-middle"><input id={props.curIndex} name="continue" type="checkbox" onChange={props.genCheckInput} /></td>
            <td className={`text-center ${styles.summary}`}>Continue the transfer of a file. {InfoURL("https://curl.haxx.se/docs/manpage.html#-C")}</td>
        </tr>
        <tr>
            <td>Insecure Connection</td>
            <td className="align-middle"><input id={props.curIndex} name="insecure" type="checkbox" onChange={props.genCheckInput}/></td>
            <td className={`text-center ${styles.summary}`}>Allows curl to make a connection to servers considered insecure. {InfoURL("https://curl.haxx.se/docs/manpage.html#-k")}</td>
        </tr>
        <tr className={"table-primary"}>
            <td>Username</td>
            <td className="align-middle"><input id={props.curIndex} name="user" type="text" placeholder="myUsername" onChange={props.genTextInput} /></td>
            <td className={`text-center ${styles.summary}`}>Specify the user name to use for server authentication. <em>Password will be asked.</em> {InfoURL("https://curl.haxx.se/docs/manpage.html#-u")}</td>
        </tr>
    </Options>
);
