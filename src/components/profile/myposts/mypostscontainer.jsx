import MyPost from "./myposts";
import { addPostActionCreator } from "../../../redux/profileReducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText,
    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText));
        },
    };
};

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);
export default MyPostContainer;