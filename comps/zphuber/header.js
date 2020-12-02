/*The Head HTML Module*/
/*All Head meta data are manipulated here*/
import Head from 'next/head';

const Header = props => <div>
    <Head>
        <meta name="author" content="Zim" />
        <meta charSet="UTF-8"/>
        <meta name="description" content="Phuber Options Configurator. Make using the command-line interface easier with this productive web tool."/>
        <meta name="keywords" content="phuber,options,configurator,tool,wizard,command line"/>
        <title>Phuber Configurator</title>
    </Head>
    {props.children}
</div>;

export default Header;
