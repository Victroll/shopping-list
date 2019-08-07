import React from 'react';
import PropTypes from 'prop-types';

/** Antd  */
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
      <Button key="cancel" onClick={onCancel} disabled={cancelDisabled}>
        {commons.cancel}
      </Button>,
      <Button
        key="continue"
        type="primary"
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
  onCancel: PropTypes.func.isRequired,
  onContinue: PropTypes.func.isRequired,
  children: childrenModel.isRequired,
  title: PropTypes.string.isRequired,
  cancelDisabled: PropTypes.bool,
  continueDisabled: PropTypes.bool
};

SLModal.defaultProps = {
  cancelDisabled: false,
  continueDisabled: false
};

export default SLModal;
