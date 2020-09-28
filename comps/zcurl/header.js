/*The Head HTML Module*/
/*All Head meta data are manipulated here*/
import Head from 'next/head';
import React from "react";

export default (props) => (
	<div>
		<Head>
			<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
				  integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
				  crossOrigin="anonymous"/>
			<meta name="author" content="Zim" />
			<meta name="description" content="cURL options configurator. Make using the command-line interface easier with this productive web tool."/>
			<meta name="keywords" content="curl,options,configurator,tool,wizard,command line"/>
			<title>cURL Configurator</title>
		</Head>
		{props.children}
	</div>
);
