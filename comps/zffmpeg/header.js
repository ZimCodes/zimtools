/*The Head HTML Module*/
/*All Head meta data are manipulated here*/
import Head from 'next/head';

const Header = props => <div>
    <Head>
        <meta name="author" content="Zim" />
        <meta name="description" content="FFmpeg options configurator. Make using the command-line interface easier with this productive web tool."/>
        <meta name="keywords" content="options,configurator,wizard,command line,ffmpeg"/>
        <title>FFmpeg Configurator</title>
    </Head>
    {props.children}
</div>;

export default Header;
