import Header from '../comps/ztube-dl/header';
import TopBar from "../comps/ztube-dl/TopBar";
import YouTubeCodes from '../comps/ztube-dl/youtubeCodes';
import Url from '../comps/ztube-dl/url';
import IconNav from '../comps/ztube-dl/nav/iconnav';

import React from 'react';
import MainConfig from "../comps/ztube-dl/option/MainConfig";
import YouTubeOnly from "../comps/ztube-dl/option/YouTubeOnly";
import VideoSelection from "../comps/ztube-dl/option/VideoSelection";
import Download from "../comps/ztube-dl/option/Download";
import File from "../comps/ztube-dl/option/File";
import Thumbnail from "../comps/ztube-dl/option/Thumbnail";
import WorkAround from "../comps/ztube-dl/option/WorkAround";
import VideoFormat from "../comps/ztube-dl/option/VideoFormat";
import SubAuth from "../comps/ztube-dl/option/SubAuth";
import PostProcess from "../comps/ztube-dl/option/PostProcess";
import {preConfig,videoSelect,download,file,work,videoFormat,subAuth,post} from "../comps/ztube-dl/CommStorage";
import {ZTUBE_DL} from "../comps/date";

import styles from '../styles/ztube-dl/index.module.css';
import "bootstrap/dist/css/bootstrap.min.css";
let commandslist = [];
const DATE_MODIFIED = ZTUBE_DL;
const FEEDBACK_EMAIL = "mailto:zimcodes@pm.me?subject=Ztube-dl%20Feedback";

