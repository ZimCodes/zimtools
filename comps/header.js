import Head from "next/head";
import React from "react";
const Header = props => <div>
    <Head>
        <meta name="author" content="Zim" />
        <meta name="name" content="Zimtools"/>
        <meta name="description" content="Zim's command-line options configurator. Make using the command-line interface easier with this productive web tool."/>
        <meta name="keywords" content="wget,ffmpeg,curl,youtube-dl,zim,wizard,options,configurator,commandline"/>
        <title>ZimTools</title>
        <link rel="icon" href="/favicon.ico"/>
    </Head>
    {props.children}
</div>;

export default Header;