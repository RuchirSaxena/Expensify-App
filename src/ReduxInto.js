import React, { Component } from "react";
import { createStore } from "redux";



class ReduxDemo extends Component {
    render() {
      
        //Step 1: Create Store
        const store = createStore(reducer, "Peace");
         
        //Step 2:Create Reducer 
        function reducer(state, action) {
            if (action.type === "Attack") {
                return action.payload;
            }
            if (action.type === "Multiple Attack") {
                return action.payload;
            }
            return state;
        }

        //Step 3:Subscribe
        store.subscribe(()=>{
            console.log("Store:We Need " ,store.getState());
        });

        //Step 4:Dispatch
        store.dispatch({type:"Attack",payload:"ItronMan"});
        store.dispatch({type:"Multiple Attack",payload:"Avengers"});

        return (
            <div>
                Redux Demo
            </div>
        )
    }
}

export default ReduxDemo;
