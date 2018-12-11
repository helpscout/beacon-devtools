import styled from "@helpscout/fancy";

export const FrameUI = styled("div")`
  display: flex;
  height: 100vh;
  width: 100%;
`;

export const FrameLeftUI = styled("div")`
  min-width: 0;
  flex: 1;
  overflow-y: auto;
  height: 100%;
  padding: 40px;
`;

export const FrameRightUI = styled("div")`
  width: 390px;
  min-width: 0;
  height: 100%;
  background: #ddd;
`;
