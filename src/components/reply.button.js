import React from 'react';

// export default allows this class to be accessible outside of this file when Webpack bundles everything up 
//steps: create new class, choose name, extend React.Component to create our own components 
export default class LikeButton extends React.Component{ //React.Component is a React class we can extend to create our own components 
    render(){ //render method determines what the component will look like as HTML on the app 
        return React.createElement('button', {class: 'btn btn-primary'}, 'Reply') //takes 3 arguments: what html element you want to create, props object, content/children of the element thats going to be rendered 
    }
}

//JSX Notes: 
//export default class LikeButton extends React.Component{ 
//    render(){ 
//        return <button className="btn btn-primary">Reply</button>; //JSX conversion from React 
//}