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


Label.propTypes = {
  label: PropTypes.object
};

Label.defaultProps = {
  label: {
    top: 'Hello',
    bottom: 'Gatsby'
  }
};


export default Label;