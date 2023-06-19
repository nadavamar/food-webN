import React from "react";

 const cartContext= React.createContext({
    items: [],
    amount:0,
    addItems:(item)=>{},
    removeItem:(id)=>{},
});

export default cartContext;