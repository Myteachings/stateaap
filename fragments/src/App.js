import "./App.css";
import React from "react";

const Row = ({ children }) => <div className="row">
{children}
</div>;

const Column = ({ children }) => <div className="col">
{children}
</div>;

const Box = ({ color }) => (
  <div className="box" 
  style={{ backgroundColor: color }}>
  </div>
);

export default function App() {
  return (
    <Row>
      <ChildComponent />
      </Row>
  );}
function ChildComponent() {
  return (
    <React.Fragment>
      <Column>
        <Box color="#007bff" />
      </Column>
      <Column>
        <Box color="#fc3" />
      </Column>
      <Column>
        <Box color="#ff3333" />
      </Column>
    </React.Fragment>
  ); }

