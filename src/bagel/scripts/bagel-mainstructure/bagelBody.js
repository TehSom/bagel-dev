import bagelFooter from "./bagel-components/bagelFooter";
import bagelTable from "./bagel-components/bagelTable";

function bagelBody() {
    return (
        <div className="bagel-Body">
            { bagelTable() }
            { bagelFooter() }
       </div>
    );  
};

export default bagelBody;