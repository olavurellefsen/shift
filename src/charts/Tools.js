
import React from 'react'
function convertToLongName(country) {
    let selectedCountry = ''
        switch(country) {
          case 'dk': 
            selectedCountry = 'Denmark'
            break
          case 'no':
            selectedCountry = 'Norway'
            break
          case 'se':
            selectedCountry = 'Sweden'
            break
          default:
            console.log('Unknown selected country')
            break
        }
        return selectedCountry
  }
  
const years = [2010, 2013,2020,2030,2040, 2050]
export function createAccumulatedData(data, scenario, percentage, chartName, selectedCountries) {
    const selectedCountriesLongNames = selectedCountries.map(convertToLongName)
    //Useful when finding axis range
    let totalYearValues = {}
    years.forEach(year => {
        totalYearValues[year] = 0
    })
    if (!scenario) return undefined //this will be the case for sceanrio2 if only one scenario is selected
    let accumulatedData = {}
    data.scenarios
        .find(o => o.scenario === scenario)
        .indicators.find(o => o.indicator === chartName)
        .regions.forEach(r => {
            r.indicatorGroups.forEach(indicatorGroup => {
              if (!accumulatedData[indicatorGroup.indicatorGroup]) {
                accumulatedData[indicatorGroup.indicatorGroup]=[]
                years.forEach(y => {
                  accumulatedData[indicatorGroup.indicatorGroup].push({"year": y, "total": 0})
                })
              }
              if (selectedCountriesLongNames.includes(r.region)) {//Only include selected countries
                indicatorGroup.indicatorGroupValues.forEach((value, index) => {
                  if (accumulatedData[indicatorGroup.indicatorGroup][index].year !== value.year ) {
                     //Extra check we rely on the two arrays being indexed the same way
                    console.log("Error in array indexing")
                  }
                  accumulatedData[indicatorGroup.indicatorGroup][index].total += percentage ? value.total/selectedCountries.length : value.total
                  totalYearValues[value.year] += percentage ? value.total/selectedCountries.length : value.total
                })
              }
            })
        })
        console.log(accumulatedData)
        console.log(totalYearValues)
        return [accumulatedData, totalYearValues]
}

// export function getMinMaxStackedValues(yearValues1, yearValues2) {
//   let minValue = -0.00001
//   let maxValue = 0.00001
//   for (var i = 0; i < years.length; i++) {
//     let totalValuePos = 0
//     let totalValueNeg = 0
//     Object.keys(data).forEach(indicatorName => {
//         let value = data[indicatorName][i].total
//         if (value < 0) {
//           totalValueNeg += value
//         } else {
//           totalValuePos += value
//         }

//     })
//     if (totalValuePos > maxValue) {
//       maxValue = totalValuePos
//     }
//     if (totalValueNeg < minValue) {
//       minValue = totalValueNeg
//     }
//   }
//   if (-minValue > maxValue) {
//     maxValue = -minValue
//   }
// }