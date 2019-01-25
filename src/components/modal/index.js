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
  title
}) => (
  <Modal
    visible
    title={title}
    mask
    closable={false}
    centered
    footer={[
      <Button key='cancel' onClick={onCancel}>
        {commons.cancel}
      </Button>,
      <Button key='continue' type='primary' onClick={onContinue}>
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
  title: PropTypes.string
};

export default SLModal;
