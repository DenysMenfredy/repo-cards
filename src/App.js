import './App.css';
import React,  {useState} from 'react';

import User from './components/user';
import Repo from './components/repo';

function App() {
    const [user, setUser] = useState('');
    const [userName, setUserName] = useState('');
    const [userPic, setUserPic] = useState('');
    const [userFollowers, setUserFollowers] = useState('');
    const [userFollowing, setUserFollowing] = useState('');
    const [repos, setRepos] = useState([]);
    const [clicked, setClicked] = useState(false);
    const [showRepos, setShowRepos] = useState(false);


    function getInfo() {
        // e.preventDefault();
        fetch(`https://api.github.com/users/${user}`).then( async (res) => {
          console.log(res.status);
          if (res.status === 200) {
            const response = await res.json();
            console.log(response);
            setUserName(response.name);
            setUserPic(response.avatar_url);
            setUserFollowers(response.followers);
            setUserFollowing(response.following);

          } else if (res.status === 404) {
            alert('User not found');
            setUserName('');
            setUserPic('');
            setUserFollowers('');
            setUserFollowing('');
          } else {
            alert('Something went wrong');
          }
          
        } 
        ).catch(err => console.log(err));
    }

    function handleSearch() {
      // setUser(document.querySelector('input[type=text]').value);
      console.log(user);
      if(user) {
        getInfo(user);
        setShowRepos(false);
        fetch(`https://api.github.com/users/${user}/repos`).then(async (apiResponse) => {
              console.log(apiResponse.status);
              if(apiResponse.status === 200) {
                const response = await apiResponse.json();
                console.log(response);
                setRepos(response);
                setClicked(true);
              }else if(apiResponse.status === 404) {
                alert("User not found...");
                setRepos([]);
                setClicked(false);
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

    function handleShowRepos() {
      setShowRepos(!showRepos);
    }
    
    return (
      <section className="app-container">
        {/* TODO: Create a new branch to implement new features. */}
        {/* TODO: move input to center and when click in search move to top. */}
        <div className="search-box">
          <input type="text" placeholder="type a github user..." onChange={e => setUser(e.target.value)} onKeyPress={handleEnterKeyPress}/>
          <button type="button" onClick={handleSearch}>Search</button>
        </div>
        <div className="search-results">
          {clicked && (<User userName={userName} userPic={userPic} userFollowers={userFollowers} userFollowing={userFollowing} numRepos={repos.length}/>)}
          {clicked && user && (<button className="show-repos-btn" onClick={handleShowRepos}>Show Repositories</button>)}

          {/* TODO: show repos in a slider way. */}
          {showRepos && clicked && repos.length <= 0 && (<h1>No repositories found</h1>)}
          {showRepos && clicked && repos.length > 0 && repos.map((repo) => {
            return (
              <div key={repo.id}>
                <Repo repo={repo}/>
              </div>
            )
          })}
        </div>
      </section>
    );
}

export default App;
