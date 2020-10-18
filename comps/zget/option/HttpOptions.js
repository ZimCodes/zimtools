import Options from './optionsWrapper';
const REF_HTTP = <a href="https://www.gnu.org/software/wget/manual/html_node/HTTP-Options.html#HTTP-Options" target="_blank" rel="noreferrer noopener">More Info</a>;
const REF_HTTPS = <a href="https://www.gnu.org/software/wget/manual/wget.html#HTTPS-_0028SSL_002fTLS_0029-Options" target="_blank" rel="noreferrer noopener">More Info</a>;

const HttpOptions = props => <Options title="HTTP(S) Options" id={"http"}>
    <tr>
        <td>No Cache</td>
        <td className="align-middle"><input name="cache" type="checkbox" onChange={props.httpCheckInput} defaultChecked={true}/></td>
        <td className="text-center">Disable server-side cache. {REF_HTTP}</td>
    </tr>
    <tr className="table-primary">
        <td>Compress File</td>
        <td className="align-middle"><input name="compression" type="checkbox" onChange={props.httpCheckInput} /></td>
        <td className="text-center">Wget asks the server to compress the file using the gzip compression format. <em>gzip is the only available format.</em> {REF_HTTP}</td>
    </tr>
    <tr className="table-primary">
        <td> <span className="badge badge-dark">New!</span> Adjust Extension</td>
        <td className="align-middle"><input name="extension" type="checkbox" onChange={props.httpCheckInput} /></td>
        <td className="text-center">If a file of type, '<em>text/html</em>' is downloaded and the URL does not end with the regexp, ‘<em>\.[Hh][Tt][Mm][Ll]?</em>’, the suffix ‘<em>.html</em>’ will be appended to the local filename. {REF_HTTP}</td>
    </tr>
    <tr className="table-primary">
        <td> <span className="badge badge-dark">New!</span> Ignore Content-Length</td>
        <td className="align-middle"><input name="ignore" type="checkbox" onChange={props.httpCheckInput} /></td>
        <td className="text-center align-middle">Ignore Content-Length header. {REF_HTTP}</td>
    </tr>
    <tr className="table-primary">
        <td> <span className="badge badge-dark">New!</span> Max Redirects</td>
        <td className="align-middle"><input name="redirect" type="number" placeholder="20" onChange={props.httpTextInput} /></td>
        <td className="text-center">Maximum number of redirects to follow for a resource. <em>Default is 20</em>. {REF_HTTP}</td>
    </tr>
    <tr className="table-primary">
        <td>Change User-Agent</td>
        <td className="align-middle"><textarea name="useragent" cols="30" rows="8" placeholder="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36" onChange={props.httpTextInput}/></td>
        <td className="text-center align-middle">Change the client's identity in the HTTP server. By default, Wget will identify as <em>‘Wget/current_version’</em>. <strong>To identify as nothing, type <em><q>none</q> or <q>null</q></em></strong>. {REF_HTTP}</td>
    </tr>
{/*HTTPS Options*/}
    <tr className="table-warning">
        <td>No Checking Certificate</td>
        <td className="align-middle"><input name="nocertificate" type="checkbox" onChange={props.httpCheckInput} defaultChecked={true}/></td>
        <td className="text-center">Do not check the server's certificate against recognizable ones and continue downloading, regardless if the verification fails. {REF_HTTPS}</td>
    </tr>
    <tr className="table-primary">
        <td>HTTPS Only</td>
        <td className="align-middle"><input name="httpsonly" type="checkbox" onChange={props.httpCheckInput} /></td>
        <td className="text-center">While in <strong>recursive mode</strong>, only follow HTTPS links. {REF_HTTPS}</td>
    </tr>
</Options>;

export default HttpOptions;
