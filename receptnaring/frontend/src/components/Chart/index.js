import React from "react";
import axios from "axios";
import data from "./StaticData";
import {
  StyledChart,
  StyledSpan,
  StyledLi
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
              "#98FB98",
              "#CD853F",
              "#FF8C00"
            ]
          }
        ],
        options: {
          lineWidth: 13,
          position: "left",
          events: null,
          maintainAspectRatio: true,
          responsive: false,
          legend: {
            display: false,
            position: "top"
          }
        }
      }
    };

  }

  async componentDidMount() {
    // await axios.get(`http://localhost:3001/api/recipes/first`).then(res => {
    //   const recept = res.data;
    //   this.setState({ recept: recept });
    // });

    let { recept, myValues } = this.state;
    let myEntries = [];
    for (let i of Object.values(recept.nutrition)) {
      myValues.push(i.qty);
    }

    for (let k of Object.values(recept.nutrition)) {
      myEntries.push(k.name);
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
          <StyledSpan color={color} />
          {item.name} {item.qty}{item.type}
        </StyledLi>
      );
    });


    return myLabels;
  };


  render() {
    return (
      <div>
        {this.getLabels()}
        <StyledChart
          data={this.state.data}
          width={250}
          height={250}
          options={this.state.data.options}
        />
      </div>
    );
  }
}

export default ChartComponent;
