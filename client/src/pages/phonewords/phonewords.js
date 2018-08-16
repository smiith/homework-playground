import React from 'react'

export default class PhoneWords extends React.PureComponent {
	constructor(props) {
		super(props)

		this.state = {
			inputDigits: '',
			inputError: false
		}

		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleInput = this.handleInput.bind(this)
	}

	handleSubmit(ev) {
		ev.preventDefault()
		if (this.state.inputError) return
		this.props.submitConversion({input: this.state.inputDigits});
		this.setState({inputDigits: ''})
	}

	handleInput(ev) {
		const value = ev.target.value
		this.setState({inputDigits: value, inputError: !!(value && !/^\d+$/.test(value)) })
	}

	render() {
		const {convertedWords} = this.props;
		const {inputDigits, inputError} = this.state
		return (
			<div>
				<h1>Phoneword converter</h1>
				<form onSubmit={this.handleSubmit}>
					<label>
						Digits:
						<input style={{background: inputError ? 'red' : 'white'}} type="text" name="digits" onChange={this.handleInput}
									 onKeyUp={this.handleInput} value={inputDigits}/>
					</label>
				</form>
				{convertedWords.map( (word, i) => <div key={i}>{word}</div>)}
			</div>
		)
	};
}
