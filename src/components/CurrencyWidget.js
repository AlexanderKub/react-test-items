import React, { Component } from 'react';
import withStyles from 'react-jss'
import {GetRatesTable} from './apiWorker';
import styles from './currencyWidgetStyles';

const currencies = [
    { key: 'USD', text: 'USD',},
    { key: 'RUB', text: 'RUB',},
    { key: 'EUR', text: 'EUR',},
];

const Selector = withStyles(styles)((props) => {
  const {classes, value, options, onChange} = props;
  const optionsEls = options.map((option) =>
    (<option key={option.key} value={option.key}>{option.text}</option>));
  return (<div className={classes.selector}>
    <select value={value} onChange={onChange}>{optionsEls}</select>
  </div>)
});

const InputField = withStyles(styles)(({classes, readOnly, value, onChange}) =>
  (<input readOnly={readOnly} type="number" min="0" step="0.01" value={value}
    className={classes.inputField + (readOnly ? ' readonly' : '')}
    pattern="[0-9.]*" onChange={onChange} />));


const Block = withStyles(styles)((props) => {
  const {
    currency, value,onChangeValue, onChangeCurrency, cid,
  } = props;

  return (<div>
    <Selector options={currencies} value={currency}
      onChange={(e) => onChangeCurrency(e.target.value, cid)} />
    <InputField value={value} readOnly={cid === "to"}
      onChange={(e) => {
        if (e.target.validity.valid) {
          onChangeValue(e.target.value, cid);
        }
      }} />
  </div>)
});

const Text = "Currency conversion";

class CurrencyWidget extends Component {
  state = {
    baseCurrency: currencies[0].key,
    targetCurrency: currencies[1].key,
    baseValue: 1,
    targetValue: 0,
    ratesTable: null,
  };

  onChangeCurrency = (value, id) => {
    if (id === "from") {
      this.setState({baseCurrency: value}, this.calculateCurrency);
    } else {
      this.setState({targetCurrency: value}, this.calculateCurrency);
    }
  };

  onChangeValue = (value, id) => {
    if (id === "from") {
      this.setState({baseValue: value}, this.calculateCurrency);
    }
  };

  onSwap = () => {
    const { baseCurrency, targetCurrency } = this.state;
    this.setState({
      targetCurrency: baseCurrency,
      baseCurrency: targetCurrency,
    }, this.calculateCurrency);
  };

  calculateCurrency = () => {
    const {
      ratesTable,
      baseValue,
      baseCurrency,
      targetCurrency
    } = this.state;

    let t = ratesTable[baseCurrency];
    t = baseValue / t;
    const result = t * ratesTable[targetCurrency];
    //console.log(baseValue, baseCurrency, 'to', result, targetCurrency);

    this.setState({targetValue: result});
  };

  fetchData = () => {
    window.clearTimeout(this.debounceID);
    GetRatesTable().then((rates) => {
      this.setState({ratesTable: rates}, () => {
        this.calculateCurrency();
        this.debounceID = window.setTimeout(() => this.fetchData(), 15 * 1000);
      });
    });
  };

  componentDidMount() {
    this.fetchData();
  }

  componentWillUnmount() {
    window.clearTimeout(this.debounceID);
  }

  render() {
    const {classes} = this.props;
    const {baseCurrency, targetCurrency, baseValue, targetValue} = this.state;
    return (
      <div className={classes.container}>
        <div className={classes.headerText}>{Text}</div>
        <Block cid="from" currency={baseCurrency} value={baseValue}
          onChangeValue={this.onChangeValue}
          onChangeCurrency={this.onChangeCurrency} />
        <button className={classes.swapButton} onClick={this.onSwap} />
        <Block cid="to" currency={targetCurrency} value={targetValue.toFixed(2)}
          onChangeValue={this.onChangeValue}
          onChangeCurrency={this.onChangeCurrency} />
      </div>
    );
  }
}

export default withStyles(styles)(CurrencyWidget);
