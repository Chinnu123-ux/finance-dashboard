import {

LineChart,
Line,
PieChart,
Pie,
Cell,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer

} from "recharts";

export default function Charts({transactions}){

const trendData=transactions.map(t=>({

date:t.date,
amount:t.amount||0

}));

const categoryTotals={};

transactions.forEach(t=>{

if(t.type==="expense"&&t.category){

categoryTotals[t.category]=
(categoryTotals[t.category]||0)+t.amount;

}

});

const pieData=Object.keys(categoryTotals)
.map(k=>({

name:k,
value:categoryTotals[k]

}));


return(

<div className="section">

<h2>Spending Analysis</h2>

<div className="charts">

<div className="chart">

<h3>Balance Trend</h3>

<ResponsiveContainer width="100%" height={250}>

<LineChart data={trendData}>

<XAxis dataKey="date"/>

<YAxis/>

<Tooltip/>

<Line type="monotone" dataKey="amount"/>

</LineChart>

</ResponsiveContainer>

</div>


<div className="chart">

<h3>Expense Categories</h3>

<ResponsiveContainer width="100%" height={250}>

<PieChart>

<Pie data={pieData} dataKey="value" label>

{pieData.map((_,i)=>(

<Cell key={i}/>

))}

</Pie>

<Tooltip/>

</PieChart>

</ResponsiveContainer>

</div>

</div>

</div>

);

}