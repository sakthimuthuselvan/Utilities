import React, { Component } from 'react'

export class Index extends Component {
  constructor(props) {
    super(props)
    const queryString = new URLSearchParams(this.props.location.search);
    const get_id = queryString.get('asset_code');
    console.log(get_id);
    this.state = {
      assetCode: get_id
    }
  }

  render() {
    return (
      <div>
        <h1>sample</h1>
      </div>
    )
  }
}

export default Index
