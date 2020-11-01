import Head from 'next/head';

const Header = props => <div>
    <Head>
        <title>YouTube-dl Configurator</title>
        <meta name="author" content="Zim"/>
        <meta name="name" content="ZTube-dl"/>
        <meta name="description" content="YouTube-dl options configurator. Make using the CLI easier with this productive web tool."/>
        <meta name="keywords" content="youtube-dl,configurator,tool,commandline,options,wizard"/>
    </Head>
    {props.children}
</div>;

export default Header;
