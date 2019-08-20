import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ReactComponent as Europe } from './europe.svg'

const activeCountries = ['dk', 'no', 'se']

const countryColorsCSS = countryColors =>
  countryColors.map(
    country => `
    #${country} {
      fill:  #cccccc;
      :hover {fill: #80b3c3;}
    }
    `
)

 const StyledEurope = styled.div`
  ${props => countryColorsCSS(props.countries)}
  fill: #cccccc;
  stroke: gray;
  stroke-width: 10;
  stroke-miterlimit: 22.9256;
  position: relative;
`
const MapContainer = (props) => (
    <StyledEurope countries={activeCountries}> 
    <Europe/>
  </StyledEurope>
  )
  
export default MapContainer;