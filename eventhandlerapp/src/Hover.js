import React from 'react'
export default class Hover extends React.Component {
 constructor(props) {
  super(props)
  this.state = {
   box: 'out'
  }
 }
changeColor() {
  this.setState({
   box_state: 'in'
  })
 }
resetColor() {
  this.setState({
   box_state: 'out'
  })
 }
render() {
  return (
   <div style={insert box model} onMouseEnter={this.changeColor.bind(this)} onMouseLeave={this.resetColor.bind(this)}>
   </div>
  )
}
}
 
