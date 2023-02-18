import './PlanScreen.css'
import db from "../firebase" //penser à ajouter la db
import {useEffect, useState} from "react";

//la solution stripe est jointe a firebase (depuis les extensions)
//Products bdd firebase créé (lié à stripe)
export default function () {
    //5.1 abonnement Netflix Stripe
    const [products, setProducts] = useState([]);

    useEffect(() => {
        db.collection('products')
            .where("active", "==", true)
            .get()
            .then((querySnapShot) => {
                const products = {};
                //je recupère productDoc (element present dans querySnapShot)
                //qui est un tableau dans un tableau
                querySnapShot.forEach(async productDoc => {
                    //je recupère les données data(...) comrespondant à l'id
                    products[productDoc.id] = productDoc.data()
                    //je recupère le price affilié au productDoc

                    //je récupère le price depuis les data() de
                    // productDoc.collection.prices
                    const priceSnap = await productDoc.ref.collection('prices')
                        .get();
                    //j'affecte le price au product.id
                    priceSnap.docs.forEach(price => {
                        products[productDoc.id].prices = {
                            priceId: price.id,
                            priceData: price.data()
                        }
                    })
                });
                setProducts(products);
            })
    }, []);

    console.log(products);
    return (
        <div className='planScreen'>

        </div>
    )
}