import React from "react";
import { Container } from "react-bootstrap";
import { Chart } from "react-google-charts";

const Graficos = () => {
  const options = {
    title: "Regionais",
    pieHole: 0.4,
    is3D: false,
    legend: "none",
    pieSliceText: "value",
  };

  const data = [
    ["Anos", "Unidades"],
    ["2019", 2],
    ["2020", 3],
    ["2021", 1],
    ["2022", 5],
    ["2023", 4],
  ];

  const options2 = {
    title: "Company Performance",
    curveType: "function",
    legend: { position: "bottom" },
  };

  return (
    <Container className="chart-container">
      <Chart
        chartType="PieChart"
        data={[
          ["Regional", "Unidades"],
          ["CR 1 - Cuiabá", 50],
          ["CR 2 - Várzea Grande", 30],
          ["CR 3 - Sinop", 20],
          ["CR 4 - Rondonópolis", 20],
        ]}
        options={options}
        width="60%"
        height="300px"
        chartLanguage="pt-br"
        legend_toggle="false"
      />
      <Chart
        chartType="LineChart"
        width="100%"
        height="400px"
        data={data}
        options={options2}
      />
    </Container>
  );
};

export default Graficos;
