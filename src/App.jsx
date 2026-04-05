import { useState, useEffect } from "react";

import SummaryCards from "./components/SummaryCards";
import Charts from "./components/Charts";
import Transactions from "./components/Transactions";
import RoleToggle from "./components/RoleToggle";
import Insights from "./components/Insights";

import { initialTransactions } from "./data/mockData";

import "./index.css";

export default function App(){

const [transactions,setTransactions]=useState(()=>{

const saved=localStorage.getItem("transactions");

return saved
? JSON.parse(saved)
: initialTransactions;

});

const [role,setRole]=useState("viewer");

useEffect(()=>{

localStorage.setItem(
"transactions",
JSON.stringify(transactions)
);

},[transactions]);


return(

<div className="container">

<h1>
Finance Dashboard
</h1>

<RoleToggle
role={role}
setRole={setRole}
/>


<SummaryCards
transactions={transactions}
/>


<Charts
transactions={transactions}
/>


<Insights
transactions={transactions}
/>


<Transactions
transactions={transactions}
setTransactions={setTransactions}
role={role}
/>


</div>

);

}