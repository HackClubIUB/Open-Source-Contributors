import './App.css';
import Users from './components/Users';
import FetchUser from './components/FetchUser';

function App() {
  return (
    <div className="App">
      <header className="app__header">
        <h1>Open Source Contributors</h1>
      </header>
      <div className="app__desc">
        <h2>Let's Contribute To open-source</h2>
        <p>
          Here is the Open Source Contributors Directory. Open your first Pull Request. <br />
          Read the Contribution Guidelines from&nbsp;
          <a
            href="https://github.com/HackClubIUB/Open-Source-Contributors/blob/master/README.md"
            target="_blank"
            rel="noreferrer"
          >
            here!
          </a>
        </p>
      </div>

      <div className="users">
        <FetchUser />
        <Users />
      </div>
    </div>
  );
}

export default App;
