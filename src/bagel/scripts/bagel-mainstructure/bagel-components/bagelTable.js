import bagelRow1 from "./bagel-table/bagelRow1";
import bagelRow2 from "./bagel-table/bagelRow2";

function bagelTable() {
    return (
        <div className="bagel-Table">
            {bagelRow1()}
            {bagelRow2()}
        </div>        
    );
};

export default bagelTable;