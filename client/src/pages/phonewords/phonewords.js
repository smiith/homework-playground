import React from 'react'

export default class PhoneWords extends React.PureComponent {
	constructor(props) {
		super(props)

		this.state = {
			inputDigits: ''
		}

		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleInput = this.handleInput.bind(this)
	}

	handleSubmit(ev) {
		this.props.submitConversion({input: this.state.inputDigits});
		this.setState({inputDigits: ''})
		ev.preventDefault()
	}

	handleInput(ev) { // TODO validation
		this.setState({inputDigits: ev.target.value})
	}

	render() {
		const {convertedWords} = this.props;
		return (
			<div>
				<h1>Phoneword converter</h1>
				<form onSubmit={this.handleSubmit}>
					<label>
						Digits:
						<input type="text" name="digits" onChange={this.handleInput} value={this.state.inputDigits}/>
					</label>
				</form>
				{convertedWords.map( (word, i) => <div key={i}>{word}</div>)}
			</div>
		)
	};
}
