import React from 'react';

import './index.css';

import dateParse from '../../utils/dateParse';

function Repo({repos}) {
        if(repos.length === 0) {
          return (
            <h1>User doesn't have repositories...</h1>
          )
        }
        return repos.map( (repo) => {
            return (
              <div key={repo.id} className="repo-container"> 
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
          });
}

export default Repo;