import './App.css';
import React,  {useState, usEffect, useEffect} from 'react';

import Repo from './components/repo';

function App() {
    const [repos, setRepos] = useState([]);
    function handleSearch() {
      const user = document.querySelector('input[type=text]').value;
      console.log(user);
      if(user) {
        fetch(`https://api.github.com/users/${user}/repos`).then(async (apiResponse) => {
              console.log(apiResponse.status);
              if(apiResponse.status === 200) {
                const response = await apiResponse.json();
                console.log(response);
                setRepos(response);
              }else if(apiResponse.status === 404) {
                alert("User not found...");
              } else {
                alert("There was an error");
              }
        }).catch( (err) => {
          console.log(err);
        });
      }else {
        alert("Please, insert a github user");
      }

    }
    
    return (
      <section className="app-container">
        <div className="search-box">
          <input type="text" placeholder="type a github user..."/>
          <button type="button" onClick={handleSearch}>Search</button>
        </div>
        <div className="search-results">
          <Repo repos={repos}/>
        </div>
      </section>
    );
}

export default App;
