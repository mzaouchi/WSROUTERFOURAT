import { Link } from "react-router-dom"

const NavUser=()=>{
    return(
        <div>
            <ul>
                <Link to='/'><li>Home</li></Link>
                <Link to='/Users'><li>Users</li></Link>
                <Link to="/Contact"><li>Contact</li></Link>
            </ul>

        </div>
    )
}

export default NavUser