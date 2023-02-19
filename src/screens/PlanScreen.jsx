import './PlanScreen.css'
import db from "../firebase" //penser à ajouter la db
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {selectUser} from "../features/userSlice";
import "./PlanScreen.css"
import {loadStripe} from "@stripe/stripe-js";

//la solution stripe est jointe a firebase (depuis les extensions)
//Products bdd firebase créé (lié à stripe)
export default function () {
    //5.1 abonnement Netflix Stripe
    const [products, setProducts] = useState([]);
    const user = useSelector(selectUser); //je recuperer mon utilisateur (redux)

    //5.3
    const [subscription, setSubscription] = useState(null);

    //5.3 accéder aux information de l'abonné
    // customers > subscriptions
    useEffect(() => {
        db.collection('customers')
            .doc(user.uid)//accéder à un document depuis une collection
            .collection('subscriptions')
            .get()
            .then(querySnapShot => {
                querySnapShot.forEach(async subscriptions => {
                    setSubscription({
                        //role champ depuis subscription
                        role: subscription.data().role,
                        current_period_end: subscriptions.data()
                            .curent_period_end.seconds,
                    })
                })
            })
    }, [user.uid]),

    useEffect(() => {
        //collection products 5.1
        db.collection('products')
            .where("active", "==", true)
            .get()
            .then((querySnapShot) => {
                const products = {}; // creation d'un tableau qui regroupe products & prices
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
                        //j'ajoute priceId & priceData à mon products
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

    const loadCheckout = async (priceId) => {
        //collection customers 5.2
        const docRef =await db.collection('customers')
            .doc(user.uid) //redux
            .collection;('checkout_sessions')
            .add({
                price: priceId,
                success_url: window.location.origin,
                cancel_url: window.location.origin,
            });
            docRef.onSnapshot(async(snap) => {
                const {error, sessionId} = snap.data();
                if (error) {
                    alert(`An error occured: ${error.message}`);
                }

                if (sessionId) {
                    //nous avons une session, nous somme redirect to checkout
                    //init stripe

                    //API key stripe
                    const stripe = await loadStripe(
                        "sk_test_1DRSPoAqIsIgMUjtHaMu9VOf00Mj40b4JV");
                    stripe.redirectToCheckout({sessionId});
                }
            });
    };

    return (
        <div className='planScreen'>
            {subscription && <p>Renewal date:</p>}
            {Object.entries(products).map(([productId, productData]) => {
                // ajouter une logique pour vérifier si l'abonnement de l'utilisateur est actif

                const isCurrentPackage = productData.name?.toLowerCase()
                    .includes(subscription?.role);
                return (
                    <div key={productId} className="plansScreen__plans">
                        <div className="plansScreen__info">
                        <h5>{productData.name}</h5>
                        <h6>{productData.description}</h6>
                        </div>
                        <button onClick={() => !isCurrentPackage &&
                            loadCheckout(productData.prices.priceId)}>
                            {isCurrentPackage ? 'Current Package': 'Subscribe'}
                        </button>
                    </div>
                );
            })}
        </div>
    );
}