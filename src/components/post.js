import React from 'react';
import ReplyButton from './reply.button';
import LikeButton from './like-button';
import Comment from './comment';

//post class that is a react component 
//let e = React.createElement;
//export default class Post extends React.Component{
//    render(){
 //       return e('div', 
 //           {class: 'card w-75'},
 //           e('div',{class: 'card-header bg-success text-white'},'Username and Time'),
 //           e('div', {class:'card-body'}, 'Post Content'),
 //           e('div', {class: 'card-footer'},
  //          e(LikeButton, {}, null),
  //          e('span', {}, " "),
  //          e(ReplyButton, {}, null),
  //          e('br', {}, null),
  //          e(Comment, {}, null), //static comments 
  //          e(Comment, {}, null), 
  //      )
  //  );
  //  }
//}

// JSX Notes: Converting the code above from React to JSX 
export default class Post extends React.Component{
    constructor(props){ //The props added to the posts in newsfeed.js are passed in through here 
        super(props);
        this.state ={ // --> which will then set the state from the props passed in
            comments: props.comments, 
            content: props.content,
            count: 0
        };
    }
    render(){
     let comments; //take away comments to equal an empty array 
     if(this.state.comments){ 
        //modify this code - remove the for loop
        //add a map method that is going to take each comment inside of this.state.comments
            //create a JSX component with the index and the comment as the props 
                //finally push those to the comments variable 
        comments = this.state.comments.map((comment, index) => <Comment key={index} {...comment} />)
    
     }
        return(
        <div className="card w-75">
            <div className='card-header bg-primary text-white'>
                Username and Time
            </div>
            <div className='card-body'>
                {this.state.content} 
            </div>
            <div className='card-footer'>
                <LikeButton />
                <ReplyButton />
                {comments} 
            </div>
        </div>
        );
    }
}