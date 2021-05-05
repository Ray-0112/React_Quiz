import Button from '@material-ui/core/Button';
import React from 'react';

const MultiButton=(num)=>{
  var output=[];
  for(let i=1;i<num+1;++i){
      output.push(<CounterButton></CounterButton>)
  }
  return output;
}
export default MultiButton;

class CounterButton extends React.Component{
  constructor(props){
      super(props)
      this.state={
          counter:0
      }
      this.handleClick=this.handleClick.bind(this)
  }
  handleClick(event){
      this.setState({counter:this.state.counter+1});
      console.log(this.state);
  }
  render(){
      var text=this.state.counter;
      return(
          <Button onClick={this.handleClick} variant="contained" color="second">
              你點了{text}次.
          </Button>
      );
  }
}