import {useEffect, useState} from "react";

function Comment(props){

const [Comment, setComment] = useState ({});
const [loading, setLoading] = useState(true);
useEffect(() => {

  getComment();
  async function getComment(){

    const response = await fetch("https://jsonplaceholder.typicode.com/comments/1");

    const data = await response.json();

    setComment(data);
    setLoading(false);
}
}, []);
    
}
    export default Comment;