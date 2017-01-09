class App extends React.Component {
	constructor(prop) {
		super(prop);
	}

	render() {
		return (
			<div>

				<div className='nav'>
					
				</div>
				<div className='landing'>
					<div className='developer'>
						One With the Code
					</div>
				</div>
				<div className='about'>
				</div>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('main'));

// babel . --out-dir compiled --presets=es2015,react --ignore=node_modules,compiled --source-maps inline --watch
