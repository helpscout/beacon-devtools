import styled from "@helpscout/fancy";

const InputUI = styled("input")`
  background: none;
  border: 1px solid #555;
  color: white;
  display: block;
  font-family: inherit;
  font-size: inherit;
  padding: 5px;
  margin: 3px 0;
  width: 100%;

  &:focus {
    border-color: #777;
  }
`;

export default InputUI;
