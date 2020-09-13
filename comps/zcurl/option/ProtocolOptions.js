import Options from './optionsWrapper';//Imports the mandatory Options Wrapper
import {InfoURL,BOOK_REF} from "../Utility";//The Referer URL to obtain more information about an option
import React from "react";
import styles from "../../../styles/zcurl/opts/all.module.css";


export default (props) => (
    <Options btnClick={props.btnNumClick} title="SMTP/FTP" id="protocol">
        <tr className={"table-primary"}>
            <td>(FTP) Create Save Directories</td>
            <td className="align-middle"><input id={props.curIndex} name="ftpdir" type="checkbox" onChange={props.proCheckInput} /></td>
            <td className={`text-center ${styles.summary}`}>Creates directories mentioned in the <em>Save to File</em> option. {InfoURL("https://curl.haxx.se/docs/manpage.html#--ftp-create-dirs")}</td>
        </tr>
        <tr>
            <td>(FTP) Name-Only Listing</td>
            <td className="align-middle"><input id={props.curIndex} name="ftplist" type="checkbox" onChange={props.proCheckInput} /></td>
            <td className={`text-center ${styles.summary}`}>Forces a name-only directory view. {InfoURL("https://curl.haxx.se/docs/manpage.html#-l")}</td>
        </tr>
        <tr className={"table-primary"}>
            <td>(SMTP) Mail Recipient</td>
            <td className="align-middle"><input id={props.curIndex} name="mailrcpt" type="text" placeholder="receiver@example.com" onChange={props.proTextInput} /></td>
            <td className={`text-center ${styles.summary}`}>The email address of the recipient to send mail to. {InfoURL("https://ec.haxx.se/usingcurl/usingcurl-smtp",BOOK_REF)}|{InfoURL("https://curl.haxx.se/docs/manpage.html#--mail-rcpt")}</td>
        </tr>
        <tr>
            <td>(SMTP) Mail Sender</td>
            <td className="align-middle"><input id={props.curIndex} name="mailfrom" type="text" placeholder="myself@example.com" onChange={props.proTextInput} /></td>
            <td className={`text-center ${styles.summary}`}>The email address of the sender. Usually yours. {InfoURL("https://ec.haxx.se/usingcurl/usingcurl-smtp",BOOK_REF)}|{InfoURL("https://curl.haxx.se/docs/manpage.html#--mail-from")}</td>
        </tr>
        <tr className={"table-primary"}>
            <td>Try SSL Connection</td>
            <td className="align-middle"><input id={props.curIndex} name="ssltry" type="checkbox" onChange={props.proCheckInput} /></td>
            <td className={`text-center ${styles.summary}`}>Try to use SSL/TLS for the connection. Reverts to non-secure connection if server doesn't support SSL/TLS. {InfoURL("https://curl.haxx.se/docs/manpage.html#--ssl")}</td>
        </tr>
        <tr>
            <td>Require SSL Connection</td>
            <td className="align-middle"><input id={props.curIndex} name="sslreqd" type="checkbox" onChange={props.proCheckInput} /></td>
            <td className={`text-center ${styles.summary}`}>Require SSL/TLS for the connection. Terminates connection if server doesn't support SSL/TLS.  {InfoURL("https://curl.haxx.se/docs/manpage.html#--ssl-reqd")}</td>
        </tr>

    </Options>
);
