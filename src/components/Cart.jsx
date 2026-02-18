
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Container, Button, Table } from "react-bootstrap";
import CartItem from "./CartItem";

const Cart = () => {
    const { cart, clearCart, totalQuantity, totalPrice } = useCart();

    if (totalQuantity() === 0) {
        return (
            <Container className="text-center mt-5">
                <h1>No hay items en el carrito</h1>
                <Link to="/" className="btn btn-primary mt-3">Volver a la tienda</Link>
            </Container>
        );
    }

    return (
        <Container className="mt-4">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Subtotal</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(p => <CartItem key={p.id} {...p} />)}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={3} className="text-end fw-bold">Total:</td>
                        <td className="fw-bold">${totalPrice()}</td>
                        <td></td>
                    </tr>
                </tfoot>
            </Table>
            <div className="d-flex justify-content-end">
                <Button variant="danger" className="me-2" onClick={clearCart}>Vaciar Carrito</Button>
                <Link to="/checkout" className="btn btn-success">Finalizar Compra</Link>
            </div>
        </Container>
    );
};
export default Cart;
