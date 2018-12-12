import styled from "@helpscout/hsds-react/components/styled";

const InputUI = styled("input")`
  background: none;
  border: 1px solid #999;
  border-radius: 5px;
  color: white;
  display: block;
  font-family: inherit;
  font-size: inherit;
  padding: 2px 5px;
  margin: 3px 0;
  width: 100%;

  &:focus {
    border-color: #777;
  }
`;

export default InputUI;
