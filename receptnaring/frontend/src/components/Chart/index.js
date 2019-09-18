import React from "react";
import axios from "axios";
import data from "./staticData";
import {
  StyledChart,
  StyledSpan,
  StyledLi,
  StyledWrapper

} from "./StyledChart";

class ChartComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recept: data[0],
      myValues: [],
      matchColors: [],
      data: {
        labels: [],
        datasets: [
          {
            backgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#008000",
              "#CD853F",
              "#FF8C00"
            ]
          }
        ],
        options: {
          lineWidth: 13,
          position: "left",
          maintainAspectRatio: true,
          responsive: true,
          legend: {
            fullWidth:100,
            padding:10,
            display: true,
            position: "bottom",
            labels:{
              fontSize:16,
              boxWidth:30
            }
          }
        }
      }
    };

  }

  async componentDidMount() {

    let { recept, myValues } = this.state;
    let myEntries = [];
    for (let i of Object.values(recept.nutrition)) {
      myValues.push(i.qty);
    }

    for (let k of Object.values(recept.nutrition)) {
      myEntries.push(k.name + ' '+ k.qty + 'g');
    }

    let dataCopy = { ...this.state.data };
    dataCopy.datasets[0].data = myValues;
    dataCopy.labels = myEntries;
    this.setState({ data: dataCopy });
  }

  getLabels = () => {
    let { data, recept } = this.state;
    let getValues = Object.values(recept.nutrition);
    let colors = data.datasets[0].backgroundColor;

    const myLabels = getValues.map((item, i) => {
      let color = colors[i]
      return (
        
        <StyledLi key={item.qty}>
          <StyledSpan color={color}/>
          {item.name} {item.qty}{item.type}
          
        </StyledLi>
      );
    });


    return myLabels;
  };


  render() {
    return (
      <StyledWrapper>
   
       
        <StyledChart
          data={this.state.data}
          width={250}
          height={250}
          options={this.state.data.options}
        />
      </StyledWrapper>
    );
  }
}

export default ChartComponent;
