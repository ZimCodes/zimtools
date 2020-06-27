import IOTitleWrap from '../IOTitleWrap';
import OutputMainOptions from './opts/OutputMainOptions';
import OutputVideoOptions from "./opts/OutputVideoOptions";
import OutputAdvOptions from "./opts/OutputAdvOptions";

import OCodecOpt from '../indie/main/OCodecOpt';
import FramesOpt from "../indie/main/FramesOpt";
import MetadataOpt from "../indie/main/MetadataOpt";
import DispositionOpt from "../indie/main/DispositionOpt";
import MapOpt from "../indie/adv/MapOpt";

import React from 'react';
const OptionState = {
	MAIN:1,
	VIDEO:2,
	AUDIO:3,
	SUBTITLE:4,
	ADVANCED:5
};
class OutputContainer extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			codec_list:[],
			frames_list:[],
			meta_list:[],
			dispos_list:[],
			map_list:[],
			cur_state:1
		};
		this.changeOptions = this.changeOptions.bind(this);
		this.populateCodec = this.populateCodec.bind(this);
		this.populateFrames = this.populateFrames.bind(this);
		this.populateMeta = this.populateMeta.bind(this);
		this.populateDispos = this.populateDispos.bind(this);
		this.populateMap = this.populateMap.bind(this);
	}
	changeOptions(event){
		const elemName = event.target.name;
		let choice = '';
		switch(elemName){
			case 'video':
				choice = OptionState.VIDEO;
				break;
			case 'advanced':
				choice = OptionState.ADVANCED;
				break;
			default:
				choice = OptionState.MAIN;
				break;
		}
		this.setState({
			cur_state:choice
		});
	}
	populateCodec(event){
		const elemVal = event.target.value;
		let codec_comps = [];
		codec_comps[elemVal-1] = 0;
		codec_comps.fill(0,0,elemVal);
		this.setState({codec_list:codec_comps});
	}
	populateFrames(event){
		const elemVal = event.target.value;
		let frames_comps = [];
		frames_comps[elemVal-1] = 0;
		frames_comps.fill(0,0,elemVal);
		this.setState({frames_list:frames_comps});
	}
	populateMeta(event){
		const elemVal = event.target.value;
		let meta_comps = [];
		meta_comps[elemVal-1] = 0;
		meta_comps.fill(0,0,elemVal);
		this.setState({meta_list:meta_comps});
	}
	populateDispos(event){
		const elemVal = event.target.value;
		let dispos_comps = [];
		dispos_comps[elemVal-1] = 0;
		dispos_comps.fill(0,0,elemVal);
		this.setState({dispos_list:dispos_comps});
	}
	populateMap(event){
		const elemVal = event.target.value;
		let map_comps = [];
		map_comps[elemVal-1] = 0;
		map_comps.fill(0,0,elemVal);
		this.setState({map_list:map_comps});
	}
	render(){
		return (
			<IOTitleWrap getFile={this.props.getFile} name={`ofile_${this.props.sector}`} head={`|--${this.props.sector}--| Output`}>
				{this.state.cur_state === OptionState.MAIN && <OutputMainOptions mainTxt={this.props.mainTxt} idNum={this.props.idNum} sector={this.props.sector} stateClick={this.changeOptions}>
					<OCodecOpt title={`Codec #0`} resetClick={this.props.resetClick} id={'start'} sector={this.props.sector} mainTxt={this.props.mainTxt} getCodecNum={this.populateCodec}/>
					{this.state.codec_list.map((comp,index) =>{
						return <OCodecOpt key={index} title={`Codec #${index+1}`} hide={"invisible"} id={String(index)} sector={this.props.sector} mainTxt={this.props.mainTxt}/>}
					)
					}
					<FramesOpt title={`Frames #0`} resetClick={this.props.resetClick} id={'start'} sector={this.props.sector} mainTxt={this.props.mainTxt} getFramesNum={this.populateFrames}/>
					{this.state.frames_list.map((comp,index) =>{
						return <FramesOpt key={index} title={`Frames #${index+1}`} hide={"invisible"} id={String(index)} sector={this.props.sector} mainTxt={this.props.mainTxt}/>}
					)
					}
					<MetadataOpt title={`Metadata #0`} resetClick={this.props.resetClick} id={'start'} sector={this.props.sector} mainTxt={this.props.mainTxt} getMetaNum={this.populateMeta}/>
					{this.state.meta_list.map((comp,index) =>{
						return <MetadataOpt key={index} title={`Metadata #${index+1}`} hide={"invisible"} id={String(index)} sector={this.props.sector} mainTxt={this.props.mainTxt}/>}
					)
					}
					<DispositionOpt title={`Disposition #0`} resetClick={this.props.resetClick} id={'start'} sector={this.props.sector} mainTxt={this.props.mainTxt} getDisposNum={this.populateDispos}/>
					{this.state.dispos_list.map((comp,index) =>{
						return <DispositionOpt key={index} title={`Disposition #${index+1}`} hide={"invisible"} id={String(index)} sector={this.props.sector} mainTxt={this.props.mainTxt}/>}
					)
					}
				</OutputMainOptions>}
				{this.state.cur_state === OptionState.VIDEO && <OutputVideoOptions videoTxt={this.props.videoTxt} idNum={this.props.idNum} sector={this.props.sector} stateClick={this.changeOptions}/>}
				{this.state.cur_state === OptionState.ADVANCED && <OutputAdvOptions advTxt={this.props.advTxt} idNum={this.props.idNum} sector={this.props.sector} stateClick={this.changeOptions}>
					<MapOpt title={`Map #0`} resetClick={this.props.resetClick} id={'start'} sector={this.props.sector} advTxt={this.props.advTxt} getMapNum={this.populateMap}/>
					{this.state.map_list.map((comp,index) =>{
						return <MapOpt key={index} title={`Map #${index+1}`} hide={"invisible"} id={String(index)} sector={this.props.sector} advTxt={this.props.advTxt}/>}
					)
					}
				</OutputAdvOptions>}
			</IOTitleWrap>
		);
	}
}
export default OutputContainer;