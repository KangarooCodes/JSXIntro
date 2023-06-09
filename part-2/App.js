const App = () => {
	return (
		<div>
			<Tweet
			username='JoeyRools'
			name='Joey'
			date='6/8/2023'
			msg='This is Part 2!'
			/>
			<Tweet
			username='SammyIsDog'
			name='Sambuca'
			date='6/7/2022'
			msg='It worked!'
			/>
			<Tweet
			username='GusIsShawn'
			name='Burton Guster'
			date='6/6/2021'
			msg='All three work, ca-ching!'
			/>
		</div>
	)
}

ReactDOM.render(<App/>, document.getElementById('root'))