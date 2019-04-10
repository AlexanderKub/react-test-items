import React, { Component } from 'react';
import withStyles from 'react-jss'

import ModalWindow from './components/ModalWindow';
import CurrencyWidget from './components/CurrencyWidget';
import styles from './styles.js';

const WelcomeText = `Welcome to my example SAP with some test
  items powered by React.`;
const Copyright = (<div>Developed by Alexander Gutrits.</div>);

class App extends Component {
  state = {
    isCurrencyModalActive : false,
  };

  closeModal = () => {
    this.setState({isCurrencyModalActive : false});
  };

  showCurrencyModal = () => {
    this.setState({isCurrencyModalActive : true});
  };

  render() {
    const { classes } = this.props;
    const { isCurrencyModalActive } = this.state;

    return (
      <div className={classes.App}>
        <header className={classes.welcomeText}>
          {WelcomeText}{Copyright}</header>
        <div className={classes.buttonsWrapper}>
        {
          isCurrencyModalActive
          ?
          <ModalWindow onCloseRequest={this.closeModal}>
            <CurrencyWidget />
          </ModalWindow>
          :
          <div>
            <button className={classes.standardButton}
              onClick={this.showCurrencyModal}>Currency Widget</button>
          </div>
        }
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
