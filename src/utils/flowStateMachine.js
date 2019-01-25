import { Component, createFactory } from 'react';
import PropTypes from 'prop-types';

import { componentState, historyModel } from './models';

/**
 * @param {Array} stateList @see componentState List of states for the flow
 * @param {string} negativeRedirect URL to redirect when an input of any state
 * is -1.
 *
 * The prop stateList should be used like this:
 *
 * [
 *  {
 *    component: ChooseTransmitter,
 *    inputs: {
 *      next: 1,
 *      prev: -1,
 *      cancel: -1,
 *      save: 7
 *    }
 *  },
 * {
 *    component: ChooseDestiny,
 *    inputs: {
 *      nextSimple: 3,
 *      nextComplex: 2,
 *      prev: 0,
 *      cancel: -1
 *    }
 *  },
 * {
 *    component: ChooseComplexShipping,
 *    inputs: {
 *      next: ??,
 *      prev: 1,
 *      cancel: -1
 *    }
 *  },
 *  {
 *    component: DestinyDataSimpleShipping,
 *    inputs: {
 *      next: ??,
 *      prev: 1,
 *      cancel: -1
 *    }
 *  }
 * ]
 */
class FlowStateMachine extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentState: props.initialState
    };
  }

  // Update only when a tranistion happens
  shouldComponentUpdate(nextProps, nextState) {
    const { currentState } = this.state;
    const { allowRecursivity } = this.props;
    if (nextState.currentState !== currentState || allowRecursivity) {
      return true;
    }
    return false;
  }

  transition(to) {
    const { currentState } = this.state;
    const { stateList, history, negativeRedirect } = this.props;
    const goTo = stateList[currentState].inputs[to];
    if (typeof goTo === 'string') {
      history.push(`/${goTo}`);
    } else if (goTo === -1) {
      history.push(negativeRedirect);
    } else {
      this.setState({
        currentState: goTo
      });
    }
  }

  render() {
    const { currentState } = this.state;
    const { stateList } = this.props;
    const state = stateList[currentState];
    const factory = createFactory(state.component);

    return factory({
      ...this.props,
      ...Object.keys(state.inputs).reduce(
        (last, current) => ({
          ...last,
          [current]: () => this.transition(current)
        }),
        {}
      )
    });
  }
}

FlowStateMachine.propTypes = {
  // List of states
  stateList: PropTypes.arrayOf(componentState),
  // Page to go with the value -1
  negativeRedirect: PropTypes.string,
  // Initial state
  initialState: PropTypes.number,
  // Browser history
  history: historyModel,
  // Allow recursivity
  allowRecursivity: PropTypes.bool
};

FlowStateMachine.defaultProps = {
  negativeRedirect: '/',
  initialState: 0,
  allowRecursivity: false
};

export default FlowStateMachine;
