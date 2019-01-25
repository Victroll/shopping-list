import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/** antd  */
import { Input, Button } from 'antd';

/** Components */
import ButtonWrapper from '../button-wrapper';

/** Literals */
import { createNewListTxt, commons } from '../../utils/literals';

/** Actions */
import { saveTitle } from '../../store/new-list/actions';

class NewTitle extends Component { 
  constructor(props) {
    super(props);

    const { title } = props;

    this.state = {
      title
    };
  }

  onInputChange = newValue => {
    this.setState({ title: newValue });
  };

  onNextHandler = () => {
    const { saveTitleHandler, next } = this.props;
    const { title } = this.state;
    saveTitleHandler(title);
    next();
  };

  render () {
    const { title } = this.state;
    const { cancel } = this.props;
    return (
      <Fragment>
        <h1>{createNewListTxt.newTitle.title}</h1>
        <Input
          placeholder={createNewListTxt.newTitle.placeholder}
          value={title}
          onChange={e => this.onInputChange(e.target.value)}
        />
        <ButtonWrapper>
          <Button onClick={cancel}>
            {commons.cancel}
          </Button>
          <Button
            disabled={title === ''}
            onClick={this.onNextHandler}
            type='primary'
          >
            {commons.next}
          </Button>
        </ButtonWrapper>
      </Fragment>
    );
  }
}

NewTitle.propTypes = {
  next: PropTypes.func,
  cancel: PropTypes.func,
  saveTitleHandler: PropTypes.func,
  title: PropTypes.string
};

const mapStateToProps = ({ newListReducer: { title } }) => ({
  title
});

const mapDispatchToProps = dispatch => ({
  saveTitleHandler: title => saveTitle(title, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewTitle);
