import "./Banner.css"

export default function Banner() {

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;

    }

    return (
        <header className="banner" style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://bg-so-1.zippyimage.com/2021/05/11/b84d869e503da08daec3a631764d660a.png")`,
            backgroundPosition: "center center",
        }}>
            <div className="banner__contents">
                <h1 className="banner__title">Movie Name</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">
                    {truncate(`thisisisisisisis`,
                        150)}
                </h1>
            </div>

            <div className="banner--dadeBottom"/>
        </header>
    )
}