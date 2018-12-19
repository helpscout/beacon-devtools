import styled from '@helpscout/hsds-react/components/styled'

export const DevToolsUI = styled('div')`
  font-size: 13px;
  max-width: 600px;
  position: relative;
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

export const FooterUI = styled('div')`
  background: black;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  font-size: 11px;
  left: -20px;
  letter-spacing: 1px;
  margin: 0 -20px -80px;
  padding: 5px 20px;
  position: sticky;
  bottom: -80px;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  z-index: 1000;
`

export const FormBlock = styled('div')`
  margin-top: 6px;
  margin-bottom: 10px;
`
