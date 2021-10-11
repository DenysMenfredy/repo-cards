import './App.css';
import React,  {useState} from 'react';

import Repo from './components/repo';

function App() {
    const [user, setUser] = useState('');
    const [repos, setRepos] = useState([]);
    const [clicked, setClicked] = useState(false);
    function handleSearch() {
      
      // setUser(document.querySelector('input[type=text]').value);
      console.log(user);
      if(user) {
        fetch(`https://api.github.com/users/${user}/repos`).then(async (apiResponse) => {
              console.log(apiResponse.status);
              if(apiResponse.status === 200) {
                const response = await apiResponse.json();
                console.log(response);
                setRepos(response);
                setClicked(true);
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

    function handleEnterKeyPress(e) {
      if(e.key === 'Enter') {
        e.preventDefault();
        console.log("Enter key pressed");
        handleSearch();
      }
    }
    
    return (
      <section className="app-container">
        <div className="search-box">
          <input type="text" placeholder="type a github user..." onChange={e => setUser(e.target.value)} onKeyPress={handleEnterKeyPress}/>
          <button type="button" onClick={handleSearch}>Search</button>
        </div>
        <div className="search-results">
          <Repo repos={repos} clicked={clicked}/>
        </div>
      </section>
    );
}

export default App;
