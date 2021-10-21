import React from 'react';

import './index.css';

import dateParse from '../../utils/dateParse';

function Repo({repo}) {
            return (
              <div className="repo-container"> 
                <a href={repo.html_url} target="blank"><h3>{repo.name}</h3></a>
                <div className="repo-info">
                    <div className="left-side">
                        <h5>Primary language: {repo.language}</h5>
                        <h5>Stars: {repo.stargazers_count}</h5>
                        <h5>Forks: {repo.forks_count}</h5>
                    </div>
                    <div className="right-side">
                        <h5>Created at: {dateParse(repo.created_at)}</h5>
                    </div>
                </div>
              </div>
            );
}

export default Repo;