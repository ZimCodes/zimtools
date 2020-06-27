import styles from '../comps/css/about.module.css';
import Link from 'next/link';
const About = ()=>(
    <div>
        <Link href='/'>
            <a>Go BACK</a>
        </Link>
        <section>
            <h1><u>About</u></h1>
            <p className={styles.msg}>
                This website helps you configure the options needed to accomplish
                what you need from a command line tool. Originally, I created this website
                because I found it tedious venturing back from an open terminal to the
                documentation <em>(which I had to scroll through to find what I'm looking for)</em> and vice versa.
                Now after creating a few configurators, I've decided to deploy them for others, who face
                a similar problem.
            </p>
        </section>
        <section>
            <h1><u>Privacy Policy</u></h1>
            <p className={styles.msg}>
                Privacy, huh?... Well let's be brief, <strong>no information is collected</strong>. Additionally, the
                information you place on each input field <em>(textboxes,number fields,checkboxes,etc.) </em>
                are <strong>ALL</strong> client side. This means nothing you do is uploaded to the server.
                Privacy at its finest.
            </p>
        </section>
    </div>

);
export default About;