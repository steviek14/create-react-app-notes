import React from 'react';
import Post from './post';

let e = React.createElement;

export default class NewsFeed extends React.Component{
    //recreated the hard-coded comments from post.js that we commented out 
    //and put them in the render method inside the comments array 
    render(){
        let comments =[
            {
                content:'This is my content',
                username: 'Tommy',
                date: '12-12-2018'
            },
            {
                content: 'This is another comment',
                username: 'Sammy',
                date:'12-17-2018'

            },
            {
                content: 'Here is a comment from me',
                username: 'Sally',
                date:'12-19-2018'

            }
        ];
        return(
            //passed in the comments into the props for the posts down below
                //used the spread operator, then accessed the comments inside the comments array object, then the content 
            //The other two posts won't have the props in them just the first one 
    
            <div className='container'>
                <Post {...{comments: comments, content: 'This is my post content!'}}/>
                <Post />
                <Post />
            </div>
        );
    }
}