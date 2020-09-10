//F.A.B. Sub Menu Navigation
import styles from '../../../styles/zffmpeg/nav/subnav.module.css';

const SubNav = props => <div className={`${styles.div} btn-group-vertical ml-2`} role="group" aria-label="buttons for sub navigation">
    {/*Navigation Links in the F.A.B. Sub Menu for each category
    Example:*/}
  <button name="global" className={`${styles.button} btn btn-sm`} onClick={props.subNavClick}>Global</button>
  <button name="isector_A" className={`${styles.button} btn btn-sm`} onClick={props.subNavClick}>|-A-| Input</button>
  <button name="isector_B" className={`${styles.button} btn btn-sm`} onClick={props.subNavClick}>|-B-| Input</button>
  <button name="isector_C" className={`${styles.button} btn btn-sm`} onClick={props.subNavClick}>|-C-| Input</button>
  <button name="osector_A" className={`${styles.button} btn btn-sm`} onClick={props.subNavClick}>|-A-| Output</button>
  <button name="osector_B" className={`${styles.button} btn btn-sm`} onClick={props.subNavClick}>|-B-| Output</button>
  <button name="osector_C" className={`${styles.button} btn btn-sm`} onClick={props.subNavClick}>|-C-| Output</button>
</div>;

export default SubNav;
