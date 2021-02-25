import logo from './logo.svg';
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(theme => ({
  app: {
    textAlign: 'center'
  },
  appLogo: {
    height: '40vmin',
    pointerEvents: 'none',
    '@media (prefers-reduced-motion: no-preference)': {
      animation: '$App-logo-spin infinite 20s linear'
    }
  },
  appHeader: {
    backgroundColor: '#282c34',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white'
  },
  appLink: {
    color: '#61dafb'
  },
  '@keyframes App-logo-spin': {
    from: {
      transform: 'rotate(0deg)'
    },
    to: {
      transform: 'rotate(360deg)'
    }
  }
}))

function App() {
  const {
    app,
    appLogo,
    appHeader,
    appLink
  } = useStyles()

  return (
    <div className={app}>
      <header className={appHeader}>
        <img src={logo} className={appLogo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={appLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
