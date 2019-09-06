import React from "react";
import PropTypes from "prop-types";
import Welcome from "../alert/Welcome";
import StackedBarChart from "./StackedBarChart";
import StackedBarDiffChart from "./StackedBarDiffChart";
import { MainArea, Flex } from "./Charts.style";
import stackedBar from "../data/stackedBar";
import line from "../data/line";

const Charts = props => {
  const selectedScenario = props.scenarioSelection.scenarioSelection;
  const selectedScenario2 = props.scenarioSelection.scenarioSelection2;
  const options = props.scenarioSelection.options;

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
            chartName='Biomass primary supply'
			chartTitle='Biomass Primary Supply'
			selectedScenario={selectedScenario}
			selectedScenario2={selectedScenario2}
			combinedChart={false}
			label='PJ'
			minY={0}
			maxY={191}
		  />
           <StackedBarChart
            chartName='CO2 emissions'
			chartTitle='CO2 Emissions'
			selectedScenario={selectedScenario}
			selectedScenario2={selectedScenario2}
			combinedChart={false}
			label='kt'
			minY={0}
			maxY={14493} 
		  />
          <StackedBarChart
            chartName='Captured CO2'
			chartTitle='Captured CO2'
			selectedScenario={selectedScenario}
			selectedScenario2={selectedScenario2}
			combinedChart={false}
			label='kt'
			minY={0}
			maxY={0} 
            options={options}
		  />
          <StackedBarChart
            chartName='District heating supply'
			chartTitle='District Heating Supply'
			selectedScenario={selectedScenario}
			selectedScenario2={selectedScenario2}
			combinedChart={false}
			label='PJ'
			minY={0}
			maxY={113}
		  />
          <StackedBarChart
            chartName='Households energy use'
			chartTitle='Households Fuel Consumption'
			selectedScenario={selectedScenario}
			selectedScenario2={selectedScenario2}
			combinedChart={false}
			label='PJ'
			minY={0}
			maxY={75}
		  />
          <StackedBarChart
            chartName='Industry energy use'
			chartTitle='Industry fuel consumption'
			selectedScenario={selectedScenario}
			selectedScenario2={selectedScenario2}
			combinedChart={false}
			label='PJ'
			minY={0}
			maxY={201}
		  />
          <StackedBarChart
            chartName='Power production'
			chartTitle='Power Production'
			selectedScenario={selectedScenario}
			selectedScenario2={selectedScenario2}
			combinedChart={false}
			label='PJ'
			minY={0}
			maxY={434}
		  />
          <StackedBarChart
            chartName='Power trade'
            chartTitle='Power Trade'
			selectedScenario={selectedScenario}
			selectedScenario2={selectedScenario2}
			combinedChart={false}
			label='PJ'
			minY={-85}
			maxY={264}
		  />
          <StackedBarChart 
            chartName='System costs'
			chartTitle='System Costs'
			selectedScenario={selectedScenario}
			selectedScenario2={selectedScenario2}
			combinedChart={false}
			label='M Euro'
			minY={-4077}
			maxY={14104}
		  />
        </Flex>
      )}
      {props.scenarioSelection.showDifference === true &&
        selectedScenario2 !== "" && (
          <Flex>
            <StackedBarDiffChart
              chartName='Biomass primary supply'
   			  chartTitle='Biomass Primary Supply'
   			  selectedScenario={selectedScenario}
   			  selectedScenario2={selectedScenario2}
   			  combinedChart={false}
   			  label='PJ'
   			  minY={-190}
   			  maxY={190}
              stackedBar={stackedBar}
              line={line}
   		    />
             <StackedBarDiffChart
              chartName='CO2 emissions'
   			  chartTitle='CO2 Emissions'
   			  selectedScenario={selectedScenario}
   			  selectedScenario2={selectedScenario2}
   			  combinedChart={false}
   			  label='kt'
   			  minY={-14500}
   			  maxY={14500}
              stackedBar={stackedBar}
              line={line}
   		    />
            <StackedBarDiffChart
              chartName='Captured CO2'
   			  chartTitle='Captured CO2'
   			  selectedScenario={selectedScenario}
   			  selectedScenario2={selectedScenario2}
   			  combinedChart={false}
   			  label='kt'
   			  minY={-10}
   			  maxY={10}
              stackedBar={stackedBar}
              line={line}
            options={options}
   		    />
            <StackedBarDiffChart
              chartName='District heating supply'
   			  chartTitle='District Heating Supply'
   			  selectedScenario={selectedScenario}
   			  selectedScenario2={selectedScenario2}
   			  combinedChart={false}
   			  label='PJ'
   			  minY={-125}
   			  maxY={125}
              stackedBar={stackedBar}
              line={line}
   		    />
            <StackedBarDiffChart
              chartName='Households energy use'
   			  chartTitle='Households Fuel Consumption'
   			  selectedScenario={selectedScenario}
   			  selectedScenario2={selectedScenario2}
   			  combinedChart={false}
   			  label='PJ'
   			  minY={-75}
   			  maxY={75}
              stackedBar={stackedBar}
              line={line}
   		    />
            <StackedBarDiffChart
              chartName='Industry energy use'
   			  chartTitle='Industry fuel consumption'
   			  selectedScenario={selectedScenario}
   			  selectedScenario2={selectedScenario2}
   			  combinedChart={false}
   			  label='PJ'
   			  minY={-200}
   			  maxY={200}
              stackedBar={stackedBar}
              line={line}
   		    />
            <StackedBarDiffChart
              chartName='Power production'
   			  chartTitle='Power Production'
   			  selectedScenario={selectedScenario}
   			  selectedScenario2={selectedScenario2}
   			  combinedChart={false}
   			  label='PJ'
   			  minY={-450}
   			  maxY={450}
              stackedBar={stackedBar}
              line={line}
   		    />
            <StackedBarDiffChart
              chartName='Power trade'
              chartTitle='Power Trade'
   			  selectedScenario={selectedScenario}
   			  selectedScenario2={selectedScenario2}
   			  combinedChart={false}
   			  label='PJ'
   			  minY={-275}
   			  maxY={275}
              stackedBar={stackedBar}
              line={line}
   		    />
            <StackedBarDiffChart 
              chartName='System costs'
    		  chartTitle='System Costs'
    		  selectedScenario={selectedScenario}
    		  selectedScenario2={selectedScenario2}
    		  combinedChart={false}
    		  label='M Euro'
    		  minY={-14000}
    		  maxY={14000}
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
