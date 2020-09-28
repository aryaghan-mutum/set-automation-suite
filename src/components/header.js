import React from 'react';
import './App.css';

function Header() {
    return (
        <header className="App-header">
            <p>
                Select Automation Suites
            </p>

            <label htmlFor="myInput">Projects</label>
            <div className="radio">
                <label>
                    <input type="radio" value="cypressIO" checked={true} />
                        CypressIO
                </label>
            </div>
            <div className="radio">
                    <label>
                    <input type="radio" value="protractor" checked={true} />
                       Protractor
                    </label>
            </div>

            <button onClick="generateProject()">
                Generate Projects
            </button>

            <a href="path_to_file" download="proposed_file_name">Generate Project</a>
        </header>
    );
}

export default Header;