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
		this.setState({inputDigits: ''})
		ev.preventDefault()
	}

	handleInput(ev) {
		this.setState({inputDigits: ev.target.value})
	}

	render() {
		const {convertedWords} = this.props;
		return (
			<div>
				<h1>My Homework</h1>
				<form onSubmit={this.handleSubmit}>
					<label>
						Digits:
						<input type="text" name="digits" onChange={this.handleInput} value={this.state.inputDigits}/>
					</label>
				</form>
				{convertedWords}
			</div>
		)
	};
}
