import React, { Component, PropTypes } from 'react'

import NumericInput from '../NumericInput'

export default class DataTableRow extends Component {
  constructor(props) {
    super(props)
    this.handleInputBlur = this.handleInputBlur.bind(this)
  }

  handleInputBlur(value) {
    const { onRowEdit, regionCode } = this.props
    onRowEdit(regionCode, value)
  }

  render() {
    return (
      <tr>
        <td>
          {this.props.regionName}
        </td>
        <td>
          <NumericInput
            value={this.props.value}
            onBlur={this.handleInputBlur}
          />
        </td>
      </tr>
    )
  }
}

DataTableRow.propTypes = {
  regionName: PropTypes.string.isRequired,
  regionCode: PropTypes.string.isRequired,
  value: PropTypes.number,
  onRowEdit: PropTypes.func.isRequired,
}
