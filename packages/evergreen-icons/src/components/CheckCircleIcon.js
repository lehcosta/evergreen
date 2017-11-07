import React, { PureComponent } from 'react'
import Icon from './Icon'

export default class CheckCircleIcon extends PureComponent {
  render() {
    const { iconWidth, iconHeight, ...props } = this.props
    return (
      <Icon {...props}>
        <svg
          x="0px"
          y="0px"
          viewBox="0 0 16 16"
          xmlSpace="preserve"
          width={iconWidth || 16}
          height={iconHeight || 16}
          fill="currentColor"
        >
          <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM7 11.4L3.6 8 5 6.6l2 2 4-4L12.4 6 7 11.4z" />
        </svg>
      </Icon>
    )
  }
}
