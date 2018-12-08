import React, { PureComponent } from 'react';
import RotateLeft from '@material-ui/icons/RotateLeft';
import RotateRight from '@material-ui/icons/RotateRight';
import GpsFixed from '@material-ui/icons/GpsFixed';
import {Webcam} from './components';
import {  ButtonStyled, Wrap, ButtonsWrap, Banner, FlexContainer, Icon } from './Hone.styled'
export default class Home extends PureComponent {

  render() {
    const {onAction, actionBusy} = this.props;
    return (
      <Wrap>
      <Banner />
      <Webcam />
      <ButtonsWrap>
      <FlexContainer>
    <ButtonStyled disabled={actionBusy === 'left'} fullWidth onClick={onAction('left')}>
      <Icon size={40} >
        <RotateLeft />
      </Icon>
      </ButtonStyled>
    <ButtonStyled disabled={actionBusy === 'right'} fullWidth onClick={onAction('right')} >
      <Icon size={40} >
        <RotateRight /> 
      </Icon>
    </ButtonStyled>
    </FlexContainer>
      <div>
        <ButtonStyled disabled={actionBusy === 'shoot'} fullWidth onClick={onAction('shoot')}>
          <Icon size={40} marginRight={24} >
            <GpsFixed /> 
          </Icon> 
          <span>shoot</span>
        </ButtonStyled>
      </div>

      </ButtonsWrap>
      </Wrap>
    )
  }
}
