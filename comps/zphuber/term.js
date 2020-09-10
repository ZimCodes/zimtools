/*The URL Option Component*/
import styles from '../../styles/zphuber/term.module.css';

const Term = props => <section className="text-center">
    <h2 className="font-weight-bold"><span className={`${styles.span} text-info`}>SEARCH</span> <span className={`${styles.span} text-danger`}>TERMS</span></h2>
    <div className="py-4">
        <input className="rounded shadow-sm w-50" placeholder="happiness and joy" type="url" onChange={props.getTerm}/>
    </div>
    <hr/>
</section>;

export default Term;
