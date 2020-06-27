import Header from '../comps/zffmpeg/header';//Imports HTML <head> tag
import Titlebar from '../comps/zffmpeg/titlebar';//Imports the Title banner for the current page
import InputContainer from '../comps/zffmpeg/option/input/InputContainer';
import OutputContainer from '../comps/zffmpeg/option/output/OutputContainer';
import GlobalOptions from "../comps/zffmpeg/option/GlobalOptions";
import Outputcode from "../comps/zffmpeg/outputcode";//Imports the output component
import IconNav from "../comps/zffmpeg/nav/iconnav";//Imports F.A.B Components
import {globalEntry,iMainEntry,oMainEntry,oVideoEntry,oAdvancedEntry} from "../comps/zffmpeg/CommStorage";//Imports text command storage Component

import React from 'react';//React dependency

/* The Commandlist's job is to persistently hold all options the user wants to configure.*/
let inputFiles = ['','',''];
let outputFiles = ['','',''];
let inputOneCommandList = [];
let inputTwoCommandList = [];
let inputThreeCommandList = [];
let outputOneCommandList = [];
let outputTwoCommandList = [];
let outputThreeCommandList = [];
let globalCommandList = [];
/*The last date this was modified*/
const DATE_MODIFIED = "June 27, 2020";
/*The Email to use when receiving feedback*/
const FEEDBACK_EMAIL = "mailto:zimcodes@pm.me?subject=ZFFmpeg%20Feedback";
class Index extends React.Component{
    constructor(props){
        /*What's inside the state:
        * url: holds the url from user input
        * options: holds a temporary ever changing list of options the user wants to configure
        * isSubMenuOn: activates/deactivates the F.A.B. Sub Menu
        */
        super(props);
        this.state ={
            inputOpts:'',
			outputOpts:'',
            isSubMenuOn:false,
			idNum: 0,
            sector:['A','B','C']
        };
        //Binds the appropriate functions in order to use the 'this.' keyword
        this.globalCheckProps = this.globalCheckProps.bind(this);
        this.globalTextProps = this.globalTextProps.bind(this);
        this.iMainTextProps = this.iMainTextProps.bind(this);
        this.oMainTextProps = this.oMainTextProps.bind(this);
        this.oVideoTextProps = this.oVideoTextProps.bind(this);
        this.oAdvancedTextProps = this.oAdvancedTextProps.bind(this);

        this.resetInputBtn = this.resetInputBtn.bind(this);
        this.resetOutputBtn = this.resetOutputBtn.bind(this);
		this.getInputFile = this.getInputFile.bind(this);
		this.getOutputFile = this.getOutputFile.bind(this);

        this.subNavClick = this.subNavClick.bind(this);
        this.subActionBtnClick = this.subActionBtnClick.bind(this);
        this.animEnd = this.animEnd.bind(this);
    }
    globalCheckProps(event){
        const elemValue = event.target.checked;
        let command = '';
        switch(event.target.name){
            case 'fix':
                command = '-fix_sub_duration';
                break;
        }
        elemValue ? globalCommandList.push(command) : globalCommandList.splice(globalCommandList.indexOf(command),1);
        ///PLACE JOIN HERE
        this.joinInputOptions();
    }
    globalTextProps(event){
        const elemVal = event.target.value;
        let command = '';
        switch(event.target.name){
            case 'canvas':
                command = `-canvas_size "${elemVal}"`;
                if(globalCommandList.includes(globalEntry.canvas)){
                    globalCommandList.splice(globalCommandList.indexOf(globalEntry.canvas),1);
                }
                globalEntry.canvas = command ;
                globalCommandList.push(command);

                if(elemVal === ''){
                    globalCommandList.splice(globalCommandList.indexOf(globalEntry.canvas),1);
                    globalEntry.canvas = ``;
                }
                break;
            case 'vsync':
                command = `-vsync "${elemVal}"`;
                if(globalCommandList.includes(globalEntry.vsync)){
                    globalCommandList.splice(globalCommandList.indexOf(globalEntry.vsync),1);
                }
                globalEntry.vsync = command ;
                globalCommandList.push(command);

                if(elemVal === ''){
                    globalCommandList.splice(globalCommandList.indexOf(globalEntry.vsync),1);
                    globalEntry.vsync = ``;
                }
                break;
        }
        ///PLACE JOIN HERE
        this.joinInputOptions();
    }
    /*Gets user input from text related fields, then adds them to the commandlist*/
    /*The code below is an example*/
    iMainTextProps(event){
        const elemVal = event.target.value;
        const elemId = event.target.id;
        const elemSect = event.target.className;
        let command = '';
        switch(event.target.name){
            case 'format':
                command = `-f ${elemVal}`;
                if(this.getInputList(elemSect).includes(this.getIMainStorage(elemSect).formats[Number(elemId)])){
                    this.getInputList(elemSect).splice(this.getInputList(elemSect).indexOf(this.getIMainStorage(elemSect).formats[Number(elemId)]),1);
                }
                this.getIMainStorage(elemSect).formats[Number(elemId)]= command ;
                this.getInputList(elemSect).push(command);

                if(elemVal === ''){
                    this.getInputList(elemSect).splice(this.getInputList(elemSect).indexOf(this.getIMainStorage(elemSect).formats[Number(elemId)]),1);
                    this.getIMainStorage(elemSect).formats[Number(elemId)] = ``;
                }
				break;
            case 'codec':
			    command = elemVal.indexOf(':') === -1 ? `-c ${elemVal}` : `-c${elemVal}`;
                if(this.getInputList(elemSect).includes(this.getIMainStorage(elemSect).codecs[Number(elemId)])){
                    this.getInputList(elemSect).splice(this.getInputList(elemSect).indexOf(this.getIMainStorage(elemSect).codecs[Number(elemId)]),1);
                }
                this.getIMainStorage(elemSect).codecs[Number(elemId)] = command ;
                this.getInputList(elemSect).push(command);

                if(elemVal === ''){
                    this.getInputList(elemSect).splice(this.getInputList(elemSect).indexOf(this.getIMainStorage(elemSect).codecs[Number(elemId)]),1);
                    this.getIMainStorage(elemSect).codecs[Number(elemId)] = ``;
                }
				break;
        }
        ///PLACE JOIN HERE
		this.joinInputOptions();
    }
    oMainTextProps(event){
        const elemVal = event.target.value;
        const elemId = event.target.id;
        const elemSect = event.target.className;
        let command = '';
        switch(event.target.name){
            case 'format':
                command = `-f ${elemVal}`;
                if(this.getOutputList(elemSect).includes(this.getOMainStorage(elemSect).formats[Number(elemId)])){
                    this.getOutputList(elemSect).splice(this.getOutputList(elemSect).indexOf(this.getOMainStorage(elemSect).formats[Number(elemId)]),1);
                }
                this.getOMainStorage(elemSect).formats[Number(elemId)]= command ;
                this.getOutputList(elemSect).push(command);
                if(elemVal === ''){
                    this.getOutputList(elemSect).splice(this.getOutputList(elemSect).indexOf(this.getOMainStorage(elemSect).formats[Number(elemId)]),1);
                    this.getOMainStorage(elemSect).formats[Number(elemId)] = ``;
                }
                break;
            case 'size':
                command = `-fs ${elemVal}`;
                if(this.getOutputList(elemSect).includes(this.getOMainStorage(elemSect).sizes[Number(elemId)])){
                    this.getOutputList(elemSect).splice(this.getOutputList(elemSect).indexOf(this.getOMainStorage(elemSect).sizes[Number(elemId)]),1);
                }
                this.getOMainStorage(elemSect).sizes[Number(elemId)]= command ;
                this.getOutputList(elemSect).push(command);

                if(elemVal === ''){
                    this.getOutputList(elemSect).splice(this.getOutputList(elemSect).indexOf(this.getOMainStorage(elemSect).sizes[Number(elemId)]),1);
                    this.getOMainStorage(elemSect).sizes[Number(elemId)] = ``;
                }
                break;
            case 'codec':
                command = elemVal.indexOf(':') === -1 ? `-c ${elemVal}` : `-c${elemVal}`;
                if(this.getOutputList(elemSect).includes(this.getOMainStorage(elemSect).codecs[Number(elemId)])){
                    this.getOutputList(elemSect).splice(this.getOutputList(elemSect).indexOf(this.getOMainStorage(elemSect).codecs[Number(elemId)]),1);
                }
                this.getOMainStorage(elemSect).codecs[Number(elemId)] = command ;
                this.getOutputList(elemSect).push(command);

                if(elemVal === ''){
                    this.getOutputList(elemSect).splice(this.getOutputList(elemSect).indexOf(this.getOMainStorage(elemSect).codecs[Number(elemId)]),1);
                    this.getOMainStorage(elemSect).codecs[Number(elemId)] = ``;
                }
                break;
            case 'frames':
                command = elemVal.indexOf(':') === -1 ? `-frames ${elemVal}` : `-frames${elemVal}`;
                if(this.getOutputList(elemSect).includes(this.getOMainStorage(elemSect).frames[Number(elemId)])){
                    this.getOutputList(elemSect).splice(this.getOutputList(elemSect).indexOf(this.getOMainStorage(elemSect).frames[Number(elemId)]),1);
                }
                this.getOMainStorage(elemSect).frames[Number(elemId)] = command ;
                this.getOutputList(elemSect).push(command);

                if(elemVal === ''){
                    this.getOutputList(elemSect).splice(this.getOutputList(elemSect).indexOf(this.getOMainStorage(elemSect).frames[Number(elemId)]),1);
                    this.getOMainStorage(elemSect).frames[Number(elemId)] = ``;
                }
                break;
            case 'metadata':
                command = elemVal.indexOf(':') === -1 ? `-metadata ${elemVal}` : `-metadata:s${elemVal}`;
                if(this.getOutputList(elemSect).includes(this.getOMainStorage(elemSect).metadata[Number(elemId)])){
                    this.getOutputList(elemSect).splice(this.getOutputList(elemSect).indexOf(this.getOMainStorage(elemSect).metadata[Number(elemId)]),1);
                }
                this.getOMainStorage(elemSect).metadata[Number(elemId)] = command ;
                this.getOutputList(elemSect).push(command);

                if(elemVal === ''){
                    this.getOutputList(elemSect).splice(this.getOutputList(elemSect).indexOf(this.getOMainStorage(elemSect).metadata[Number(elemId)]),1);
                    this.getOMainStorage(elemSect).metadata[Number(elemId)] = ``;
                }
                break;
            case 'disposition':
                command = elemVal.indexOf(':') === -1 ? `-disposition ${elemVal}` : `-disposition${elemVal}`;
                if(this.getOutputList(elemSect).includes(this.getOMainStorage(elemSect).disposition[Number(elemId)])){
                    this.getOutputList(elemSect).splice(this.getOutputList(elemSect).indexOf(this.getOMainStorage(elemSect).disposition[Number(elemId)]),1);
                }
                this.getOMainStorage(elemSect).disposition[Number(elemId)] = command ;
                this.getOutputList(elemSect).push(command);

                if(elemVal === ''){
                    this.getOutputList(elemSect).splice(this.getOutputList(elemSect).indexOf(this.getOMainStorage(elemSect).disposition[Number(elemId)]),1);
                    this.getOMainStorage(elemSect).disposition[Number(elemId)] = ``;
                }
                break;
            case 'duration':
                command = `-t "${elemVal}"`;
                if(this.getOutputList(elemSect).includes(this.getOMainStorage(elemSect).duration[Number(elemId)])){
                    this.getOutputList(elemSect).splice(this.getOutputList(elemSect).indexOf(this.getOMainStorage(elemSect).duration[Number(elemId)]),1);
                }
                this.getOMainStorage(elemSect).duration[Number(elemId)] = command ;
                this.getOutputList(elemSect).push(command);

                if(elemVal === ''){
                    this.getOutputList(elemSect).splice(this.getOutputList(elemSect).indexOf(this.getOMainStorage(elemSect).duration[Number(elemId)]),1);
                    this.getOMainStorage(elemSect).duration[Number(elemId)] = ``;
                }
                break;
            case 'seek':
                command = `-ss "${elemVal}"`;
                if(this.getOutputList(elemSect).includes(this.getOMainStorage(elemSect).seek[Number(elemId)])){
                    this.getOutputList(elemSect).splice(this.getOutputList(elemSect).indexOf(this.getOMainStorage(elemSect).seek[Number(elemId)]),1);
                }
                this.getOMainStorage(elemSect).seek[Number(elemId)] = command ;
                this.getOutputList(elemSect).push(command);

                if(elemVal === ''){
                    this.getOutputList(elemSect).splice(this.getOutputList(elemSect).indexOf(this.getOMainStorage(elemSect).seek[Number(elemId)]),1);
                    this.getOMainStorage(elemSect).seek[Number(elemId)] = ``;
                }
                break;
            case 'target':
                command = `-target "${elemVal}"`;
                if(this.getOutputList(elemSect).includes(this.getOMainStorage(elemSect).target[Number(elemId)])){
                    this.getOutputList(elemSect).splice(this.getOutputList(elemSect).indexOf(this.getOMainStorage(elemSect).target[Number(elemId)]),1);
                }
                this.getOMainStorage(elemSect).target[Number(elemId)] = command ;
                this.getOutputList(elemSect).push(command);

                if(elemVal === ''){
                    this.getOutputList(elemSect).splice(this.getOutputList(elemSect).indexOf(this.getOMainStorage(elemSect).target[Number(elemId)]),1);
                    this.getOMainStorage(elemSect).target[Number(elemId)] = ``;
                }
                break;
        }
        ///PLACE JOIN HERE
        this.joinOutputOptions();
    }
    oVideoTextProps(event){
        const elemVal = event.target.value;
        const elemId = event.target.id;
        const elemSect = event.target.className;
        let command = '';
        switch(event.target.name){
            case 'rate':
                command = `-r ${elemVal}`;
                if(this.getOutputList(elemSect).includes(this.getOVideoStorage(elemSect).rate[Number(elemId)])){
                    this.getOutputList(elemSect).splice(this.getOutputList(elemSect).indexOf(this.getOVideoStorage(elemSect).rate[Number(elemId)]),1);
                }
                this.getOVideoStorage(elemSect).rate[Number(elemId)]= command ;
                this.getOutputList(elemSect).push(command);

                if(elemVal === ''){
                    this.getOutputList(elemSect).splice(this.getOutputList(elemSect).indexOf(this.getOVideoStorage(elemSect).rate[Number(elemId)]),1);
                    this.getOVideoStorage(elemSect).rate[Number(elemId)] = ``;
                }
                break;
            case 'aspect':
                command = `-aspect ${elemVal}`;
                if(this.getOutputList(elemSect).includes(this.getOVideoStorage(elemSect).aspect[Number(elemId)])){
                    this.getOutputList(elemSect).splice(this.getOutputList(elemSect).indexOf(this.getOVideoStorage(elemSect).aspect[Number(elemId)]),1);
                }
                this.getOVideoStorage(elemSect).aspect[Number(elemId)]= command ;
                this.getOutputList(elemSect).push(command);

                if(elemVal === ''){
                    this.getOutputList(elemSect).splice(this.getOutputList(elemSect).indexOf(this.getOVideoStorage(elemSect).aspect[Number(elemId)]),1);
                    this.getOVideoStorage(elemSect).aspect[Number(elemId)] = ``;
                }
                break;
            case 'frame_size':
                command = `-s ${elemVal}`;
                if(this.getOutputList(elemSect).includes(this.getOVideoStorage(elemSect).frame_size[Number(elemId)])){
                    this.getOutputList(elemSect).splice(this.getOutputList(elemSect).indexOf(this.getOVideoStorage(elemSect).frame_size[Number(elemId)]),1);
                }
                this.getOVideoStorage(elemSect).frame_size[Number(elemId)]= command ;
                this.getOutputList(elemSect).push(command);

                if(elemVal === ''){
                    this.getOutputList(elemSect).splice(this.getOutputList(elemSect).indexOf(this.getOVideoStorage(elemSect).frame_size[Number(elemId)]),1);
                    this.getOVideoStorage(elemSect).frame_size[Number(elemId)] = ``;
                }
                break;
        }
        ///PLACE JOIN HERE
        this.joinOutputOptions();
    }
    oAdvancedTextProps(event){
        const elemVal = event.target.value;
        const elemId = event.target.id;
        const elemSect = event.target.className;
        let command = '';
        switch(event.target.name){
            case 'filter':
                command = `-filter_complex "${elemVal}"`;
                if(this.getOutputList(elemSect).includes(this.getOAdvStorage(elemSect).filter[Number(elemId)])){
                    this.getOutputList(elemSect).splice(this.getOutputList(elemSect).indexOf(this.getOAdvStorage(elemSect).filter[Number(elemId)]),1);
                }
                this.getOAdvStorage(elemSect).filter[Number(elemId)]= command ;
                this.getOutputList(elemSect).push(command);

                if(elemVal === ''){
                    this.getOutputList(elemSect).splice(this.getOutputList(elemSect).indexOf(this.getOAdvStorage(elemSect).filter[Number(elemId)]),1);
                    this.getOAdvStorage(elemSect).filter[Number(elemId)] = ``;
                }
                break;
            case 'map':
                command = `-map ${elemVal}`;
                if(this.getOutputList(elemSect).includes(this.getOAdvStorage(elemSect).map[Number(elemId)])){
                    this.getOutputList(elemSect).splice(this.getOutputList(elemSect).indexOf(this.getOAdvStorage(elemSect).map[Number(elemId)]),1);
                }
                this.getOAdvStorage(elemSect).map[Number(elemId)] = command ;
                this.getOutputList(elemSect).push(command);

                if(elemVal === ''){
                    this.getOutputList(elemSect).splice(this.getOutputList(elemSect).indexOf(this.getOAdvStorage(elemSect).map[Number(elemId)]),1);
                    this.getOAdvStorage(elemSect).map[Number(elemId)] = ``;
                }
                break;
        }
        ///PLACE JOIN HERE
        this.joinOutputOptions();
    }
    resetInputBtn(event){
        const elemName = event.target.name;
        const elemSect = event.target.id;
        switch(elemName){
            case 'input_codec':
                if(elemSect === 'A'){
                    inputOneCommandList = inputOneCommandList.filter(command => !command.includes('-c'));
                }else if(elemSect === 'B'){
                    inputTwoCommandList = inputTwoCommandList.filter(command => !command.includes('-c'));
                }else if(elemSect === 'C'){
                    inputThreeCommandList = inputThreeCommandList.filter(command => !command.includes('-c'));
                }
                this.getIMainStorage(elemSect).codecs = [];
                break;
        }
        this.joinInputOptions();
    }
    resetOutputBtn(event){
        const elemName = event.target.name;
        const elemSect = event.target.id;
        switch(elemName){
            case 'output_codec':
                if(elemSect === 'A'){
                    outputOneCommandList = outputOneCommandList.filter(command => !command.includes('-c'));
                }else if(elemSect === 'B'){
                    outputTwoCommandList = outputTwoCommandList.filter(command => !command.includes('-c'));
                }else if(elemSect === 'C'){
                    outputThreeCommandList = outputThreeCommandList.filter(command => !command.includes('-c'));
                }
                this.getOMainStorage(elemSect).codecs = [];
                break;
            case 'output_frames':
                if(elemSect === 'A'){
                    outputOneCommandList = outputOneCommandList.filter(command => !command.includes('-frames'));
                }else if(elemSect === 'B'){
                    outputTwoCommandList = outputTwoCommandList.filter(command => !command.includes('-frames'));
                }else if(elemSect === 'C'){
                    outputThreeCommandList = outputThreeCommandList.filter(command => !command.includes('-frames'));
                }
                this.getOMainStorage(elemSect).frames = [];
                break;
            case 'output_metadata':
                if(elemSect === 'A'){
                    outputOneCommandList = outputOneCommandList.filter(command => !command.includes('-metadata'));
                }else if(elemSect === 'B'){
                    outputTwoCommandList = outputTwoCommandList.filter(command => !command.includes('-metadata'));
                }else if(elemSect === 'C'){
                    outputThreeCommandList = outputThreeCommandList.filter(command => !command.includes('-metadata'));
                }
                this.getOMainStorage(elemSect).metadata = [];
                break;
            case 'output_dispos':
                if(elemSect === 'A'){
                    outputOneCommandList = outputOneCommandList.filter(command => !command.includes('-disposition'));
                }else if(elemSect === 'B'){
                    outputTwoCommandList = outputTwoCommandList.filter(command => !command.includes('-disposition'));
                }else if(elemSect === 'C'){
                    outputThreeCommandList = outputThreeCommandList.filter(command => !command.includes('-disposition'));
                }
                this.getOMainStorage(elemSect).disposition = [];
                break;
            case 'output_map':
                if(elemSect === 'A'){
                    outputOneCommandList = outputOneCommandList.filter(command => !command.includes('-map'));
                }else if(elemSect === 'B'){
                    outputTwoCommandList = outputTwoCommandList.filter(command => !command.includes('-map'));
                }else if(elemSect === 'C'){
                    outputThreeCommandList = outputThreeCommandList.filter(command => !command.includes('-map'));
                }
                this.getOAdvStorage(elemSect).map = [];
                break;
        }
        this.joinOutputOptions();
    }
	getInputFile(event){
        const elemVal = event.target.value;
        const elemName = event.target.name;
        let elemId = '';
        switch(elemName){
            case 'ifile_A':
                elemId = 0;
                break;
            case 'ifile_B':
                elemId = 1;
                break;
            case 'ifile_C':
                elemId = 2;
                break;
        }

		inputFiles[elemId] = (elemVal !== '') ? `-i "${elemVal}"` : '';
		///PLACE JOIN HERE
		this.joinInputOptions();
	}
	getOutputFile(event){
		const elemVal = event.target.value;
		const elemName = event.target.name;
		let elemId = '';
		switch(elemName){
            case 'ofile_A':
                elemId = 0;
                break;
            case 'ofile_B':
                elemId = 1;
                break;
            case 'ofile_C':
                elemId = 2;
                break;
        }

		outputFiles[elemId] = (elemVal !== '') ? `"${elemVal}"` : '';
		///PLACE JOIN HERE
		this.joinOutputOptions();
	}
	joinInputOptions(){
        const globalStrOpts = `${globalCommandList.join(' ')}`;

		const inputStats = [`${inputOneCommandList.join(' ')}`,`${inputFiles[0]}`,`${inputTwoCommandList.join(' ')}`,`${inputFiles[1]}`,`${inputThreeCommandList.join(' ')}`,`${inputFiles[2]}`]
		const filteredInputStats = inputStats.filter(command => command !== '');
        if(globalStrOpts !== ''){
            this.setState({
                inputOpts:`${globalStrOpts} ${filteredInputStats.join(' ')} `
            });
        }else{
            this.setState({
                inputOpts:`${filteredInputStats.join(' ')} `
            });
        }

	}
	joinOutputOptions(){
		const outputStats = [`${outputOneCommandList.join(' ')}`,`${outputFiles[0]}`,`${outputTwoCommandList.join(' ')}`,`${outputFiles[1]}`,`${outputThreeCommandList.join(' ')}`,`${outputFiles[2]}`];
		const fiteredOutputStats = outputStats.filter(command => command !== '');
		this.setState({
			outputOpts:`${fiteredOutputStats.join(' ')}`
		});
	}
	getInputList(sector){
        switch(sector){
            case 'A':
                return inputOneCommandList;
            case 'B':
                return inputTwoCommandList;
            case 'C':
                return inputThreeCommandList;
        }
    }
	getOutputList(sector){
        switch(sector){
            case 'A':
                return outputOneCommandList;
            case 'B':
                return outputTwoCommandList;
            case 'C':
                return outputThreeCommandList;
            default:
                return null;
        }
    }
    getIMainStorage(sector){
        switch(sector){
            case 'A':
                return iMainEntry.A;
            case 'B':
                return iMainEntry.B;
            case 'C':
                return iMainEntry.C;
        }
    }
    getOMainStorage(sector){
        switch(sector){
            case 'A':
                return oMainEntry.A;
            case 'B':
                return oMainEntry.B;
            case 'C':
                return oMainEntry.C;
        }
    }
    getOVideoStorage(sector){
        switch(sector){
            case 'A':
                return oVideoEntry.A;
            case 'B':
                return oVideoEntry.B;
            case 'C':
                return oVideoEntry.C;
        }
    }
    getOAdvStorage(sector){
        switch(sector){
            case 'A':
                return oAdvancedEntry.A;
            case 'B':
                return oAdvancedEntry.B;
            case 'C':
                return oAdvancedEntry.C;
        }
    }
    /*Opens/Closes the F.A.B. Sub Menu*/
    subActionBtnClick(event){
        this.setState({isSubMenuOn:!this.state.isSubMenuOn});
    }
    /*When user selects a link from F.A.B Sub Menu, it closes it*/
    subNavClick(event){
        document.querySelector(`#${event.target.name}`).click();
        this.setState({isSubMenuOn:false});
    }
    /*Completely removes the 'Copy to Clipboard' banner at the end of animation*/
    animEnd(event){
        event.target.style.display = 'none';
    }
    /*Binds each function above to their appropriate HTML element*/
    render(){
        return (
            <Header>
                <div key={'body'} className="container">
                    <Titlebar />
                    <Outputcode bind={this.state} animEnd={this.animEnd}/>
                    <IconNav isSubMenuOn={this.state.isSubMenuOn} subActionBtnClick={this.subActionBtnClick} subNavClick={this.subNavClick}/>
                    <GlobalOptions globalTxt={this.globalTextProps} globalCheck={this.globalCheckProps}/>
                    {this.state.sector.map((sect,number)=>{
                        return <InputContainer resetClick={this.resetInputBtn} getFile={this.getInputFile} mainTxt={this.iMainTextProps} idNum={this.state.idNum} sector={sect}/>
                    }
                    )}
                    {this.state.sector.map((sect,number)=>{
                        return <OutputContainer resetClick={this.resetOutputBtn} getFile={this.getOutputFile} mainTxt={this.oMainTextProps} videoTxt={this.oVideoTextProps} advTxt={this.oAdvancedTextProps}
                                         idNum={this.state.idNum} sector={sect}/>
                    }
                    )}
                </div>
                <footer className="py-2 text-center bg-dark text-white">
                    <address style={{textDecoration: 'underline'}}>
                        <a className="text-light font-weight-bold" href={FEEDBACK_EMAIL}>Send Feedback</a>
                    </address>
                    <p>Updated {DATE_MODIFIED}</p>
                </footer>
            </Header>
        );
    }

}
export default Index;
