import {
    Line
} from "react-chartjs-2";

import {
    Chart,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    Filler
} from "chart.js";

Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    Filler
);

export default function RevenueChart(){

const data={

labels:["Jan","Feb","Mar","Apr","May","Jun"],

datasets:[{

label:"Revenue",

data:[50000,70000,65000,90000,120000,150000],

fill:true,

borderColor:"#15803d",

backgroundColor:"rgba(22,163,74,.12)",

tension:.4

}]

};

const options={

responsive:true,

plugins:{

legend:{

display:false

}

}

};

return(

<div className="bg-white rounded-2xl shadow-sm p-8">

<h2 className="text-xl font-semibold mb-8">

Revenue Overview

</h2>

<Line

data={data}

options={options}

/>

</div>

);

}