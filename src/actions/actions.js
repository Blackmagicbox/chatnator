import {GET_MESSAGES_SUCCESS, SEND_MESSAGE_SUCCESS} from "./actionTypes";
import GetMessagesService from '../services/getMessagesService';

const sendMessageSuccess = (message) => {
    return {
        type: SEND_MESSAGE_SUCCESS,
        message,
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
        type: GET_MESSAGES_SUCCESS,
        messages,
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

export const sendMessage = () => {};
