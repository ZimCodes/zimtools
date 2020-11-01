import Header from '../comps/zget/header';
import Topbar from '../comps/zget/topbar';
import Url from '../comps/zget/url';
import DownloadOptions from '../comps/zget/option/DownloadOptions';
import DirectoryOptions from "../comps/zget/option/DirectoryOptions";
import HttpOptions from "../comps/zget/option/HttpOptions";
import FtpOptions from "../comps/zget/option/FtpOptions";
import RecursiveOptions from "../comps/zget/option/RecursiveOptions";
import AcceptRejectOptions from "../comps/zget/option/AcceptRejectOptions";
import WgetCode from "../comps/zget/wgetcode";
import FileOptions from "../comps/zget/option/FileOptions";
import {dlprev,dirprev,recursive,accRej,file,http} from "../comps/zget/CommStorage";
import {ZGET_DATE} from "../comps/date";
import {ZGET_EMAIL} from "../comps/email";

import React from 'react';
import styles from '../styles/zget/index.module.css';
import "bootstrap/dist/css/bootstrap.min.css";
const defaultCommands = ['-e robots=off','--no-check-certificate','-nc','-nH','--no-cache','-R ".DS_Store,Thumbs.db,thumbcache.db,desktop.ini,_macosx,index.html*"'];
let commandslist = defaultCommands;

class Index extends React.Component{

	constructor(props){
		super(props);
		this.state ={
			url:'',
			options:defaultCommands,
			wgetcodes:"",
			accRegexMode:false,
			rejRegexMode:false,
		};
		this.downloadCheckbox = this.downloadCheckbox.bind(this);
		this.downloadTextProps = this.downloadTextProps.bind(this);
		this.directoryCheckbox = this.directoryCheckbox.bind(this);
		this.directoryTextProps = this.directoryTextProps.bind(this);
		this.ftpCheckbox = this.ftpCheckbox.bind(this);
		this.httpCheckbox = this.httpCheckbox.bind(this);
		this.httpTextProps = this.httpTextProps.bind(this);
		this.recursiveCheckbox = this.recursiveCheckbox.bind(this);
		this.recursiveTextProps = this.recursiveTextProps.bind(this);
		this.acceptRejectTextProps = this.acceptRejectTextProps.bind(this);
		this.acceptRejectCheckbox = this.acceptRejectCheckbox.bind(this);
		this.fileCheckbox = this.fileCheckbox.bind(this);
		this.fileTextProps = this.fileTextProps.bind(this);

		this.getURL = this.getURL.bind(this);
		this.getWgetrc = this.getWgetrc.bind(this);
		this.animEnd = this.animEnd.bind(this);
	}

