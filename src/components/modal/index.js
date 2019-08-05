import React from 'react';
import PropTypes from 'prop-types';

/** antd  */
import { Button, Modal } from 'antd';

/** Models */
import { childrenModel } from '../../utils/models';

/** Literals */
import { commons } from '../../utils/literals';

const SLModal = ({
  onCancel,
  onContinue,
  children,
  title,
  cancelDisabled,
  continueDisabled
}) => (
  <Modal
    visible
    title={title}
    mask
    closable={false}
    centered
    footer={[
      <Button key='cancel' onClick={onCancel} disabled={cancelDisabled}>
        {commons.cancel}
      </Button>,
      <Button
        key='continue'
        type='primary'
        onClick={onContinue}
        disabled={continueDisabled}
      >
        {commons.continue}
      </Button>
    ]}
  >
    {children}
  </Modal>
);

SLModal.propTypes = {
  onCancel: PropTypes.func,
  onContinue: PropTypes.func,
  children: childrenModel,
  title: PropTypes.string,
  cancelDisabled: PropTypes.bool,
  continueDisabled: PropTypes.bool
};

SLModal.defaultProps = {
  cancelDisabled: false,
  continueDisabled: false
};

export default SLModal;
