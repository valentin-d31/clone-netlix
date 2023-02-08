import "./ProfileScreen.css"
import Nav from "../Nav";
import {useSelector} from "react-redux";
import {selectUser} from "../features/userSlice";

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
                        <h2></h2>
                    </div>
                </div>
            </div>
        </div>
    )
}