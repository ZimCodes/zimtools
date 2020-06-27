import Options from './optionsWrapper';
const REF_HTTP = <a href="https://www.gnu.org/software/wget/manual/html_node/HTTP-Options.html#HTTP-Options" target="_blank" rel="noreferrer noopener">More Info</a>;
const REF_HTTPS = <a href="https://www.gnu.org/software/wget/manual/wget.html#HTTPS-_0028SSL_002fTLS_0029-Options" target="_blank" rel="noreferrer noopener">More Info</a>;

export default (props) =>(
    <Options title="HTTP(S) Options" id={"http"}>
        <tr>
            <td>No Cache</td>
            <td className="align-middle"><input name="cache" type="checkbox" onChange={props.httpCheckInput} defaultChecked={true}/></td>
            <td className="text-center">Disable server-side cache. {REF_HTTP}</td>
        </tr>
        <tr className="table-warning">
            <td>No Checking Certificate</td>
            <td className="align-middle"><input name="nocertificate" type="checkbox" onChange={props.httpCheckInput} defaultChecked={true}/></td>
            <td className="text-center">Do not check the server's certificate against recognizable ones and continue downloading, regardless if the verification fails. {REF_HTTPS}</td>
        </tr>
        <tr className="table-primary">
            <td>Compress File</td>
            <td className="align-middle"><input name="compression" type="checkbox" onChange={props.httpCheckInput} /></td>
            <td className="text-center">Wget asks the server to compress the file using the gzip compression format. <em>gzip is the only available format.</em> {REF_HTTP}</td>
        </tr>
        <tr className="table-primary">
            <td>Change User-Agent</td>
            <td className="align-middle"><textarea name="useragent" cols="30" rows="8" placeholder="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36" onChange={props.httpTextInput}/></td>
            <td className="text-center align-middle">Change the client's identity in the HTTP server. By default, Wget will identify as <em>‘Wget/current_version’</em>. <strong>To identify as nothing, type <em><q>none</q> or <q>null</q></em></strong>. {REF_HTTP}</td>
        </tr>
        <tr className="table-primary">
            <td>HTTPS Only</td>
            <td className="align-middle"><input name="httpsonly" type="checkbox" onChange={props.httpCheckInput} /></td>
            <td className="text-center">While in <strong>recursive mode</strong>, only follow HTTPS links. {REF_HTTP}</td>
        </tr>
    </Options>
);
