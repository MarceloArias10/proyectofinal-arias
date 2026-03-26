
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import ItemCount from "./ItemCount";
import { Card, Button, Row, Col } from "react-bootstrap";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [addedQuantity, setAddedQuantity] = useState(0);
    const { addItem } = useCart();

    const handleOnAdd = (quantity) => {
        setAddedQuantity(quantity);
        addItem({ id, name, price }, quantity);
    };

    return (
        <Row className="justify-content-center">
            <Col md={8}>
                <Card className="text-center">
                    <Card.Header>{category}</Card.Header>
                    <Card.Img variant="top" src={img} style={{ maxHeight: '400px', objectFit: 'contain' }} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                        <Card.Text className="fs-3 fw-bold">${price}</Card.Text>
                        <Card.Text>Stock disponible: {stock}</Card.Text>

                        {stock > 0 ? (
                            addedQuantity > 0 ? (
                                <Link to="/cart">
                                    <Button variant="success">Terminar compra</Button>
                                </Link>
                            ) : (
                                <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                            )
                        ) : (
                            <p className="text-danger">Sin Stock</p>
                        )}

                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default ItemDetail;
