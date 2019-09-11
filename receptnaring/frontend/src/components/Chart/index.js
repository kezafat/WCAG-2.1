import React from "react";
import styled from "styled-components";
import { Pie } from "react-chartjs-2";
import recept from './staticData.js';

const StyledChart = styled(Pie)``;

class ChartComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      minrec:recept,
      data:{
        labels: ["Salt", "Protein"],
        datasets: [
          {
            label:"Näringsvärde",
            data: [300, 150],
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
          }
        ],
        options:{
          title:{
            display:true,
            text:"Näringsvärde",
            fontSize:20
          }
        }
      }
    }

console.log(this.state.data)

   
  }

async componentWillMount(){
  let result = await Object.keys(recept).map(function(key) {
    return recept[key];
  });

  // Copy the data attribute of state
  let dataCopy = {...this.state.data};
  dataCopy.datasets[0].data = [result[0].food.salt, result[0].food.protein];
  this.setState({data: dataCopy});


}


  render() {
    console.log(this.state.data)
    return (
      <div>
        <StyledChart
          data={this.state.data}
          width={380}
          height={200}
          options={{ maintainAspectRatio: false }}
        />
      </div>
    );
  }
}

export default ChartComponent;
