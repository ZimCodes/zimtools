import Options from '../../OutputOptionsWrapper';//Imports the mandatory Options Wrapper
/*The Referer URL to obtain more information about an option*/
const REF_URL = <a href="https://ffmpeg.org/ffmpeg.html#Main-options" target="_blank" rel="noreferrer noopener">More Info</a>;
const FORMAT_URL = <a href="https://ffmpeg.org/ffmpeg-formats.html" target="_blank" rel="noreferrer noopener">Format List</a>;
const TIME_URL = <a href="https://ffmpeg.org/ffmpeg-utils.html#time-duration-syntax" target="_blank" rel="noreferrer noopener">Time Format</a>;
export default (props) => (
    <Options title="Main Options" id={`osector_${props.sector}`} stateClick={props.stateClick}>
        <tr>
            <td>Force Format</td>
			<td className="align-middle invisible">
				<input type="number" min="0" size="1"/>
			</td>
            <td className="align-middle"><input id={props.idNum} className={props.sector} name="format" type="text" placeholder="wav" onChange={props.mainTxt}/></td>
            <td className="text-center">Force the usage of a file <u>[format]</u>. <em>By Default: format is auto-detected</em>. {FORMAT_URL}|{REF_URL}</td>
        </tr>
        <tr>
            <td>File Size</td>
            <td className="align-middle invisible">
                <input type="number" min="0" size="1"/>
            </td>
            <td className="align-middle"><input id={props.idNum} className={props.sector} name="size" type="text" placeholder="1.2G" onChange={props.mainTxt}/></td>
            <td className="text-center">Set the file <u>[size]</u> limit in bytes. Can use <strong>K=Kilobyte, M=Megabyte, G=Gigabyte</strong>. {REF_URL}</td>
        </tr>
        <tr>
            <td>Duration</td>
            <td className="align-middle invisible">
                <input type="number" min="0" size="1"/>
            </td>
            <td className="align-middle"><input id={props.idNum} className={props.sector} name="duration" type="text" placeholder="42s" onChange={props.mainTxt}/></td>
            <td className="text-center">Set the <u>[duration]</u> of a media file. {TIME_URL}|{REF_URL}</td>
        </tr>
        <tr>
            <td>Seek</td>
            <td className="align-middle invisible">
                <input type="number" min="0" size="1"/>
            </td>
            <td className="align-middle"><input id={props.idNum} className={props.sector} name="seek" type="text" placeholder="240" onChange={props.mainTxt}/></td>
            <td className="text-center">Sets the starting <u>[time]</u> for recording. {TIME_URL}|{REF_URL}</td>
        </tr>
        <tr>
            <td>Target a Media</td>
            <td className="align-middle invisible">
                <input type="number" min="0" size="1"/>
            </td>
            <td className="align-middle">
                <select className={props.sector} name="target" id={props.idNum} onChange={props.mainTxt}>
                    <option value="">N/A</option>
                    <option value="vcd">Video CD</option>
                    <option value="svcd">Super Video CD</option>
                    <option value="dvd">Digital Video Disc</option>
                    <option value="dv">Digital Video</option>
                    <option value="dv50">Digital Video 50%</option>
                    <option value="film-vcd">[FILM] Video CD</option>
                    <option value="film-svcd">[FILM] Super Video CD</option>
                    <option value="film-dvd">[FILM] Digital Video Disc</option>
                    <option value="film-dv">[FILM] Digital Video</option>
                    <option value="film-dv50">[FILM] Digital Video 50%</option>
                    <option value="ntsc-vcd">[NTSC] Video CD</option>
                    <option value="ntsc-svcd">[NTSC] Super Video CD</option>
                    <option value="ntsc-dvd">[NTSC] Digital Video Disc</option>
                    <option value="ntsc-dv">[NTSC] Digital Video</option>
                    <option value="ntsc-dv50">[NTSC] Digital Video 50%</option>
                    <option value="pal-vcd">[PAL] Video CD</option>
                    <option value="pal-svcd">[PAL] Super Video CD</option>
                    <option value="pal-dvd">[PAL] Digital Video Disc</option>
                    <option value="pal-dv">[PAL] Digital Video</option>
                    <option value="pal-dv50">[PAL] Digital Video 50%</option>
                </select>
            </td>
            <td className="text-center">Sets the starting <u>[time]</u> for recording. {TIME_URL}|{REF_URL}</td>
        </tr>
		{props.children}
    </Options>
);
