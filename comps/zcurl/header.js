/*The Head HTML Module*/
/*All Head meta data are manipulated here*/
import Head from 'next/head';
import React from "react";

export default (props) => (
	<div>
		<Head>
			<meta name="author" content="Zim" />
			<meta name="description" content="cURL options configurator. Make using the command-line interface easier with this productive web tool."/>
			<meta name="keywords" content="curl,options,configurator,tool,wizard,command line"/>
			<title>cURL Configurator</title>
		</Head>
		{props.children}
	</div>
);
