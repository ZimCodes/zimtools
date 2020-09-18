/*The URL Option Component*/
import styles from '../../styles/zcurl/url.module.css';
export default (props)=>(
    <section className="text-center">
        <h2 className="font-weight-bold"><span className={`${styles.span} text-info`}>U</span><span className={`${styles.span} text-danger`}>R</span><span className={`${styles.span} text-success`}>L</span><span className={`${styles.span} text-warning`}>S</span></h2>
        <div className="py-4">
            <input className="rounded shadow-sm w-50" placeholder="[USE SPACES TO SEPARATE URLS!]" type="url" onChange={props.getURL}/>
        </div>
        <hr/>
    </section>

);
