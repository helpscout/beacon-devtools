import React from 'react'
import styled from '@helpscout/hsds-react/components/styled'

export class FormSection extends React.PureComponent {
  render() {
    const {children, title} = this.props
    return (
      <FormSectionUI>
        <HeaderUI>{title && <TitleUI>{title}</TitleUI>}</HeaderUI>
        {children}
      </FormSectionUI>
    )
  }
}

const FormSectionUI = styled('section')`
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  margin-top: 20px;
  margin-bottom: 20px;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    border-bottom: none;
  }
`

const HeaderUI = styled('header')`
  margin-bottom: 5px;
`

const TitleUI = styled('h2')`
  font-size: 12px;
  font-weight: bold;
  margin: 0;
`

export default FormSection
