import Header from '../comps/zphuber/header';//Imports HTML <head> tag
import Titlebar from '../comps/zphuber/titlebar';//Imports the Title banner for the current page
import Term from '../comps/zphuber/term';//Imports the URL input field & glowing label
import MainOptions from '../comps/zphuber/option/MainOptions';//Imports configurable options for download category
import FilterOptions from "../comps/zphuber/option/FilterOptions";
import Filterrow from "../comps/zphuber/table/filterrow";
import Outputcode from "../comps/zphuber/outputcode";//Imports the output component
import {mainCommandEntry,filterCommandEntry} from"../comps/zphuber/CommStorage";//Imports text command storage Component

import React from 'react';//React dependency
/*The Default commands to start with*/
const defaultCommands = [];

/*Adds the Default Commands to the command list
* The Commandlist's job is to persistently hold all options the user wants to configure.*/
let commandslist = defaultCommands;
/*The last date this was modified*/
const DATE_MODIFIED = "June 28, 2020";
/*The Email to use when receiving feedback*/
const FEEDBACK_EMAIL = "mailto:zimcodes@pm.me?subject=ZPhuber%20Feedback";
class Index extends React.Component{
    constructor(props){
        /*What's inside the state:
        * url: holds the url from user input
        * options: holds a temporary ever changing list of options the user wants to configure
        * isSubMenuOn: activates/deactivates the F.A.B. Sub Menu
        */
        super(props);
        this.state ={
            term:'',
            options:defaultCommands,
        };
        //Binds the appropriate functions in order to use the 'this.' keyword
        this.mainTextProps = this.mainTextProps.bind(this);
        this.filterTextProps = this.filterTextProps.bind(this);
        this.filterCheckbox = this.filterCheckbox.bind(this);
        this.getFilter = this.getFilter.bind(this);

        this.getTerm = this.getTerm.bind(this);
        this.animEnd = this.animEnd.bind(this);
    }
    mainTextProps(event){
        const elemVal = event.target.value;
        let command = '';
        switch(event.target.name){
            case 'pages':
                command = `-p ${elemVal}`;
                if(commandslist.includes(mainCommandEntry.pages)){
                    commandslist.splice(commandslist.indexOf(mainCommandEntry.pages),1);
                }
                mainCommandEntry.pages = command ;
                commandslist.push(command);
                if(elemVal === ''){
                    commandslist.splice(commandslist.indexOf(mainCommandEntry.pages),1);
                    mainCommandEntry.pages = ``;
                }
                break;
            case 'file':
                command = `-l "${elemVal}"`;
                if(commandslist.includes(mainCommandEntry.file)){
                    commandslist.splice(commandslist.indexOf(mainCommandEntry.file),1);
                }
                mainCommandEntry.file = command ;
                commandslist.push(command);
                if(elemVal === ''){
                    commandslist.splice(commandslist.indexOf(mainCommandEntry.file),1);
                    mainCommandEntry.file = ``;
                }
                break;
            case 'account':
                command = `-x "${elemVal}"`;
                if(commandslist.includes(mainCommandEntry.account)){
                    commandslist.splice(commandslist.indexOf(mainCommandEntry.account),1);
                }
                mainCommandEntry.account = command ;
                commandslist.push(command);
                if(elemVal === ''){
                    commandslist.splice(commandslist.indexOf(mainCommandEntry.account),1);
                    mainCommandEntry.account = ``;
                }
                break;
        }
        this.joinOptions();
    }
    filterCheckbox(event){
        const elemValue = event.target.checked;
        let command = '';
        switch(event.target.name){
            case 'premium':
                command = '--premium-only';
                break;
        }
        elemValue ? commandslist.push(command) :commandslist.splice(commandslist.indexOf(command),1);
        this.joinOptions();
    }
    filterTextProps(event){
        const elemVal = event.target.value;
        let command = '';
        switch(event.target.name){
            case 'production':
                command = `--prod ${elemVal}`;
                if(commandslist.includes(filterCommandEntry.production)){
                    commandslist.splice(commandslist.indexOf(filterCommandEntry.production),1);
                }
                filterCommandEntry.production = command ;
                commandslist.push(command);
                if(elemVal === ''){
                    commandslist.splice(commandslist.indexOf(filterCommandEntry.production),1);
                    filterCommandEntry.production = ``;
                }
                break;
            case 'min':
                command = `--min ${elemVal}`;
                if(commandslist.includes(filterCommandEntry.min)){
                    commandslist.splice(commandslist.indexOf(filterCommandEntry.min),1);
                }
                filterCommandEntry.min = command ;
                commandslist.push(command);
                if(elemVal === ''){
                    commandslist.splice(commandslist.indexOf(filterCommandEntry.min),1);
                    filterCommandEntry.min = ``;
                }
                break;
            case 'max':
                command = `--max ${elemVal}`;
                if(commandslist.includes(filterCommandEntry.max)){
                    commandslist.splice(commandslist.indexOf(filterCommandEntry.max),1);
                }
                filterCommandEntry.max = command ;
                commandslist.push(command);
                if(elemVal === ''){
                    commandslist.splice(commandslist.indexOf(filterCommandEntry.max),1);
                    filterCommandEntry.max = ``;
                }
                break;
            case 'include':
                command = `-i ${elemVal}`;
                if(commandslist.includes(filterCommandEntry.include)){
                    commandslist.splice(commandslist.indexOf(filterCommandEntry.include),1);
                }
                filterCommandEntry.include = command ;
                commandslist.push(command);
                if(elemVal === ''){
                    commandslist.splice(commandslist.indexOf(filterCommandEntry.include),1);
                    filterCommandEntry.include = ``;
                }
                break;
        }
        this.joinOptions();
    }
    getFilter(event){
        const elemText = event.target.textContent;
        switch (event.target.className) {
            case 'table-danger':
                if(filterCommandEntry.exclude.includes(elemText)){
                    filterCommandEntry.exclude.splice(filterCommandEntry.exclude.indexOf(elemText),1);
                }
                event.target.className = '';
                break;
            default:
                filterCommandEntry.exclude.push(elemText);
                event.target.className = 'table-danger';
                break;
        }
        this.joinOptions();
    }

    joinOptions(){
        let fullOption = '';
        if(filterCommandEntry.exclude.length > 0 && filterCommandEntry.exclude.length < 11){
            fullOption = `${commandslist.join(' ')} -e "${filterCommandEntry.exclude.join(',')}"`;
        }else{
            fullOption = commandslist.join(' ');
        }
        this.setState({options:fullOption});
    }

    /*Gets the Search Term from the user's input*/
    getTerm(event){
        const elemVal = event.target.value.trim();
        this.setState({term:`"${elemVal}"`});
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
                    <Term getTerm={this.getTerm} />
                    <MainOptions mainTextProps={this.mainTextProps}/>
                    <FilterOptions filterTextProps={this.filterTextProps} filterCheckInput={this.filterCheckbox}/>
                    <Filterrow getFilter={this.getFilter}/>
                </div>
                <footer className="py-2 text-center bg-dark text-white">
                    <address style={{textDecoration:'underline'}}>
                        <a className="text-light font-weight-bold" href={FEEDBACK_EMAIL}>Send Feedback</a>
                    </address>
                    <p>Updated {DATE_MODIFIED}</p>
                </footer>
            </Header>
        );
    }

}
export default Index;
