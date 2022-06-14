import React, { Component } from 'react';
import './comp.css'

class News extends Component{
    render(){
        let count=1;
        function addCount(){
             count=count+1
              document.getElementById('count').innerHTML=count;
              return colorChange()
        }
        function subCount(){
             count=count-1;
             document.getElementById('count').innerHTML=count;
             return colorChange()
        }
        function colorChange(){
            if(count>=5){
                document.getElementById('count').style.color='green';
            }else if(count<5){
                document.getElementById('count').style.color='red';
            }
        }
        return(
            <div className='counter-app'> 
                <h2>Counter APP</h2>
                <p id="count">{count}</p>
                <button onClick={addCount} className='btn btn-success'>Increase</button>
                <button onClick={subCount} className='btn btn-danger'>Decrease</button>
            </div>
        )
    }
}

 

 export default News;
 
