import IOTitleWrap from '../IOTitleWrap';
import InputMainOptions from './opts/InputMainOptions';
import CodecOpt from '../indie/main/ICodecOpt';

import React from 'react';
class InputContainer extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			codec_list:[],
		};
		this.populateCodec = this.populateCodec.bind(this);
	}
	populateCodec(event){
		const elemVal = event.target.value;
		let codec_comps = [];
		codec_comps[elemVal-1] = 0;
		codec_comps.fill(0,0,elemVal)
		this.setState({codec_list:codec_comps});
	}
	render(){
		return (
			<IOTitleWrap getFile={this.props.getFile} name={`ifile_${this.props.sector}`} head={`|--${this.props.sector}--| Input`}>
				<InputMainOptions mainTxt={this.props.mainTxt} idNum={this.props.idNum} sector={this.props.sector}>
					<CodecOpt title={`Codec #0`} resetClick={this.props.resetClick} id={'start'} sector={this.props.sector} mainTxt={this.props.mainTxt} getCodecNum={this.populateCodec}/>
					{this.state.codec_list.map((comp,index) =>{
						return <CodecOpt key={index} title={`Codec #${index+1}`} hide={"invisible"} id={String(index)} sector={this.props.sector} mainTxt={this.props.mainTxt}/>}
					)
					}
				</InputMainOptions>
			</IOTitleWrap>
		);
	}
}
export default InputContainer;