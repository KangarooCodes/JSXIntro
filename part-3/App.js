const App = () => {
	return (
		<div>
			<Person
			age={16}
			name="Joey"
			hobbies= {["coding","programming","engineering"]}
			/>
			<Person
			age={18}
			name="JoeyLonger"
			hobbies= {["beer","hockey","games"]}
			/>
			<Person
			age={34}
			name="123456789"
			hobbies= {["number","long number","six numbers"]}
			/>
		</div>
	)
}

ReactDOM.render(<App/>, document.getElementById('root'))