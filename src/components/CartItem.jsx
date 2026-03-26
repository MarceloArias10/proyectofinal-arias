
import { useCart } from "../context/CartContext";
import { Button } from "react-bootstrap";

const CartItem = ({ id, name, price, quantity }) => {
    const { removeItem } = useCart();

    return (
        <tr>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>${price}</td>
            <td>${price * quantity}</td>
            <td>
                <Button variant="danger" onClick={() => removeItem(id)}>X</Button>
            </td>
        </tr>
    );
};
export default CartItem;
