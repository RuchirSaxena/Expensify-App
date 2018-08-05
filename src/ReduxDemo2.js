import { createStore } from "redux";


const store = createStore((state = { count: 0 }, action) => {
    // debugger;
    //  console.log("Running...");
    switch (action.type) {
        case "INCREMENT":
            const incrementby = typeof action.incrementby === 'number' ? action.incrementby : 1;
            return {
                count: state.count + incrementby
            }
            break;
        case "DECREMENT":
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - decrementBy
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

});

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
store.dispatch({
    type: "INCREMENT", //Action
    incrementby: 5
});

store.dispatch({
    type: "DECREMENT",//Action
    decrementBy: 10
});
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







