import React from 'react';
import {BarChart, Bar, CartesianGrid, XAxis, YAxis} from 'recharts';


export default (props) => {
    console.log(props.countData);
    console.log(props.listData);
    return (
        <div id='word-chart'>
            <BarChart width={380} height={280}
                      data={ props.countData }
                      layout='vertical'>
                <Bar dataKey='count' fill={ props.color } />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey='count' type='number'
                       domain={['dataMin', 'dataMax']}
                />
                <YAxis dataKey='word' type='category'
                       interval={0} tickSize={3}/>
            </BarChart>
        </div>
    );
}


