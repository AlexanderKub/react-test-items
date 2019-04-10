export default {
  container: {
    padding: [10, 15, 40, 15],
    textAlign: 'center',
  },

  headerText: {
    textAlign: 'center',
    fontSize: '2rem',
    paddingBottom: 10,
    marginBottom: 15,
  },

  selector: {
    margin: [5, 10],
    padding: [7, 0],
    position: 'relative',
    display: 'inline-grid',
    width: '7rem',
    height: '2rem',
    lineHeight: 1,
    backgroundColor: '#282c34',
    overflow: 'hidden',
    borderRadius: '.15em',
    '& select': {
      fontSize: 18,
      backgroundColor: '#282c34',
      '&:hover': {
        color: '#61dafb',
      },
    },
    /* Arrow */
    '&:after': {
      content: '"\\25BC"',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      padding: [8, 5],
      backgroundColor: '#34495e',
      pointerEvents: 'none',
      '-webkit-transition': '.25s all ease',
      '-o-transition': '.25s all ease',
      transition: '.25s all ease',
      color: '#ddd',
    },
    '&:hover:after': {
      color: '#61dafb',
    },
  },

  inputField: {
    border: 0,
    padding: [7, 0],
    borderBottom: '2px solid #999',
    borderRadius: 0,
    //margin: [5, 10],
    fontSize: 22,
    '&.readonly': {
      color: '#888',
    },
    '&:not(.readonly)&:hover': {
      borderColor: '#61dafb',
    }
  },

  swapButton: {
    position: 'relative',
    backgroundColor: '#33495f',
    color: '#dddddd',
    width: '2.5rem',
    height: '2.5rem',
    padding: 0,
    border: 0,
    cursor: 'pointer',
    outline: 0,
    boxShadow: [0, 0, '0.625rem', 'rgba(0, 0, 0, 0.2)'],
    margin: 12,

    '&:before, &:after': {
      content: '"\\21f3"',
      position: 'absolute',
      top: -15,
      left: 0,
      width: '100%',
      height: '100%',
      fontSize: 53,
    },

    '&:before': { },
    '&:after': { display: 'none' },

    '&:hover': {
      color: '#61dafb',
    },

    '&:hover:before, &:hover:after': {
      color: '#61dafb',
    },
  },
};
