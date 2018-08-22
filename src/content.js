import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Content extends Component {
    static contextTypes = {
        themeColor : PropTypes.string
    }
    render () {
        return (
            <div>
                <main style={{color: this.context.themeColor}}>
                    this is content
                </main>
            </div>
        )
    }
}

export default Content;