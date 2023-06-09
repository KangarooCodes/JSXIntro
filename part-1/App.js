const App = () => {
	return (
		<div>
			<FirstComp/>
			<NamedComp name="Joey"/>
		</div>
	)
}

ReactDOM.render(<App/>, document.getElementById("root"))