import React, { Component } from 'react';
import PropTypes from 'prop-types';

/** antd  */
import { Button } from 'antd';

/** CSS */
import './index.css';

class ListItemHeader extends Component {
  onMoveUp = e => {
    const { onMoveUp } = this.props;
    e.stopPropagation();
    onMoveUp();
  };

  onMoveDown = e => {
    const { onMoveDown } = this.props;
    e.stopPropagation();
    onMoveDown();
  };

  render() {
    const { title, lastItem, id } = this.props;
    return (
      <div className='list-item-header'>
        <span>{title}</span>
        <div className='buttons'>
          <Button
            icon='arrow-up'
            shape='circle-outline'
            onClick={this.onMoveUp}
            disabled={id === 0}
          />
          <Button
            icon='arrow-down'
            shape='circle-outline'
            onClick={this.onMoveDown}
            disabled={lastItem}
          />
        </div>
      </div>
    );
  }
}

ListItemHeader.propTypes = {
  title: PropTypes.string,
  onMoveUp: PropTypes.func,
  onMoveDown: PropTypes.func,
  lastItem: PropTypes.bool,
  id: PropTypes.number
};

export default ListItemHeader;
