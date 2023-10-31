import { useState } from "react";


function ToDo(props) {

    const [kakis, setKakis] = useState(props.completed);

    function handleChange (event) {
        setKakis(event.target.checked);
    }
    
return(
    <>
    <p>UserId: {props.userId}</p>
    <p>id: {props.id}</p>
    <p>{props.title}</p>

    
    <input type="checkbox" 
    checked={kakis}
    onChange={handleChange}>
    </input>
    </>
);
    }
    export default ToDo;
