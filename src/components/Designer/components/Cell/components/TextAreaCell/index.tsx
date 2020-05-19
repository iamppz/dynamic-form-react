import React, { forwardRef } from "react";
import { Input } from "antd";
import { FormGroup } from "../FormGroup";
import { CellData } from "../../../../schemas/CellData";

interface TextAreaCellProps {
  element: CellData;
  layout?: "inline" | "default";
  dispatch: any;
}

const { TextArea } = Input;

export const TextAreaCell = forwardRef(
  ({ element, layout, dispatch }: TextAreaCellProps, ref: any) => (
    <>
      <FormGroup
        ref={ref}
        required={element.required!}
        warning={element.warning}
        layout={layout}
        warnable={element.warnable!}
        label={
          element.labeled ? (
            <label title={element.label}>{element.label}</label>
          ) : (
            <></>
          )
        }
        element={
          <TextArea
            rows={4}
            value={element.value}
            placeholder={element.placeholder}
            onChange={(event) => {
              dispatch({
                type: "SET_VALUE",
                target: element,
                value: event.target.value,
              });
            }}
          />
        }
      />
    </>
  )
);
