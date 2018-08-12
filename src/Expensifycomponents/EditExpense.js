import React from "react";

const EditExpense = (props) => {
    console.log(props);
    debugger;  
    console.log(props.match.params.id);
    return (
        <div>
            You can Edit expense here for the id ={props.match.params.id}
        </div>
    );
};

export default EditExpense;