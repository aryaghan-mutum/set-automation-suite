import React from 'react';
import cypressData from '../data/cypress-suite.zip';
/**
 * 
 */
export const AutomationPage = () => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12">

                    <label htmlFor="projects">Projects</label>
                    <form>
                        <div className="radio">
                            <label>
                                <input type="radio" value="cypressIO" checked={true} />
                                Cypress IO
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input type="radio" value="protractor" />
                                Protractor
                            </label>
                        </div>
                    </form>

                    <hr></hr>

                    <label htmlFor="project_name">Project Name</label>
                    <form>
                        <input type="text" name="project_name_text_box" style={{ width: "200px" }}/>
                    </form>

                    <hr></hr>

                    <label htmlFor="add_dependencies">Add Dependencies</label>
                    <form>
                        <input type="text" name="dependency_text_box" style={{ width: "370px" }} />
                    </form>

                    <hr></hr>

                    <a href="demo-suite" download>
                        <button>Generate Project</button>
                    </a>

                    <a href={cypressData} download="cypress-demo"> 
                        <button>Generate Project 2</button>
                    </a> 

                </div>
            </div>
        </div>
    );

}
