import _ from 'lodash';
import React from 'react';
import {LineChart, Line, CartesianGrid, XAxis, YAxis, ReferenceLine} from 'recharts';


export default (props) => {
    const ave_val = props.listData.reduce( ( p, c ) => p + c, 0 ) / props.listData.length;
    return (
        <div>
            <LineChart width={360} height={240} data={ props.weatherData }>
                <Line type="monotone" dataKey="data" stroke={ props.color } />
                <CartesianGrid stroke="#ccc" />
                <ReferenceLine y={ ave_val }
                               label="Ave" stroke="red" strokeDasharray="5 5" />
                <XAxis />
                <YAxis domain={[Math.min( ...props.listData ), Math.max( ...props.listData )]}/>
            </LineChart>
            <div>Average: { _.round(ave_val, 2) } { props.units }</div>
        </div>
    );
}