	downloadCheckbox(event){
		const elemName = event.target.name;
		const elemValue = event.target.checked;
		let command = '';
		switch(elemName){
			case 'clobber':
				command = '-nc';
				break;
			case 'unlink':
				command = '--unlink';
				break;
			case 'resume':
				command = '-c';
				break;
			case 'force':
				command = '--show-progress';
				break;
			case 'time':
				command = '--timestamping';
				break;
			case 'random':
				command = '--random-wait';
				break;
			case 'spider':
				command = '--spider';
				break;
		}
		elemValue ? commandslist.push(command) :commandslist.splice(commandslist.indexOf(command),1);
		this.setState({options:commandslist});
	}
	downloadTextProps(event){
		const elemName = event.target.name;
		const elemVal = event.target.value.trim();
		let command = '';
		switch(elemName){
			case 'tries':
				command = `-t ${elemVal}`;
				if(elemVal.search(/[0-9]+/) !== -1){
					if(commandslist.includes(dlprev.tries)){
						commandslist.splice(commandslist.indexOf(dlprev.tries),1);
					}
					dlprev.tries = command ;
					commandslist.push(command);
				}
				if(elemVal === ''){
					commandslist.splice(commandslist.indexOf(dlprev.tries),1);
					dlprev.tries = ``;
				}
				break;
			case 'progress':
				command = `--progress=dot`;
				if(commandslist.includes(command)){
					commandslist.splice(commandslist.indexOf(command),1);
				}
				if(elemVal === "dot"){
					commandslist.push(command);
				}
				break;
			case 'limit':
				command = `--limit-rate=${elemVal}`;
				if( elemVal.search(/[0-9]+[km]?/i) !== -1 &&
					elemVal.search(/[a-jln-z ]/i) === -1 &&
					elemVal.search(/[km]{2,}/i) === -1 &&
					elemVal.search(/[km][0-9]+/i) === -1){
					if(commandslist.includes(dlprev.limit)){
						commandslist.splice(commandslist.indexOf(dlprev.limit),1);
					}
					dlprev.limit = command;
					commandslist.push(command);
				}
				if(elemVal === ''){
					commandslist.splice(commandslist.indexOf(dlprev.limit),1);
					dlprev.limit = ``;
				}
				break;
			case 'wait':
				command = `-w ${elemVal}`;
				if(elemVal.search(/[a-ce-gi-ln-z ]/i) === -1 &&
					elemVal.search(/[mdh]{2,}([0-9])*/i) === -1 &&
					elemVal.search(/[0-9][mdh]?/i) !== -1 &&
					elemVal.search(/[mdh][0-9]/i) === -1){
					if(commandslist.includes(dlprev.wait)){
						commandslist.splice(commandslist.indexOf(dlprev.wait),1);
					}
					dlprev.wait = command;
					commandslist.push(command);
				}
				if(elemVal === ''){
					commandslist.splice(commandslist.indexOf(dlprev.wait),1);
					dlprev.wait = '';
				}
				break;
			case'retry':
				command = `--waitretry=${elemVal}`;
				if(commandslist.includes(dlprev.retry)){
					commandslist.splice(commandslist.indexOf(dlprev.retry),1);
				}
				dlprev.retry = command;
				commandslist.push(command);
				if(elemVal === ''){
					commandslist.splice(commandslist.indexOf(dlprev.retry),1);
					dlprev.retry = ``;
				}
				break;
			case 'quota':
				command = `-Q ${elemVal}`;
				if(elemVal.search(/[a-jln-z ]/i) === -1 &&
					elemVal.search(/[km]{2,}([0-9])*/i) === -1 &&
					elemVal.search(/[0-9][km]?/i) !== -1 &&
					elemVal.search(/[km][0-9]/i) === -1){
					if(commandslist.includes(dlprev.quota)){
						commandslist.splice(commandslist.indexOf(dlprev.quota),1)
					}
					dlprev.quota = command;
					commandslist.push(command);
				}
				if(elemVal === ''){
					commandslist.splice(commandslist.indexOf(dlprev.quota),1);
					dlprev.quota = ``;
				}
				break;
            case 'user':
                command = `--user="${elemVal}"`;
                if(commandslist.includes(dlprev.user)){
                    commandslist.splice(commandslist.indexOf(dlprev.user),1);
                }
                dlprev.user = command;
                commandslist.push(command);
                if(elemVal === ''){
                    commandslist.splice(commandslist.indexOf(dlprev.user),1);
                    dlprev.user = ``;
                }
                break;
            case 'pass':
                command = `--password="${elemVal}"`;
                if(commandslist.includes(dlprev.pass)){
                    commandslist.splice(commandslist.indexOf(dlprev.pass),1);
                }
                dlprev.pass = command;
                commandslist.push(command);
                if(elemVal === ''){
                    commandslist.splice(commandslist.indexOf(dlprev.pass),1);
                    dlprev.pass = ``;
                }
                break;
		}
        this.setState({options:commandslist});
	}
	directoryCheckbox(event){
		const elemVal = event.target.checked;
		let command = '';
		switch (event.target.name) {
			case 'nodir':
				command = '-nd';
				break;
			case 'forcedir':
				command = '-x';
				break;
			case 'nohostdir':
				command = '-nH';
				break;
		}
		elemVal ? commandslist.push(command) :commandslist.splice(commandslist.indexOf(command),1);
        this.setState({options:commandslist});
	}
	directoryTextProps(event){
		const elemVal = event.target.value;
		let command = '';
		switch (event.target.name) {
			case 'saveloc':
				command = `-P "${elemVal}"`;
				if(commandslist.includes(dirprev.save)){
					commandslist.splice(commandslist.indexOf(dirprev.save),1);
				}
				dirprev.save = command;
				commandslist.push(command);
				if(elemVal === ''){
					commandslist.splice(commandslist.indexOf(dirprev.save),1);
					dirprev.save =``;
				}
				break;
			case 'cut':
				command = `--cut-dirs=${elemVal}`;
				if(commandslist.includes(dirprev.cut)){
					commandslist.splice(commandslist.indexOf(dirprev.cut),1);
				}
				dirprev.cut = command;
				commandslist.push(command);
				if(elemVal === ''){
					commandslist.splice(commandslist.indexOf(dirprev.cut),1);
					dirprev.cut =``;
				}
				break;
		}
        this.setState({options:commandslist});
	}
	ftpCheckbox(event){
		const elemVal = event.target.checked;
		let command = '';
		switch (event.target.name) {
			case 'listings':
				command = `--no-remove-listing`;
				break;
			case 'fallback':
				command = '--ftps-fallback-to-ftp';
				break;
		}
		elemVal ? commandslist.push(command) :commandslist.splice(commandslist.indexOf(command),1);
        this.setState({options:commandslist});
	}
	httpCheckbox(event){
		const elemVal = event.target.checked;
		let command = '';
		switch(event.target.name){
			case 'cache':
				command = '--no-cache';
				break;
			case 'nocertificate':
				command = '--no-check-certificate';
				break;
			case 'compression':
				command = '--compression=gzip';
				break;
			case 'httpsonly':
				command = '--https-only';
				break;
			case 'extension':
				command = '-E';
				break;
			case 'ignore':
				command = '--ignore-length';
				break;
		}
		elemVal ? commandslist.push(command) :commandslist.splice(commandslist.indexOf(command),1);
        this.setState({options:commandslist});
	}
	httpTextProps(event){
		const elemVal = event.target.value;
		let command = '';
		switch(event.target.name){
			case 'useragent':
				command = elemVal.toLowerCase() === 'null' || elemVal.toLowerCase() === 'none' ? '-U ""' : `-U "${elemVal}"`;
				if(commandslist.includes(http.agent)){
					commandslist.splice(commandslist.indexOf(http.agent),1);
				}
				http.agent = command;
				commandslist.push(command);
				if(elemVal === ''){
					commandslist.splice(commandslist.indexOf(http.agent),1);
					http.agent =`` ;
				}
				break;
			case 'redirect':
				command = `--max-redirect=${elemVal}`;
				if(commandslist.includes(http.redirect)){
					commandslist.splice(commandslist.indexOf(http.redirect),1);
				}
				http.redirect = command;
				commandslist.push(command);
				if(elemVal === ''){
					commandslist.splice(commandslist.indexOf(http.redirect),1);
					http.redirect =``;
				}
				break;
		}
		this.setState({options:commandslist});
	}
	recursiveCheckbox(event){
		const elemVal = event.target.checked;
		let command = '';
		switch (event.target.name) {
			case 'recursion':
				command = '-r';
				break;
			case 'links':
				command = '-k';
				break;
			case 'mirror':
				command = '-m';
				break;
			case 'page':
				command = '-p';
				break;
		}
		elemVal ? commandslist.push(command) :commandslist.splice(commandslist.indexOf(command),1);
        this.setState({options:commandslist});
	}
	recursiveTextProps(event){
		const elemVal = event.target.value;
		let command = `-l ${elemVal}`;
		switch(event.target.name){
			case 'depth':
				if(commandslist.includes(recursive.depth)){
					commandslist.splice(commandslist.indexOf(recursive.depth),1);
				}
				recursive.depth = command;
				commandslist.push(command);
				if(elemVal === ''){
					commandslist.splice(commandslist.indexOf(recursive.depth),1);
					recursive.depth =`` ;
				}
				break;
		}
        this.setState({options:commandslist});
	}
	acceptRejectTextProps(event){
		const elemVal = event.target.value;
		let command = '';
		switch (event.target.name) {
			case 'accept':
				command = `-A \"${elemVal}\"`;
				if(commandslist.includes(accRej.accept)){
					commandslist.splice(commandslist.indexOf(accRej.accept),1);
				}
				accRej.accept = command;
				commandslist.push(command);
				if(elemVal === ''){
					commandslist.splice(commandslist.indexOf(accRej.accept),1);
					accRej.accept = ``;
				}
				//Find if there are any wildcard usages in user input for Reject
				const isAccRegex = accRej.accept.includes("*")
					||accRej.accept.includes("?")
					||accRej.accept.includes("[")
					||accRej.accept.includes("]");
				this.setState({accRegexMode:isAccRegex});
				break;
			case 'reject':
				command = `-R \"${elemVal}\"`;
				if(commandslist.includes(accRej.reject)){
					commandslist.splice(commandslist.indexOf(accRej.reject),1);
				}
				accRej.reject = command;
				commandslist.push(command);
				if(elemVal === ''){
					commandslist.splice(commandslist.indexOf(accRej.reject),1);
					accRej.reject = ``;
				}
				//Find if there are any wildcard usages in user input for Reject
				const isRejRegex = accRej.reject.includes("*")
					||accRej.reject.includes("?")
					||accRej.reject.includes("[")
					||accRej.reject.includes("]");
				this.setState({rejRegexMode:isRejRegex});
				break;
            case 'rejectdefault':
                if(commandslist.includes(accRej.defaultReject)){
                    commandslist.splice(commandslist.indexOf(accRej.defaultReject),1);
                }
                if(elemVal === "all"){
                    command = '-R ".DS_Store,Thumbs.db,thumbcache.db,desktop.ini,_macosx,index.html*"';
                }else if(elemVal === "noindex"){
                    command = '-R ".DS_Store,Thumbs.db,thumbcache.db,desktop.ini,_macosx"';
                }
                if(command !== ''){
					accRej.defaultReject = command;
					commandslist.push(command);
				}
                break;
		}
        this.setState({options:commandslist});
	}
	acceptRejectCheckbox(event){
		const elemVal= event.target.checked;
		let command = '';
		switch (event.target.name) {
			case 'parent':
				command = '--no-parent';
				break;
		}
		elemVal ? commandslist.push(command) :commandslist.splice(commandslist.indexOf(command),1);
        this.setState({options:commandslist});
	}
	fileCheckbox(event){
		let elemVal = event.target.checked;
		let command = '';
		switch(event.target.name){
			case 'debug':
				command = '-d';
				break;
			case'quiet':
				command = '-q';
				break;
			case 'bandwidth':
				command = '--report-speed=bits';
				break;
		}
		elemVal ? commandslist.push(command) :commandslist.splice(commandslist.indexOf(command),1);
		this.setState({options:commandslist});
	}
	fileTextProps(event){
		let elemVal = event.target.value;
		let command = '';
		switch (event.target.name) {
			case 'appendlogs':
			    command = `-a "${elemVal}"`;
			    if(elemVal.search(/[^:]+\.[a-z]/i) !== -1 &&
					elemVal.search(/\.[a-z]+[^a-z]/i) === -1 &&
					elemVal.search(/:[^:]*\./i) === -1 &&
					elemVal.search(/[^:]*:\./i) === -1 &&
					elemVal.search(/\.[a-z]{5,}/i) === -1){
					if(commandslist.includes(file.append)){
						commandslist.splice(commandslist.indexOf(file.append,1));
					}
					file.append = command;
					commandslist.push(command);
				}
				if(elemVal === ''){
					commandslist.splice(commandslist.indexOf(file.append,1));
					file.append = '';
				}
				break;
			case'inputfile':
			    command = `-i "${elemVal}"`;
			    if(elemVal.search(/[^:]+\.[a-z]/i) !== -1 &&
					elemVal.search(/\.[a-z]+[^a-z]/i) === -1 &&
					elemVal.search(/:[^:]*\./i) === -1 &&
					elemVal.search(/[^:]*:\./i) === -1 &&
					elemVal.search(/\.[a-z]{5,}/i) === -1){
					if(commandslist.includes(file.input)){
						commandslist.splice(commandslist.indexOf(file.input,1));
					}
					file.input = command;
					commandslist.push(command);
				}
                if(elemVal === ''){
                    commandslist.splice(commandslist.indexOf(file.input,1));
                    file.input = '';
                }
				break;
			case 'config':
			    command = `--config="${elemVal}"`;
			    if(elemVal.search(/[^:]+\.[a-z]/i) !== -1 &&
					elemVal.search(/\.[a-z]+[^a-z]/i) === -1 &&
					elemVal.search(/:[^:]*\./i) === -1 &&
					elemVal.search(/[^:]*:\./i) === -1 &&
					elemVal.search(/\.[a-z]{5,}/i) === -1) {
					if(commandslist.includes(file.config)){
						commandslist.splice(commandslist.indexOf(file.config,1));
					}
					file.config = command;
					commandslist.push(command);
				}
                if(elemVal === ''){
                    commandslist.splice(commandslist.indexOf(file.config,1));
                    file.config = '';
                }
				break;
		}
		this.setState({options:commandslist});
	}

