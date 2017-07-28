'use strict';

import React, {Component} from 'react';
import {
	BackAndroid
} from 'react-native';

console.disableYellowBox = true;

import Mocks from './mocks';

class App extends Component {
    constructor(props) {
        super(props);
		
		BackAndroid.addEventListener('hardwareBackPress', () => {
			if (this.props.navigator) {
				this.props.navigator.pop();
			}
			return true;
		});	
    }

    render() {
		return (
			<Mocks />
		)
    }
}

export default App;