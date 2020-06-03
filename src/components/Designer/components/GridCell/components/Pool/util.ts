import { CellData } from "../../../../schemas/CellData";
import { peek } from "../../../../util";

export function getData(cell: CellData) {
  let result = {};
  let func = function (data: CellData, result: { [key: string]: any }) {
    if (data.lanes) {
      data.lanes.forEach((lane) => {
        lane.cellDataList.forEach((element) => {
          switch (element.type) {
            case "grid":
              func(element, result);
              break;
            case "list":
              result[element.id] = [];
              // @ts-ignore
              element.lanes.forEach((row, index) => {
                if (index > 0) {
                  let rowResult: { [key: string]: any } = {};
                  row.cellDataList.forEach((listElement: CellData) => {
                    rowResult[listElement.id] = listElement.value;
                  });
                  result[element.id].push(rowResult);
                }
              });
              break;
            default:
              result[element.id] = element.value;
              break;
          }
        });
      });
    }
  };
  func(cell, result);
  return result;
}

export function setValue(cell: CellData, target: CellData, value: any) {
  let func = function (data: CellData) {
    if (data.lanes) {
      for (const lane of data.lanes) {
        for (const element of lane.cellDataList) {
          switch (element.type) {
            case "grid":
              func(element);
              break;
            case "list":
              // @ts-ignore
              for (const row of element.lanes) {
                for (let i = 0; i < row.cellDataList.length; i++) {
                  let listElement = row.cellDataList[i];
                  if (listElement.id === target.id) {
                    listElement.value = value;
                    return true;
                  }
                }
              }
              break;
            default:
              if (element.id === target.id) {
                element.value = value;
                return true;
              }
              break;
          }
        }
      }
    }
    return false;
  };
  return func(cell);
}

export function formReducer(state: any, action: any) {
  switch (action.type) {
    case "SET_VALUE":
      const copy = { ...state };
      setValue(copy.data, action.target, action.value);
      return { ...copy };
    case "VALIDATE":
      return peek(state.data, function (cellData) {
        if (!cellData.value) {
          cellData.warning = "123";
        }
      });
    default:
      return state;
  }
}
