import React from "react";
import { useState } from "react";

function NameChanger(){
const [name,setName] = useState("BBA");
const changeName = ()=> setName("BCA")
return(
<div>
    <h2>Name: {name} </h2>
    <button onClick={changeName}>Change Name</button>
</div>    
);
}

export default NameChanger;