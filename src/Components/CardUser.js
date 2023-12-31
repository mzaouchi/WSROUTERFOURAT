import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CardUser=({el})=>{
    return(
        <Link to={`/Profil/${el.id}`}>
         <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={el.image} />
            <Card.Body>
                <Card.Title>{el.name}</Card.Title>
                <Card.Text>
                {el.age}
                </Card.Text>               
            </Card.Body>
            </Card>
        </Link>
    )
}

export default CardUser