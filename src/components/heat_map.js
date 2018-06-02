import React from 'react'
import HeatMap from 'react-heatmap-grid'


const Graph = ({ selectedNode }) => {

    if (!selectedNode) {
        return null
    }
    let arrSubset = selectedNode['array'][0][0];
    let x = new Array(arrSubset.length).fill(0).map((_, i) => `${i}`);
    let y = new Array(arrSubset[0].length).fill(0).map((_, i) => `${i}`);

    return (
        <div className='heatmap-component'>
            <HeatMap
                xLabels={x}
                yLabels={y}
                data={arrSubset}/>
        </div>
    )
};


export default Graph;