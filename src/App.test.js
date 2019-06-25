import React from "react";
import App, { changeScenario } from './App';
import { render, cleanup } from 'test-utils';
afterEach(cleanup)

it("should render correctly", () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});

it('should change the scenario', () => {
  const newState = changeScenario('scenarioSelection', 1);
  expect(newState.scenarioSelection).toBe(1);
});