import {shallow} from 'enzyme'
import React from 'react'

describe('Profile', () => {
	it('render single', () => {
		expect(shallow(<div/>)).toMatchSnapshot()
	})
})
