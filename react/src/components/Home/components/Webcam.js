import React, { PureComponent } from 'react'
import {Wrap, WebcamWrap} from './Webcam.styled';
export default class Webcam extends PureComponent {
  render() {
    const {children} = this.props;
    return (
      <Wrap>
       <WebcamWrap>
        <img src="http://192.168.47.149:8081/" alt="webcam stream" />
       </WebcamWrap>
      </Wrap>
    )
  }
}
