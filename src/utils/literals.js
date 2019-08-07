import Faker from 'Faker';

export const loginTxt = {
  loginSuccess: '¡Login correcto!',
  login404: 'El usuario no existe',
  login403: 'El password es incorrecto',
  userPlaceholder: 'Introduce tu usuario',
  passwordPlaceholder: 'Introduce tu contraseña',
  userTitle: 'Usuario',
  passwordTitle: 'Contraseña',
  passwordChangeSuccess: '¡Password cambiado con éxito!',
  newPassword: 'Nuevo password',
  confirmPassword: 'Confirme el password',
  logoutSuccess: 'Desconectado'
};

export const homeTxt = {
  showLists: 'Ver listas',
  showListsButton: 'Ver',
  newList: 'Crear nueva lista',
  newListButton: 'Crear',
  settings: 'Ajustes de usuario',
  settingsButton: 'Ajustes'
};

export const showListsTable = {
  title: 'Listas guardadas',
  products: 'Productos: ',
  reset: 'Reiniciar',
  modal: {
    title: '¿Sustituir lista?',
    desc: list =>
      `Ya tienes una lista abierta. ¿Quieres abrir la lista ${list} y perder la anterior?` // eslint-disable-line
  }
};

export const createNewListTxt = {
  newTitle: {
    title: 'Introduce el nombre de la lista',
    placeholder: '"Fiesta de Francisco Castillo"'
  },
  newProduct: {
    title: 'Nuevo producto',
    name: 'Nombre del producto',
    namePlaceholder: () =>
      Faker.random.array_element([
        'Berenjenas',
        'Champú',
        'Fregona',
        'Comida del perro',
        'Cebollas',
        'Latas de tomate',
        'Arroz',
        'Friegaplatos',
        'Pilas'
      ]),
    amount: 'Cantidad',
    kg: '.kgs',
    uds: '.uds'
  },
  cancelModalTitle: title => `Cancelar lista ${title}`,
  cancelList: '¿Seguro que quieres cancelar la creación de esta lsita?',
  finishModalTitle: 'Finalizar lista',
  finishList: '¿Deseas finalizar y guardar la lista?',
  success: title => `¡Lista ${title} guardada!`
};

export const commons = {
  cancel: 'Cancelar',
  next: 'Siguiente',
  finish: 'Terminar',
  back: 'Volver',
  continue: 'Continuar'
};
