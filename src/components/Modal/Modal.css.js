import styled from '@helpscout/hsds-react/components/styled'
import CloseButton from '@helpscout/hsds-react/components/CloseButton'

export const FrameUI = styled('div')`
  ${getFrameStyles};
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 20px 20px 80px;
  position: relative;
  width: 100%;

  * {
    color: white;
  }

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

export const HeaderUI = styled('div')`
  background: black;
  border-radius: 8px;
  font-size: 11px;
  font-weight: bold;
  left: -20px;
  letter-spacing: 1px;
  line-height: 1;
  margin: -20px -20px 0;
  padding: 20px;
  position: sticky;
  text-transform: uppercase;
  top: -20px;
  z-index: 1000;
`

export const CloseUI = styled(CloseButton)`
  color: white !important;
  position: absolute;
  top: 4px;
  right: 8px;
  z-index: 9999999;
  transform: scale(0.6);
`
CloseUI.defaultProps = {
  seamless: true,
}

export const MinimizeUI = styled('button')`
  ${getFrameStyles};
  bottom: 30px;
  cursor: pointer;
  font-weight: bold;
  height: 32px;
  left: 30px;
  position: fixed;
  width: 32px;
  z-index: 999999999;

  &:hover {
    background: #222;
  }
  &:active {
    background: black;
  }
`

export const ModalContentWrapperUI = styled('div')`
  opacity: 0;
  transition: opacity 60ms linear;

  ${({isOpen}) =>
    isOpen &&
    `
    opacity: 1;
  `}
`

function getFrameStyles() {
  return `
    --BlueConfigGlobalFontFamily: SFMono-Regular, Consolas, Liberation Mono, Menlo,
    Courier, monospace;

    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background: black;
    border-radius: 4px;
    border: 2px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 16px rgba(0, 0, 0, 0.1),
      0 8px 24px rgba(0, 0, 0, 0.2), 0 8px 24px 1px rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    color: white;
    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier,
      monospace;
    font-size: 12px;
  `
}
