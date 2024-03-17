import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo } from "../../../store/slices/todo"

export default function Admin() {
  let product = useSelector((state)=> state.todo.product)
  let dispatch = useDispatch()
  
  const [inputValue, setInputValue]= useState({
    name: "",
    lastName: "",
    imgURL: "",
  })
  const valueTrue = !!(inputValue.name && inputValue.lastName && inputValue.imgURL);
  function handleCreateProduct(){
    let newProduct = {...inputValue, id: Date.now() }
    if( valueTrue&&!product.find(el=> el.name === newProduct.name )){
        dispatch(addTodo(newProduct))
        setInputValue({ 
            name: "",
            lastName: "",
            imgURL: "",
        })
    }else{
        alert("The product already exists")
        return 
    }
    
  }
  return (
    <div id="admin">
      <section>
        <h1>Todo</h1>
        <input value={inputValue.name} onChange={(e)=>setInputValue({...inputValue, name: e.target.value})} type="text" placeholder="Name"/>
        <input value={inputValue.lastName} onChange={(e)=>setInputValue({...inputValue, lastName: e.target.value})} type="text" placeholder="Last name"/>
        <input value={inputValue.imgURL} onChange={(e)=>setInputValue({...inputValue, imgURL: e.target.value})} type="text" placeholder="image URL"/>
        <div className="admin_btns">
            <button onClick={handleCreateProduct}>create</button>
        </div>
      </section>
    </div>
  )
}
