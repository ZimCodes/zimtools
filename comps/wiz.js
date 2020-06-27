import Link from "next/link";

const Wiz = (props) => (
    <div className={'col-3 mt-5'}>
        <Link href={props.link}>
            <a className={'btn btn-secondary text-white shadow font-weight-bold'}>
                {props.title}
            </a>
        </Link>
    </div>
);
export default Wiz;