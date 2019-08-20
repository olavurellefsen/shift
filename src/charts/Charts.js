import React from "react";
import PropTypes from "prop-types";
import Welcome from "../alert/Welcome";
import StackedBarChart from "./StackedBarChart";
import StackedBarDiffChart from "./StackedBarDiffChart";
import ComparisonChart from "./ComparisonChart";
import { MainArea, Flex } from "./Charts.style";
import stackedBar from "../data/stackedBar";
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
            chartName="_CO2 emissioner"
            chartTitle="CO2 emissioner og %-reduktion"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            combinedChart={true}
            label="Kt"
            minY={0}
            maxY={40000}
            minY2={0}
            maxY2={1}
            label2="CO2 reduktion (1990)"
            Y2Percentage={true}
            stackedBar={stackedBar}
            line={line}
          />
          <StackedBarChart
            chartName="_Anden_drivhusgas_udledning"
            chartTitle="Anden drivhusgas udledning"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            combinedChart={false}
            label="kt CO2e"
            minY={0}
            maxY={40000}
            stackedBar={stackedBar}
            line={line}
          />
          <ComparisonChart
            chartName="_CO2 emissioner akkumuleret"
            chartTitle="Akkumuleret CO2 emissioner"
            showCCS={props.scenarioSelection.showCCS}
            showOpt1={props.scenarioSelection.showOpt1}
            showOpt2={props.scenarioSelection.showOpt2}
            showOpt3={props.scenarioSelection.showOpt3}
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            combinedChart={true}
            label="Mt"
            minY={0}
            maxY={1200000}
            minY2={0}
            maxY2={1200000}
            Y2Percentage={false}
            stackedBar={stackedBar}
            line={line}
          />
          <StackedBarChart
            chartName="_Energi forbrug i Danmark"
            chartTitle="Energiforbrug og VE-andel"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            combinedChart={true}
            label="PJ"
            minY={0}
            maxY={1000}
            minY2={0}
            maxY2={1}
            label2="Vedvarende energi andel"
            Y2Percentage={true}
            stackedBar={stackedBar}
            line={line}
          />
          <StackedBarChart
            chartName="_Wind_OFF_cap"
            chartTitle="Antal havmølleparker (á 800MW)"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            combinedChart={false}
            label="stk"
            minY={0}
            maxY={24}
            stackedBar={stackedBar}
            line={line}
          />
          <StackedBarChart
            chartName="_Solcelle_cap"
            chartTitle="Solcelle areal"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            combinedChart={false}
            label="km2"
            minY={0}
            maxY={300}
            stackedBar={stackedBar}
            line={line}
          />
          <StackedBarChart
            chartName="_Andel_importeret_Biomasse"
            chartTitle="Andel importeret Biomasse"
            selectedScenario={selectedScenario}
            selectedScenario2={selectedScenario2}
            combinedChart={false}
            label="Andel"
            minY={0}
            maxY={1}
            YPercentage={true}
            stackedBar={stackedBar}
            line={line}
          />
		  <StackedBarChart 
		    chartName='_Omkostninger per person'
			chartTitle='Omkostninger per person'
			selectedScenario={selectedScenario}
			selectedScenario2={selectedScenario2}
			combinedChart={false}
			label='DKK/person' 
			minY={0} 
			maxY={3000} 
			stackedBar={stackedBar}
            line={line}
		   />
        </Flex>
      )}
      {props.scenarioSelection.showDifference === true &&
        selectedScenario2 !== "" && (
          <Flex>
            <StackedBarDiffChart
              chartName="_CO2 emissioner"
              chartTitle="CO2 emissioner og %-reduktion"
              selectedScenario={selectedScenario}
              selectedScenario2={selectedScenario2}
              combinedChart={true}
              label="Kt"
              minY={-16000}
              maxY={16000}
              minY2={-1}
              maxY2={1}
              label2="CO2 reduktion (1990)"
              Y2Percentage={true}
              stackedBar={stackedBar}
              line={line}
            />
            <StackedBarDiffChart
              chartName="_Anden_drivhusgas_udledning"
              chartTitle="Anden drivhusgas udledning"
              selectedScenario={selectedScenario}
              selectedScenario2={selectedScenario2}
              combinedChart={false}
              label="kt CO2e"
              minY={-16000}
              maxY={16000}
              stackedBar={stackedBar}
              line={line}
            />
            <ComparisonChart
              chartName="_CO2 emissioner akkumuleret"
              chartTitle="Akkumuleret CO2 emissioner"
              selectedScenario={selectedScenario}
              selectedScenario2={selectedScenario2}
              combinedChart={true}
              label="Mt"
              minY={0}
              maxY={1200000}
              minY2={0}
              maxY2={1200000}
              Y2Percentage={false}
              stackedBar={stackedBar}
              line={line}
            />
            <StackedBarDiffChart
              chartName="_Energi forbrug i Danmark"
              chartTitle="Energiforbrug og VE-andel"
              selectedScenario={selectedScenario}
              selectedScenario2={selectedScenario2}
              combinedChart={true}
              label="PJ"
              minY={-400}
              maxY={400}
              minY2={-1}
              maxY2={1}
              label2="Vedvarende energi andel"
              Y2Percentage={true}
              stackedBar={stackedBar}
              line={line}
            />
            <StackedBarDiffChart
              chartName="_Wind_OFF_cap"
              chartTitle="Antal havmølleparker (á 800MW)"
              selectedScenario={selectedScenario}
              selectedScenario2={selectedScenario2}
              combinedChart={false}
              label="stk"
              minY={-24}
              maxY={24}
              stackedBar={stackedBar}
              line={line}
            />
            <StackedBarDiffChart
              chartName="_Solcelle_cap"
              chartTitle="Solcelle areal"
              selectedScenario={selectedScenario}
              selectedScenario2={selectedScenario2}
              combinedChart={false}
              label="km2"
              minY={-1000}
              maxY={1000}
              stackedBar={stackedBar}
              line={line}
            />
            <StackedBarDiffChart
              chartName="_Andel_importeret_Biomasse"
              chartTitle="Andel importeret Biomasse"
              selectedScenario={selectedScenario}
              selectedScenario2={selectedScenario2}
              combinedChart={false}
              label="Andel"
              minY={-1}
              maxY={1}
              YPercentage={true}
              stackedBar={stackedBar}
              line={line}
            />
		    <StackedBarChart 
		      chartName='_Omkostninger per person'
			  chartTitle='Omkostninger per person i forhold til reference'
			  selectedScenario={selectedScenario}
			  selectedScenario2={selectedScenario2}
			  combinedChart={false}
			  label='DKK/person' 
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
