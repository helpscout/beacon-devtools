import styled from '@helpscout/hsds-react/components/styled'

export const FrameUI = styled('div')`
  --BlueConfigGlobalFontFamily: SFMono-Regular, Consolas, Liberation Mono, Menlo,
    Courier, monospace;

  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  background: black;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 16px rgba(0, 0, 0, 0.1),
    0 8px 24px rgba(0, 0, 0, 0.2), 0 8px 24px 1px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  color: white;
  font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier,
    monospace;
  font-size: 12px;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 20px 20px 60px;
  position: relative;
  width: 100%;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 10px;
    display: none;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
  }

  &:hover {
    &::-webkit-scrollbar-thumb {
      display: block;
    }
  }

  * {
    box-sizing: border-box;
  }
`

export const DevToolsUI = styled('div')`
  font-size: 13px;
  max-width: 600px;
  position: relative;
`

export const HeaderUI = styled('div')`
  background: black;
  font-size: 11px;
  font-weight: bold;
  left: 0;
  left: 0;
  letter-spacing: 1px;
  line-height: 1;
  margin: -20px -20px 0;
  padding: 20px;
  position: sticky;
  text-transform: uppercase;
  top: -20px;
  z-index: 1000;
`
