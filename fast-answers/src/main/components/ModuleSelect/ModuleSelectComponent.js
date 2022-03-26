import React, { useState } from "react";
import { StyledSelect } from "./ModuleSelectStyle";

const customStyles = {
  valueContainer: (provided) => ({
    ...provided,
    padding: "9px 11px",
  }),
  control: (provided) => ({
    ...provided,
    border: "1px solid #d5dfe4",
  }),
};

const options = [
  { value: "module-1", label: "Модуль-1" },
  { value: "module-2", label: "Модуль-2" },
  { value: "module-3", label: "Модуль-3" },
];

export const ModuleSelectComponent = () => {
  const [selectedModule, setSelectedModule] = useState({
    value: "no-value",
    label: "Выберите модуль",
  });

  console.log(selectedModule);
  return (
    <div>
      <p>Выберите модуль</p>
      <StyledSelect
        value={selectedModule}
        onChange={(selectedOption) => setSelectedModule(selectedOption)}
        options={options}
        styles={customStyles}
      />
    </div>
  );
};
