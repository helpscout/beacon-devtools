import styled from '@helpscout/hsds-react/components/styled'

const ButtonUI = styled('button')`
  appearance: none;
  background: #222;
  border: 1px solid #555;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  display: block;
  font-family: inherit;
  font-size: 12px;
  font-weight: bold;
  padding: 3px 10px;
  margin: 3px 0;

  &:active {
    background: black;
  }
`

export default ButtonUI
