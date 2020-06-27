import {CopyToClipboard} from "react-copy-to-clipboard/lib/Component";
import styles from '../../styles/ztube-dl/code.module.css';
const youTubeCodes = (props) => (
    <CopyToClipboard text={`youtube-dl ${props.bind.options.join(' ')} ${props.bind.url}`}
     onCopy={()=>{
         document.querySelector('#alert').style.display = "inherit";
     }
     }>
        <div className="sticky-top">
            <div id='alert' onAnimationEnd={props.animEnd} className={`${styles.alert} alert alert-success text-center p-0 m-0`} role="alert">Copied to clipboard!</div>
            <pre id="codelayer" className={`${styles.codelayer} pre-scrollable bg-dark text-white text-center rounded`}><code>youtube-dl <span id="options" className={styles.options}>{props.bind.options.join(' ')}</span> <span id="url" className={styles.url}>{props.bind.url}</span></code></pre>
        </div>
    </CopyToClipboard>

);

export default youTubeCodes;
