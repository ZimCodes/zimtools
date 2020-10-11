import Header from '../comps/zcurl/header';//Imports HTML <head> tag
import Titlebar from '../comps/zcurl/titlebar';//Imports the Title banner for the current page
import Url from '../comps/zcurl/url';//Imports the URL input field & glowing label
import GeneralOptions from '../comps/zcurl/option/GeneralOptions';//Imports configurable options for download category
import DownloadOptions from "../comps/zcurl/option/DownloadOptions";
import ProtocolOptions from "../comps/zcurl/option/ProtocolOptions";
import HttpOptions from "../comps/zcurl/option/HttpOptions";
import Outputcode from "../comps/zcurl/outputcode";//Imports the output component
//Styles
import footstyles from "../styles/zcurl/footer.module.css";
//Import Addons Here
import IconNav from "../comps/zcurl/addons/fab_sub_menu/iconnav";//Imports F.A.B Components
import React from 'react';//React dependency
import {ZCURL} from "../comps/date";//Date of last updated content
/*Adds the Default Commands to the command list
* The Commandlist's job is to persistently hold all options the user wants to configure.*/
let commandslist = [
    new Map(),
    new Map(),
    new Map(),
    new Map(),
];
let inputStates =[
    new Map(),
    new Map(),
    new Map(),
    new Map(),
];
let urlsList = [];
/*The Email to use when receiving feedback*/
const FEEDBACK_EMAIL = "mailto:zimcodes@pm.me?subject=cURL%20Feedback";
class Index extends React.Component{
    constructor(props){
        /*What's inside the state:
        * output: resulting code to output to the screen
        * curCommands: holds a temporary ever changing list of options the user wants to configure
        * isSubMenuOn: activates/deactivates the F.A.B. Sub Menu
        * curIndex: current set to modify
        */
        super(props);
        this.state ={
            output:[],
            curCommands:commandslist,
            isSubMenuOn:false,
            curIndex:0
        };
        //Binds the appropriate functions in order to use the 'this.' keyword
        this.generalCheckbox = this.generalCheckbox.bind(this);
        this.generalTextProps = this.generalTextProps.bind(this);
        this.downloadCheckbox = this.downloadCheckbox.bind(this);
        this.downloadTextProps = this.downloadTextProps.bind(this);
        this.protocolCheckbox = this.protocolCheckbox.bind(this);
        this.protocolTextProps = this.protocolTextProps.bind(this);
        this.httpCheckbox = this.httpCheckbox.bind(this);
        this.httpTextProps = this.httpTextProps.bind(this);

        this.getBtnIndex = this.getBtnIndex.bind(this);
        this.getURL = this.getURL.bind(this);
        this.subNavClick = this.subNavClick.bind(this);//F.A.B Addon
        this.subActionBtnClick = this.subActionBtnClick.bind(this);//F.A.B Addon
        this.animEnd = this.animEnd.bind(this);
    }
    /*Gets user input from checkboxes & radio buttons*/
    generalCheckbox(event){
        const elemValue = event.target.checked;
        const elemID = Number(event.target.id);
        const elemName = event.target.name;
        let command = '';
        switch(elemName){
            case 'insecure':
                command = '-k';
                break;
            case 'continue':
                command = '-C -';
                break;
        }
        elemValue ? commandslist[elemID].set(elemName, command) : commandslist[elemID].set(elemName,"");
        elemValue ? inputStates[elemID].set(elemName, elemValue) : inputStates[elemID].set(elemName,"");
        this.setOutput();
    }
    /*Gets user input from text related fields*/
    generalTextProps(event){
        const elemVal = event.target.value;
        const elemID = Number(event.target.id);
        const elemName = event.target.name;
        let command = '';
        switch(elemName){
            case 'user':
                command = `-u ${elemVal}`;
                break;
            case 'rate':
                command = `--limit-rate ${elemVal}`;
                break;
            case 'retry':
                if(elemVal > 0){
                    command = `--retry ${elemVal}`;
                }
                break;
            case 'delay':
                if(elemVal > 0) {
                    command = `--retry-delay ${elemVal}`;
                }
                break;
            case 'upload':
                command = `-T "${elemVal}"`;
                break;
        }
        elemVal ? commandslist[elemID].set(elemName, command):
            commandslist[elemID].set(elemName,"");
        elemVal ? inputStates[elemID].set(elemName, elemVal):
            inputStates[elemID].set(elemName,"");
        this.setOutput();
    }
    downloadCheckbox(event){
        const elemValue = event.target.checked;
        const elemID = Number(event.target.id);
        const elemName = event.target.name;
        let command = '';
        switch(elemName){
            case 'savedir':
                command = '--create-dirs';
                break;
            case 'saveremote':
                command = '-O';
                break;
        }
        elemValue ? commandslist[elemID].set(elemName, command) : commandslist[elemID].set(elemName,"");
        elemValue ? inputStates[elemID].set(elemName, elemValue) : inputStates[elemID].set(elemName,"");
        this.setOutput();
    }
    downloadTextProps(event){
        const elemVal = event.target.value;
        const elemID = Number(event.target.id);
        const elemName = event.target.name;
        let command = '';
        switch(elemName){
            case 'save':
                command = `-o "${elemVal}"`;
                break;
            case 'maxsize':
                command = `--max-filesize ${elemVal}`;
                break;
            case 'range':
                command = `-r "${elemVal}"`;
                break;
        }
        elemVal ? commandslist[elemID].set(elemName, command):
            commandslist[elemID].set(elemName,"");
        elemVal ? inputStates[elemID].set(elemName, elemVal):
            inputStates[elemID].set(elemName,"");
        this.setOutput();
    }
    protocolCheckbox(event){
        const elemValue = event.target.checked;
        const elemID = Number(event.target.id);
        const elemName = event.target.name;
        let command = '';
        switch(elemName){
            case 'ftpdir':
                command = '--ftp-create-dirs';
                break;
            case 'ftplist':
                command = '-l';
                break;
            case 'ssltry':
                command = '--ssl';
                break;
            case 'sslreqd':
                command = '--ssl-reqd';
                break
        }
        elemValue ? commandslist[elemID].set(elemName, command) : commandslist[elemID].set(elemName,"");
        elemValue ? inputStates[elemID].set(elemName, elemValue) : inputStates[elemID].set(elemName,"");
        this.setOutput();
    }
    protocolTextProps(event){
        const elemVal = event.target.value;
        const elemID = Number(event.target.id);
        const elemName = event.target.name;
        let command = '';
        switch(elemName){
            case 'mailrcpt':
                command = `--mail-rcpt ${elemVal}`;
                break;
            case 'mailfrom':
                command = `--mail-from ${elemVal}`;
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
        const elemID = Number(event.target.id);
        const elemName = event.target.name;
        let command = '';
        switch(elemName){
            case 'compress':
                command = '--compressed';
                break;
            case 'saveredir':
                command = '-L';
                break;
            case 'ignorecl':
                command = '--ignore-content-length';
                break;
            case 'resetcookies':
                command = '-j';
                break;
        }
        elemValue ? commandslist[elemID].set(elemName, command) : commandslist[elemID].set(elemName,"");
        elemValue ? inputStates[elemID].set(elemName, elemValue) : inputStates[elemID].set(elemName,"");
        this.setOutput();
    }
    httpTextProps(event){
        const elemVal = event.target.value.trim();
        const elemID = Number(event.target.id);
        const elemName = event.target.name;
        let command = '';
        switch(elemName){
            case 'post':
                command = `-d ${elemVal}`;
                break;
            case 'postbi':
                command = `--data-binary ${elemVal}`;
                break;
            case 'custom':
                if(elemVal !== ''){
                    command = `-X ${elemVal}`;
                }
                break;
            case 'maxredir':
                if(elemVal > 0){
                    command = `--max-redirs ${elemVal}`;
                }
                break;
            case 'addheader':
                command = this.splitHeaders(elemVal);
                break;
            case 'useragent':
                command = `-A ${elemVal}`;
                break;
            case 'cookies':
                command = `-b ${elemVal}`;
                break;
            case 'savecookies':
                command = `-c ${elemVal}`;
                break;
            case 'proxy':
                command = `-x ${elemVal}`;
                break;
            case 'proxyuser':
                command = `-U ${elemVal}`;
                break;
        }
        elemVal ? commandslist[elemID].set(elemName, command):
            commandslist[elemID].set(elemName,"");
        elemVal ? inputStates[elemID].set(elemName, elemVal):
            inputStates[elemID].set(elemName,"");
        this.setOutput();
    }
    splitHeaders(data,split='|'){
        if(data.includes("|")){
            let dataUrl = data.split(split);
            let newData = '';
            for(let i = 0; i < dataUrl.length;i++){
                newData += `-H "${dataUrl[i]}"`;
                if(i < dataUrl.length - 1){
                    newData += ' ';
                }
            }
            return newData;
        }
        return `"${data}"`;

    }
    /*[Start]F.A.B Sub Menu Addon*/
    /*Opens/Closes the F.A.B. Sub Menu*/
    subActionBtnClick(event){
        this.setState({isSubMenuOn:!this.state.isSubMenuOn});
    }
    /*When user selects a link from F.A.B Sub Menu, it closes it*/
    subNavClick(event){
        document.querySelector(`#${event.target.name}`).click();
        this.setState({isSubMenuOn:false});
    }
    /*[END]F.A.B Sub Menu Addon*/
    getBtnIndex(event){
        const elemIndex = Number(event.target.name);
        this.setSavedStates(elemIndex);
        this.setState({curIndex: elemIndex});
    }
    /*Save the states of all inputs that has been modified*/
    setSavedStates(index){
        for(let [key,value] of inputStates[index]){
            let element = document.querySelector(`input[name=${key}]`);
            if(element.getAttribute("type") === "checkbox"){
                element.checked = value;
            }
            else{
                element.value = value;
            }
        }
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
    /*Set the results of the configuration*/
    setOutput(){
        let code = '';
        let opts =this.getEachMapOption();

        for(let i = 0; i < urlsList.length; i++){
            if(opts[i] !== ''){
                code +=`${opts[i]} `;
            }
            code += `${urlsList[i]}`;
            if(urlsList.length > 1 && i < urlsList.length - 1){
                code += ' -: ';
            }
        }
        this.setState({curCommands:commandslist});
        this.setState({output:code});

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
                    <IconNav curIndex={this.state.curIndex} isSubMenuOn={this.state.isSubMenuOn} subActionBtnClick={this.subActionBtnClick} subNavClick={this.subNavClick}/>
                    <Url getURL={this.getURL} />
                    <GeneralOptions btnNumClick={this.getBtnIndex} curIndex={this.state.curIndex} genCheckInput={this.generalCheckbox} genTextInput={this.generalTextProps}/>
                    <DownloadOptions btnNumClick={this.getBtnIndex} curIndex={this.state.curIndex} dlCheckInput={this.downloadCheckbox} dlTextInput={this.downloadTextProps}/>
                    <ProtocolOptions btnNumClick={this.getBtnIndex} curIndex={this.state.curIndex} proCheckInput={this.protocolCheckbox} proTextInput={this.protocolTextProps}/>
                    <HttpOptions btnNumClick={this.getBtnIndex} curIndex={this.state.curIndex} httpCheckInput={this.httpCheckbox} httpTextInput={this.httpTextProps}/>
                </div>
                <footer className={`${footstyles.footer} py-2 text-center text-white`}>
                    <address>
                        <a className={`${footstyles.link} text-light font-weight-bold`} href={FEEDBACK_EMAIL}>Send Feedback</a>
                    </address>
                    <p>Updated {ZCURL}</p>
                </footer>
            </Header>
        );
    }

}
export default Index;
