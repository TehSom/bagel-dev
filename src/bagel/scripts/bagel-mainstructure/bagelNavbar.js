import bagelTag from "../../bageltag";

function bagelNavbar() {
    return (
        <div className="bagel-Navbar">
            <div className="bagel-Gradient"><h1>The Baker's Bloc | { bagelTag() }</h1></div>
        </div>
    );        
};

export default bagelNavbar;