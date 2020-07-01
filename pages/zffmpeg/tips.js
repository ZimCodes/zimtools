import Header from '../../comps/header';
import styles from '../../styles/zffmpeg/tips.module.css';
const FFmpegTips = ()=>(
    <Header>
        <h1 className={'text-center'}>Tips & Notes</h1>
        <h3>*Automatic Stream Selection</h3>
        <pre className={'mt-2'}>
            In the absence of any map options for a particular output file,
            FFmpeg will automatically select a stream based upon the following criteria:
        </pre>
        <dl className={'ml-3'}>
            <dt>Video</dt>
            <dd className={styles.dd}>The highest resolution</dd>
            <dt>Audio</dt>
            <dd className={styles.dd}>The most channels</dd>
            <dt>Subtitles</dt>
            <dd className={styles.dd}>The first subtitle stream</dd>
            <dt >Data & Attachments</dt>
            <dd className={styles.dd}><strong>Not</strong> automatically selected</dd>
        </dl>
        <hr/>
    </Header>

);
export default FFmpegTips;

