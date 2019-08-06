import NewTitle from '../components/new-title';
import NewList from '../components/new-list';
import ListsTable from '../components/lists-table';
import List from '../components/list';
import Settings from '../components/settings';

export const createNewListStates = [
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

export const settingsStates = [
  {
    // 0
    component: Settings,
    inputs: {
      cancel: -1,
      finish: -1
    }
  }
];

export const showListStates = [
  {
    // 0
    component: ListsTable,
    inputs: {
      prev: -1,
      next: 1,
      edit: 2
    }
  },
  {
    // 1
    component: List,
    inputs: {
      prev: 0
    }
  },
  {
    // 2
    component: NewTitle,
    inputs: {
      cancel: -1,
      next: 3
    }
  },
  {
    // 3
    component: NewList,
    inputs: {
      cancel: -1,
      prev: 2,
      finish: -1
    }
  }
];
