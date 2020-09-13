//F.A.B. Sub Menu Navigation
import styles from '../../../../styles/zcurl/nav/subnav.module.css';
export default (props)=>(
  <div className={`${styles.div} btn-group-vertical`} role="group" aria-label="buttons for sub navigation">
      {/*Navigation Links in the F.A.B. Sub Menu for each category
      Example:*/}
    <button name="general" className={`${styles.button} btn btn-sm`} onClick={props.subNavClick}>General</button>
    <button name="dl" className={`${styles.button} btn btn-sm`} onClick={props.subNavClick}>Download</button>
    <button name="protocol" className={`${styles.button} btn btn-sm`} onClick={props.subNavClick}>SMTP/FTP</button>
    <button name="http" className={`${styles.button} btn btn-sm`} onClick={props.subNavClick}>HTTP</button>
  </div>
);
