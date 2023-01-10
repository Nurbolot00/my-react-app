import React from 'react';
import { useState } from 'react';
import MyButton from '../UI/button/MyButton';
import MyInput from '../UI/input/MyInput';
import {v4 as uuidv4} from 'uuid'

const PostForm = (props) => {
    console.log(props.onPost);

    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')

    const titleChangeHandler = (event) =>{
        setTitle(event.target.value)
    }

    const bodyChangeHandler = (event) =>{
        setBody(event.target.value)
    }


    const addNewPost = ((e) =>{
        e.preventDefault()
        console.log("Button clicked");

        props.onPost(newPost)

        setTitle("")
        setBody("")   
    })

    const newPost ={
        id: uuidv4(),
        title,
        body
    }


    
    return (
        <form action="">
            <MyInput value={title} onChange={titleChangeHandler} type='text' placeholder='Post Name'/>
            <MyInput value={body} onChange={bodyChangeHandler} type='text' placeholder='Post Description'/>
            <MyButton onClick ={addNewPost}>Add Post</MyButton>
        </form>
    );
};

export default PostForm;