import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import PhoneWords from './phonewords'
import {submitConversion} from './phonewords-thunk'
import {getConvertedWords} from './phonewords-selectors'

const dispatchToProps = function(dispatch) {
	return bindActionCreators({submitConversion: submitConversion}, dispatch);
};

const mapStateToProps = function(state, ownProps) {
	return {
		convertedWords: getConvertedWords(state)
	};
};

export default connect(mapStateToProps, dispatchToProps)(PhoneWords);
