import Options from './optionsWrapper';//Imports the mandatory Options Wrapper
/*The Referer URL to obtain more information about an option*/
const REF_URL = <a href="https://github.com/ZimCodes/phuber#filters" target="_blank" rel="noreferrer noopener">More Info</a>;
const CATEGORY_URL = <a href="https://github.com/ZimCodes/phuber#category-keywords-list" target="_blank" rel="noreferrer noopener">Category Table</a>;

const FilterOptions = props => <Options title="Filter Options" id="filter">
    <tr className={'table-warning'}>
        <td>Only Premium</td>
        <td className="align-middle"><input name="premium" type="checkbox" onChange={props.filterCheckInput}/></td>
        <td className="text-center">Retrieve only premium videos. <strong>Must have a premium account!</strong> {REF_URL}</td>
    </tr>
    {/*Example #1:*/}
    <tr className={'table-secondary'}>
        <td>Production Type</td>
        <td className="align-middle">
            <select name="production" defaultValue={''} onChange={props.filterTextProps}>
                <option value="">N/A</option>
                <option value="home">home</option>
                <option value="pro">professional</option>
            </select>
        </td>
        <td className="text-center">Production of the video. {REF_URL}</td>
    </tr>
    {/*Example #2:*/}
    <tr className={'table-warning'}>
        <td>Min Duration</td>
        <td className="align-middle">
            <select name="min" defaultValue={''} onChange={props.filterTextProps}>
                <option value="">N/A</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
            </select>
        </td>
        <td className="text-center">Minimum length of the videos. <em>Default: '0'</em>. {REF_URL}</td>
    </tr>
    <tr className={'table-secondary'}>
        <td>Max Duration</td>
        <td className="align-middle">
            <select name="max" defaultValue={''} onChange={props.filterTextProps}>
                <option value="">N/A</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
            </select>
        </td>
        <td className="text-center">Maximum length of the videos. <em>Default: '40'</em>. {REF_URL}</td>
    </tr>
    <tr className={'table-warning'}>
        <td>Include Category</td>
        <td className="align-middle"><input name="include" type="text" onChange={props.filterTextProps}/></td>
        <td className="text-center">The category to filter into the search. <strong>Can only write <u>ONE</u></strong>. {CATEGORY_URL}|{REF_URL}</td>
    </tr>
</Options>;

export default FilterOptions;
