import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import PhoneWords from './phonewords'
import {submitDigits} from './phonewords-actions'
import {getConvertedWords} from './phonewords-selectors'

const dispatchToProps = function(dispatch) {
	return bindActionCreators({submitDigits}, dispatch);
};

const mapStateToProps = function(state, ownProps) {
	return {
		loading: getConvertedWords(state)
	};
};

export default connect(mapStateToProps, dispatchToProps)(PhoneWords);
