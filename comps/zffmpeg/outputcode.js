import {CopyToClipboard} from "react-copy-to-clipboard/lib/Component";//react-copy-to-clipboard dependency
import styles from '../../styles/zffmpeg/outcode.module.css';

const Outputcode = (props) => (
        /*1.)Sets up how to copy to clipboard*/
    <CopyToClipboard text={`ffmpeg ${props.bind.inputOpts} ${props.bind.outputOpts}`}
     onCopy={()=>{
         document.querySelector('#alert').style.display = "inherit";
     }
     }>
        {/*2.)Outputs the commands & options to use for the Command Line*/}
    <div className="sticky-top">
    <div id='alert' onAnimationEnd={props.animEnd} className={`${styles.alert} alert alert-success text-center p-0 m-0`} role="alert">Copied to clipboard!</div>
        <pre id="codelayer" className={`${styles.codelayer} pre-scrollable bg-dark text-white text-center rounded`}><code>ffmpeg <span id="options" className={styles.options}>{props.bind.inputOpts}</span><span id="output" className={styles.output}>{props.bind.outputOpts}</span></code></pre>
    </div>
    </CopyToClipboard>
);
export default Outputcode;
