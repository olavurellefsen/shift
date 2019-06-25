import React from "react";
import PropTypes from "prop-types";
import Welcome from "../alert/Welcome";
import StackedBarChart from "./StackedBarChart";
import StackedBarDiffChart from "./StackedBarDiffChart";
import { MainArea, Flex } from "./Charts.style";
import stackedBar from "../data/stackedBarTab5";
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
            chartName="_Datacenters elforbrug"
            chartTitle="Datacenters elforbrug"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            combinedChart={false}
            label="PJ"
            minY={0}
            maxY={50}
            stackedBar={stackedBar}
            line={line}
          />
          <StackedBarChart
            chartName="_Datacenters potentielle fjern"
            chartTitle="Datacenters potentielle fjernvarmeproduktion"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            combinedChart={false}
            label="PJ"
            minY={0}
            maxY={32}
            stackedBar={stackedBar}
            line={line}
          />
          <StackedBarChart
            chartName="_Industriels CO2 udledninger"
            chartTitle="Industriels CO2 udledninger"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            combinedChart={false}
            label="Kt"
            minY={0}
            maxY={8000}
            stackedBar={stackedBar}
            line={line}
          />
          <StackedBarChart
            chartName="_Industriens energi service"
            chartTitle="Industriens energi service"
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
            chartName="_Industriens energibesparelser"
            chartTitle="Industriens energibesparelser per sektor"
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
            chartName="_Industriens energiforbrug per"
            chartTitle="Industriens energiforbrug per sektor"
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
            chartName="_Industriens omkostninger"
            chartTitle="Industriens omkostninger"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            combinedChart={false}
            label="MKr"
            minY={-1000}
            maxY={6000}
            stackedBar={stackedBar}
            line={line}
          />
          <StackedBarChart
            chartName="_Industriens potentielle overs"
            chartTitle="Industriens potentielle overskudsvarmeproduktion"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            combinedChart={false}
            label="PJ"
            minY={0}
            maxY={10}
            stackedBar={stackedBar}
            line={line}
          />
        </Flex>
      )}
      {props.scenarioSelection.showDifference === true &&
        selectedScenario2 !== "" && (
          <Flex>
            <StackedBarDiffChart
              chartName="_Datacenters elforbrug"
              chartTitle="Datacenters elforbrug"
              selectedScenario={selectedScenario}
              selectedScenario2={selectedScenario2}
              combinedChart={false}
              label="PJ"
              minY={-10}
              maxY={10}
              stackedBar={stackedBar}
              line={line}
            />
            <StackedBarDiffChart
              chartName="_Datacenters potentielle fjern"
              chartTitle="Datacenters potentielle fjernvarmeproduktion"
              selectedScenario={selectedScenario}
              selectedScenario2={selectedScenario2}
              combinedChart={false}
              label="PJ"
              minY={-10}
              maxY={10}
              stackedBar={stackedBar}
              line={line}
            />
            <StackedBarDiffChart
              chartName="_Industriels CO2 udledninger"
              chartTitle="Industriels CO2 udledninger"
              selectedScenario={selectedScenario}
              selectedScenario2={selectedScenario2}
              combinedChart={false}
              label="Kt"
              minY={-3000}
              maxY={5000}
              stackedBar={stackedBar}
              line={line}
            />
            <StackedBarDiffChart
              chartName="_Industriens energi service"
              chartTitle="Industriens energi service"
              selectedScenario={selectedScenario}
              selectedScenario2={selectedScenario2}
              combinedChart={false}
              label="PJ"
              minY={-30}
              maxY={30}
              stackedBar={stackedBar}
              line={line}
            />
            <StackedBarDiffChart
              chartName="_Industriens energibesparelser"
              chartTitle="Industriens energibesparelser per sektor"
              selectedScenario={selectedScenario}
              selectedScenario2={selectedScenario2}
              combinedChart={false}
              label="PJ"
              minY={-10}
              maxY={10}
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
			  minY={-30}
			  maxY={130}
			  stackedBar={stackedBar}
              line={line}
			/>
			<StackedBarDiffChart
              chartName="_Industriens energiforbrug per"
              chartTitle="Industriens energiforbrug per sektor"
              selectedScenario={selectedScenario}
              selectedScenario2={selectedScenario2}
              combinedChart={false}
              label="PJ"
              minY={-20}
              maxY={20}
              stackedBar={stackedBar}
              line={line}
            />
            <StackedBarDiffChart
              chartName="_Industriens omkostninger"
              chartTitle="Industriens omkostninger"
              selectedScenario={selectedScenario}
              selectedScenario2={selectedScenario2}
              combinedChart={false}
              label="MKr"
              minY={-7000}
              maxY={7000}
              stackedBar={stackedBar}
              line={line}
            />
            <StackedBarDiffChart
              chartName="_Industriens potentielle overs"
              chartTitle="Industriens potentielle overskudsvarmeproduktion"
              selectedScenario={selectedScenario}
              selectedScenario2={selectedScenario2}
              combinedChart={false}
              label="PJ"
              minY={-5}
              maxY={5}
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
