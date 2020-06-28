/*The Head HTML Module*/
/*All Head meta data are manipulated here*/
import Head from 'next/head';

export default (props) => (
	<div>
		<Head>
			<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
				  integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
				  crossOrigin="anonymous"/>
			<meta name="author" content="Zim" />
			<meta name="description" content="Phuber options configurator. Make using the command-line interface easier with this productive web tool."/>
			<meta name="keywords" content="phuber,options,configurator,tool,wizard,command line"/>
			<title>Phuber Options Configurator</title>
		</Head>
		{props.children}
	</div>
);
