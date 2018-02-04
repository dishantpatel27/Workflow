import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { DragDropContextProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
var data = require('./jsonObj');
import Shell from './Shell';
import Dropbox from './Dropbox';
import $ from 'jquery';

class setupWorkflow extends Component{
    getLengthOfCurrentWorkFlow = () =>{
        return data[1]["Stages"].length;
    }

    saveHandler = (event) =>{
        var container = $("#Dropbox");
        Array.prototype.forEach.call(container.children(), element => {
            var regexp = new RegExp("[0-9]+");
			var index = regexp.exec(element.id);
            if(data[1]["Stages"][index[0]]){
                data[1]["Stages"][index[0]]["action"] = element.textContent;
                return;
            }else{
                var secondLastNode = data[1]["Stages"][index[0]-2];
				secondLastNode["nextStage"] = secondLastNode["id"] + 1;
				var lastNode = data[1]["Stages"][index[0]-1];
				lastNode["prevStage"] = lastNode["id"] - 1;
				lastNode["nextStage"] = null;
				
				data[1]["Stages"].push({
					"id": data[1]["Stages"].length+1,
					"action": element.textContent,
					"isStart": false,
					"prevStage": null,
					"nextStage": null,
                })
                return;
			};
            if(data[1]["Stages"].length === 0){
                data[1]["Stages"].push({
					"id": data[1]["Stages"].length+1,
					"action": element.textContent,
					"isStart": true,
					"prevStage": null,
					"nextStage": null,
                })
                return;
            }
            if(data[1]["Stages"].length === 1){
                data[1]["Stages"].push({
					"id": data[1]["Stages"].length+1,
					"action": element.textContent,
					"isStart": false,
					"prevStage": null,
					"nextStage": null,
                })
                return;
            }
            
            
          });
        alert("Saved!");
    }

    discardChanges = (event) =>{
        alert("Changes Discarded!");
        this.props.history.push("/");
    }

    render(){

      return(
        <div>
            <h1 style={{textAlign: "center"}}>Setup Workflow</h1>
            <DragDropContextProvider backend={HTML5Backend}>
            <div>
                <h2>Workflow</h2>
                <div id="Dropbox" style={{ overflow: 'hidden', clear: 'both', padding: "50px",margin: "auto" }}>
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
                    <h2>Actions</h2>
					<div id="Shell" style={{ overflow: 'hidden', clear: 'both',padding: "50px", margin: "auto" }}>
                        {
                            data[0]["Actions"].map((element,i)=>{
                                return <Shell key={i} name={element} data={data}/> 
                            })
                           
                        }
                        <Shell name={"Remove"} />
					</div>
				</div>
			</DragDropContextProvider>
            <div>
                <button style={{marginLeft: "50px" }} onClick={this.saveHandler}>Save Current WorkFlow</button>
                <button style={{marginLeft: "50px" }} onClick={this.discardChanges}>Discard Changes</button>
                <Link to="/"><button style={{marginLeft: "50px" }}>Admin Page</button></Link>
            </div>
        </div>
      );
    }

  }


export default setupWorkflow;