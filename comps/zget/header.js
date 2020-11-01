import Head from 'next/head';

const Header = props => <div>
    <Head>
        <meta name="author" content="Zim" />
        <meta name="name" content="Zget"/>
        <meta name="description" content="Wget options configurator. Make using the command-line interface easier with this productive web tool."/>
        <meta name="keywords" content="wget,wizard,options,configurator,tool,zget,commandline"/>
        <title>Wget Configurator</title>
    </Head>
    {props.children}
</div>;

export default Header;
