const Tweet = (props) => {
	return (
		<div>
			<h3><span style={{color:"purple"}}>{props.username}</span>(also known as <span style={{color:"lightblue"}}>{props.name}</span>) once said:</h3>
			<p style={{color:"cyan"}}>{props.msg}</p>
			<p><span style={{color:"gray"}}>(said on: {props.date})</span></p>
		</div>
	)
}