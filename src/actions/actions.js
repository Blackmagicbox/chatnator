import {GET_MESSAGES_FAIL, GET_MESSAGES_SUCCESS, SEND_MESSAGE_FAIL, SEND_MESSAGE_SUCCESS} from "./actionTypes";
import GetMessagesService from '../services/getMessagesService';
import SendMessagesService from '../services/sendMessageService';

const sendMessageSuccess = (message) => {
    return {
        type: SEND_MESSAGE_SUCCESS,
        message,
    }
};
const sendMessageFail = (error) => {
    return {
        type: SEND_MESSAGE_FAIL,
        message: error,
    }
};

const getMessagesSuccess = (messages) => {
    return {
        type: GET_MESSAGES_SUCCESS,
        messages,
    }
};

const getMessagesFail = (error) => {
    return {
        type: GET_MESSAGES_FAIL,
        error,
    }
};

export const getMessages = () => {
    return (dispatch) => {
        return GetMessagesService()
            .then((response) => {
                if(response.error) {
                    dispatch(getMessagesFail(response.error))
                } else {
                    return response;
                }
            })
            .then((response) => JSON.parse(response))
            .then((response) => dispatch(getMessagesSuccess(response)))
            .catch(e => dispatch(getMessagesFail(e)));
    }
};

export const sendMessage = (body) => {
    return (dispatch) => {
        return SendMessagesService(body)
            .then((response) => {
                if(response.error) {
                    dispatch(sendMessageFail(response.error))
                } else {
                    return response;
                }
            })
            .then((response) => JSON.parse(response))
            .then((response) => dispatch(sendMessageSuccess(response)))
            .then(() => getMessages())
            .catch(e => dispatch(sendMessageFail(e)));
    }
};
