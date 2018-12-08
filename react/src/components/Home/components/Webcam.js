import React, { PureComponent } from 'react'
import {Wrap, WebcamWrap} from './Webcam.styled';
export default class Webcam extends PureComponent {
  render() {
    const {children} = this.props;
    return (
      <Wrap>
       <WebcamWrap>
         {children}
       </WebcamWrap>
      </Wrap>
    )
  }
}
