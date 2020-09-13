import Options from './optionsWrapper';//Imports the mandatory Options Wrapper
import {InfoURL,BOOK_REF} from "../Utility";//The Referer URL to obtain more information about an option
import React from "react";
import styles from "../../../styles/zcurl/opts/all.module.css";

export default (props) => (
    <Options btnClick={props.btnNumClick} title="HTTP" id="http">
        <tr className={"table-primary"}>
            <td>POST Data</td>
            <td className="align-middle"><input id={props.curIndex} name="post" type="text" placeholder="file.json" onChange={props.httpTextInput}/></td>
            <td className={`text-center ${styles.summary}`}>Sends the specified data in a POST request to the HTTP server. Can use <em>@filename</em> to post a file. {InfoURL("https://ec.haxx.se/http/http-post",BOOK_REF)}|{InfoURL("https://curl.haxx.se/docs/manpage.html#-d")}</td>
        </tr>
        <tr>
            <td>POST Data Binary</td>
            <td className="align-middle"><input id={props.curIndex} name="postbi" type="text" placeholder="@filename" onChange={props.httpTextInput} /></td>
            <td className={`text-center ${styles.summary}`}>Posts data exactly as is without extra processing whatsoever. Can use <em>@filename</em> to post a file. {InfoURL("https://curl.haxx.se/docs/manpage.html#--data-binary")}</td>
        </tr>
        <tr className={"table-primary"}>
            <td>Custom Request</td>
            <td className="align-middle">
                <select name="custom" id={props.curIndex} onChange={props.httpTextInput}>
                    <option value="">Default</option>
                    <option value="GET">GET</option>
                    <option value="POST">POST</option>
                    <option value="PUT">PUT</option>
                    <option value="PATCH">PATCH</option>
                    <option value="DELETE">DELETE</option>
                    <option value="HEAD">HEAD</option>
                    <option value="OPTIONS">OPTIONS</option>
                </select>
            </td>
            <td className={`text-center ${styles.summary}`}>Specifies a custom request method to use when communicating with the HTTP server. <strong>This option only changes the word used in the HTTP request.</strong> {InfoURL("https://curl.haxx.se/docs/manpage.html#-X")}</td>
        </tr>
        <tr>
            <td>Compressed</td>
            <td className="align-middle"><input id={props.curIndex} name="compress" type="checkbox" onChange={props.httpCheckInput} /></td>
            <td className={`text-center ${styles.summary}`}>Request a compressed response, and automatically decompress the content. {InfoURL("https://curl.haxx.se/docs/manpage.html#--compressed")}</td>
        </tr>
        <tr className={"table-primary"}>
            <td>Keep Options after Redirect</td>
            <td className="align-middle"><input id={props.curIndex} name="saveredir" type="checkbox" onChange={props.httpCheckInput} /></td>
            <td className={`text-center ${styles.summary}`}>If redirected to a different location, this option will redo the request on the new place. {InfoURL("https://curl.haxx.se/docs/manpage.html#-L")}</td>
        </tr>
        <tr>
            <td>Max Redirects</td>
            <td className="align-middle"><input id={props.curIndex} name="maxredir" type="number" min="0" onChange={props.httpTextInput} /></td>
            <td className={`text-center ${styles.summary}`}>Maximum number of redirection-followings allowed. {InfoURL("https://curl.haxx.se/docs/manpage.html#--max-redirs")}</td>
        </tr>
        <tr className={"table-primary"}>
            <td>Add Header</td>
            <td className="align-middle">
                <textarea name="addheader" id={props.curIndex} cols="30" rows="6" placeholder="Host: test.example|Accept: text/html|From: user@example.com" onChange={props.httpTextInput}/>
            </td>
            <td className={`text-center align-middle ${styles.summary}`}>Extra header to include in the request over HTTP. <strong>Use <em>'|'</em> to indicate another header to add.</strong> {InfoURL("https://ec.haxx.se/http/http-requests#customize-headers",BOOK_REF)}|{InfoURL("https://curl.haxx.se/docs/manpage.html#-H")}</td>
        </tr>
        <tr>
            <td>User-Agent</td>
            <td className="align-middle">
                <textarea name="useragent" id={props.curIndex} cols="30" rows="6" placeholder="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36" onChange={props.httpTextInput}/>
            </td>
            <td className={`text-center align-middle ${styles.summary}`}>Specify the User-Agent string to use. {InfoURL("https://curl.haxx.se/docs/manpage.html#-A")}</td>
        </tr>
        <tr className={"table-primary"}>
            <td>Ignore Content-Length Header</td>
            <td className="align-middle"><input id={props.curIndex} name="ignorecl" type="checkbox" onChange={props.httpCheckInput} /></td>
            <td className={`text-center ${styles.summary}`}>Ignore the Content-Length header. <em>Password will be asked.</em> {InfoURL("https://curl.haxx.se/docs/manpage.html#--ignore-content-length")}</td>
        </tr>
        <tr>
            <td>Cookies</td>
            <td className="align-middle"><input id={props.curIndex} name="cookies" type="text" placeholder="cookies.txt" onChange={props.httpTextInput} /></td>
            <td className={`text-center ${styles.summary}`}>Read cookies from a file. {InfoURL("https://ec.haxx.se/http/http-cookies#reading-cookies-from-file",BOOK_REF)}|{InfoURL("https://curl.haxx.se/docs/manpage.html#-b")}</td>
        </tr>
        <tr className={"table-primary"}>
            <td>Save Cookies</td>
            <td className="align-middle"><input id={props.curIndex} name="savecookies" type="text" placeholder="cookies.txt" onChange={props.httpTextInput} /></td>
            <td className={`text-center ${styles.summary}`}>Specify file to write all cookies after a completed operation. {InfoURL("https://ec.haxx.se/http/http-cookies#writing-cookies-to-file",BOOK_REF)}|{InfoURL("https://curl.haxx.se/docs/manpage.html#-c")}</td>
        </tr>
        <tr>
            <td>Reset Cookies</td>
            <td className="align-middle"><input id={props.curIndex} name="resetcookies" type="checkbox" onChange={props.httpCheckInput} /></td>
            <td className={`text-center ${styles.summary}`}>This will discard all cookies from a previous session, starting a new cookie session. {InfoURL("https://ec.haxx.se/http/http-cookies#new-cookie-session",BOOK_REF)}|{InfoURL("https://curl.haxx.se/docs/manpage.html#-j")}</td>
        </tr>
        <tr className={"table-primary"}>
            <td>Proxy</td>
            <td className="align-middle"><input id={props.curIndex} name="proxy" type="text" placeholder="socks4a://proxy.example.com:12345" onChange={props.httpTextInput} /></td>
            <td className={`text-center ${styles.summary}`}>Use the specified proxy. {InfoURL("https://curl.haxx.se/docs/manpage.html#-x")}</td>
        </tr>
        <tr>
            <td>Proxy Username</td>
            <td className="align-middle"><input id={props.curIndex} name="proxyuser" type="text" placeholder="johndoe" onChange={props.httpTextInput} /></td>
            <td className={`text-center ${styles.summary}`}>Specify the user name and password to use for proxy authentication. <em>Password will be asked.</em> {InfoURL("https://curl.haxx.se/docs/manpage.html#-U")}</td>
        </tr>
    </Options>
);
