import Header from '../comps/header';
import Topbar from '../comps/topbar';
import Wiz from "../comps/wiz";
import Wizsection from "../comps/wizsection";
import "bootstrap/dist/css/bootstrap.min.css";

import styles from "../styles/main/tools.module.css";
import React from 'react';
class Index extends React.Component{

	constructor(props){
		super(props);
	}

	render(){
		return (
			<Header>
				<Topbar/>
				<section className={'container'}>
					<Wizsection>
						<Wiz link={'/zget'} title={'Wget'} headStyle={styles.wget}
							 about={'For retrieving files using HTTP, HTTPS, FTP & FTPS. ' +
							 'Wget has many features to make retrieving large files or mirroring entire FTP or web sites easy.'}/>
						<Wiz link={'/ztube-dl'} title={'YouTube-DL'} headStyle={styles.youtubeDl}
							 about="Download videos from YouTube or many other video platforms."/>
						<Wiz link={'/zffmpeg'} title={'FFmpeg'} headStyle={styles.ffmpeg}
							 about="Multimedia framework with ability to decode, encode, transcode, mux, demux, stream, filter and play pretty much anything that humans and machines have created."/>
						<Wiz link={'/zphuber'} title={'Phuber'} headStyle={styles.phuber}
						about="A Beautiful Soup tool for retrieving video links from PornHub."/>
					</Wizsection>
					<Wizsection>
						<Wiz link={'/zcurl'} title={'cURL'} headStyle={styles.curl}
							 about="A command line tool for transferring data."/>
						<Wiz link={'/zeiver'} title={'Zeiver'} headStyle={styles.zeiver}
							 about="Designed to scrape and download content recursively from ODs (open directories)"/>
					</Wizsection>
				</section>

			</Header>
		);
	}
}
export default Index;