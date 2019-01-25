import NewTitle from '../components/new-title';
import NewList from '../components/new-list';

const stateList = [
  {
    // 0
    component: NewTitle,
    inputs: {
      cancel: -1,
      next: 1
    }
  },
  {
    // 1
    component: NewList,
    inputs: {
      cancel: -1,
      prev: 0,
      finish: -1
    }
  }
];

export default stateList;
