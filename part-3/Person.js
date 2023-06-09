const Person = (props) => {
	let name = props.name;
	let age = props.age
	let hobbiesLIs = props.hobbies.map(h => <li>{h}</li>);

	if (age < 18) {
		if (props.name.length > 8) {
			name = name.slice(0,6)}
		return (
			<div>
				<h4><span style={{color:"purple"}}>{props.name.slice(0,6)}</span><span style={{color:"gray"}}>(age= {props.age})</span></h4>
				<p><span style={{color:"cyan"}}>Learn some information about this person</span></p>
				<ul> My Hobbies:
          				{hobbiesLIs}
        		</ul>
				<h3>you must be 18</h3>
			</div>
		)} else {
			if (props.name.length > 8) {
				name = name.slice(0,6)}
			return (
				<div>
					<h4><span style={{color:"purple"}}>{props.name.slice(0,6)}</span><span style={{color:"gray"}}>(age= {props.age})</span></h4>
					<p><span style={{color:"cyan"}}>Learn some information about this person</span></p>
					<ul> My Hobbies:
          				{hobbiesLIs}
        			</ul>
					<h3>please go vote!</h3>
				</div>
			)
	}
	
}