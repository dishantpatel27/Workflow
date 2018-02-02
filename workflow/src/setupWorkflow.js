import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { DragDropContextProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
var data = require('./jsonObj');
import Shell from './Shell';
import Dropbox from './Dropbox'

class setupWorkflow extends Component{
    getLengthOfCurrentWorkFlow = () =>{
        return data[1]["Stages"].length;
    }
    render(){

      return(
        <div>
            <h1 style={{textAlign: "center"}}>Setup Workflow</h1>
            <DragDropContextProvider backend={HTML5Backend}>
            <div>
                <div style={{ overflow: 'hidden', clear: 'both' }}>
                {
                    
                    data[0]["Actions"].map((element,i) => {
                        if(i <= this.getLengthOfCurrentWorkFlow()-1){
                            return <Dropbox key={i} name={"index_"+i} data={data[1]["Stages"][i]["action"]}/>
                        }else{
                            return <Dropbox key={i} name={"index_"+i} data={""}/>
                        }
                        
                    })
                }
				</div>
			
					<div style={{ overflow: 'hidden', clear: 'both' }}>
                        {
                            data[0]["Actions"].map((element)=>{
                                return <Shell name={element} /> 
                            })
                        }
					</div>
				</div>
			</DragDropContextProvider>
            <p>
                <Link to="/"><button>Admin Page</button></Link>
            </p>
        </div>
      );
    }

  }


export default setupWorkflow;