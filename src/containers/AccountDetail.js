import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';

import {selectAccount} from '../actions/index';


class AccountDetail extends Component{
  render(){
    return(
      <div className="account">
        <h2>Account Information</h2>
        <p>{this.props.account.accountType} for {this.props.user.name}</p>
        <h5>Balance: {this.props.account.balance}</h5>
        <Link className="btn btn-primary" to={`/users/${this.props.match.params.id}`}> Back to user </Link>
      </div>
    )
  }
}





function mapStateToProps(state) {
  console.log("STATE!!", state);
  return {
    user: state.selectedUser,
    account: state.selectedAccount
  };
}

function mapDispatchToProps(dispatch){
  return{}
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountDetail)
