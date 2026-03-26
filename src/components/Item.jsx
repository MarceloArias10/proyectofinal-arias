
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Item = ({ id, name, price, img, stock }) => {
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} style={{ height: '200px', objectFit: 'cover' }} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Price: ${price}
                    </Card.Text>
                    <Card.Text>
                        Stock: {stock}
                    </Card.Text>
                    <Link to={`/item/${id}`}>
                        <Button variant="primary">Ver Detalle</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};
export default Item;
