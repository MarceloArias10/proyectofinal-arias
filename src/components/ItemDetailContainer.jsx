
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";
import ItemDetail from "./ItemDetail";
import { Container, Spinner } from "react-bootstrap";

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams();

    useEffect(() => {
        setLoading(true);
        const docRef = doc(db, "products", itemId);

        getDoc(docRef)
            .then((docSnap) => {
                if (docSnap.exists()) {
                    setItem({ id: docSnap.id, ...docSnap.data() });
                } else {
                    setItem(null);
                }
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
    }, [itemId]);

    return (
        <Container className="mt-4">
            {loading ? <Spinner animation="border" /> : item ? <ItemDetail {...item} /> : <h2>Producto no encontrado</h2>}
        </Container>
    );
};
export default ItemDetailContainer;
