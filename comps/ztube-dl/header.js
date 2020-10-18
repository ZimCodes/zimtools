import Head from 'next/head';

const Header = props => <div>
    <Head>
        <title>YouTube-dl Configurator</title>
        <meta name="author" content="Zim"/>
        <meta name="name" content="ZTube-dl"/>
        <meta name="description" content="YouTube-dl options configurator. Make using the CLI easier with this productive web tool."/>
        <meta name="keywords" content="youtube-dl,configurator,tool,commandline,options,wizard"/>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
              integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
              crossOrigin="anonymous"/>
    </Head>
    {props.children}
</div>;

export default Header;
