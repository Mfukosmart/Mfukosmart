import {
Bar
} from "react-chartjs-2";

import {
Chart,
CategoryScale,
LinearScale,
BarElement,
Tooltip,
Legend
} from "chart.js";

Chart.register(
CategoryScale,
LinearScale,
BarElement,
Tooltip,
Legend
);

export default function SalesChart(){

const data={

labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],

datasets:[{

label:"Sales",

data:[25,18,30,24,40,55,62],

backgroundColor:"#2563eb",

borderRadius:8

}]

};

return(

<div className="bg-white rounded-2xl shadow-sm p-8">

<h2 className="text-xl font-semibold mb-8">

Weekly Sales

</h2>

<Bar data={data}/>

</div>

);

}