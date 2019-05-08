import React from 'react'
import PropTypes from 'prop-types';

import Text from './Text';

const Label = props => (
    <Text className="title bold">
      {props.label.top}
      <br />
      {props.label.bottom}
    </Text>
)





export default Label;