import friendsReducer from "./friendsReducer";
import messagesReducer from "./messagesReducer";
import profileReducer from "./profileReducer";

let store = {
    _state: {
        profilePage: {
            personData: {
                userid: 1,
                name: "Leonid Skurikhin",
                dateOfBirth: "08.12.1994",
                city: "Kirov",
                education: "VGSHA, 20",
                webSite: "Lol",
                avatarSource: "https://gamebomb.ru/files/galleries/001/a/ac/174799.jpg",
                landscapeSource: "https://storge.pic2.me/upload/377/57cb1132c9669.jpg",
            },
            postsData: [
                {id: 1, message: "Hi, how are you?", likesCount: 12,}, 
                {id: 2, message: "I'm fine, thank you :)", likesCount: 3,}, 
                {id: 3, message: "Why are you smiling?", likesCount: 56,}, 
                {id: 4, message: "You are starting chat in post space, like an old man!", likesCount: 32,}, 
            ],
            newPostText: '',
        },
        messagesPage: {
            dialogsData: [
                {id: 1, name: "Вася",}, 
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
            newMessageText: '',
        },
        friendsPage: {
            friendsData: [
                {
                    id: 1, 
                    userid: 2,
                    name: "Вася",
                    dateOfBirth: "07.11.1994",
                    city: "Moscow",
                    education: "no",
                    webSite: "no",
                    avatarSource: "https://gamebomb.ru/files/galleries/001/a/ac/174799.jpg",
                    landscapeSource: "https://storge.pic2.me/upload/377/57cb1132c9669.jpg",
                }, 
                {
                    id: 2, 
                    userid: 2,
                    name: "Петя",
                    dateOfBirth: "18.10.1990",
                    city: "Omsk",
                    education: "MGU",
                    webSite: "www",
                    avatarSource: "https://gamebomb.ru/files/galleries/001/a/ac/174799.jpg",
                    landscapeSource: "https://storge.pic2.me/upload/377/57cb1132c9669.jpg",}, 
                {
                    id: 3, 
                    userid: 3,
                    name: "Жорик",
                    dateOfBirth: "05.05.1995",
                    city: "Perm",
                    education: "MIT, 19",
                    webSite: "www.com",
                    avatarSource: "https://gamebomb.ru/files/galleries/001/a/ac/174799.jpg",
                    landscapeSource: "https://storge.pic2.me/upload/377/57cb1132c9669.jpg",
                },
            ],
        },    
    },
    _callSubscriber() {
        console.log('State was changed');
    },    
    getState() {
        return this._state;
    },  
    subscribe(observer) {
        this._callSubscriber = observer;
    },    
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._state.friendsPage = friendsReducer(this._state.friendsPage, action);
        this._callSubscriber(this._state);
    },
};

export default store;