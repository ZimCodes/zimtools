import Head from 'next/head';

const Header = props => <div>
    <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
              integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
              crossOrigin="anonymous"/>
        <meta name="author" content="Zim" />
        <meta name="name" content="Zget"/>
        <meta name="description" content="Wget options configurator. Make using the command-line interface easier with this productive web tool."/>
        <meta name="keywords" content="wget,wizard,options,configurator,tool,zget,commandline"/>
        <title>Wget Configurator</title>
    </Head>
    {props.children}
</div>;

export default Header;
