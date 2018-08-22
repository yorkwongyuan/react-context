import React, {Component} from 'react';
import ReactDom from 'react-dom';
import Content from './content.js';
import Title from './title.js';
import PropTypes from 'prop-types';
class App extends Component {
    static childContextTypes = {
        themeColor : PropTypes.string
    }
    constructor () {
        super();
        this.state = {
            themeColor : 'red'
        }
    }
    getChildContext () {
        return {
            themeColor : this.state.themeColor
        }
    }
    render () {
        return (
            <div>
                <Title />
                <Content />
            </div>
        )
    }
}

ReactDom.render(<App/>, document.getElementById('root'));
