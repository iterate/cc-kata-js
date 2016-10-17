var React = require('react');
var ccValidator = require('./lib/ccValidator.js');

var CreditCard = React.createClass({
  getInitialState: function () {
    return {ccNumber: '', isValid: false};
  },

  handleSubmit: function (e) {
    e.preventDefault();
    if (ccValidator(this.state.ccNumber)) {
      console.log('Valid CC', this.state.ccNumber);
      this.setState({isValid: true});
    } else {
      console.log('Invalid CC', this.state.ccNumber);
      this.setState({isValid: false});
    }
    return;
  },

  handleCreditCardNumberChange: function (e) {
    this.setState({ccNumber: e.target.value});
  },

  render: function () {
    return (
      <form onSubmit={this.handleSubmit}>    
        <input
          type="text"
          placeholder="Creditcard number"
          onChange={this.handleCreditCardNumberChange}
          value={this.state.ccNumber}
        />
        <input type="submit" value="Validate"/>
      </form>
    );
  }


});

module.exports = CreditCard;
