import React, { PureComponent } from 'react'
import Box from 'ui-box'
import { TriangleIcon } from 'evergreen-icons'
import Tab from './Tab'

export default class Tablist extends PureComponent {
  static propTypes = {
    ...Tab.propTypes,
  }

  static defaultProps = {
    width: '100%',
    height: 32,
    paddingX: 0,
    paddingLeft: 8,
    marginX: 0,
    marginBottom: 4,
    justifyContent: 'auto',
  }

  render() {
    const { children, height, isSelected, ...props } = this.props
    return (
      <Tab isSelected={isSelected} height={height} {...props}>
        <Box is="span" flex="1">
          {children}
        </Box>
        {isSelected && (
          <TriangleIcon
            height={height}
            width={height}
            iconSize={14}
            aim="right"
            color="inherit"
          />
        )}
      </Tab>
    )
  }
}
