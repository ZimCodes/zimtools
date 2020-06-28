import Options from './optionsWrapper';//Imports the mandatory Options Wrapper
/*The Referer URL to obtain more information about an option*/
const REF_URL = <a href="https://github.com/ZimCodes/phuber#main-settings" target="_blank" rel="noreferrer noopener">More Info</a>;

export default (props) => (
    <Options title="Main Options" id="main">
        <tr className={'table-secondary'}>
            <td>Pages</td>
            <td className="align-middle"><input name="pages" type="number" min={'1'} onChange={props.mainTextProps}/></td>
            <td className="text-center">Number of pages to scrape through. <em>Default: '1'</em> {REF_URL}</td>
        </tr>
        {/*Example #1:*/}
        <tr className={'table-warning'}>
            <td>File Name</td>
            <td className="align-middle"><input name="file" type="text" placeholder="list.txt" onChange={props.mainTextProps}/></td>
            <td className="text-center">Name of your output file. <em>Default: 'list.txt'</em>. {REF_URL}</td>
        </tr>
        {/*Example #2:*/}
        <tr className={'table-secondary'}>
            <td>Premium Account</td>
            <td className="align-middle"><input name="account" type="text" placeholder={"username:password"} onChange={props.mainTextProps}/></td>
            <td className="text-center">The login credentials to use when scraping premium pages. '<strong>username:password</strong>' format {REF_URL}</td>
        </tr>
    </Options>
);
