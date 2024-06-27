import React from 'react'
import CanvasJSReact from '@canvasjs/react-charts';
//var CanvasJSReact = require('@canvasjs/react-charts');
const SingleColumnGraph = () => {
     
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const options = {
    animationEnabled: true,
    // exportEnabled: true,
    theme: "light2", //"light1", "dark1", "dark2"
    // title:{
    //     text: "Simple Column Chart with Index Labels"
    // },
    axisY: {
        includeZero: true
    },
    data: [{
        type: "column", //change type to bar, line, area, pie, etc
        //indexLabel: "{y}", //Shows y value on all Data Points
        indexLabelFontColor: "#5A5757",
        indexLabelPlacement: "outside",
        dataPoints: [
            { x: 5, y: 45, indexLabel: "Highest"  },
            { x: 4, y: 36 },
            { x: 3, y: 20 },
            { x: 6, y: 18 },
            { x: 9, y: 28 },
            { x: 7, y: 30 },
            
        ]
    }]
}

  return (
        <>
		<div className='singleColumn'>
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
				/* containerProps={{ width: '100%', height: '300px' }} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
 
		</div>
    </>
  )
}

export default SingleColumnGraph
