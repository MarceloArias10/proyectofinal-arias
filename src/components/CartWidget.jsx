
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { Badge } from 'react-bootstrap';


const CartWidget = () => {
    const { totalQuantity } = useCart();
    const quantity = totalQuantity();

    if (quantity === 0) return null;

    return (
        <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
            🛒 <Badge bg="secondary" className="ms-1">{quantity}</Badge>
        </Link>
    );
};

export default CartWidget;
