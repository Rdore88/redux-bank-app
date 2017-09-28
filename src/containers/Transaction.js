import React, {Component} from 'react'

export default class Transaction extends Component{
  render(){
    console.log("Transcation props: ", this.props);
    return(
      <div>
      <p>This is Transaction</p>
      <button className="btn btn-danger" onClick={this.props.closeModal}>close modal</button>
      </div>
    )
  }

}
