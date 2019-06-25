
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";

const TabLayout = styled.div`
  display: none;
  ${breakpoint('mobile','desktop')`
    display: flex;  
    height: 40px;
    flex-direction: row;
    flex-shrink: 0;
    justify-content: flex-start;
    width: 100%;
    padding-left: 10px;
    color: white;
    background: rgb(80, 80, 80);
    visibility: visible;
  `}
  `;
  TabLayout.displayName = 'TabLayout';
const TabItem  = styled(Link)`
  font-weight: ${props => (props.selected ? 'bold' : 'normal')};
  font-size: 0.7em;
  margin: 3px 0px 0px 0px;
  padding: 10px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  display: flex;
  align-items: center;
  text-decoration: none;
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
  color: ${props => (props.selected ? 'black' : 'inherit')};
  background: ${props => (props.selected ? 'white' : 'inherit')};
  `;
  TabItem.displayName = 'TabItem';

function Tabs(props) {
  const { t } = useTranslation();
  
  return (
      <TabLayout>
          <TabItem to='/' selected={props.selectedChartgroup==='/'}>{t("tabs.mobile.overview")}</TabItem>
          <TabItem to='/tab2' selected={props.selectedChartgroup==='/tab2'}>{t("tabs.mobile.mainresults")}</TabItem>
          <TabItem to='/tab3' selected={props.selectedChartgroup==='/tab3'}>{t("tabs.mobile.supplysector")}</TabItem>
          <TabItem to='/tab4' selected={props.selectedChartgroup==='/tab4'}>{t("tabs.mobile.transportsector")}</TabItem>
		  <TabItem to='/tab5' selected={props.selectedChartgroup==='/tab5'}>{t("tabs.mobile.industry")}</TabItem>
		  <TabItem to='/tab6' selected={props.selectedChartgroup==='/tab6'}>{t("tabs.mobile.households")}</TabItem>
      </TabLayout>
    );
  }

Tabs.propTypes = {
  selectedChartgroup: PropTypes.string.isRequired
}

export default Tabs;