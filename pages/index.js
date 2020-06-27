import Header from '../comps/header';
import Topbar from '../comps/topbar';
import Wiz from "../comps/wiz";
import Wizsection from "../comps/wizsection";

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
						<Wiz link={'/zget'} title={'Wget'}/>
						<Wiz link={'/ztube-dl'} title={'Youtube-dl'}/>
						<Wiz link={'/zffmpeg'} title={'FFmpeg'}/>
					</Wizsection>
				</section>

			</Header>
		);
	}
}
export default Index;