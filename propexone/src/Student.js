import React  from "react";

/*export function Student(props) {
    return (
      <div>
        <h1>{props.name}</h1>
        <ul>
          <li>{props.physics}</li>
          <li>{props.chemistry}</li>
          <li>{props.biology}</li>
        </ul>
      </div>
    );
  } */
class Student extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <ul>
          <li>Physics Marks:  {this.props.physics}</li>
          <li>Cheistry Marks: {this.props.chemistry}</li>
          <li>Biology Marks : {this.props.biology}</li>
        </ul>
      </div>
    );
  }
}
/*ASSIGNMENT TASK
export function Student(props) {
  if (props.physics > 60 && props.chemistry > 60 && props.biology > 60) {
    return <h2>Grade A</h2>;
 } else {
    return <h2>Grade B</h2>;
  }
}
*/
Student.defaultProps = {
    name: "    ",
    physics:"  ",
    chemisrty:" ",
    biology:" "
  }
export default Student;


