// Definición de acciones y estado para la prueba
const ADD_ITEM = "ADD_ITEM";
const RESET_ITEMS = "RESET_ITEMS";

interface Action {
  type: string;
  payload: any;
}

// Reducer de Redux a probar
export function itemReducer(state: string[] = [], action: Action): string[] {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];
    case RESET_ITEMS:
      return [];
    default:
      return state;
  }
}

// Punto 9: Suite de pruebas de Jasmine para probar el reducer de Redux
describe("Suite de pruebas Jasmine - Redux Reducer", () => {

  it("Debe retornar el estado inicial por defecto si la acción no coincide", () => {
    const initialState = itemReducer(undefined, { type: "UNKNOW_ACTION" });
    expect(initialState).toEqual([]);
  });
  it("Debe agregar un elemento al estado al despachar la acción ADD_ITEM", () => {
    const action = { type: ADD_ITEM, payload: "Nuevo Elemento" };
    const state = itemReducer([], action);

    expect(state.length).toBe(1);
    expect(state).toContain("Nuevo Elemento");
  });

  it("Debe reiniciar el estado al despachar la acción RESET_ITEMS", () => {
    const initialState = ["Elemento 1", "Elemento 2"];
    const action = { type: RESET_ITEMS };
    const state = itemReducer(initialState, action);

    expect(state.length).toBe(0);
  });
});
