/*The Head HTML Module*/
/*All Head meta data are manipulated here*/
import Head from 'next/head';
import React from "react";

export default (props) => (
	<div>
		<Head>
			<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
				  integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
				  crossOrigin="anonymous"/>
			<meta name="author" content="Zim" />
			<meta name="description" content="cURL options configurator. Make using the command-line interface easier with this productive web tool."/>
			<meta name="keywords" content="curl,options,configurator,tool,wizard,command line"/>
			<title>cURL Configurator</title>
		</Head>
		{props.children}
	</div>
);
