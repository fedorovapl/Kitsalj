import React, { useState } from "react";
import { StyledSelect } from "./LessonSelectStyle";

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
  { value: "lesson-1", label: "Урок 1" },
  { value: "lesson-2", label: "Урок 2" },
  { value: "lesson-3", label: "Урок 2" },
];

export const LessonSelectComponent = () => {
  const [selectedLesson, setSelectedLesson] = useState({
    value: "no-value",
    label: "Выберите урок",
  });

  console.log(selectedLesson);
  return (
    <div>
      <p>Выберите Урок</p>
      <StyledSelect
        value={selectedLesson}
        onChange={(selectedOption) => setSelectedLesson(selectedOption)}
        options={options}
        styles={customStyles}
      />
    </div>
  );
};
