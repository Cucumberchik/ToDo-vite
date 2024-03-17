import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { editTodo } from "../../store/slices/todo"

export default function Edit({obj, setModal}) {
    useEffect(()=>{setInputValue(obj)},[])
    let dispatch = useDispatch()
    const [inputValue, setInputValue]= useState({
        name: obj.name,
        lastName: obj.lastName,
        imgURL: obj.imgURL,
        id: obj.id
      })
      console.log(inputValue);
     const handleCloseEditModal = async()=>setModal(false);
     const handleEditProduct = async()=> {
        dispatch(editTodo(inputValue))
        setModal(false)
     };
  return (
    <div  id="edit" onClick={handleCloseEditModal}>
      <div className="section" onClick={(e)=>e.stopPropagation()}>
      <h1>Todo</h1>
        <input value={inputValue.name} onChange={(e)=>setInputValue({...inputValue, name: e.target.value})} type="text" placeholder="Name"/>
        <input value={inputValue.lastName} onChange={(e)=>setInputValue({...inputValue, lastName: e.target.value})} type="text" placeholder="Last name"/>
        <input value={inputValue.imgURL} onChange={(e)=>setInputValue({...inputValue, imgURL: e.target.value})} type="text" placeholder="image URL"/>
        <div className="admin_btns">
            <button onClick={handleEditProduct}>Save</button>
        </div>
      </div>
    </div>
  )
}
