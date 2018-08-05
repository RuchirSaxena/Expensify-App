import { createStore } from "redux";

/*Reducers
Reducers specify how the application's state changes in response to actions sent to the store. Remember that actions only describe what happened, but don't describe how the application's state changes.
1.Ruducer are pure fuctions 
2.Never change state or action
*/

 const countReducer=(state = { count: 0 }, action) => {
    // debugger;
    //  console.log("Running...");
    switch (action.type) {
        case "INCREMENT":

            return {
                count: state.count + action.incrementby
            }
            break;
        case "DECREMENT":
            // const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - action.decrementBy
            }
            break;
        case "RESET":
            return {
                count: 0
            }
            break;
        case "SET":
            return {
                count: action.count
            }
        default:
            return state;
            break;
    }

}


//createStore Takes reducer 
const store = createStore(countReducer);

/*subscribe 
To watch for changes to the Redux store we use subscribe
subscribe method returns a function using which we can unSubscribe from the store
Note: this will not stop actions after unSubscribe to make chages to the redux store its just only we are not watching this changes anymore
*/
let unSubscribe = store.subscribe(() => {
    console.log(store.getState());
});




/*Actions =>An object that is sent to the store
create actions to:
1.Increment the counter =>Increment
2.Drement the counter =>Dcrement
3.Reset the counter to ZERO =>Reset


*/

//Action Generators
const incrementCount = (payload = {}) => {
    //debugger;
    return {
        type: 'INCREMENT',
        incrementby: typeof payload.incrementby === 'number' ? payload.incrementby : 1
    };
};

//Further re-factor of above code
const decrementCount = ({ decrementBy = 5 }) => {
    return {
        type: "DECREMENT",
        decrementBy
    }
}

// store.dispatch({
//     type: "INCREMENT", //Action
//     incrementby: 5
// });
//Above code can be replace by below code
store.dispatch(incrementCount({ incrementby:10}));
store.dispatch(decrementCount({decrementBy:5}));
//this will unSubscribe the subscription
unSubscribe();
store.dispatch({
    type: "RESET" //Action
});

store.dispatch({
    type: "DECREMENT"
});

store.dispatch({
    type: "DECREMENT"
});

store.dispatch({
    type: 'SET',
    count: 100
});


console.log(store.getState());







