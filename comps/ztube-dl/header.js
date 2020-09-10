import Head from 'next/head';

const Header = props => <div>
    <Head>
        <title>YouTube-dl Options Configurator</title>
        <meta name="author" content="Zim"/>
        <meta name="name" content="ZTube-dl"/>
        <meta name="description" content="YouTube-dl options configurator. Make using the CLI easier with this productive web tool."/>
        <meta name="keywords" content="youtube-dl,configurator,tool,commandline,options,wizard"/>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
              integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
              crossOrigin="anonymous"/>
    </Head>
    {props.children}
</div>;

export default Header;
