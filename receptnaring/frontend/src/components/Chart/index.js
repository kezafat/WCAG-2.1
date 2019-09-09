import React from "react";
import styled from "styled-components";
import { Doughnut } from "react-chartjs-2";

const StyledChart = styled(Doughnut)``;

class ChartComponent extends React.Component {
  constructor(props) {
    super(props);

    this.data = {
      labels: ["Salt", "Green", "Yellow"],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <StyledChart
          data={this.data}
          width={380}
          height={200}
          options={{ maintainAspectRatio: false }}
        />
      </div>
    );
  }
}

export default ChartComponent;
