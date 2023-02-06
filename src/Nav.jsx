import './Nav.css'

export default function Nav() {
    return(
        <div className="nav">
            <img
                className="nav__logo"
                src="https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png?w=1024"
                alt=""
            />
            <img
                className="nav__avatar"
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                alt=""
            />
            <h1>This is the navbar</h1>
        </div>
    )
}