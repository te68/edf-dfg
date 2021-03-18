import React from "react";
import { Pie } from "react-chartjs-2";

class PieChart extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      labels: ["Likes", "Dislikes", "Celebrates"],
      datasets: [
        {
          data: [this.props.likes, this.props.dislikes, this.props.celebrates],
          backgroundColor: ["green", "red", "blue"],
        },
      ],
    };
  }
  render() {
    return (
      <Pie
        data={{
          labels: this.state.labels,
          datasets: this.state.datasets,
        }}
      />
    );
  }
}

export default PieChart;
