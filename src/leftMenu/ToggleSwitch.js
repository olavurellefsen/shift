import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const SwitchBoxAround = styled.label`
  position: relative;
  display: inline-block;
  width: 36px;
  height: 18px;
  `;
  SwitchBoxAround.displayName = 'SwitchBoxAround';
const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
  border-radius: 20px;
  &:before {
    position: absolute;
    content: "";
    height: 10px;
    width: 10px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: .4s;
    border-radius: 50%;
  }
  `;
  Slider.displayName = 'Slider';
const SwitchInput = styled.input`
  display:none;
  &:checked + span {
    background-color: ${props => (props.dimmed ? '#555' : '#2196F3')};
  }
  &:focus + span {
    box-shadow: 0 0 1px #2196F3;
  }
  &:checked + span:before {
    transform: translateX(18px);
  }
  `;
  SwitchInput.displayName = 'SwitchInput';

const ToggleSwitch = (props) => (
  <SwitchBoxAround>
    <SwitchInput type='checkbox' checked={props.checked} dimmed={props.dimmed} onChange={()=>{}} />
    <Slider className='slider'></Slider>
  </SwitchBoxAround>
)

ToggleSwitch.defaultProps = {
  dimmed: true,
  checked: false
}

ToggleSwitch.propTypes = {
  dimmed: PropTypes.bool,
  checked: PropTypes.bool
}

export default ToggleSwitch;