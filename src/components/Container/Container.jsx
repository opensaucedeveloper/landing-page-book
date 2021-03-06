import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '../../helpers/WithStyles';

class Container extends Component {
  render() {
    const { fluid, className, children } = this.props;
    return (
      <div className={`${className} ${fluid ? 'container-fluid' : 'container'}`}>{children}</div>
    );
  }
}

Container.propTypes = {
  /**
   * A fluid container is shown
   */
  fluid: PropTypes.bool,
  /**
   * Class of the component
   */
  className: PropTypes.string,
  /**
   * Childrens
   */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
Container.defaultProps = {
  fluid: false,
  children: null,
  className: ''
};

const ContainerWithStyles = withStyles(Container);
export default ContainerWithStyles;
