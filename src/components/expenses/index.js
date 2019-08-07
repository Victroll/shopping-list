import React, { Component } from 'react';
import moment from 'moment';

/** Antd */
import { Button, DatePicker, InputNumber } from 'antd';

/** Components */
import SLModal from '../modal';

/** Constants */
import { DATE_FORMAT } from '../../utils/constants';

class Expenses extends Component {
  state = {
    showAddModal: false,
    date: new Date(),
    amount: 50
  };

  onToggleModal = () => {
    const { showAddModal } = this.state;
    this.setState({ showAddModal: !showAddModal });
  };

  render() {
    const { showAddModal, amount, date } = this.state;
    return (
      <>
        <h1>Gasto mensual</h1>
        <div className="chart-wrapper">Chart</div>
        <Button
          type="primary"
          size="large"
          icon="plus-circle"
          shape="circle"
          onClick={this.onToggleModal}
        />
        {showAddModal && (
          <SLModal title="Añadir gasto" onCancel={this.onToggleModal}>
            <h2>Fecha</h2>
            <DatePicker
              value={moment(date, DATE_FORMAT)}
              format={DATE_FORMAT}
              onChange={value => this.setState({ date: value.toDate() })}
            />
            <h2>Cantidad</h2>
            <InputNumber
              value={amount}
              formatter={value => `${value.replace(' €', '')} €`}
              min={0}
              onChange={value => this.setState({ amount: value })}
            />
          </SLModal>
        )}
      </>
    );
  }
}

export default Expenses;
