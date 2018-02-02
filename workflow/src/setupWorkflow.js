import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { DragDropContextProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
var data = require('./jsonObj');
import Shell from './Shell';
import Dropbox from './Dropbox'

class setupWorkflow extends Component{
    render(){

      return(
        <div>
            <h1 style={{textAlign: "center"}}>Setup Workflow</h1>
            <DragDropContextProvider backend={HTML5Backend}>
            <div>
                <div style={{ overflow: 'hidden', clear: 'both' }}>
						<Dropbox />
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