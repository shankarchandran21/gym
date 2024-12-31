import React from 'react'
import PropTypes from 'prop-types'

const HeaderButton = ({title}) => {
  return (
    <button>{title}</button>
  )
}

HeaderButton.PropTypes={
    title: PropTypes.string
}

export default HeaderButton