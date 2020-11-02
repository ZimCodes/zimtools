import Header from '../comps/zeiver/header';//Imports HTML <head> tag
import Titlebar from '../comps/zeiver/titlebar';//Imports the Title banner for the current page
import Url from '../comps/zeiver/url';//Imports the URL input field & glowing label
import DownloadOptions from '../comps/zeiver/option/DownloadOptions';//Imports configurable options for download category
import FileDirOptions from "../comps/zeiver/option/FileDirOptions";
import HttpOptions from "../comps/zeiver/option/HttpOptions";
import Outputcode from "../comps/zeiver/outputcode";//Imports the output component
import {ZEIVER_DATE} from "../comps/date";//Date of last updated content
import {ZEIVER_EMAIL} from "../comps/email";//Email to send feedback
//Styles
import footstyles from "../styles/zeiver/footer.module.css";

import React from 'react';//React dependency
import "bootstrap/dist/css/bootstrap.min.css"; //Bootstrap Dependency
/* The Commandlist's job is to persistently hold all options the user wants to configure.*/
let commandslist = [
    new Map(),
];
/*Holds all options that were modified by the user*/
let inputStates =[
    new Map(),
];
//Holds the URLS
let urlsList = [];
class Index extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            output:[],
            urls:"",
            curCommands:commandslist,
            isSubMenuOn:false,
            curIndex:0
        };
        //Binds the appropriate functions in order to use the 'this.' keyword
        this.downloadCheckbox = this.downloadCheckbox.bind(this);
        this.downloadTextProps = this.downloadTextProps.bind(this);
        this.fileDirCheckbox = this.fileDirCheckbox.bind(this);
        this.fileDirTextProps = this.fileDirTextProps.bind(this);
        this.httpCheckbox = this.httpCheckbox.bind(this);
        this.httpTextProps = this.httpTextProps.bind(this);

        this.getURL = this.getURL.bind(this);
        this.animEnd = this.animEnd.bind(this);
    }
    /*Gets user input from checkboxes & radio buttons, then sets it to the total results.*/
    downloadCheckbox(event){
        const elemValue = event.target.checked;
        const elemID = Number(event.target.id);//used for multiple url configs
        const elemName = event.target.name;
        let command = '';
        switch(elemName){
            case 'links':
                command = '--links-only';
                break;
        }
        elemValue ? commandslist[elemID].set(elemName, command) : commandslist[elemID].set(elemName,"");
        elemValue ? inputStates[elemID].set(elemName, elemValue) : inputStates[elemID].set(elemName,"");
        this.setOutput();
    }
    /*Gets user input from text related fields, then adds them to the total results*/
    downloadTextProps(event){
        const elemVal = event.target.value;
        const elemID = Number(event.target.id);//used for multiple url configs
        const elemName = event.target.name;
        let command = '';
        switch(elemName){
            case 'depth':
                command = `-d ${elemVal}`;
                break;
            case 'accept':
                command = `-A "${elemVal}"`;
                break;
            case 'reject':
                command = `-R "${elemVal}"`;
                break;
        }
        elemVal ? commandslist[elemID].set(elemName, command):
            commandslist[elemID].set(elemName,"");
        elemVal ? inputStates[elemID].set(elemName, elemVal):
            inputStates[elemID].set(elemName,"");
        this.setOutput();
    }
    fileDirCheckbox(event){
        const elemValue = event.target.checked;
        const elemID = Number(event.target.id);//used for multiple url configs
        const elemName = event.target.name;
        let command = '';
        switch(elemName){
            case 'no-dirs':
                command = '--no-dirs';
                break;
        }
        elemValue ? commandslist[elemID].set(elemName, command) : commandslist[elemID].set(elemName,"");
        elemValue ? inputStates[elemID].set(elemName, elemValue) : inputStates[elemID].set(elemName,"");
        this.setOutput();
    }
    fileDirTextProps(event){
        const elemVal = event.target.value;
        const elemID = Number(event.target.id);//used for multiple url configs
        const elemName = event.target.name;
        let command = '';
        switch(elemName){
            case 'input':
                command = `-i "${elemVal}"`;
                break;
            case 'save':
                command = `-o "${elemVal}"`;
                break;
            case 'cut':
                command = `-c ${elemVal}`;
                break;
        }
        elemVal ? commandslist[elemID].set(elemName, command):
            commandslist[elemID].set(elemName,"");
        elemVal ? inputStates[elemID].set(elemName, elemVal):
            inputStates[elemID].set(elemName,"");
        this.setOutput();
    }
    httpCheckbox(event){
        const elemValue = event.target.checked;
        const elemID = Number(event.target.id);//used for multiple url configs
        const elemName = event.target.name;
        let command = '';
        switch(elemName){
            case 'random-delay':
                command = '--random-wait';
                break;
        }
        elemValue ? commandslist[elemID].set(elemName, command) : commandslist[elemID].set(elemName,"");
        elemValue ? inputStates[elemID].set(elemName, elemValue) : inputStates[elemID].set(elemName,"");
        this.setOutput();
    }
    httpTextProps(event){
        const elemVal = event.target.value;
        const elemID = Number(event.target.id);//used for multiple url configs
        const elemName = event.target.name;
        let command = '';
        switch(elemName){
            case 'headers':
                command = `-H "${elemVal}"`;
                break;
            case 'agent':
                command = `-U "${elemVal}"`;
                break;
            case 'tries':
                command = `-t ${elemVal}`;
                break;
            case 'wait':
                command = `-w ${elemVal}`;
                break;
            case 'retry-delay':
                command = `--retry-wait ${elemVal}`;
                break;
            case 'timeout':
                command = `-T ${elemVal}`;
                break
            case 'redirect':
                command = `-r ${elemVal}`;
                break
            case 'proxy':
                command = `--proxy "${elemVal}"`;
                break
            case 'proxy-auth':
                command = `--proxy-auth "${elemVal}"`;
                break
        }
        elemVal ? commandslist[elemID].set(elemName, command):
            commandslist[elemID].set(elemName,"");
        elemVal ? inputStates[elemID].set(elemName, elemVal):
            inputStates[elemID].set(elemName,"");
        this.setOutput();
    }
    /*Retrieve the current URL index to configure*/
    getBtnIndex(event){
        const elemIndex = Number(event.target.name);
        this.setState({curIndex: elemIndex});
    }
    /*Gets the URL from the user's input*/
    getURL(event){
        const elemVal = event.target.value.trim();
        let urlArr;
        if(elemVal.search(/ /g) !== -1){
            urlArr = elemVal.split(" ");
        }else{
            urlArr = [
                elemVal
            ];
        }
        urlsList = urlArr;
        this.setOutput();
    }
    /*Set the results of the configuration to output to screen*/
    setOutput(){
        let opts = this.getEachMapOption();

        this.setState({curCommands:commandslist});
        this.setState({output:opts});
        this.setState({urls:urlsList.join(" ")})

    }
    /*Transforms all option Maps to strings*/
    getEachMapOption(){
        let opts = [];
        for(let i = 0;i < commandslist.length;i++){
            opts.push(this.getMapOptions(commandslist[i]));
        }
        return opts;
    }
    /*Transforms an option Map to a string*/
    getMapOptions(map){
        let opts = [];
        for(let value of map.values()){
            if(value !== ''){
                opts.push(value);
            }
        }
        return opts.join(" ");
    }
    /*Completely removes the 'Copy to Clipboard' banner at the end of animation*/
    animEnd(event){
        event.target.style.display = 'none';
    }
    /*Binds each function above to their appropriate HTML element*/
    render(){
        return (
            <Header>
                <div className="container">
                    <Titlebar />
                    <Outputcode bind={this.state} animEnd={this.animEnd}/>
                    <Url getURL={this.getURL} />
                    <DownloadOptions curIndex={this.state.curIndex} dlCheckInput={this.downloadCheckbox} dlTextInput={this.downloadTextProps}/>
                    <FileDirOptions curIndex={this.state.curIndex} filedirCheckInput={this.fileDirCheckbox} filedirTextInput={this.fileDirTextProps}/>
                    <HttpOptions curIndex={this.state.curIndex} httpCheckInput={this.httpCheckbox} httpTextInput={this.httpTextProps}/>
                </div>
                <footer className={`${footstyles.footer} py-2 text-center`}>
                    <address>
                        <a className={`${footstyles.link} font-weight-bold`} href={ZEIVER_EMAIL}>Send Feedback</a>
                    </address>
                    <p>Updated {ZEIVER_DATE}</p>
                </footer>
            </Header>
        );
    }

}
export default Index;
