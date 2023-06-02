import bagelRow1 from "./bagel-table/bagelRow1";
import bagelRow2 from "./bagel-table/bagelRow2";
import links from "./table-components/bagelLinks";
import discordWidget from "./table-components/discordwidget";


/* sidebar links and placeholder */
function bagelRow1() {
    return (
        <div className="bagel-Row-1">
            {bagelCol1Row1()}
            {bagelCol2() }
        </div>        
    );
};

/* handles links */
function bagelCol1Row1() {
    return (
        <>
        <div className="bagel-Col-1">
            { links() }
        </div>
        </>
        
    );
};

/* placeholder */
function bagelCol2() {
    return (
        <div className="bagel-Col-2"> 
        
        </div>
    );
};

/* discord Widget, pending more columns */
function bagelRow2() {
    return (
        <>
        <div className="bagel-Row-2">
            { bagelCol1Row2() }
        </div>
        </>
        
    );
};

export default bagelRow2
/* Bagel Discord Widget */
function bagelCol1Row2() {
    return (
        <>
        <div className="bagel-Col-1">
            { discordWidget() }
        </div>
        </>
        
    );
};

/* completed table*/
function bagelTable() {
    return (
        <div className="bagel-Table">
            {bagelRow1()}
            {bagelRow2()}
        </div>        
    );
};

export default bagelTable;