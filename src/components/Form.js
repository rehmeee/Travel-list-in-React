import { useState } from "react";

function Form() {
    function handleSubmit(e) {
        e.preventDefault();
        if(!description) return;
        const  newItem = {description, quantity, packed: false, id: Date.now()};
        console.log(newItem);
        setDescription("");
        setquantity(1);
    }
    const [description,setDescription] = useState("");
    const [quantity,setquantity] = useState(1);
    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for Your Trip 😍</h3>
            <select value={quantity} onChange={(e)=>setquantity(Number(e.target.value))}>  {Array.from({length:20},(_,i)=>i+1).map((num)=>(
                <option value={num} key={num}>{num}</option>
            ))}</select>
            <input type="text" placeholder="Item..." value={description} onChange={(e)=>setDescription(e.target.value)}/>
            <button>ADD</button>
            
        </form>
    )
} 

export default Form
