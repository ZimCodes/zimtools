/*The Head HTML Module*/
/*All Head meta data are manipulated here*/
import Head from 'next/head';

export default (props) => (
	<div>
		<Head>
			<meta name="author" content="Zim" />
			<meta name="description" content="Zeiver options configurator. Make using the command-line interface easier with this productive web tool."/>
			<meta name="keywords" content="zeiver,options,configurator,tool,wizard,command line"/>
			<title>Zeiver Options Configurator</title>
		</Head>
		{props.children}
	</div>
);
