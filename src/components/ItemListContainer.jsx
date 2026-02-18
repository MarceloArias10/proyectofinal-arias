
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';
import ItemList from './ItemList';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';

const ItemListContainer = ({ greeting }) => {
    const [items, itemsSet] = useState([]);
    const [loading, loadingSet] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        loadingSet(true);
        const collectionRef = categoryId
            ? query(collection(db, "products"), where("category", "==", categoryId))
            : collection(db, "products");

        getDocs(collectionRef)
            .then((snapshot) => {
                const products = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                itemsSet(products);
            })
            .catch((error) => console.log(error))
            .finally(() => loadingSet(false));
    }, [categoryId]);

    return (
        <Container className="mt-4">
            <h2 className="text-center mb-4">{greeting} {categoryId && `- ${categoryId}`}</h2>
            {loading ? <div className="text-center"><Spinner animation="border" role="status" /></div> : <ItemList items={items} />}
        </Container>
    );
};
export default ItemListContainer;
