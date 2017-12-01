import React from 'react';
import PropTypes from 'prop-types';

const [reactMajorVersion] = React.version.split('.');
const canReturnArray = parseInt(reactMajorVersion, 10) >= 16;

const RenderArrayOrDiv = ({ children, as: Wrapper, ...others }) => (
  Wrapper
    ? <Wrapper {...others}>{children}</Wrapper>
    : React.Children.toArray(children)
);

if (process.env.NODE_ENV !== 'production') {
  RenderArrayOrDiv.propTypes = {
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    children: PropTypes.node.isRequired,
  };
}

RenderArrayOrDiv.defaultProps = {
  as: canReturnArray ? undefined : 'div',
};

const Fragment = React.Fragment ? React.Fragment : RenderArrayOrDiv;

export default Fragment;
