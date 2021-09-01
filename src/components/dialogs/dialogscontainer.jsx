import { sendMessageActionCreator } from "../../redux/messagesReducer";
import Dialogs from "./dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
    return {
        newMessageText: state.messagesPage.newMessageText,
        dialogsData: state.messagesPage.dialogsData,
        messagesData: state.messagesPage.messagesData,
    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        onSendMessageClick: (newMessageText) => {
            dispatch(sendMessageActionCreator(newMessageText));
        },
    };
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(Dialogs);