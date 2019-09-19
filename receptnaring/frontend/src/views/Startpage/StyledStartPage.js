import styled from 'styled-components';
import { Spinner } from 'reactstrap';

export const StartPageContainer = styled.div`
  background-color: #fff;
  padding: 40px;
`

export const StyledSpinner = styled(Spinner)`
  color: #72C554;
  width: 150px !important;
  height: 150px !important;
  justify-content: center;
`

export const RecipeWrapper = styled.div`
  height: auto;
  display: flex;
  justify-content: center;
`

export const TextWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TextBanner = styled.div`
  width: 120px;
  height: 28px;
  display: flex;
  align-items: center;
  top: 212px;
  z-index: 9999;
  position: absolute;
  justify-content: center;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #707070;
  @import url('https://fonts.googleapis.com/css?family=Cabin+Sketch:400,700&display=swap" rel="stylesheet');
  font-family: 'Cabin Sketch', cursive;
`

export const TextInfo = styled.h1`
  text-transform: uppercase;
  font-size: 18px;
  text-align: center;
`