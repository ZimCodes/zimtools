
export default (props) =>(
	<div>
		<h2 className="text-center py-5 font-weight-bold"><u>{props.head}</u></h2>
		<div className="text-center">
			<input name={props.name} type="text" placeholder="my_movie.mp4" onChange={props.getFile}/>
		</div>
		{props.children}
	</div>
);