	getURL(event){
		const elemVal = event.target.value.trim();
		let urlArr = "";
		if(elemVal.search(/ /g) !== -1){
			urlArr = elemVal.split(" ");
		}
		if(urlArr.length > 1){
			let cmdOutput = '';
			urlArr.forEach((item,index)=>{
				cmdOutput += index === 0 ? `"${item}"`: ` "${item}"`;
			});
			this.setState({url: cmdOutput});
		}
		else{
			this.setState({url:`"${elemVal}"`});
		}

	}
	getWgetrc(event){
		let elemVal = event.target.checked;
		const command = '-e robots=off';
		elemVal ? commandslist.push(command) : commandslist.splice(commandslist.indexOf(command),1);
		this.setState({options:commandslist});
	}
	animEnd(event){
		event.target.style.display = 'none';
	}
	render(){
		return (
			<Header>
                <div className="container">
                    <Topbar />
                    <WgetCode bind={this.state} animEnd={this.animEnd} />
                    <Url getURL={this.getURL} getWgetrc={this.getWgetrc}/>
                    <DownloadOptions dlCheckInput={this.downloadCheckbox} dlTextInput={this.downloadTextProps}/>
                    <DirectoryOptions dirCheckInput={this.directoryCheckbox} dirTextInput={this.directoryTextProps} />
                    <FileOptions fileTextInput={this.fileTextProps} fileCheckInput={this.fileCheckbox} />
                    <HttpOptions httpCheckInput={this.httpCheckbox} httpTextInput={this.httpTextProps} />
                    <FtpOptions ftpCheckInput={this.ftpCheckbox} />
                    <RecursiveOptions recurseCheckInput={this.recursiveCheckbox} recurseTextInput={this.recursiveTextProps}/>
                    <AcceptRejectOptions accRejCheckInput={this.acceptRejectCheckbox} accRejTextInput={this.acceptRejectTextProps} accRegex={this.state.accRegexMode} rejRegex={this.state.rejRegexMode} />
                </div>
				<footer className="py-2 text-center bg-dark text-white">
					<address className={styles.address}>
						<a className="text-light font-weight-bold" href={ZGET_EMAIL}>Send Feedback</a>
					</address>
						<p>Updated {ZGET_DATE}</p>
				</footer>
			</Header>
		);
	}

}
export default Index;
