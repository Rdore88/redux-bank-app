import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import Modal from 'react-modal';
import Transaction from './Transaction'

import {selectAccount} from '../actions/index';

const customStyles = {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
};


class AccountDetail extends Component{
  constructor(props){
    super(props)

    this.state= {isModalOpen: false};

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(){
    this.setState({isModalOpen: true})
  }

  closeModal(){
    this.setState({isModalOpen: false})
  }



  render(){
    let n = 1;
    return(
      <div className="account">
        <h2>Account Information</h2>
        <p>{this.props.account.accountType} for {this.props.user.name}</p>
        <h5>Balance: {this.props.account.balance}</h5>
        <button className="btn btn-danger" onClick={this.openModal}>Withdraw</button>
        <Link className="btn btn-primary" to={`/users/${this.props.match.params.id}`}> Back to user </Link>
        <Link className="btn btn-primary" to='/users'>Back to list of users</Link>
        <Modal
          isOpen={this.state.isModalOpen}
          onRequestClose={this.closeModal}
          closeTimeoutMS={n}
          shouldCloseOnOverlayClick={false}
          style={customStyles}
          contentLabel="Transaction"
        >
        <Transaction closeModal={this.closeModal}/>
     </Modal>
      </div>
    )
  }
}





function mapStateToProps(state){
  const userIdx = state.users.findIndex(user => user._id === state.selectedUser._id);
  const accountIdx = state.users[userIdx].accounts.findIndex(account => account.id === state.selectedAccount.id);

  return{
    account: state.users[userIdx].accounts[accountIdx],
    user: state.selectedUser
  }
}

function mapDispatchToProps(dispatch){
  return{}
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountDetail)
