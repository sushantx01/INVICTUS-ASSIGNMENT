import React, { Component } from 'react'
import axios from "axios"
import TableList from "./TableList";

export default class App extends Component {
  state = {
    number : 0,
    result: new Map(),
    isSubmit:false
  }
  async componentDidMount(){
    const res = await axios.get("https://raw.githubusercontent.com/invictustech/test/main/README.md")
    let apiData = res.data.split(/[.\r\n|\r|\n-:;, ]+/);
    let modifyData = new Map();
    for(let i=0;i<apiData.length;i++){
      if(modifyData.has(apiData[i])){
        modifyData.set(apiData[i],modifyData.get(apiData[i])+1);
      }
      else{
        modifyData.set(apiData[i],1);
      }
    }
    let newData = new Map([...modifyData].sort((a, b) => String(b[1]).localeCompare(a[1])));
    this.setState({
      result: newData
    })
  }


  handleChange = (event)=>{
    this.setState({
      number:event.target.value
    })
  }

  handleSubmit = (event)=>{
    event.preventDefault();
    this.setState({
      isSubmit:true
    })
  
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <input type="number" value={this.state.number} onChange={this.handleChange}/>
            <button type="submit" >Submit</button>
        </form>
      {this.state.isSubmit && <TableList number={this.state.number} result={this.state.result} />}
      
      </div>
    )
  }
}

