import {GET_MESSAGES_SUCCESS, SEND_MESSAGE_SUCCESS} from "../actions/actionTypes";
const initialState = {
    messages: [],
    message: ''
}
export default function chatApp(state = initialState, action) {
    switch (action.type) {
        case GET_MESSAGES_SUCCESS:
            state.messages =  [...action.messages];
            return {...state};
        case SEND_MESSAGE_SUCCESS:
            state.message = action.message;
            state.messages.push(action.message);
            return {...state};
        default:
            return state;
    }
}
