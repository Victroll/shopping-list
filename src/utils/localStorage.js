/**
 * This file should be removed and each function in the project, replaced
 * for API services
 */

const PRE = 'ShoppingList';
const LISTS = 'Lists';

export const saveNewList = (title, list) => {
  // Get current lists and push the new one
  let currentLists = JSON.parse(window.localStorage.getItem(`${PRE}-${LISTS}`));
  if (currentLists === null) {
    window.localStorage.setItem(
      `${PRE}-${LISTS}`,
      JSON.stringify({
        [title]: list
      })
    );
  } else {
    currentLists[title] = list;
    window.localStorage.setItem(
      `${PRE}-${LISTS}`,
      JSON.stringify(currentLists)
    );
  }
};

/**
 * Return a list of lists. Each lists will be a shopping list
 */
export const getLists = () => {
  const lists = JSON.parse(window.localStorage.getItem(`${PRE}-${LISTS}`));
  if (lists === null) {
    return {};
  }
  return lists;
};

export const removeList = id => {
  const lists = JSON.parse(window.localStorage.getItem(`${PRE}-${LISTS}`));
  const newLists = {...lists};
  delete newLists[id];
  window.localStorage.setItem(
    `${PRE}-${LISTS}`,
    JSON.stringify(newLists)
  );

  return newLists;
};
