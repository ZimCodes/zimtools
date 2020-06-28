import Head from "next/head";
export default (props) =>(
    <div>
        <Head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
                  integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
                  crossOrigin="anonymous"/>
            <meta name="author" content="Zim" />
            <meta name="name" content="Zget"/>
            <meta name="description" content="Zim's command-line options configurator. Make using the command-line interface easier with this productive web tool."/>
            <meta name="keywords" content="wget,ffmpeg,youtube-dl,zim,wizard,options,configurator,commandline"/>
            <title>ZimTools</title>
        </Head>
        {props.children}
    </div>
);