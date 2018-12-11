import styled from "@helpscout/fancy";
import Switch from "@helpscout/hsds-react/components/Switch";

const SwitchUI = styled(Switch)`
  margin: 3px 0;
  .c-Switch__backdrop:not(.is-checked) {
    background: none;
    box-shadow: 0 0 0 1px #bbb inset;
  }
`;

export default SwitchUI;
