import styled from 'styled-components';
import MuiButton from '@material-ui/core/Button'

export const Banner = styled.div`
  width: calc(100% + 48px);
  height: 400px;
  background-image: url('fuck-you-motherfucker.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  margin: -24px;
`;

export const Wrap = styled.div`
height: calc(100vh - 80px);
  box-shadow: 0 0 0 1px rgba(51, 51, 51, 0.1), 0 5px 10px rgba(51, 51, 51, 0.1);
  background: #fff
  flex: 1 auto;
  max-width: 500px;
  padding: 24px;
  flex-direction: column;
  display: flex;
`;

export const Icon = styled.span`
  margin-right: ${({marginRight}) => marginRight || 0}px
  svg {
    width: ${({size}) => size || 32}px;
    height: ${({size}) => size || 32}px;
  }
`;

export const FlexContainer = styled.div`
  display:flex;
  justify-content: space-between;
  button:first-child {
    margin-right: 20px;
  }
`;

export const ButtonsWrap = styled.div`
  margin-top: auto;
`

export const ButtonStyled = styled(MuiButton)`
  && {
    margin-top: 24px;
    font-size: 20px;
    font-weight: 700;
    background: #4d647d;
    color: #fff;
    &:hover {
      background: #263d54;
    }
  }
`;