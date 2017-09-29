import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withdrawFunds} from '../actions/index.js'


class Transaction extends Component{
  constructor(props){
    super(props);

    this.handleAllTheThings = this.handleAllTheThings.bind(this)
  }

  handleAllTheThings(amount){
    this.props.withdrawFunds(amount)
    this.props.closeModal()
  }

  render(){
    let acc = this.props.account
    console.log("Transcation props: ", this.props);
    return(
      <div>
      <p>Make a withdrawal</p>
      <p>Please choose an amount to withdraw from your {acc.accountType} You have a current balance of: {acc.balance}</p>
      <button className="btn btn-primary" onClick={()=> this.handleAllTheThings(5)}>$5</button>
      <button className="btn btn-success" onClick={()=> this.handleAllTheThings(10)}>$10</button>
      <button className="btn btn-info" onClick={()=> this.handleAllTheThings(20)}>$20</button>
      <button className="btn btn-warning" onClick={this.props.closeModal}>Cancel</button>
      </div>
    )
  }

}

function mapStateToProps(state){
  const userIdx = state.users.findIndex(user => user._id === state.selectedUser._id);
  const accountIdx = state.users[userIdx].accounts.findIndex(account => account.id === state.selectedAccount.id);

  return{
    account: state.users[userIdx].accounts[accountIdx]
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    withdrawFunds: withdrawFunds
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Transaction)
