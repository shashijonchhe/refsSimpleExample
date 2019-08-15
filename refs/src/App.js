import React from 'react';
import './App.css'

class App extends React.Component{
  constructor(){
    super()
    this.state={
        count:[]
    }
 this.inputRef=React.createRef()
  }
  
onHandleClick=()=>{
  let count=this.inputRef.current.value;
  alert(count)
  console.log(count)
}


render(){
  return(
    <div className="App">
      <input type='text' ref={this.inputRef}></input>
      <br/>
      <button onClick={this.onHandleClick}>Add</button>
    </div>
    )
}

}




export default App;
