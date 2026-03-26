
import { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";

const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="d-flex flex-column align-items-center">
            <ButtonGroup className="mb-2">
                <Button variant="outline-primary" onClick={decrement}>-</Button>
                <Button variant="outline-primary" disabled>{quantity}</Button>
                <Button variant="outline-primary" onClick={increment}>+</Button>
            </ButtonGroup>
            <Button variant="primary" onClick={() => onAdd(quantity)} disabled={!stock}>
                Agregar al carrito
            </Button>
        </div>
    );
};
export default ItemCount;
