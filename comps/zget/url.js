import styles from '../../styles/zget/url.module.css';

const Url = props => <section className="text-center">
    <h2 className="font-weight-bold"><span className={`${styles.span} text-info`}>U</span><span className={`${styles.span} text-danger`}>R</span><span className={`${styles.span} text-success`}>L</span><span className={`${styles.span} text-warning`}>S</span></h2>
    <div className="py-4">
        <input className="rounded shadow-sm w-50" placeholder="[USE SPACES TO SEPARATE URLS!]" type="url" onChange={props.getURL}/>
    </div>
    <div className="py-2">
        <label>
            <input type="checkbox" onChange={props.getWgetrc} defaultChecked={true}/> ignore robots.txt
        </label>
    </div>
    <hr/>
</section>;

export default Url;
