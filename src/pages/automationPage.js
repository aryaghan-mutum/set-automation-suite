import React from 'react';

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

                    <label htmlFor="add_dependencies">Add Dependencies</label>
                    <form>
                        <input type="text" name="dependency_text_box" style={{ width: "370px" }} />
                    </form>

                    <hr></hr>

                    {/* <button onClick="generateProject()">
                        Generate Project
                    </button> */}


                    <a href="path_to_file" download="proposed_file_name">Generate Project</a>
                </div>
            </div>
        </div>
    );

}
