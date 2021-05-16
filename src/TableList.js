
import React, { Component} from 'react'

export default class TableList extends Component {
        
     renderTable = (result,number,n)=>
        result.map((keys,Index)=>{
            if(n<number && Index<result.length-1){
                n++
                return (
                    <tr key={keys[0]} >
                        <td style={{border:"1px solid black"}}>{keys[0]}</td>
                        <td style={{border:"1px solid black"}}>{keys[1]}</td>
                    </tr>
                )
                }
                return null;
            
        })
        
     
    render() {
        const {result,number} = this.props;
        let r= Array.from(result);
        let n=0;
        
        return (
            <section>
                <table style={{border:"1px solid black"}}>
                    <thead>
                        <tr>
                            <th style={{border:"1px solid black"}}>Words</th>
                            <th style={{border:"1px solid black"}}>Frequency</th>
                        </tr>
                    </thead>
                    <thead>
                        {this.renderTable(r,number,n)}
                    </thead>
                </table>
                
            </section>
        )
    }
}
