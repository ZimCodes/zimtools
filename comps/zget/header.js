import Head from 'next/head';

const Header = props => <div>
    <Head>
        <meta charSet="UTF-8"/>
        <meta name="author" content="Zim" />
        <meta name="description" content="Wget Options Configurator. Make using the command-line interface easier with this productive web tool."/>
        <meta name="keywords" content="wget,wizard,options,configurator,tool,zget,commandline"/>
        <title>Wget Configurator</title>
    </Head>
    {props.children}
</div>;

export default Header;
