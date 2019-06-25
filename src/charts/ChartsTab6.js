import React from "react";
import PropTypes from "prop-types";
import Welcome from "../alert/Welcome";
import StackedBarChart from "./StackedBarChart";
import StackedBarDiffChart from "./StackedBarDiffChart";
import { MainArea, Flex } from "./Charts.style";
import stackedBar from "../data/stackedBarTab6";
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
            chartName="_Centrale bygningers energibeh"
            chartTitle="Centrale bygningers energibehov"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            combinedChart={false}
            label="PJ"
            minY={-5}
            maxY={60}
            stackedBar={stackedBar}
            line={line}
          />
          <StackedBarChart
            chartName="_Decentrale bygningers energib"
            chartTitle="Decentrale bygningers energibehov"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            combinedChart={false}
            label="PJ"
            minY={-10}
            maxY={50}
            stackedBar={stackedBar}
            line={line}
          />
          <StackedBarChart
            chartName="_Husholdninger solcelle kapaci"
            chartTitle="Husholdninger solcelle kapacitet"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            combinedChart={false}
            label="MW"
            minY={0}
            maxY={9000}
            stackedBar={stackedBar}
            line={line}
          />
          <StackedBarChart
            chartName="_Husholdningers elapparater"
            chartTitle="Husholdningers elapparater"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            combinedChart={false}
            label="PJ"
            minY={0}
            maxY={40}
            stackedBar={stackedBar}
            line={line}
          />
          <StackedBarChart
            chartName="_Husholdningers netto energi f"
            chartTitle="Husholdningers netto energi forbrug"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            combinedChart={false}
            label="PJ"
            minY={0}
            maxY={240}
            stackedBar={stackedBar}
            line={line}            
          />
          <StackedBarChart
            chartName="_Husholdningers varmeforbrug"
            chartTitle="Husholdningers varmeforbrug"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            combinedChart={false}
            label="PJ"
            minY={0}
            maxY={200}
            stackedBar={stackedBar}
            line={line}
          />
          <StackedBarChart
            chartName="_Husholdnings omkostninger"
            chartTitle="Husholdnings omkostninger"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            combinedChart={false}
            label="MKr"
            minY={0}
            maxY={18000}
            stackedBar={stackedBar}
            line={line}
          />
          <StackedBarChart
            chartName="_Individuelle bygningers opvar"
            chartTitle="Individuelle bygningers opvarmningsbehov"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            combinedChart={false}
            label="PJ"
            minY={-10}
            maxY={50}
            stackedBar={stackedBar}
            line={line}
          />
        </Flex>
      )}
      {props.scenarioSelection.showDifference === true &&
        selectedScenario2 !== "" && (
          <Flex>
            <StackedBarDiffChart
              chartName="_Centrale bygningers energibeh"
              chartTitle="Centrale bygningers energibehov"
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
              chartName="_Decentrale bygningers energib"
              chartTitle="Decentrale bygningers energibehov"
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
              chartName="_Husholdninger solcelle kapaci"
              chartTitle="Husholdninger solcelle kapacitet"
              selectedScenario={selectedScenario}
              selectedScenario2={selectedScenario2}
              combinedChart={false}
              label="MW"
              minY={-2000}
              maxY={2000}
              stackedBar={stackedBar}
              line={line}
            />
            <StackedBarDiffChart
              chartName="_Husholdningers elapparater"
              chartTitle="Husholdningers elapparater"
              selectedScenario={selectedScenario}
              selectedScenario2={selectedScenario2}
              combinedChart={false}
              label="PJ"
              minY={-5}
              maxY={5}
              stackedBar={stackedBar}
              line={line}
            />
            <StackedBarDiffChart
              chartName="_Husholdningers netto energi f"
              chartTitle="Husholdningers netto energi forbrug"
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
              chartName="_Husholdningers varmeforbrug"
              chartTitle="Husholdningers varmeforbrug"
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
              chartName="_Husholdnings omkostninger"
              chartTitle="Husholdnings omkostninger"
              selectedScenario={selectedScenario}
              selectedScenario2={selectedScenario2}
              combinedChart={false}
              label="MKr"
              minY={-2500}
              maxY={10000}
              stackedBar={stackedBar}
              line={line}
            />
            <StackedBarDiffChart
              chartName="_Individuelle bygningers opvar"
              chartTitle="Individuelle bygningers opvarmningsbehov"
              selectedScenario={selectedScenario}
              selectedScenario2={selectedScenario2}
              combinedChart={false}
              label="PJ"
              minY={-1}
              maxY={1}
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
