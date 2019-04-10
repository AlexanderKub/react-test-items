import React, { Component } from 'react';
import withStyles from 'react-jss'

const styles = {
  '@global': {
    'body': { overflow: 'hidden' },
  },

  closeButton: {
    position: 'fixed',
    top: 2,
    right: 2,
    background: '#fff',
    width: '2.5rem',
    height: '2.5rem',
    padding: 0,
    border: 0,
    cursor: 'pointer',
    outline: 0,
    boxShadow: [0, 0, '0.625rem', 'rgba(0, 0, 0, 0.2)'],

    '&:before, &:after': {
      content: '""',
      position: 'absolute',
      top: '1.2rem',
      left: '0.25rem',
      width: '2rem',
      height: '0.1rem',
      backgroundColor: '#444',
    },

    '&:before': { transform: 'rotate(45deg)' },
    '&:after': { transform: 'rotate(-45deg)' },

    '&:hover': {
      backgroundColor: '#61dafb',
    },

    '&:hover:before, &:hover:after': {
      backgroundColor: '#fefefe',
    },
  },

  wrapperModal: {
    width: '100%',
    backgroundColor: '#fff',
    boxShadow: [0, 0, '0.625rem', 'rgba(0, 0, 0, 0.2)'],

    '@media (min-width: 576px)': {
      width: '32rem',
    },
  },

  overlayModal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    padding: '1rem',
    backgroundColor: '#78839ac9',
    zIndex: '9999',
    opacity: 1,
    overflowX: 'hidden',
    overflowY: 'auto',
    animation: 'show .5s ease',
  },

  contentModal: {
    color: 'black',
  },
}

class ModalWindow extends Component {
  handleKeyUp = (e) => {
    const { onCloseRequest } = this.props;
    if (e.keyCode === 27) {
      e.preventDefault();
      onCloseRequest();
      window.removeEventListener('keyup', this.handleKeyUp, false);
    }
  };

  handleOutsideClick = (e) => {
    const { onCloseRequest } = this.props;
    if (this.modal) {
      if (!this.modal.contains(e.target)) {
        onCloseRequest();
        document.removeEventListener('click', this.handleOutsideClick, false);
      }
    }
  };

  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyUp, false);
    document.addEventListener('click', this.handleOutsideClick, false);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyUp, false);
    document.removeEventListener('click', this.handleOutsideClick, false);
  }

  render() {
    const { children, classes, onCloseRequest } = this.props;
    return (
      <div className={classes.overlayModal}>
        <div className={classes.wrapperModal} ref={node => (this.modal = node)}>
          <div className={classes.contentModal}>
          {children}
          </div>
        </div>
        <button className={classes.closeButton}
          type="button"
          onClick={onCloseRequest}/>
      </div>
    );
  }
}

export default withStyles(styles)(ModalWindow);
