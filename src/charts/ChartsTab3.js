import React from "react";
import PropTypes from "prop-types";
import Welcome from "../alert/Welcome";
import StackedBarChart from "./StackedBarChart";
import StackedBarDiffChart from "./StackedBarDiffChart";
import { MainArea, Flex } from "./Charts.style";
import stackedBar from "../data/stackedBarTab3";
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
            chartName="_Energi forbrug i Danmark"
            chartTitle="Danmarks samlede energiforbrug"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            combinedChart={false}
            label="PJ"
            minY={0}
            maxY={1000}
            stackedBar={stackedBar}
            line={line}
          />
          <StackedBarChart
            chartName="_Olie og gas produktion"
            chartTitle="Olie og gas produktionen"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            combinedChart={false}
            label="PJ"
            minY={0}
            maxY={500}
            stackedBar={stackedBar}
            line={line}
          />
          <StackedBarChart
            chartName="_Biobrændsels forbrug"
            chartTitle="Biobrændselsforbruget"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            combinedChart={false}
            label="PJ"
            minY={0}
            maxY={500}
            stackedBar={stackedBar}
            line={line}
          />
          <StackedBarChart
            chartName="_Import_eksport biobrændsler"
            chartTitle="Import/eksport biomasse og biobrændsler"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            combinedChart={false}
            label="PJ"
            minY={-40}
            maxY={220}
            stackedBar={stackedBar}
            line={line}
          />
          <StackedBarChart
            chartName="_Forbrug VE raffinaderier"
            chartTitle="Brændselsforbrug på VE raffinaderier"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            combinedChart={false}
            label="PJ"
            minY={0}
            maxY={300}
            stackedBar={stackedBar}
            line={line}
          />
          <StackedBarChart
            chartName="_VE-raffinaderi output"
            chartTitle="VE-raffinaderi output"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            combinedChart={false}
            label="PJ"
            minY={0}
            maxY={160}
            stackedBar={stackedBar}
            line={line}
          />
          <StackedBarChart
            chartName="_El og varme sektorens brændse"
            chartTitle="El og varmesektorens brændselsforbrug"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            combinedChart={false}
            label="PJ"
            minY={0}
            maxY={500}
            stackedBar={stackedBar}
            line={line}
          />
          <StackedBarChart
            chartName="_Transport sektorens energifor"
            chartTitle="Transportsektorens energiforbrug"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            combinedChart={false}
            label="PJ"
            minY={0}
            maxY={300}
            stackedBar={stackedBar}
            line={line}
          />
          <StackedBarChart
            chartName="_Industriens energiforbrug"
            chartTitle="Industriens energiforbrug"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            combinedChart={false}
            label="PJ"
            minY={0}
            maxY={500}
            stackedBar={stackedBar}
            line={line}
          />
          <StackedBarChart
            chartName="_Husholdningers varmeforbrug"
            chartTitle="Husholdningernes energiforbrug"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            combinedChart={false}
            label="PJ"
            minY={0}
            maxY={180}
            stackedBar={stackedBar}
            line={line}
          />
        </Flex>
      )}
      {props.scenarioSelection.showDifference === true &&
        selectedScenario2 !== "" && (
          <Flex>
            <StackedBarDiffChart
              chartName="_Energi forbrug i Danmark"
              chartTitle="Danmarks samlede energiforbrug"
              selectedScenario={selectedScenario}
              selectedScenario2={selectedScenario2}
              combinedChart={false}
              label="PJ"
              minY={-200}
              maxY={200}
              stackedBar={stackedBar}
              line={line}
            />
            <StackedBarDiffChart
              chartName="_Olie og gas produktion"
              chartTitle="Olie og gas produktionen"
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
              chartName="_Biobrændsels forbrug"
              chartTitle="Biobrændselsforbruget"
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
              chartName="_Import_eksport biobrændsler"
              chartTitle="Import/eksport biomasse og biobrændsler"
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
              chartName="_Forbrug VE raffinaderier"
              chartTitle="Brændselsforbrug på VE raffinaderier"
              selectedScenario={selectedScenario}
              selectedScenario2={selectedScenario2}
              combinedChart={false}
              label="PJ"
              label2="Netto eksport (PJ)"
              minY={-200}
              maxY={200}
              stackedBar={stackedBar}
              line={line}
            />
            <StackedBarDiffChart
              chartName="_VE-raffinaderi output"
              chartTitle="VE-raffinaderi output"
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
              chartName="_El og varme sektorens brændse"
              chartTitle="El og varmesektorens brændselsforbrug"
              selectedScenario={selectedScenario}
              selectedScenario2={selectedScenario2}
              combinedChart={false}
              label="PJ"
              minY={-200}
              maxY={200}
              stackedBar={stackedBar}
              line={line}
            />
            <StackedBarDiffChart
              chartName="_Transport sektorens energifor"
              chartTitle="Transportsektorens energiforbrug"
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
              chartName="_Industriens energiforbrug"
              chartTitle="Industriens energiforbrug"
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
              chartName="_Husholdningers varmeforbrug"
              chartTitle="Husholdningernes energiforbrug"
              selectedScenario={selectedScenario}
              selectedScenario2={selectedScenario2}
              combinedChart={false}
              label="PJ"
              minY={-10}
              maxY={10}
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
