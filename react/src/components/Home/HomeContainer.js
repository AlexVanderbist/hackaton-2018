import React, { PureComponent } from 'react';
import axios from 'axios';
import Home from './Home';

const API_BASE = 'http://192.168.47.149:3000/';

export default class HomContainer extends PureComponent {
  state = {
    actionBusy: null,
  }
  getApiAction = (path) => {
    axios({
      method:'get',
      url:`${API_BASE}${path}`,
    })
      .then((response) =>  {
        if(response && response.data) {
          switch (response.data) {
            case 'MAX RIGHT': 
              this.setState({actionBusy: 'right'})
              break;
            case 'MAX LEFT': 
              this.setState({actionBusy: 'left'})
              break;
            default: 
              break;
          }
        }
    });
  }
  handleAction = (action) => async () =>  {
    switch (action) {
      case 'left':
        this.setState({actionBusy: 'left'});
        await this.getApiAction('left');
        this.setState({actionBusy: null});
        break;
      case 'right':
      this.setState({actionBusy: 'right'});
      await this.getApiAction('right');
      this.setState({actionBusy: null});
        break;
      case 'shoot': 
      await this.setState({actionBusy: 'shoot'});
      this.getApiAction('shoot-that-mofo');
      this.setState({actionBusy: null});
        break; 
      default : 
        return null;
    }
  }



  render() {
    const {actionBusy} = this.state;
    return (
      <Home actionBusy={actionBusy} onAction={this.handleAction} />
    )
  }
}
