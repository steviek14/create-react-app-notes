import React from 'react';
import ReplyButton from './reply.button';
import LikeButton from './like-button';
let e = React.createElement
/*export default class Comment extends React.Component{
    render(){
        return e('div', 
            {class: 'card w-75'},
            e('div',
                {class: 'card-header bg-success text-white'},
                'Username and Time'),
            e('div', {class:'card-body'}, 'Comment'),
            e('div', {class: 'card-footer'},
            e(LikeButton, {}, null),
            e('span', {}, " "),
            e(ReplyButton, {}, null)
        )
    );
    }
}*/

//JSX Notes:Converting the code in React to JSX 

 export default class Comment extends React.Component{
    render(){
        return(
            <div className='card w-75'>
                <div className='card-header bg-success text-white'>
                    {this.props.username}{this.props.date}
                </div>
                <div className='card-body'>
                    {this.props.content}
                </div>
                <div className='card-footer'>
                    <LikeButton />
                    <ReplyButton />
                </div>
            </div>
        )
    }
 }