
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase/config";
import { Container, Form, Button, Alert } from "react-bootstrap";

const CheckoutForm = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [orderId, setOrderId] = useState("");

    const { cart, totalPrice, clearCart } = useCart();

    const handleConfirm = async (event) => {
        event.preventDefault();

        const order = {
            buyer: { name, phone, email },
            items: cart,
            total: totalPrice(),
            date: Timestamp.fromDate(new Date())
        };

        try {
            const docRef = await addDoc(collection(db, "orders"), order);
            setOrderId(docRef.id);
            clearCart();
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };

    if (orderId) {
        return (
            <Container className="mt-5 text-center">
                <h1>Gracias por tu compra!</h1>
                <p>Tu número de orden es: {orderId}</p>
            </Container>
        );
    }

    return (
        <Container className="mt-4">
            <h2 className="mb-4">Checkout</h2>
            <Form onSubmit={handleConfirm}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Tu nombre" value={name} onChange={({ target }) => setName(target.value)} required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPhone">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control type="tel" placeholder="Tu teléfono" value={phone} onChange={({ target }) => setPhone(target.value)} required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Tu email" value={email} onChange={({ target }) => setEmail(target.value)} required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Generar Orden
                </Button>
            </Form>
        </Container>
    );
};
export default CheckoutForm;
