/*The Head HTML Module*/
/*All Head meta data are manipulated here*/
import Head from 'next/head';
import styles from '../../styles/zeiver/header.module.css';
export default (props) => (
	<div className={styles.global}>
		<Head>
			<meta name="author" content="Zim" />
			<meta name="description" content="Zeiver options configurator. Make using the command-line interface easier with this productive web tool."/>
			<meta name="keywords" content="zeiver,options,configurator,tool,wizard,command line"/>
			<title>Zeiver Options Configurator</title>
		</Head>
		{props.children}
	</div>
);
