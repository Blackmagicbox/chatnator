import React, { Component } from 'react';
import {connect} from 'react-redux'
import { getMessages, sendMessage } from '../actions/actions';
import InputGroup from '../components/InputGroup/InputGroup';
import Posts from '../components/Posts/Posts';
import './main.scss';

class App extends Component {
    componentDidMount() {
        this.props.GetMessages();
    }
    render() {
        return (
            <div className="chat-window">
                <div className="chat-container">
                    <Posts posts={this.props.messages}/>
                    <InputGroup />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    messages: state.messages,
});

const mapDispatchToProps = (dispatch) => ({
    GetMessages: () => dispatch(getMessages()),
    SendMessage: (message) => dispatch(sendMessage(message))
})


export default connect(mapStateToProps, mapDispatchToProps)(App);

