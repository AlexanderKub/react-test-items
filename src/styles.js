export default {
  '@global': {
    'body': {
      margin: 0,
      padding: 0,
      fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
        "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif`,
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
    },
  },

  App: {
    backgroundColor: '#282c34',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'start',
    fontSize: 'calc(10px + 2vmin)',
    color: '#fefefe',
  },

  welcomeText: {
    marginTop: '4rem',
    fontSize: '2rem',
    marginBottom: 40,
    width: '90%',
    '@media (min-width: 576px)': {
      maxWidth: '50%',
    },
  },

  buttonsWrapper: {
  },

  standardButton: {
    backgroundColor: '#fff',
    color: '#444',
    height: '2.5rem',
    padding: [5, 10, 5, 10],
    border: 0,
    cursor: 'pointer',
    outline: 0,
    boxShadow: [0, 0, '0.625rem', 'rgba(0, 0, 0, 0.2)'],
    fontSize: 16,

    '&:hover': {
      backgroundColor: '#61dafb',
      color: '#fefefe',
    },
  },
};
