import React from 'react'
import {LineChart, CartesianGrid, XAxis, YAxis, Legend, Line, Tooltip, ResponsiveContainer, Scatter, ScatterChart, ErrorBar} from 'recharts'
function Chart(props) {
    if(props.type == "discrete"){
        return (
            <ResponsiveContainer width={1000} >
<ScatterChart margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>

  <XAxis dataKey="Time" name="time" label="Time"/>
  <YAxis dataKey="USD" type='number' name="price" domain={[0, 30]} />
  
  <Tooltip cursor={{ strokeDasharray: '3 3' }} />
  <Legend />
  <Scatter name="Stock" data={props.data} fill="#8884d8" >
  <ErrorBar dataKey="LH" width={3} strokeWidth={3} stroke="red" direction="Time" />
    <ErrorBar dataKey="CO" width={0} strokeWidth={2} stroke="gray" opacity={0.5} direction="Time" /> 

  </Scatter>
  
</ScatterChart>
</ResponsiveContainer>
        )
    }
    else {
        return ( <ResponsiveContainer width={1000} >
            <LineChart data={props.data}
     margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
   
<XAxis dataKey="Time" />
<YAxis datakey="Price"/>
<Tooltip />
<Legend />
<Line type="monotone" dataKey="USD" stroke="#8884d8" />

</LineChart>
</ResponsiveContainer>)
    }
}
export default Chart