import { Component } from 'react';
import PropTypes from 'prop-types';

export const historyModel = PropTypes.shape({
  action: PropTypes.string,
  block: PropTypes.func,
  createHref: PropTypes.func,
  go: PropTypes.func,
  goBack: PropTypes.func,
  goForward: PropTypes.func,
  length: PropTypes.number,
  listen: PropTypes.func,
  location: PropTypes.shape({
    hash: PropTypes.string,
    key: PropTypes.string,
    pathname: PropTypes.string,
    search: PropTypes.string,
    state: PropTypes.shape({
      page: PropTypes.number
    })
  }),
  push: PropTypes.func,
  replace: PropTypes.func
});

/**
 * {
 *  component: ChooseTransmitter,
 *  inputs: {
 *    next: 1,
 *    prev: -1,
 *    cancel: -1
 *  }
 * }
 */
export const componentState = PropTypes.shape({
  component: Component,
  inputs: PropTypes.shape({
    next: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  })
});

export const childrenModel = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.node),
  PropTypes.node
]);

export const productModel = PropTypes.shape({
  name: PropTypes.string,
  amount: PropTypes.number,
  uds: PropTypes.number
});
