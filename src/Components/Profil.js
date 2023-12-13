import { useParams } from "react-router-dom"

const Profil=({users})=>{
    const {id} = useParams()
    const la3bedelinlawej3lih = users.find((el,i,t)=> el.id == id)
    return(
        <div>
            <h1>Profil</h1>
            <h2>{la3bedelinlawej3lih.name}</h2>
            <img src={la3bedelinlawej3lih.image} alt="Not Dali"/>
        </div>
    )
}

export default Profil