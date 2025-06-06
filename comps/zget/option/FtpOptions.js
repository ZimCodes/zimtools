import Options from "./optionsWrapper";
import React from 'react';
const REF_FTP = <a href="https://www.gnu.org/software/wget/manual/html_node/FTP-Options.html#FTP-Options" target="_blank" rel="noreferrer noopener">More Info</a>;
//const REF_FTPS = <a href="https://www.gnu.org/software/wget/manual/html_node/FTP-Options.html#FTPS-Options" target="_blank" rel="noreferrer noopener">More Info</a>;

const FtpOptions = props => <Options title="FTP(S) Options" id={"ftp"}>
    <tr className="table-success">
        <td>Don't Remove Listings</td>
        <td className="align-middle"><input name="listings" type="checkbox" onChange={props.ftpCheckInput}/></td>
        <td className="text-center">Don’t remove the temporary .listing files generated by FTP retrievals. Not removing them can be useful for debugging purposes,
            or when you want to be able to easily check on the contents of remote server directories. {REF_FTP}</td>
    </tr>
    <tr className="table-success">
        <td>FTP Fallback</td>
        <td className="align-middle"><input name="fallback" type="checkbox" onChange={props.ftpCheckInput}/></td>
        <td className="text-center">Fallback to FTP if FTPS is not supported by targeted server. {REF_FTP}</td>
    </tr>
</Options>;

export default FtpOptions;
