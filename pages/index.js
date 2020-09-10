import Header from '../comps/header';
import Topbar from '../comps/topbar';
import Wiz from "../comps/wiz";
import Wizsection from "../comps/wizsection";

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
							 'Wget has many features to make retrieving large files or mirroring entire web or FTP sites easy.'}/>
						<Wiz link={'/ztube-dl'} title={'Youtube-dl'} headStyle={styles.youtubeDl}
							 about="Download videos from Youtube or many other video platforms."/>
						<Wiz link={'/zffmpeg'} title={'FFmpeg'} headStyle={styles.ffmpeg}
							 about="Multimedia framework with ability to decode, encode, transcode, mux, demux, stream, filter and play pretty much anything that humans and machines have created."/>
						<Wiz link={'/zphuber'} title={'Phuber'} headStyle={styles.phuber}
						about="A Beautiful Soul tool for retrieving video links from PornHub."/>
					</Wizsection>
				</section>

			</Header>
		);
	}
}
export default Index;