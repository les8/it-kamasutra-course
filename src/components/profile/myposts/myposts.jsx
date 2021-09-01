import Post from "./post/post";
import './myposts.scss';
import { Field, reduxForm } from "redux-form";
import { required, maxLengthCreator } from "../../../utils/validators/validators";
import { Textarea } from "../../common/formsControl/formsControl";

const maxLength10 = maxLengthCreator(10);

let AddNewPostForm = (props) => {
    return (
        <form className='profile__postMaker' onSubmit={props.handleSubmit}>
            <Field 
                name='newPostText' 
                component={Textarea} 
                validate={[required, maxLength10]}
                placeholder='Post message' 
            />
            <button>Create Post</button>
        </form>
    );
};

let AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

const MyPost = (props) => {
    let postsElement = props.postsData.map( el => <Post message={el.message} likes={el.likesCount} />);

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    };
    return (
        <div className='profile__myposts'>
            <h2>My Posts</h2>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            {postsElement}            
        </div>
    );
};

export default MyPost;