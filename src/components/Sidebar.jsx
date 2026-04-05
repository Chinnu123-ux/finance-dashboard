import {
FaWallet,
FaChartPie,
FaExchangeAlt,
FaLightbulb
} from "react-icons/fa";

export default function Sidebar(){

return(

<div className="sidebar">

<h2>Money Manager</h2>

<ul>

<li>
<FaWallet/>
Overview
</li>

<li>
<FaChartPie/>
Analysis
</li>

<li>
<FaExchangeAlt/>
Transactions
</li>

<li>
<FaLightbulb/>
Insights
</li>

</ul>

</div>

);

}