import { createContext } from "react";

const CATEGORIES = [
    {
      name: "Food" ,
      icon: "fa-solid fa-burger",
      quantity: 204,
    },
  
    {
      name: "Holiday" ,
      icon: "fa-solid fa-plane-departure",
      quantity: 102,
    },
  
    {
      name: "Leisure" ,
      icon: "fa-solid fa-masks-theater",
      quantity: 305,
    },
  
    {
      name: "Fashion" ,
      icon: "fa-solid fa-bag-shopping",
      quantity: 131,
    },
  
  
    {
      name: "Beauty" ,
      icon: "fa-solid fa-heart",
      quantity: 441,
    },
  
    {
      name: "Electronics" ,
      icon: "fa-solid fa-plug",
      quantity: 227,
    },
  
    {
      name: "Home" ,
      icon: "fa-solid fa-house",
      quantity: 290,
    },
    
    {
      name: "Gifts" ,
      icon: "fa-solid fa-gift",
      quantity: 100,
    },
  
    {
      name: "Automotive" ,
      icon: "fa-solid fa-car-side",
      quantity: 87,
    },
  
    {
      name: "Education" ,
      icon: "fa-solid fa-school",
      quantity: 132,
    },
  
    {
      name: "Child" ,
      icon: "fa-solid fa-child-reaching",
      quantity: 242,
    },
  
    {
      name: "Finance" ,
      icon: "fa-solid fa-money-check-dollar",
      quantity: 111,
    },
  ]

const GlobalContext = createContext({});

export const GlobalProvider = ({children}) => {
    const categories = CATEGORIES;

    return(
        <GlobalContext.Provider value={{categories}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext;