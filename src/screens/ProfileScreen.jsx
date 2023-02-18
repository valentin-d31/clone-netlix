import "./ProfileScreen.css"
import Nav from "../Nav";
import {useSelector} from "react-redux";
import {selectUser} from "../features/userSlice";
import {auth} from "../firebase"
import PlanScreen from "./PlanScreen";

export default function ProfileScreen() {

    //4.profil user

    const user = useSelector((state) => state.user)

    return (
        <div className="profileScreen">
            <Nav/>
            <div className="profileScreen__body">
                <h1>Edit Profile</h1>
                <div className="profileScreen__info">
                    <img
                    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    alt=""/>
                    <div className="profileScreen__details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen__plans"></div>
                            <h3>Plans //Partie 5.1 abonnement netflix (stripe)</h3>
                            <PlanScreen/>

                            <button
                                //deconnexion
                                onClick={() => auth.signOut()}
                                className="profileScreen__signOut">Sign Out</button>
                    </div>
                </div>
            </div>
        </div>
    )
}