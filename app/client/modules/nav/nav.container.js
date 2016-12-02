
import React, { Component } from 'react';
import * as navActions from './nav.action';
import { Utils, } from '../../';

const { Setup } = Utils;

import { Link } from 'react-router';

class NavContainer extends Component {
  render(){
    return (
      <div>
        <Link to="/home">{'Home'}</Link>
        {this.props.children}
      </div>
    );
  }
}

export default Setup.customConnect('nav', navActions, NavContainer);
