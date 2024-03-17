import { useDispatch, useSelector } from "react-redux"
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { deleteFavorite } from "../../../store/slices/todo";
export default function Favorite() {
    let favorites = useSelector(state=> state.todo.favorites);
    let dispatch = useDispatch()
  return (
    <div id="home">
      <section id="section">
        <div className="container">
          {favorites && favorites.map((el, idx)=>(
            <div key={idx} className="home_item">
                <div className="home_item_image">
                    <img src={el.imgURL} alt="iamage_product" />
                </div>
                <h4>name: {el.name}</h4>
                <h4>Last name: {el.lastName}</h4>
                <div className="home_item_btns">
                    <button onClick={()=>dispatch(deleteFavorite(el.id))}><DeleteIcon/></button>
                    <button ><FavoriteIcon sx={{color: "red"}}/></button>
                </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
