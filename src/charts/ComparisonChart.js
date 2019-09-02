import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  VictoryChart,
  VictoryTheme,
  VictoryBar,
  VictoryLabel,
  VictoryAxis,
  VictoryLine
} from "victory";
import scenarioCombinations from "../data/scenarioCombinations";
import { useTranslation } from "react-i18next";

const ChartHeader = styled(VictoryLabel)`
  text-anchor: start;
  fill: #000000;
  font-family: inherit;
  font-size: 18px;
  font-weight: bold;
`;
const getShortName = scenario => {
  return scenarioCombinations.scenarioCombinations.scenarioOptions.find(s => s.name === scenario).nameNoOptions
}

const StackedBarChart = props => {
  const { t } = useTranslation();
  const stackedBar = props.stackedBar;
  const chartName = props.chartName;
  const options = props.options;
  const chartTitle = t("chartTitle." + props.chartTitle);
  const scenarios = scenarioCombinations.scenarioCombinations.scenarioOptions
    .filter(o => 
      o.ccs === options[o.nameNoOptions].ccs 
      && o.opt1 === options[o.nameNoOptions].opt1 
      && o.opt2 === options[o.nameNoOptions].opt2 
      && o.opt3 === options[o.nameNoOptions].opt3)
    .map(scenario => scenario.name);

    const chartValues0 = stackedBar.data.scenarios
    .filter(o => scenarios.indexOf(o.scenario) > -1)
    .map(scenario =>
      scenario.indicators
        .find(o => o.indicator === chartName)
        .indicatorGroups.map(chartGroup =>
          chartGroup.indicatorGroupValues
            .filter(indicatorGroupValue => indicatorGroupValue.year === 2050)
            .map(chartGroupValue => ({
              scenario: scenario.scenario,
              total: chartGroupValue.total
            }))
        )
    );
    let chartValues1 = [].concat(...chartValues0)
    let chartValues = [].concat(...chartValues1).sort(function(a, b){
      return scenarios.indexOf(a.scenario) - scenarios.indexOf(b.scenario);
    });

  return (
    <div>
      <VictoryChart
        width={380}
        height={380}
        padding={{ left: 55, right: 50, top: 50, bottom: 55 }}
        theme={VictoryTheme.material}
      >
        <ChartHeader x={90} y={24} text={chartTitle} />
        <VictoryAxis label="Scenarios" tickFormat={t => ``} />
        <VictoryAxis
          dependentAxis
          axisLabelComponent={<VictoryLabel dx={120} />}
          key={2}
          offsetX={50}
          tickFormat={tick => `${tick / 1000}`}
          tickValues={[200000, 400000, 600000, 800000, 1000000, 1200000]}
          label={props.label}
        />
        <VictoryBar
          style={{ data: { fill: "#5cbae6" } }}
          data={chartValues}
          x="scenario"
          y="total"
          alignment="start"
          labels={d => `${t("scenario_code."+getShortName(d.scenario))}`}
          labelComponent={
            <VictoryLabel
              dx={0}
              dy={0}
              angle={270}
              textAnchor="start"
              verticalAnchor="start"
            />
          }
        />
        <VictoryLine
          y={() => 512000}
          samples={1}
          style={{ data: { stroke: "red" } }}
        />
      </VictoryChart>
    </div>
  );
};

StackedBarChart.defaultProps = {
  divideValues: 1,
  selectedScenario2: "",
  YPercentage: false
};

StackedBarChart.propTypes = {
  stackedBar: PropTypes.object,
  line: PropTypes.object,
  selectedScenario: PropTypes.string.isRequired,
  selectedScenario2: PropTypes.string,
  chartName: PropTypes.string.isRequired,
  chartTitle: PropTypes.string.isRequired,
  combinedChart: PropTypes.bool.isRequired,
  minY: PropTypes.number.isRequired,
  maxY: PropTypes.number.isRequired,
  minY2: PropTypes.number,
  maxY2: PropTypes.number,
  label: PropTypes.string.isRequired,
  divideValues: PropTypes.number,
  label2: PropTypes.string,
  YPercentage: PropTypes.bool,
  Y2Percentage: PropTypes.bool,
  options: PropTypes.any.isRequired
};

export default StackedBarChart;
