import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import {
  VictoryChart,
  VictoryLabel,
  VictoryLegend,
  VictoryGroup,
  VictoryStack,
  VictoryTheme,
  VictoryAxis,
  VictoryBar,
  VictoryTooltip,
} from 'victory'
import {createAccumulatedData} from './Tools'

const ChartHeader = styled(VictoryLabel)`
  text-anchor: start;
  fill: #000000;
  font-family: inherit;
  font-size: 18px;
  font-weight: bold;
`
ChartHeader.displayName = 'ChartHeader'

const StackedBarChart = props => {
  const { t } = useTranslation()
  const stackedBar = props.stackedBar
  const scenario = props.selectedScenario
  const scenario2 = props.selectedScenario2
  const selectedCountries = props.selectedCountries
  const chartName = props.chartName
  const chartTitle = t('chartTitle.' + props.chartTitle)
  const combinedChart = props.combinedChart
  const periods = [2010, 2020, 2030, 2040, 2050]
  let gutter, rowGutter
  let minY = props.minY
  let maxY = props.maxY

  if (
    !process.env.NODE_ENV ||
    process.env.NODE_ENV === 'development' ||
    process.env.NODE_ENV === 'test'
  ) {
    gutter = 0
    rowGutter = 0
  } else {
    gutter = -40
    rowGutter = -5
  }

  let maxY2 = 1
  let minY2 = 0
  if (combinedChart === true) {
    maxY2 = props.maxY2
    minY2 = props.minY2
  }

  let yDomain = [0, 1]
  if (minY < 0 || minY2 < 0) {
    let stackedRatio = minY / maxY
    let lineRatio = minY2 / maxY2
    yDomain = stackedRatio < lineRatio ? [stackedRatio, 1] : [lineRatio, 1]
  }

  const dataScenario1 = createAccumulatedData(stackedBar.data, scenario, false, chartName, selectedCountries)
  const dataScenario2 = createAccumulatedData(stackedBar.data, scenario2, false, chartName, selectedCountries)
  const accumulatedDataScenario1 = dataScenario1[0]
  const accumulatedDataScenario2 = scenario2 ? dataScenario2[0] : undefined
  let diffData = JSON.parse(JSON.stringify(accumulatedDataScenario1))
  Object.keys(accumulatedDataScenario2).forEach(indicatorName => {
    accumulatedDataScenario2[indicatorName].forEach((yearValue, index) => {
      diffData[indicatorName][index].total =  diffData[indicatorName][index].total - yearValue.total
    })
  }) 
  let maxValue = -Infinity
  let minValue = Infinity

  let totalYearValuesPos = {}
  let totalYearValuesNeg = {}
  const years = [2010, 2013,2020,2030,2040, 2050]
  years.forEach(year => {
    totalYearValuesPos[year] = 0
    totalYearValuesNeg[year] = 0
  })
  Object.keys(diffData).forEach(indicatorName => {
    diffData[indicatorName].forEach(yearValue => {
      let value = yearValue.total
      if (value < 0) {
        totalYearValuesNeg[yearValue.year] += yearValue.total

      } else {
        totalYearValuesPos[yearValue.year] += yearValue.total

      }
    })
  })
  Object.keys(totalYearValuesPos).forEach(year => {
    maxValue = Math.round(Math.max(maxValue, totalYearValuesPos[year]))
    minValue = Math.round(Math.min(minValue, totalYearValuesNeg[year]))
  })
  if (-minValue > maxValue) {
    maxValue = -minValue
  }

  // let datasetLine3 = []
  // if (combinedChart === true) {
  //   line.data.scenarios
  //     .filter(o => o.scenario === scenario || o.scenario === scenario2)
  //     .map(scenario =>
  //       scenario.indicators
  //         .filter(o => o.indicator === chartName)
  //         .map(indicator =>
  //           indicator.indicatorGroups.map((chartGroup, i) => {
  //             if (
  //               datasetLine3.find(
  //                 c => c.indicatorGroup === chartGroup.indicatorGroup
  //               ) === undefined
  //             ) {
  //               datasetLine3.push(JSON.parse(JSON.stringify(chartGroup)))
  //             } else {
  //               for (
  //                 var j = 0;
  //                 j < datasetLine3[i].indicatorGroupValues.length;
  //                 j++
  //               ) {
  //                 datasetLine3[i].indicatorGroupValues[j].total -=
  //                   chartGroup.indicatorGroupValues[j].total
  //               }
  //             }
  //             return chartGroup
  //           })
  //         )
  //     )
  

  const colors = [
    '#5cbae6',
    '#b6d957',
    '#fac364',
    '#8cd3ff',
    '#d998cb',
    '#f2d249',
    '#93b9c6',
    '#ccc5a8',
    '#ffcc00',
    '#ff9900',
    '#ff6600',
    '#ff0000',
    '#990000',
    '#ff0099',
    '#cc3399',
    '#990066',
    '#660066',
    '#660099',
    '#3366cc',
    '#33ccff',
    '#99cc33',
    '#66cc00',
    '#aad199',
    '#45535c',
    '#471442',
    '#612e30',
    '#7a713c',
    '#09e682',
    '#160154',
    '#fc53ec',
    '#454023',
    '#4b7060',
    '#4221a6',
    '#f2aceb',
    '#ede095',
    '#0395f7',
    '#7346fa',
    '#82627f',
  ]

  return (
    <div>
      <VictoryChart
        domainPadding={20}
        width={380}
        height={380}
        padding={{ left: 80, right: 50, top: 50, bottom: 50 }}
        theme={VictoryTheme.material}
        domain={{ y: yDomain }}
      >
        <ChartHeader x={90} y={24} text={chartTitle} />
        <VictoryAxis key={0} tickValues={periods} tickFormat={periods} />
        <VictoryAxis
          dependentAxis
          axisLabelComponent={<VictoryLabel dx={120} />}
          key={2}
          offsetX={80}
          tickFormat={tick => {
            if (isNaN(maxValue)) {
              return 0
            }
            if (props.YPercentage) {
              return (
                Math.round((tick * maxValue * 100) / props.divideValues, 0) +
                '%'
              )
            }
            return Math.round((tick * maxValue) / props.divideValues, 0)
          }}
          tickValues={[-1,-0.75, -0.5, -0.25, 0, 0.25, 0.5, 0.75,1]}
          label={props.label}
        />
        {combinedChart === true && (
          <VictoryAxis
            dependentAxis
            key={3}
            offsetX={330}
            label={props.label2}
            style={{
              axis: { stroke: 'gray' },
              axisLabel: { fill: 'gray', padding: -50 },
              ticks: { padding: -25 },
              tickLabels: { fill: 'gray', textAnchor: 'start' },
            }}
            tickFormat={tick =>
              `${
                props.Y2Percentage === false
                  ? tick * maxY2
                  : tick * maxY2 * 100 + '%'
              }`
            }
            tickValues={[-1.0, -0.75, -0.5, -0.25, 0, 0.25, 0.5, 0.75, 1.0]}
          />
        )}
        <VictoryLegend
          x={90}
          y={50}
          orientation="horizontal"
          gutter={gutter}
          rowGutter={rowGutter}
          symbolSpacer={4}
          itemsPerRow={3}
          style={{
            title: { fontSize: 14, leftPadding: -10 },
          }}
          colorScale={colors}
          data={Object.keys(diffData).map((indicatorName, i) => ({
            name: t('legend.' + indicatorName)
              .concat('        ')
              .substr(0, 16),
            fill: colors[i],
          }))}
          labelComponent={<VictoryLabel style={{ fontSize: '9px' }} />}
        />
        <VictoryGroup offset={10} style={{ data: { width: 10 } }}>
          <VictoryStack>
            {Object.keys(diffData).map((indicatorName, i) => (
              <VictoryBar
                key={indicatorName}
                data={diffData[indicatorName].map(chartGroupValue => ({
                  ...chartGroupValue,
                  label:
                    'Difference: ' +
                    t('legend.' + indicatorName) +
                    ': ' +
                    (props.YPercentage
                      ? (
                          (chartGroupValue.total * 100) /
                          props.divideValues
                        ).toFixed(0) + '%'
                      : (chartGroupValue.total / props.divideValues).toFixed(
                          2
                        )),
                }))}
                x="year"
                y={datum => datum['total'] / maxValue}
                labelComponent={<VictoryTooltip />}
                style={{
                  data: { fill: colors[i] },
                }}
              />
            ))}
          </VictoryStack>
        </VictoryGroup>
        {/* {combinedChart === true && (
          <VictoryGroup>
            <VictoryLine
              data={datasetLine3[0].indicatorGroupValues.map(entry => ({
                ...entry,
                label: `${
                  props.Y2Percentage === false
                    ? entry.total.toFixed(0)
                    : (entry.total * 100).toFixed(0) + '%'
                }`,
              }))}
              x="year"
              style={{
                data: { stroke: 'green' },
                labels: { fontSize: '8px' },
              }}
              y={datum => datum['total'] / maxY2}
              animate={{ duration: 500 }}
              labelComponent={<VictoryLabel dy={7} />}
            />
          </VictoryGroup>
        )} */}
      </VictoryChart>
    </div>
  )
}

StackedBarChart.defaultProps = {
  divideValues: 1,
  YPercentage: false,
}

StackedBarChart.propTypes = {
  stackedBar: PropTypes.object,
  line: PropTypes.object,
  selectedScenario: PropTypes.string.isRequired,
  selectedScenario2: PropTypes.string.isRequired,
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
  selectedCountries: PropTypes.array.isRequired,
}

export default StackedBarChart
