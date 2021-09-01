import DialogsMessage from "./dialogsmessage/dialogsmessage";
import DialogsPerson from "./dialogsperson/dialogsperson";
import './dialogs.scss'
import React from "react";
import { Redirect } from "react-router";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../common/formsControl/formsControl";
import { maxLengthCreator, required } from "../../utils/validators/validators";

const maxLength100 = maxLengthCreator(100);

const DialogsForm = (props) => {
    return (
        <form className="dialogs__newmessage" onSubmit={props.handleSubmit}>
            <Field 
                component={Textarea}
                validate={[required, maxLength100]}
                placeholder='Enter your message'
                name='message'
            >
            </Field>
            <button>Send</button>
        </form>
    );
};

const DialogsFormRedux = reduxForm({form: 'dialogsForm'})(DialogsForm)

const Dialogs = (props) => {    
    
    let dialogsElements = props.dialogsData.map( el => <DialogsPerson name={el.name} id={el.id} />);
    let messagesElements = props.messagesData.map ( el => <DialogsMessage message={el.message} />);

    let addNewMessage = (value) => {
        props.onSendMessageClick(value.message)
    };

    if (!props.isAuth) {
        return <Redirect to={'/login'} />
    };

    return (
        <div className='dialogs'>
            <div className="dialogs__name">
                {dialogsElements}
            </div>
            <div className="dialogs__messages">
                <div>{messagesElements}</div>
                <DialogsFormRedux onSubmit={addNewMessage}/>                                              
            </div>
        </div>
    );
};

export default Dialogs;