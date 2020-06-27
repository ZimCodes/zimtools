import styles from '../../../styles/ztube-dl/nav/subnav.module.css';
export default (props)=>(
  <div className={`${styles.div} btn-group-vertical`} role="group" aria-label="buttons for sub navigation">
    <button name="config" className={`${styles.button} btn btn-sm`} onClick={props.subNavClick}>Before Config</button>
    <button name="dl" className={`${styles.button} btn btn-sm`} onClick={props.subNavClick}>Download</button>
    <button name="select" className={`${styles.button} btn btn-sm`} onClick={props.subNavClick}>Video Selection</button>
    <button name="format" className={`${styles.button} btn btn-sm`} onClick={props.subNavClick}>Video Format</button>
    <button name="post" className={`${styles.button} btn btn-sm`} onClick={props.subNavClick}>Post-process</button>
    <button name="file" className={`${styles.button} btn btn-sm`} onClick={props.subNavClick}>Filesystem</button>
    <button name="only" className={`${styles.button} btn btn-sm`} onClick={props.subNavClick}>YouTube Only</button>
    <button name="work" className={`${styles.button} btn btn-sm`} onClick={props.subNavClick}>Work Around</button>
    <button name="thumb" className={`${styles.button} btn btn-sm`} onClick={props.subNavClick}>Thumbnail</button>
    <button name="subauth" className={`${styles.button} btn btn-sm`} onClick={props.subNavClick}>Sub & Auth</button>
  </div>
);
