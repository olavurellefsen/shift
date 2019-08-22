import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ReactComponent as Europe } from './europe.svg'

const activeCountries = ['dk', 'no', 'se']

const countryColorsCSS = props =>
  props.countries.map(
    country => `
    #${country} {
      fill:  ${props.selectedCountries.includes(country) ? 'red' : '#cccccc'};
      :hover {fill: #80b3c3;}
    }
    `
)

 const StyledEurope = styled.div`
  ${props => countryColorsCSS(props)}
  fill: #cccccc;
  stroke: gray;
  stroke-width: 10;
  stroke-miterlimit: 22.9256;
  position: relative;
`
const MapContainer = (props) => (
    <StyledEurope selectedCountries={props.selectedCountries} countries={activeCountries}> 
    <Europe
      onClick={event => {
        const id = event.target.id
        if (id && activeCountries.includes(id)) {
          event.preventDefault()
          props.selectCountry(id)
        }
      }}
    />
  </StyledEurope>
)

MapContainer.propTypes = {
    selectedCountries: PropTypes.array.isRequired,
    selectCountry: PropTypes.func.isRequired
};
  
export default MapContainer;