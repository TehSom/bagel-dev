import bagelCol1Row1 from "./bagelCol1Row1";
import bagelCol2 from "./bagelCol2";

function bagelRow1() {
    return (
        <div className="bagel-Row-1">
            {bagelCol1Row1()}
            {bagelCol2() }
        </div>        
    );
};

export default bagelRow1;