# Repo Cards 🗃️
This project has the goal of improve my skills in web development using [ReactJS](https://reactjs.org/) ⚛️, and also exploring API's. To do that I used the [GitHub API](https://docs.github.com/en/rest/guides/getting-started-with-the-rest-api) to gather data about the users and show it in react components.

## Project Parts
- User Information;
- User Repositories;

### User Information 👩‍💻
Using the endpoint api.github.com/{user}, we can get information about an user in GitHub. To get this information, first we need no type an user in the input field and then click in search, after that the page will render a component with information of that user.

The following data will be showed about the user:
- User profile picture;
- Username;
- Number of followers;
- Number of following people;
- Number of repositories;

### User Repositories 🎴
Using the endpoint api.github.com/{user}/repos, we can get an array of repositories of that user. Again, after we type an user and click in search button, will be showed an button to show user's repositories, when we click on that, will be rendered an component for each repo of that user.

For each repo, we'll get:
- Repo name;
- Primary programming language;
- Number of stars;
- Number of forks;
- Creation date;

## Project Deployment 🚀
In order to deploy the application, I used [Vercel](https://vercel.com/) with Github Actions. You can see the project live [here](https://repo-cards.vercel.app/)
