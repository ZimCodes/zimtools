import Options from './optionWrapper';
const SUB_URL = <a href="https://github.com/ytdl-org/youtube-dl/blob/master/README.md#subtitle-options" target="_blank" rel="noreferrer noopener">More Info</a>;
const COOKIE_URL = <a href="https://github.com/ytdl-org/youtube-dl/blob/master/README.md#filesystem-options" target="_blank" rel="noreferrer noopener">More Info</a>;

const SubAuth = props => <Options title="Subtitles & Authentication" id={"subauth"}>
    <tr>
        <td>Write Subs</td>
        <td className="align-middle"><input name="sub" type="checkbox" onChange={props.subAuthCheckInput}/></td>
        <td className="text-center">Write subtitle file. {SUB_URL}</td>
    </tr>
    <tr>
        <td>Download All Subs</td>
        <td className="align-middle"><input name="all" type="checkbox" onChange={props.subAuthCheckInput} /> </td>
        <td className="text-center">Download all available subtitles. {SUB_URL}</td>
    </tr>
    <tr>
        <td>Cookies</td>
        <td className="align-middle"><input name="cookies" type="text" onChange={props.subAuthTextInput} /></td>
        <td className="text-center">The file to read cookies from. Use this to download private videos from your account. {COOKIE_URL}</td>
    </tr>
</Options>;

export default SubAuth;
