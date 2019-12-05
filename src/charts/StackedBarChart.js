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
  // let minY2 = 0
  // if (combinedChart === true) {
  //   maxY2 = props.maxY2
  //   minY2 = props.minY2
  // }

  // let yDomain = [0, 1]
  // if (props.minY < 0 || minY2 < 0) {
  //   let stackedRatio = props.minY / props.maxY
  //   let lineRatio = minY2 / maxY2
  //   yDomain = stackedRatio < lineRatio ? [stackedRatio, 1] : [lineRatio, 1]
  // }

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

  const colors2 = [
    '#2cbae6',
    '#96d957',
    '#cac364',
    '#5cd3ff',
    '#a998cb',
    '#c2d249',
    '#63b9c6',
    '#9cc5a8',
    '#cfcc00',
    '#cf9900',
    '#cf6600',
    '#cf0000',
    '#690000',
    '#cf0099',
    '#9c3399',
    '#690066',
    '#360066',
    '#360099',
    '#0366cc',
    '#03ccff',
    '#69cc33',
    '#36cc00',
    '#7ad199',
    '#15535c',
    '#171442',
    '#312e30',
    '#4a713c',
    '#39e682',
    '#460154',
    '#cc53ec',
    '#154023',
    '#1b7060',
    '#1221a6',
    '#c2aceb',
    '#bde095',
    '#3395f7',
    '#4346fa',
    '#52627f',
  ]

 const dataScenario1 = createAccumulatedData(stackedBar.data, scenario, false, chartName, selectedCountries)
  const dataScenario2 = createAccumulatedData(stackedBar.data, scenario2, false, chartName, selectedCountries)
  const accumulatedDataScenario1 = dataScenario1[0]
  const accumulatedDataScenario2 = scenario2 ? dataScenario2[0] : undefined
  const totalYearValuesScenario1 = dataScenario1[1]
  const totalYearValuesScenario2 = scenario2 ? dataScenario2[1] : undefined
  let maxY = -Infinity
  Object.keys(totalYearValuesScenario1).forEach(year => {
    maxY = Math.round(Math.max(maxY, totalYearValuesScenario1[year],
      scenario2 ? totalYearValuesScenario2[year] : -Infinity))
  })
  return (
    <div>
      <VictoryChart
        domainPadding={20}
        width={380}
        height={380}
        padding={{ left: 80, right: 50, top: 50, bottom: 50 }}
        theme={VictoryTheme.material}
        // domain={{ y: yDomain }} //removed to fix issue with axis labels not being updated
      >
        <ChartHeader x={90} y={24} text={chartTitle} />
        <VictoryAxis key={0} tickValues={periods} tickFormat={periods} />
        <VictoryAxis
          dependentAxis
          axisLabelComponent={<VictoryLabel dx={120} />}
          key={2}
          offsetX={80}
          tickFormat={tick =>
            `${
              props.YPercentage === false
                ? ((tick * maxY) / props.divideValues).toFixed(0)
                : (tick * 100) / props.divideValues + '%'
            }`
          }
          tickValues={[0, 0.25, 0.5, 0.75]}
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
            tickValues={[0, 0.25, 0.5, 0.75, 1.0]}
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
          data={stackedBar.data.scenarios
            .find(o => o.scenario === scenario)
            .indicators.find(o => o.indicator === chartName)
            .regions.find(r => r.region === 'Denmark')
            .indicatorGroups.map((chartGroup, i) => ({
              name: t('legend.' + chartGroup.indicatorGroup)
                .concat('        ')
                .substr(0, 16),
              fill: colors[i],
            }))}
          labelComponent={<VictoryLabel style={{ fontSize: '9px' }} />}
        />
        <VictoryGroup offset={10} style={{ data: { width: 10 } }}>
          <VictoryStack>
            {Object.keys(accumulatedDataScenario1).map((chartGroupName, i) => (
                <VictoryBar
                  key={chartGroupName}
                  data={accumulatedDataScenario1[chartGroupName].map(
                    chartGroupValue => ({
                      ...chartGroupValue,
                      label:
                        t('legend.' + chartGroupName) +
                        ': ' +
                        (props.YPercentage
                          ? (
                              (chartGroupValue.total * 100) /
                              props.divideValues
                            ).toFixed(0) + '%'
                          : (
                              chartGroupValue.total / props.divideValues
                            ).toFixed(0)),
                    })
                  )}
                  x="year"
                  y={datum => datum['total'] / (maxY === 0 ? 100 : maxY)}
                  labelComponent={<VictoryTooltip />}
                  style={{
                    data: { fill: colors[i] },
                  }}
                />
              ))}
          </VictoryStack>
          {scenario2 !== '' && (
            <VictoryStack>
              {Object.keys(accumulatedDataScenario2).map((chartGroupName, i) => (
                  <VictoryBar
                    key={chartGroupName}
                    data={accumulatedDataScenario2[chartGroupName].map(
                      chartGroupValue => ({
                        ...chartGroupValue,
                        label:
                          t('legend.' + chartGroupName) +
                          ': ' +
                          (props.YPercentage
                            ? (
                                (chartGroupValue.total * 100) /
                                props.divideValues
                              ).toFixed(0) + '%'
                            : (
                                chartGroupValue.total / props.divideValues
                              ).toFixed(0)),
                      })
                    )}
                    x="year"
                    y={datum => datum['total'] / (maxY === 0 ? 100 : maxY)}
                    labelComponent={<VictoryTooltip />}
                    style={{
                      data: { fill: colors2[i] },
                    }}
                  />
                ))}
            </VictoryStack>
          )}
        </VictoryGroup>
      </VictoryChart>
    </div>
  )
}

StackedBarChart.defaultProps = {
  divideValues: 1,
  selectedScenario2: '',
  YPercentage: false,
}

StackedBarChart.propTypes = {
  stackedBar: PropTypes.object,
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
  selectedCountries: PropTypes.array.isRequired,
}

export default StackedBarChart