class Index extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            options:commandslist,
            url:'',
            isSubMenuOn:false
        };
        this.preConfigCheckInput = this.preConfigCheckInput.bind(this);
        this.preConfigTextInput = this.preConfigTextInput.bind(this);
        this.youtubeCheckInput = this.youtubeCheckInput.bind(this);
        this.videoSelectCheckInput = this.videoSelectCheckInput.bind(this);
        this.videoSelectTextInput = this.videoSelectTextInput.bind(this);
        this.downloadCheckInput = this.downloadCheckInput.bind(this);
        this.downloadTextInput = this.downloadTextInput.bind(this);
        this.fileTextInput = this.fileTextInput.bind(this);
        this.fileCheckInput = this.fileCheckInput.bind(this);
        this.thumbCheckInput = this.thumbCheckInput.bind(this);
        this.workTextInput = this.workTextInput.bind(this);
        this.workCheckInput = this.workCheckInput.bind(this);
        this.videoFormatTextInput = this.videoFormatTextInput.bind(this);
        this.videoFormatCheckInput = this.videoFormatCheckInput.bind(this);
        this.subAuthTextInput = this.subAuthTextInput.bind(this);
        this.subAuthCheckInput = this.subAuthCheckInput.bind(this);
        this.postTextInput = this.postTextInput.bind(this);
        this.postCheckInput = this.postCheckInput.bind(this);

        this.getUrl = this.getUrl.bind(this);
        this.subNavClick = this.subNavClick.bind(this);
        this.subActionBtnClick = this.subActionBtnClick.bind(this);
        this.animEnd = this.animEnd.bind(this);
        this.addOnBtns = this.addOnBtns.bind(this);
    }

    preConfigTextInput(event){
        const elemVal = event.target.value;
        let command = '';
        switch (event.target.name) {
            case 'error':
                console.log(elemVal);
                if(commandslist.includes(preConfig.error)){
                    commandslist.splice(commandslist.indexOf(preConfig.error),1);
                }
                if(elemVal === 'ignore'){
                    command = '-i';
                }else if(elemVal === 'abort'){
                    command = '--abort-on-error';
                }
                if(command !== ''){
                    commandslist.push(command);
                    preConfig.error = command;
                }
                break;
            case 'location':
                command = `--config-location "${elemVal}"`;
                if(commandslist.includes(preConfig.location)){
                    commandslist.splice(commandslist.indexOf(preConfig.location),1);
                }
                preConfig.location = command;
                commandslist.push(command);
                if(elemVal === ''){
                    commandslist.splice(commandslist.indexOf(preConfig.location),1);
                    preConfig.location = '';
                }
                break;
        }
        this.setState({options:commandslist});
    }
    preConfigCheckInput(event){
        const elemVal = event.target.checked;
        let command = '';
        switch (event.target.name) {
            case 'ignore':
                command = '--ignore-config';
                break;
        }
        elemVal ? commandslist.push(command) : commandslist.splice(commandslist.indexOf(command),1);
        this.setState({options:commandslist});
    }
    youtubeCheckInput(event){
        const elemVal = event.target.checked;
        let command = '';
        switch(event.target.name){
            case 'insecure':
                command = '--prefer-insecure';
                break;
            case 'dash':
                command = '--youtube-skip-dash-manifest';
                break;
            case 'autosub':
                command = '--write-auto-sub';
                break;
        }
        elemVal ? commandslist.push(command) : commandslist.splice(commandslist.indexOf(command),1);
        this.setState({options:commandslist});
    }
    videoSelectTextInput(event){
        const elemVal = event.target.value;
        let command = '';
        switch (event.target.name) {
            case 'playstart':
                command = `--playlist-start "${elemVal}"`;
                if(commandslist.includes(videoSelect.playstart)){
                    commandslist.splice(commandslist.indexOf(videoSelect.playstart),1);
                }
                videoSelect.playstart = command;
                commandslist.push(command);
                if(elemVal === ''){
                    commandslist.splice(commandslist.indexOf(videoSelect.playstart),1);
                    videoSelect.playstart = ``;
                }
                break;
            case 'playend':
                command = `--playlist-end "${elemVal}"`;
                if(commandslist.includes(videoSelect.playend)){
                    commandslist.splice(commandslist.indexOf(videoSelect.playend),1);
                }
                videoSelect.playend = command;
                commandslist.push(command);
                if(elemVal === ''){
                    commandslist.splice(commandslist.indexOf(videoSelect.playend),1);
                    videoSelect.playend = ``;
                }
                break;
            case 'playitems':
                command = `--playlist-items "${elemVal}"`;
                if(elemVal.search(/[0-9]+([-,][0-9]+)?/) !== -1 &&
                    elemVal.search(/[^0-9-,]/) === -1){
                    if(commandslist.includes(videoSelect.playitems)){
                        commandslist.splice(commandslist.indexOf(videoSelect.playitems),1);
                    }
                    videoSelect.playitems = command;
                    commandslist.push(command);
                }

                if(elemVal === ''){
                    commandslist.splice(commandslist.indexOf(videoSelect.playitems),1);
                    videoSelect.playitems = ``;
                }
                break;
            case 'match':
                command = `--match-title "${elemVal}"`;
                if(commandslist.includes(videoSelect.match)){
                    commandslist.splice(commandslist.indexOf(videoSelect.match),1);
                }
                videoSelect.match = command;
                commandslist.push(command);
                if(elemVal === ''){
                    commandslist.splice(commandslist.indexOf(videoSelect.match),1);
                    videoSelect.match = ``;
                }
                break;
            case 'reject':
                command = `--reject-title "${elemVal}"`;
                if(commandslist.includes(videoSelect.reject)){
                    commandslist.splice(commandslist.indexOf(videoSelect.reject),1);
                }
                videoSelect.reject = command;
                commandslist.push(command);
                if(elemVal === ''){
                    commandslist.splice(commandslist.indexOf(videoSelect.reject),1);
                    videoSelect.reject = ``;
                }
                break;
            case 'maxdl':
                command = `--max-downloads "${elemVal}"`;
                if(commandslist.includes(videoSelect.maxdl)){
                    commandslist.splice(commandslist.indexOf(videoSelect.maxdl),1);
                }
                videoSelect.maxdl = command;
                commandslist.push(command);
                if(elemVal === ''){
                    commandslist.splice(commandslist.indexOf(videoSelect.maxdl),1);
                    videoSelect.maxdl = ``;
                }
                break;
            case 'minsize':
                command = `--min-filesize "${elemVal}"`;
                if(elemVal.search(/[0-9]+[kmg]?/i) !== -1 &&
                    elemVal.search(/[0-9]+[kmg]{2,}/i) === -1 &&
                    elemVal.search(/[0-9]+[kmg][^kmg]/i) === -1 &&
                    elemVal.search(/[0-9]+[^kmg0-9]/i) === -1 &&
                    elemVal.search(/[^0-9][0-9]+/i) === -1){
                    if(commandslist.includes(videoSelect.minsize)){
                        commandslist.splice(commandslist.indexOf(videoSelect.minsize),1);
                    }
                    videoSelect.minsize = command;
                    commandslist.push(command);
                }

                if(elemVal === ''){
                    commandslist.splice(commandslist.indexOf(videoSelect.minsize),1);
                    videoSelect.minsize = ``;
                }
                break;
            case 'maxsize':
                command = `--max-filesize "${elemVal}"`;
                if(elemVal.search(/[0-9]+[kmg]?/i) !== -1 &&
                    elemVal.search(/[0-9]+[kmg]{2,}/i) === -1 &&
                    elemVal.search(/[0-9]+[kmg][^kmg]/i) === -1 &&
                    elemVal.search(/[0-9]+[^kmg0-9]/i) === -1 &&
                    elemVal.search(/[^0-9][0-9]+/i) === -1) {
                    if (commandslist.includes(videoSelect.maxsize)) {
                        commandslist.splice(commandslist.indexOf(videoSelect.maxsize), 1);
                    }
                    videoSelect.maxsize = command;
                    commandslist.push(command);
                }
                if(elemVal === ''){
                    commandslist.splice(commandslist.indexOf(videoSelect.maxsize),1);
                    videoSelect.maxsize = ``;
                }
                break;
            case 'minviews':
                command = `--min-views "${elemVal}"`;
                if(commandslist.includes(videoSelect.minviews)){
                    commandslist.splice(commandslist.indexOf(videoSelect.minviews),1);
                }
                videoSelect.minviews = command;
                commandslist.push(command);
                if(elemVal === ''){
                    commandslist.splice(commandslist.indexOf(videoSelect.minviews),1);
                    videoSelect.minviews = ``;
                }
                break;
            case 'maxviews':
                command = `--max-views "${elemVal}"`;
                if(commandslist.includes(videoSelect.maxviews)){
                    commandslist.splice(commandslist.indexOf(videoSelect.maxviews),1);
                }
                videoSelect.maxviews = command;
                commandslist.push(command);
                if(elemVal === ''){
                    commandslist.splice(commandslist.indexOf(videoSelect.maxviews),1);
                    videoSelect.maxviews = ``;
                }
                break;
            case 'date':
                command = `--date "${elemVal}"`;
                if(commandslist.includes(videoSelect.date)){
                    commandslist.splice(commandslist.indexOf(videoSelect.date),1);
                }
                videoSelect.date = command;
                commandslist.push(command);
                if(elemVal === ''){
                    commandslist.splice(commandslist.indexOf(videoSelect.date),1);
                    videoSelect.date = ``;
                }
                break;
            case 'datebefore':
                command = `--datebefore "${elemVal}"`;
                if(commandslist.includes(videoSelect.datebefore)){
                    commandslist.splice(commandslist.indexOf(videoSelect.datebefore),1);
                }
                videoSelect.datebefore = command;
                commandslist.push(command);
                if(elemVal === ''){
                    commandslist.splice(commandslist.indexOf(videoSelect.datebefore),1);
                    videoSelect.datebefore = ``;
                }
                break;
            case 'dateafter':
                command = `--dateafter "${elemVal}"`;
                if(commandslist.includes(videoSelect.dateafter)){
                    commandslist.splice(commandslist.indexOf(videoSelect.dateafter),1);
                }
                videoSelect.dateafter = command;
                commandslist.push(command);
                if(elemVal === ''){
                    commandslist.splice(commandslist.indexOf(videoSelect.dateafter),1);
                    videoSelect.dateafter = ``;
                }
                break;

        }
        this.setState({options:commandslist});
    }
    videoSelectCheckInput(event){
        const elemVal = event.target.checked;
        let command = '';
        switch (event.target.name) {
            case 'noplay':
                command = '--no-playlist';
                break;
        }
        elemVal ? commandslist.push(command) : commandslist.splice(commandslist.indexOf(command),1);
        this.setState({options:commandslist});
    }
    downloadTextInput(event){
        const elemVal = event.target.value;
        let command = '';
        switch (event.target.name) {
            case 'limit':
                command = `-r "${elemVal}"`;
                if(elemVal.search(/[0-9]+[kmg]?/i) !== -1 &&
                    elemVal.search(/[0-9]+[kmg]{2,}/i) === -1 &&
                    elemVal.search(/[0-9]+[kmg][^kmg]/i) === -1 &&
                    elemVal.search(/[0-9]+[^kmg0-9]/i) === -1&&
                    elemVal.search(/[^0-9][0-9]+/i) === -1){
                    if(commandslist.includes(download.limit)){
                        commandslist.splice(commandslist.indexOf(download.limit),1);
                    }
                    download.limit = command;
                    commandslist.push(command);
                }

                if(elemVal === ''){
                    commandslist.splice(commandslist.indexOf(download.limit),1);
                    download.limit = ``;
                }
                break;
            case 'retry':
                command = `-R "${elemVal}"`;
                if(commandslist.includes(download.retry)){
                    commandslist.splice(commandslist.indexOf(download.retry),1);
                }
                download.retry = command;
                commandslist.push(command);
                if(elemVal === ''){
                    commandslist.splice(commandslist.indexOf(download.retry),1);
                    download.retry = ``;
                }
                break;
            case 'buffer':
                command = `--buffer-size "${elemVal}"`;
                if(elemVal.search(/[0-9]+[k]?/i) !== -1 &&
                    elemVal.search(/[0-9]+[k]{2,}/i) === -1 &&
                    elemVal.search(/[0-9]+[k][^k]/i) === -1 &&
                    elemVal.search(/[0-9]+[^k0-9]/i) === -1&&
                    elemVal.search(/[^0-9][0-9]+/i) === -1){
                    if(commandslist.includes(download.buffer)){
                        commandslist.splice(commandslist.indexOf(download.buffer),1);
                    }
                    download.buffer = command;
                    commandslist.push(command);
                }

                if(elemVal === ''){
                    commandslist.splice(commandslist.indexOf(download.buffer),1);
                    download.buffer = ``;
                }
                break;
        }
        this.setState({options:commandslist});
    }
    downloadCheckInput(event){
        const elemVal = event.target.checked;
        let command = '';
        switch (event.target.name) {
            case 'noresize':
                command = '--no-resize-buffer';
                break;
            case 'hls':
                command = '--hls-prefer-native';
                break;
            case 'ffmpeg':
                command = '--hls-prefer-ffmpeg';
                break;
            case 'playreverse':
                command = '--playlist-reverse';
                break;
            case 'playrandom':
                command = '--playlist-random';
                break;
        }
        elemVal ? commandslist.push(command) : commandslist.splice(commandslist.indexOf(command),1);
        this.setState({options:commandslist});
    }
    fileTextInput(event){
        const elemVal = event.target.value;
        let command = '';
        switch (event.target.name) {
            case 'urls':
                command = `-a "${elemVal}"`;
                if(commandslist.includes(file.urls)){
                    commandslist.splice(commandslist.indexOf(file.urls),1);
                }
                file.urls = command;
                commandslist.push(command);
                if(elemVal === ''){
                    commandslist.splice(commandslist.indexOf(file.urls),1);
                    file.urls = ``;
                }
                break;
            case 'output':
                command = `-o "${elemVal}"`;
                if(commandslist.includes(file.output)){
                    commandslist.splice(commandslist.indexOf(file.output),1);
                }
                file.output = command;
                commandslist.push(command);
                if(elemVal === ''){
                    commandslist.splice(commandslist.indexOf(file.output),1);
                    file.output = ``;
                }
                break;
        }
        this.setState({options:commandslist});
    }
    fileCheckInput(event){
        const elemVal = event.target.checked;
        let command = '';
        switch (event.target.name) {
            case 'nocontinue':
                command = '--no-continue';
                break;
            case 'nocache':
                command = '--rm-cache-dir';
                break;
        }
        elemVal ? commandslist.push(command) : commandslist.splice(commandslist.indexOf(command),1);
        this.setState({options:commandslist});
    }
    thumbCheckInput(event){
        const elemVal = event.target.checked;
        let command = '';
        switch (event.target.name) {
            case 'single':
                command = '--write-thumbnail';
                break;
            case 'all':
                command = '--write-all-thumbnails';
                break;
        }
        elemVal ? commandslist.push(command) : commandslist.splice(commandslist.indexOf(command),1);
        this.setState({options:commandslist});
    }
    workTextInput(event){
        const elemVal = event.target.value;
        let command = '';
        switch (event.target.name) {
            case 'useragent':
                command = `--user-agent "${elemVal}"`;
                if(commandslist.includes(work.agent)){
                    commandslist.splice(commandslist.indexOf(work.agent),1);
                }
                work.agent = command;
                commandslist.push(command);
                if(elemVal === ''){
                    commandslist.splice(commandslist.indexOf(work.agent),1);
                    work.agent = ``;
                }
                break;
            case 'sleep':
                command = `--sleep-interval "${elemVal}"`;
                if(commandslist.includes(work.sleep)){
                    commandslist.splice(commandslist.indexOf(work.sleep),1);
                }
                work.sleep = command;
                commandslist.push(command);
                if(elemVal === ''){
                    commandslist.splice(commandslist.indexOf(work.sleep),1);
                    work.sleep = ``;
                }
                break;
            case 'maxsleep':
                command = `--max-sleep-interval "${elemVal}"`;
                if(commandslist.includes(work.maxsleep)){
                    commandslist.splice(commandslist.indexOf(work.maxsleep),1);
                }
                work.maxsleep = command;
                commandslist.push(command);
                if(elemVal === ''){
                    commandslist.splice(commandslist.indexOf(work.maxsleep),1);
                    work.maxsleep = ``;
                }
                break;
            case 'geobypass':
                command = `--geo-bypass-country "${elemVal}"`;
                if(commandslist.includes(work.geo)){
                    commandslist.splice(commandslist.indexOf(work.geo),1);
                }
                work.geo = command;
                commandslist.push(command);
                if(elemVal === ''){
                    commandslist.splice(commandslist.indexOf(work.geo),1);
                    work.geo = ``;
                }
                break;
        }
        this.setState({options:commandslist});
    }
    workCheckInput(event){
        const elemVal = event.target.checked;
        let command = '';
        switch(event.target.name){
            case 'nocertificate':
                command = '--no-check-certificate';
                break;
        }
        elemVal ? commandslist.push(command) : commandslist.splice(commandslist.indexOf(command),1);
        this.setState({options:commandslist});
    }
    videoFormatTextInput(event){
        const elemVal = event.target.value;
        let command = '';
        switch (event.target.name) {
            case 'format':
                command = `-f "${elemVal}"`;
                if(commandslist.includes(videoFormat.format)){
                    commandslist.splice(commandslist.indexOf(videoFormat.format),1);
                }
                videoFormat.format = command;
                commandslist.push(command);
                if(elemVal === ''){
                    commandslist.splice(commandslist.indexOf(videoFormat.format),1);
                    videoFormat.format = ``;
                }
                break;
        }
        this.setState({options:commandslist});
    }
    videoFormatCheckInput(event){
        const elemVal = event.target.checked;
        let command = '';
        switch (event.target.name) {
            case 'all':
                command = '--all-formats';
                break;
        }
        elemVal ? commandslist.push(command) : commandslist.splice(commandslist.indexOf(command),1);
        this.setState({options:commandslist});
    }
    subAuthTextInput(event){
        const elemVal = event.target.value;
        let command = '';
        switch(event.target.name){
            case 'user':
                command = `-u "${elemVal}"`;
                if(commandslist.includes(subAuth.user)){
                    commandslist.splice(commandslist.indexOf(subAuth.user),1);
                }
                subAuth.user = command;
                commandslist.push(command);
                if(elemVal === ''){
                    commandslist.splice(commandslist.indexOf(subAuth.user),1);
                    subAuth.user = ``;
                }
                break;
            case 'cookies':
                command = `--cookies "${elemVal}"`;
                if(commandslist.includes(subAuth.cookies)){
                    commandslist.splice(commandslist.indexOf(subAuth.cookies),1);
                }
                subAuth.cookies = command;
                commandslist.push(command);
                if(elemVal === ''){
                    commandslist.splice(commandslist.indexOf(subAuth.cookies),1);
                    subAuth.cookies = ``;
                }
                break;
        }
        this.setState({options:commandslist});
    }
    subAuthCheckInput(event){
        const elemVal = event.target.checked;
        let command = '';
        switch(event.target.name){
            case 'sub':
                command = '--write-sub';
                break;
            case 'all':
                command = '--all-subs';
                break;
        }
        elemVal ? commandslist.push(command) : commandslist.splice(commandslist.indexOf(command),1);
        this.setState({options:commandslist});
    }
    postTextInput(event){
        const elemVal = event.target.value;
        let command = "";
        switch (event.target.name) {
            case 'format':
                if(elemVal === 'aac'){
                    command = '--audio-format "aac"';
                }else if(elemVal === 'flac'){
                    command = '--audio-format "flac"';
                }else if(elemVal === 'mp3'){
                    command = '--audio-format "mp3"';
                }else if(elemVal === 'm4a'){
                    command = '--audio-format "m4a"';
                }else if(elemVal === 'opus'){
                    command = '--audio-format "opus"';
                }else if(elemVal === 'vorbis'){
                    command = '--audio-format "vorbis"';
                }else if(elemVal === 'wav'){
                    command = '--audio-format "wav"';
                }
                if(commandslist.includes(post.format)){
                    commandslist.splice(commandslist.indexOf(post.format),1);
                }
                post.format = command;
                commandslist.push(command);
                if(elemVal === '' || elemVal === 'none'){
                    commandslist.splice(commandslist.indexOf(post.format),1);
                    post.format = ``;
                }
                break;
            case 'quality':
                command = `--audio-quality "${elemVal}"`;
                if(commandslist.includes(post.quality)){
                    commandslist.splice(commandslist.indexOf(post.quality),1);
                }
                post.quality = command;
                commandslist.push(command);
                if(elemVal === ''){
                    commandslist.splice(commandslist.indexOf(post.quality),1);
                    post.quality = ``;
                }
                break;
            case 'ffmpegloc':
                command = `--ffmpeg-location "${elemVal}"`;
                if(commandslist.includes(post.ffmpegloc)){
                    commandslist.splice(commandslist.indexOf(post.ffmpegloc),1);
                }
                post.ffmpegloc = command;
                commandslist.push(command);
                if(elemVal === ''){
                    commandslist.splice(commandslist.indexOf(post.ffmpegloc),1);
                    post.ffmpegloc = ``;
                }
                break;
            case 'sub':
                if(elemVal === 'srt'){
                    command = '--convert-subs "srt"';
                }else if(elemVal === 'ass'){
                    command = '--convert-subs "ass"';
                }else if(elemVal === 'vtt'){
                    command = '--convert-subs "vtt"';
                }else if(elemVal === 'lrc'){
                    command = '--convert-subs "lrc"';
                }
                if(commandslist.includes(post.sub)){
                    commandslist.splice(commandslist.indexOf(post.sub),1);
                }
                post.sub = command;
                commandslist.push(command);
                if(elemVal === ''){
                    commandslist.splice(commandslist.indexOf(post.sub),1);
                    post.sub = ``;
                }
                break;
            case 'reencode':
                if(elemVal === 'mp4'){
                    command = '--recode-video "mp4"';
                }else if(elemVal === 'flv'){
                    command = '--recode-video "flv"';
                }else if(elemVal === 'ogg'){
                    command = '--recode-video "ogg"';
                }else if(elemVal === 'webm'){
                    command = '--recode-video "webm"';
                }else if(elemVal === 'mkv'){
                    command = '--recode-video "mkv"';
                }
                else if(elemVal === 'avi'){
                    command = '--recode-video "avi"';
                }
                if(commandslist.includes(post.sub)){
                    commandslist.splice(commandslist.indexOf(post.sub),1);
                }
                post.sub = command;
                commandslist.push(command);
                if(elemVal === ''){
                    commandslist.splice(commandslist.indexOf(post.sub),1);
                    post.sub = ``;
                }
                break;
        }
        this.setState({options:commandslist});
    }
    postCheckInput(event){
        const elemVal = event.target.checked;
        let command = '';
        switch (event.target.name) {
            case 'vtoa':
                command = '-x';
                break;
            case 'embedsub':
                command = '--embed-subs';
                break;
            case 'embedthumb':
                command = '--embed-thumbnail';
                break;
            case 'meta':
                command = '--add-metadata';
                break;
            case 'avconv':
                command = '--prefer-avconv';
                break;
            case 'keepvid':
                command = '-k';
                break;
        }
        elemVal ? commandslist.push(command) : commandslist.splice(commandslist.indexOf(command),1);
        this.setState({options:commandslist});
    }

    addOnBtns(event){
        const fileTextBox = document.querySelector('textarea[name=output]');
        const caretPos = fileTextBox.selectionStart;
        switch(event.target.name){
            case "str":
                fileTextBox.value = fileTextBox.value.substring(0,caretPos) + '%()s' + fileTextBox.value.substring(caretPos);
                break;
            case'num':
                fileTextBox.value = fileTextBox.value.substring(0,caretPos) + '%()d'+ fileTextBox.value.substring(caretPos);
                break;
        }
    }
    subActionBtnClick(event){
        this.setState({isSubMenuOn:!this.state.isSubMenuOn});
    }
    subNavClick(event){
        document.querySelector(`#${event.target.name}`).click();
        this.setState({isSubMenuOn:false});
    }
    getUrl(event){
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
    animEnd(event){
        event.target.style.display = 'none';
    }
    render() {
        return (
            <Header>
                <div className="container">
                    <TopBar/>
                    <YouTubeCodes bind={this.state} animEnd={this.animEnd}/>
                    <IconNav isSubMenuOn={this.state.isSubMenuOn} subActionBtnClick={this.subActionBtnClick} subNavClick={this.subNavClick}/>
                    <Url getUrl={this.getUrl}/>
                    <MainConfig preConfigTextInput={this.preConfigTextInput} preConfigCheckInput={this.preConfigCheckInput}/>
                    <Download downloadTextInput={this.downloadTextInput} downloadCheckInput={this.downloadCheckInput}/>
                    <VideoSelection videoSelectCheckInput={this.videoSelectCheckInput} videoSelectTextInput={this.videoSelectTextInput}/>
                    <VideoFormat videoFormatTextInput={this.videoFormatTextInput} videoFormatCheckInput={this.videoFormatCheckInput}/>
                    <PostProcess postTextInput={this.postTextInput} postCheckInput={this.postCheckInput} />
                    <File fileTextInput={this.fileTextInput} fileCheckInput={this.fileCheckInput} addOnBtns={this.addOnBtns}/>
                    <YouTubeOnly youtubeCheckInput={this.youtubeCheckInput}/>
                    <WorkAround workCheckInput={this.workCheckInput} workTextInput={this.workTextInput}/>
                    <Thumbnail thumbCheckInput={this.thumbCheckInput}/>
                    <SubAuth subAuthCheckInput={this.subAuthCheckInput} subAuthTextInput={this.subAuthTextInput}/>
                </div>
                <footer className={`${styles.footer} py-2 text-center text-white`}>
                    <address className={styles.address}>
                        <a className="text-light font-weight-bold" href={FEEDBACK_EMAIL}>Send Feedback</a>
                    </address>
                    <p>Updated {DATE_MODIFIED}</p>
                </footer>
            </Header>
        );
    }
}
export default Index;
