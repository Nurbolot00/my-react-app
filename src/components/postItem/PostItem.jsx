import React from 'react';
import MyButton from '../UI/button/MyButton';

const PostItem = ({title,body,number}) => {
    return (
        <div className='post'  >
            <div className='post__content'>
            <strong>{number}. {title}</strong>
            <p>{body}</p>
            </div>
            <div className='post__btns'>
                <MyButton>DELETE</MyButton>
            </div>
        </div>
    );
};

export default PostItem;