import Options from './optionsWrapper';//Imports the mandatory Options Wrapper
import {InfoURL} from "../Utility";//The Referer URL to obtain more information about an option
import React from "react";
import styles from "../../../styles/zeiver/opts.module.css";
export default (props) => (
    <Options title="HTTP Options" id="http">
        <tr>
            <td>Set Headers</td>
            <td className="align-middle"><textarea id={props.curIndex} name="headers" cols="30" rows="8" placeholder="content-length$128,accept$ text/html, application/xhtml+xml, image/webp" onChange={props.httpTextInput}/></td>
            <td className="text-center align-middle">Sets the default headers to use for every request. *Use the <code className={styles.code}>header$value</code> format. Each header must also be <strong>separated by a comma</strong>. {InfoURL("https://github.com/ZimCodes/Zeiver#http")}</td>
        </tr>
        <tr>
            <td>User-Agent</td>
            <td className="align-middle"><textarea id={props.curIndex} name="agent" cols="30" rows="8" placeholder="Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0)" onChange={props.httpTextInput}/></td>
            <td className="text-center align-middle">The User Agent header to use. <em>Default:</em> <code className={styles.code}>Zeiver/VERSION</code>. {InfoURL("https://github.com/ZimCodes/Zeiver#http")}</td>
        </tr>
        <tr>
            <td>Retries</td>
            <td className="align-middle"><input id={props.curIndex} name="tries" size="5" type="number" min={0} placeholder="20" onChange={props.httpTextInput}/></td>
            <td className="text-center">The amount of times to retry a failed connection/request. <em>Default:</em> <code className={styles.code}>20</code>. {InfoURL("https://github.com/ZimCodes/Zeiver#http")}</td>
        </tr>
        <tr>
            <td>Wait Delay</td>
            <td className="align-middle"><input id={props.curIndex} name="wait" type="number" size="5" min="0" onChange={props.httpTextInput}/></td>
            <td className="text-center">Wait a specified number of seconds between each scraping & download requests. {InfoURL("https://github.com/ZimCodes/Zeiver#http")}</td>
        </tr>
        <tr>
            <td>Retry Delay</td>
            <td className="align-middle"><input id={props.curIndex} name="retry-delay" size="5" type="number" min="0" placeholder={"10"} onChange={props.httpTextInput}/></td>
            <td className="text-center">The wait time between each failed request. <em>Default:</em> <code className={styles.code}>10</code>. {InfoURL("https://github.com/ZimCodes/Zeiver#http")}</td>
        </tr>
        <tr>
            <td>Random Wait Delay</td>
            <td className="align-middle"><input id={props.curIndex} name="random-delay" type="checkbox" onChange={props.httpCheckInput}/></td>
            <td className="text-center">Wait a random amount of seconds between each request. {InfoURL("https://github.com/ZimCodes/Zeiver#http")}</td>
        </tr>
        <tr>
            <td>Timeout</td>
            <td className="align-middle"><input id={props.curIndex} name="timeout" size="5" type="number" onChange={props.httpTextInput}/></td>
            <td className="text-center">Adds a request timeout for a specified number of seconds. {InfoURL("https://github.com/ZimCodes/Zeiver#http")}</td>
        </tr>
        <tr>
            <td>Redirects</td>
            <td className="align-middle"><input id={props.curIndex} name="redirect" size="5" type="number" onChange={props.httpTextInput}/></td>
            <td className="text-center">Maximum redirects to follow. <em>Default:</em> <code className={styles.code}>10</code>. {InfoURL("https://github.com/ZimCodes/Zeiver#http")}</td>
        </tr>
        <tr>
            <td>Proxy</td>
            <td className="align-middle"><input id={props.curIndex} name="proxy" type="text" placeholder="socks5://192.168.1.1:9000" onChange={props.httpTextInput}/></td>
            <td className="text-center">The proxy to use. {InfoURL("https://github.com/ZimCodes/Zeiver#http")}</td>
        </tr>
        <tr>
            <td>Proxy Auth</td>
            <td className="align-middle"><input id={props.curIndex} name="proxy-auth" type="text" placeholder="username:password" onChange={props.httpTextInput}/></td>
            <td className="text-center">The basic authentication needed to use the proxy. *<em>Must use the</em> <code className={styles.code}>username:password</code> <em>format</em>. {InfoURL("https://github.com/ZimCodes/Zeiver#http")}</td>
        </tr>
    </Options>
);
