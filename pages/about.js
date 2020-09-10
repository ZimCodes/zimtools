import styles from '../styles/main/about.module.css';
import Link from 'next/link';
import Header from '../comps/header';
const About = ()=>(
    <Header>
        <Link href='/'>
            <a className={'btn btn-link btn-warning text-primary ml-3 mt-4'}>GO BACK</a>
        </Link>
        <div className={'container'}>
            <section className={'text-center'}>
                <h1><u>About</u></h1>
                <p className={`${styles.msg} mt-4`}>
                    Zimtools helps configure a set of commands to get what you need from a command line tool.
                    While using command line tools, I found it tedious venturing back and forth from an open terminal to the
                    documentation <em>(which I had to scroll through to find what I'm looking for)</em>.
                    Now after creating a few configurators, I've decided to deploy this website for others to use.
                </p>
            </section>
            <section className={'text-center'}>
                <h1 className={'mt-5'}><u>Privacy Policy</u></h1>
                <p className={`${styles.msg} mt-4`}>
                    Privacy, huh?... Well let's be brief, <strong>no information is collected</strong>. The information
                    you place on each input field <em>(textboxes,number fields,checkboxes,etc.) </em>
                    are all <strong>client side</strong>. This means nothing you do is uploaded to the server.
                </p>
                <h3 className={'mt-5'}><u>When I send feedback, is that collected?</u></h3>
                <p className={`${styles.msg} mt-4`}>
                    The messages you send goes directly to my personal inbox. In this way, we will be messaging each
                    other on an 'eye to eye' level. After reading a message, I immediately dispose of it. So to answer
                    this question <strong><u>no</u></strong>. I prefer to keep my inbox tidy thank you very much.
                </p>
            </section>
        </div>

    </Header>

);
export default About;