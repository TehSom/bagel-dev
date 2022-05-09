import bagelNavbar from "./bagelNavbar";
import bagelBody from "./bagelBody";

function bagelContainer() {
    return (
        <div className="bagel-Container">
            { bagelNavbar() }
            { bagelBody() }
        </div>
    );
};

export default bagelContainer;