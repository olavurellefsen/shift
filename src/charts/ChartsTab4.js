import React from "react";
import PropTypes from "prop-types";
import Welcome from "../alert/Welcome";
import StackedBarChart from "./StackedBarChart";
import StackedBarDiffChart from "./StackedBarDiffChart";
import { MainArea, Flex } from "./Charts.style";
import stackedBar from "../data/stackedBarTab4";
import line from "../data/line";

const Charts = props => {
  const selectedScenario = props.scenarioSelection.scenarioSelection;
  const selectedScenario2 = props.scenarioSelection.scenarioSelection2;

  return (
    <MainArea>
      {props.scenarioSelection.showWelcome === true && (
        <Welcome closeWelcome={props.closeWelcome} />
      )}
      {(props.scenarioSelection.showDifference === false ||
        (props.scenarioSelection.showDifference === true &&
          selectedScenario2 === "")) && (
        <Flex>
          <StackedBarChart
            chartName="_Transport systemomkostninger"
            chartTitle="Transport systemomkostninger"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            combinedChart={false}
            label="Mkr"
            minY={0}
            maxY={200000}
            stackedBar={stackedBar}
            line={line}
          />
          <StackedBarChart
            chartName="_Transport sektorens energifor"
            chartTitle="Transport sektorens energiforbrug"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            combinedChart={false}
            label="PJ"
            minY={0}
            maxY={400}
            stackedBar={stackedBar}
            line={line}
          />
          <StackedBarChart
            chartName="_Transport passager km"
            chartTitle="Transport passager km"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            combinedChart={false}
            label="mio. Pkm"
            minY={0}
            maxY={250000}
            stackedBar={stackedBar}
            line={line}
          />
          <StackedBarChart
            chartName="_Transport investering i lades"
            chartTitle="Investering i ladestander"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            combinedChart={false}
            label="Mkr"
            minY={0}
            maxY={2500}
            stackedBar={stackedBar}
            line={line}
          />
          <StackedBarChart
            chartName="_Transport gods km"
            chartTitle="Gods km"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            combinedChart={false}
            label="mio. tkm"
            minY={0}
            maxY={200000}
            stackedBar={stackedBar}
            line={line}
          />
          <StackedBarChart
            chartName="_Transport CO2 emissioner"
            chartTitle="CO2 emissioner"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            combinedChart={false}
            label="kt"
            minY={0}
            maxY={24000}
            stackedBar={stackedBar}
            line={line}
          />
          <StackedBarChart
            chartName="_Transport brændslesforbrug lu"
            chartTitle="Brændselsforbrug luftfart"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            combinedChart={false}
            label="PJ"
            minY={0}
            maxY={80}
            stackedBar={stackedBar}
            line={line}
          />
          <StackedBarChart
            chartName="_Transport brændselsforbrug sø"
            chartTitle="Brændselsforbrug søfart"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            combinedChart={false}
            label="PJ"
            minY={0}
            maxY={30}
            stackedBar={stackedBar}
            line={line}
          />
          <StackedBarChart
            chartName="_Transport brændselsforbrug bi"
            chartTitle="Brændselsforbrug biler"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            combinedChart={false}
            label="PJ"
            minY={0}
            maxY={120}
            stackedBar={stackedBar}
            line={line}
          />
          <StackedBarChart
            chartName="_Transport brændselsforbrug øv"
            chartTitle="Brændselsforbrug øvrig land"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            combinedChart={false}
            label="PJ"
            minY={0}
            maxY={100}
            stackedBar={stackedBar}
            line={line}
          />
          <StackedBarChart
            chartName="_Transport - bil bestanden"
            chartTitle="Bilbestanden"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            combinedChart={false}
            label="k"
            minY={0}
            maxY={4000}
            stackedBar={stackedBar}
            line={line}
          />
        </Flex>
      )}
      {props.scenarioSelection.showDifference === true &&
        selectedScenario2 !== "" && (
          <Flex>
            <StackedBarDiffChart
              chartName="_Transport systemomkostninger"
              chartTitle="Transport systemomkostninger"
              selectedScenario={selectedScenario}
              selectedScenario2={selectedScenario2}
              combinedChart={false}
              label="Mkr"
              minY={-100000}
              maxY={100000}
              stackedBar={stackedBar}
              line={line}
            />
            <StackedBarDiffChart
              chartName="_Transport sektorens energifor"
              chartTitle="Transport sektorens energiforbrug"
              selectedScenario={selectedScenario}
              selectedScenario2={selectedScenario2}
              combinedChart={false}
              label="PJ"
              minY={-100}
              maxY={100}
              stackedBar={stackedBar}
              line={line}
            />
            <StackedBarDiffChart
              chartName="_Transport passager km"
              chartTitle="Transport passager km"
              selectedScenario={selectedScenario}
              selectedScenario2={selectedScenario2}
              combinedChart={false}
              label="mio. Pkm"
              minY={-40000}
              maxY={40000}
              stackedBar={stackedBar}
              line={line}
            />
            <StackedBarDiffChart
              chartName="_Transport investering i lades"
              chartTitle="Investering i ladestander"
              selectedScenario={selectedScenario}
              selectedScenario2={selectedScenario2}
              combinedChart={false}
              label="Mkr"
              minY={-500}
              maxY={500}
              stackedBar={stackedBar}
              line={line}
            />
            <StackedBarDiffChart
              chartName="_Transport gods km"
              chartTitle="Gods km"
              selectedScenario={selectedScenario}
              selectedScenario2={selectedScenario2}
              combinedChart={false}
              label="mio. tkm"
              minY={-200000}
              maxY={200000}
              stackedBar={stackedBar}
              line={line}
            />
            <StackedBarDiffChart
              chartName="_Transport CO2 emissioner"
              chartTitle="CO2 emissioner"
              selectedScenario={selectedScenario}
              selectedScenario2={selectedScenario2}
              combinedChart={false}
              label="kt"
              minY={-4000}
              maxY={4000}
              stackedBar={stackedBar}
              line={line}
            />
            <StackedBarDiffChart
              chartName="_Transport brændslesforbrug lu"
              chartTitle="Brændselsforbrug luftfart"
              selectedScenario={selectedScenario}
              selectedScenario2={selectedScenario2}
              combinedChart={false}
              label="PJ"
              minY={-50}
              maxY={50}
              stackedBar={stackedBar}
              line={line}
            />
            <StackedBarDiffChart
              chartName="_Transport brændselsforbrug sø"
              chartTitle="Brændselsforbrug søfart"
              selectedScenario={selectedScenario}
              selectedScenario2={selectedScenario2}
              combinedChart={false}
              label="PJ"
              minY={-50}
              maxY={50}
              stackedBar={stackedBar}
              line={line}
            />
            <StackedBarDiffChart
              chartName="_Transport brændselsforbrug bi"
              chartTitle="Brændselsforbrug biler"
              selectedScenario={selectedScenario}
              selectedScenario2={selectedScenario2}
              combinedChart={false}
              label="PJ"
              minY={-50}
              maxY={50}
              stackedBar={stackedBar}
              line={line}
            />
            <StackedBarDiffChart
              chartName="_Transport brændselsforbrug øv"
              chartTitle="Brændselsforbrug øvrig land"
              selectedScenario={selectedScenario}
              selectedScenario2={selectedScenario2}
              combinedChart={false}
              label="PJ"
              minY={-50}
              maxY={50}
              stackedBar={stackedBar}
              line={line}
            />
            <StackedBarDiffChart
              chartName="_Transport - bil bestanden"
              chartTitle="Bilbestanden"
              selectedScenario={selectedScenario}
              selectedScenario2={selectedScenario2}
              combinedChart={false}
              label="k"
              minY={-4000}
              maxY={4000}
              stackedBar={stackedBar}
              line={line}
            />
          </Flex>
        )}
    </MainArea>
  );
};

Charts.propTypes = {
  scenarioSelection: PropTypes.object.isRequired,
  closeWelcome: PropTypes.func.isRequired
};

export default Charts;
