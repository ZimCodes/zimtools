import {CopyToClipboard} from "react-copy-to-clipboard/lib/Component";//react-copy-to-clipboard dependency
import styles from '../../styles/zeiver/code.module.css';

const Outputcode = (props) => (
        /*1.)Sets up how to copy to clipboard*/
    <CopyToClipboard text={`zeiver ${props.bind.output} ${props.bind.urls}`}
     onCopy={()=>{
         document.querySelector('#alert').style.display = "inherit";
     }
     }>
        {/*2.)Outputs the commands & options to use for the Command Line*/}
    <div className="sticky-top">
    <div id='alert' onAnimationEnd={props.animEnd} className={`${styles.alert} alert alert-success text-center p-0 m-0`} role="alert">Copied to clipboard!</div>
        <pre id="codelayer" className={`${styles.codelayer} pre-scrollable bg-dark text-white text-center rounded`}>
            <code>
                zeiver {props.bind.output[0] !== "" && (<span className={styles.options}>{props.bind.output}</span>)} <span className={styles.url}>{props.bind.urls}</span>
            </code>
        </pre>
    </div>
    </CopyToClipboard>
);
export default Outputcode;
