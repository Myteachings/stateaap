import React from 'react'
export default class ClassComponentExample extends React.Component 
{
    constructor()
    {
        super();
        this.state = {
            clicks: 0,
            show:true
            
            
        };
    }
    IncrementItem = () => {
        this.setState({ clicks: this.state.clicks + 1 });
      }
      DecreaseItem = () => {
        this.setState({ clicks: this.state.clicks - 1 });
      }
      ToggleClick = () => {
        this.setState({ show: !this.state.show });
      }
    
   
    
    render() {
        return <div>
               <h1>{this.state.count}  </h1>
               
               <button onClick={this.IncrementItem}>Click to increment by 1</button>
        <button onClick={this.DecreaseItem}>Click to decrease by 1</button>
        <button onClick={this.ToggleClick}>
          { this.state.show ? 'Hide number' : 'Show number' }
        </button>
        { this.state.show ? <h2>{ this.state.clicks }</h2> : '' }
            </div>
         
    }
}