import React from "react";
import Select from "react-select";

export default function Dropdown(props) {
  return (
    <>
      <Select
        options={props.options}
        isMulti={props.isMulti}
        className={props.className}
      />
    </>
  );
}
