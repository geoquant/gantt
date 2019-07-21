import React from "react";
import styled from "styled-components/macro";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { DATA } from "../constants";
import GanttBody from "./GanttBody";
import GanttHeader from "./GanttHeader";

const theme = {
  /** App Styles */
  background: "hsl(213,90%,81%)",
  fontBlack: "hsl(0, 0%, 20%);",

  /** Header */
  fontGrey: "hsl(0, 0%, 31%);",

  /** Rows */
  rowLabelWidth: "250px",
  lightRow: "hsl(0, 0%, 97%);",
  darkRow: "hsl(0, 0%, 94%);",

  /** Gridlines */
  gridLineBold: "2px solid hsl(0, 0%, 83%);",
  gridLineDashed: "dashed 1px hsl(0, 0%, 83%);",
  gridLine: "solid 1px  hsl(0, 0%, 83%);",

  /** Appointment Styles */
  appointment: {
    booked: { backgroundColor: "hsl(0, 0%, 80%)", borderColor: "" },
    express: { backgroundColor: "hsl(0, 0%, 80%)", borderColor: "" },
    available: { backgroundColor: "hsl(166, 70%, 46%);", borderColor: "" },
    pending: {
      backgroundColor: "",
      borderColor: "solid 2px hsl(166, 70%, 46%);"
    }
  }
};

const GlobalStyle = createGlobalStyle`
  body,
  html {
    font-family: "Roboto", sans-serif;
    background-color: ${props => props.theme.background};
    height: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const AppWrap = styled.div`
  max-width: 1200px;
  min-width: 700px;
  margin: 0 auto;
  padding: 40px;
`;

const Header = styled.div`
  color: ${props => props.theme.fontBlack};
  margin-bottom: 40px;
  h2 {
    font-weight: 600;
  }
  p {
    font-weight: 300;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppWrap>
        <GlobalStyle />
        <Header>
          <h2>Gantt Chart Concept with CSS-Grid</h2>
          <ul>
            <li>animated red line</li>
            <li>color break hour</li>
            <li>handle groups - stylist, groomer, etc.</li>
            <li>groups are sorted by start time, then name</li>
            <li>tooltip over appointment bars</li>
            <li>max of 5 coinciding appointments</li>
            <li>error handling: appointments don't go into lunch etc</li>
          </ul>
        </Header>
        <GanttHeader storeHours={DATA.series} />
        <GanttBody storeHours={DATA.series} groomers={DATA.groomers} />
      </AppWrap>
    </ThemeProvider>
  );
}

export default App;
