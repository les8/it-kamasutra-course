const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogsData: [
        {id: 1, name: "Васян",}, 
        {id: 2, name: "Петя",}, 
        {id: 3, name: "Жорик",}, 
        {id: 4, name: "Вадик",},
        {id: 5, name: "Леха",},
        {id: 6, name: "Анатолий",},
        {id: 7, name: "Костян",}, 
    ],
    messagesData: [
        {id: 1, message: "Эй!",}, 
        {id: 2, message: "Привет!",}, 
        {id: 3, message: "Как дела?",}, 
        {id: 4, message: "Ага.",}, 
    ],
};

const messagesReducer = (state = initialState, action) => {        
    if (action.type === SEND_MESSAGE) {
        let body = action.newMessageText;
        return {
            ...state,
            messagesData: [...state.messagesData, {id: state.messagesData.length + 1, message: body,}]
        };
    };
    return state;
};

export const sendMessageActionCreator = (newMessageText) => {
    return { 
        type: SEND_MESSAGE,
        newMessageText 
    };
};

export default messagesReducer;