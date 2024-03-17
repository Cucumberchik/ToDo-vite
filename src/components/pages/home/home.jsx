import { useDispatch, useSelector } from "react-redux"
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { addFavorite, deleteTodo } from "../../../store/slices/todo";
import Edit from "../../modal_window/edit";
import { useState } from "react";
import { Pagination } from "@mui/material";
export default function Home() {
    let {product, favorites} = useSelector(state=> state.todo)
    const [modal, setModal] = useState(false)
    const [obj, setObj]= useState(null)
    const dispatch = useDispatch()
    function deleteProduct(id){
        dispatch(deleteTodo(id))
    }
    const editProduct = async(obj)=>{
        setModal(true)
        setObj(obj)
    }
    function addFavorites(obj){
        if(!favorites.find((el)=>el.id === obj.id)){
            dispatch(addFavorite(obj))
        }else{
            alert("already added")
            return
        }
    }

    const [num, setNum] = useState([0, 10])
    function handlePagination(e, v){
        
        if(v == 1){
            setNum([0, 10])
        }else {
            let res = ".".repeat(v -1 ).split("").map(el=> el = 10).reduce((ac, curr)=>ac+curr);
        setNum([res, res + 10])
        }
    }
    console.log(num);
  return (
    <div id="home">
        {modal && <Edit obj={obj} modal={modal} setModal={setModal}/> }
      <section id="section">
        <div className="container">
          {product && product.slice(num[0], num[1]).map((el, idx)=>(
            <div key={idx} className="home_item">
                <div className="home_item_image">
                    <img src={el.imgURL} alt="iamage_product" />
                </div>
                <h4>name: {el.name}</h4>
                <h4>Last name: {el.lastName}</h4>
                <div className="home_item_btns">
                    <button onClick={()=>deleteProduct(el.id)}><DeleteIcon/></button>
                    <button onClick={()=>addFavorites(el)}><FavoriteIcon sx={{color: !!favorites.find((ell)=>ell.id == el.id) ? "red": "white"}}/></button>
                    <button onClick={()=>editProduct(el)}><ModeEditIcon/></button>
                </div>
            </div>
          ))}
        </div>
        <Pagination onChange={handlePagination} count={product.length  / 10} variant="outlined" color="primary" />
      </section>
    </div>
  )
}
