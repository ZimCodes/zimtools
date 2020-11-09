import Options from './optionsWrapper';//Imports the mandatory Options Wrapper
import {InfoURL} from "../Utility";//The Referer URL to obtain more information about an option
import React from "react";
import styles from "../../../styles/zeiver/opts.module.css";
export default (props) => (
    <Options title="Download Options" id="dl">
        <tr>
            <td>Page Depth</td>
            <td className="align-middle"><input id={props.curIndex} name="depth" size="5" min="1" placeholder="20" type="number" onChange={props.dlTextInput}/></td>
            <td className="text-center">Specify the maximum depth for recursive scraping. <em>Default:</em> <code className={styles.code}>20</code>. {InfoURL("https://github.com/ZimCodes/Zeiver#download")}</td>
        </tr>
        <tr>
            <td>Accept Files</td>
            <td className="align-middle"><textarea id={props.curIndex} cols="20" rows="6" name="accept" placeholder="(mov|mp3|lunchbox_pic1\.jpg|(pic_of_me.gif))" onChange={props.dlTextInput}/></td>
            <td className="text-center align-middle">Using [Regex], specify which files to accept for scraping. <strong>This option takes precedence over reject option.</strong>  {InfoURL("https://github.com/ZimCodes/Zeiver#download")}</td>
        </tr>
        <tr>
            <td>Reject Files</td>
            <td className="align-middle"><textarea id={props.curIndex} name="reject" cols="20" rows="6" placeholder="(jpg|png|3gp|(pic_of_me.gif))" onChange={props.dlTextInput}/></td>
            <td className="text-center align-middle">Using <em>[Regex]</em>, specify which files to reject for scraping. <strong>The accept option takes precedence over reject option.</strong> {InfoURL("https://github.com/ZimCodes/Zeiver#download")}</td>
        </tr>
        <tr>
            <td>Activate Recorder</td>
            <td className="align-middle"><input id={props.curIndex} name="record" type="checkbox" onChange={props.dlCheckInput}/></td>
            <td className="text-center"><strong>Activates the Recorder.</strong> The Recorder saves the links to each file. {InfoURL("https://github.com/ZimCodes/Zeiver#download")}</td>
        </tr>
        <tr>
            <td>Record Links Only</td>
            <td className="align-middle"><input id={props.curIndex} name="record-only" type="checkbox" onChange={props.dlCheckInput}/></td>
            <td className="text-center"><strong>Activates the Recorder.</strong> After scraping, instead of downloading the files, save the links to them. {InfoURL("https://github.com/ZimCodes/Zeiver#download")}</td>
        </tr>
    </Options>
);
