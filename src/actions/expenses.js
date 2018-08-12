import { UUID } from "../utility";

/*Actions for this expnsify app
================================*/
// 1.ADD_EXPENSE
export const addExpense = (
    //default Arguments for the function
    { description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}
) => {

    return {

        type: "ADD_EXPENSE",
        expense: {
            id: UUID(),
            description, //== description :description
            note,
            amount,
            createdAt

        }
    }
};




// 2.REMOVE_EXPENSE
export const removeExpense = (id = 0) => {
    return {
        type: "REMOVE_EXPENSE",
        id: id
    }
};

// 3.EDIT_EXPENSE
export const editExpense = (id = 0, updatedExpense = {}) => {
    return {
        type: "EDIT_EXPENSE",
        id,
        updatedExpense
    }
};

