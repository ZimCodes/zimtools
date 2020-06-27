import {CopyToClipboard} from "react-copy-to-clipboard/lib/Component";
import styles from '../../styles/zget/wgetcode.module.css';
const WgetCode = (props) => (
    <CopyToClipboard text={`wget ${props.bind.options.join(' ')} ${props.bind.url}`}
    onCopy={()=>{
        document.querySelector('#alert').style.display = "inherit";
    }
    }>
        <div className="sticky-top">
            <div id='alert' onAnimationEnd={props.animEnd} className={`${styles.alert} alert alert-success text-center p-0 m-0`} role="alert">Copied to clipboard!</div>
            <pre id="codelayer" className={`${styles.codelayer} pre-scrollable bg-dark text-white text-center rounded`}><code id="wget">wget <span className={styles.options}>{props.bind.options.join(' ')}</span> <span id="url" className={styles.url}>{props.bind.url}</span></code></pre>
        </div>
    </CopyToClipboard>

);
export default WgetCode;
