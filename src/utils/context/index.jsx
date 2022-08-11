import React, { useState } from "react";
import { createData } from "../helpers";
import { EmployeeList } from "../../data/mock/employeeMockList";
const list = [];
EmployeeList.forEach((e) => {
  const element = createData(
    e.FirstName,
    e.LastName,
    e.BirthDate,
    e.StartDate,
    e.Street,
    e.City,
    e.States,
    e.ZipCode,
    e.Department
  );
  list.push(element);
});
export const SourceContext = React.createContext();

export const SourceProvider = ({ children }) => {
  const [source, setSource] = useState(list);
  const [filtredSource, setFiltredSource] = useState(source);
  const addSource = (payload) => {
    const dateBirth = new Date(payload.BirthDate).toLocaleDateString("en-CA");
    const dateStart = new Date(payload.StartDate).toLocaleDateString("en-CA");
    const element = createData(
      payload.FirstName,
      payload.LastName,
      dateBirth,
      dateStart,
      payload.Street,
      payload.City,
      payload.State,
      payload.ZipCode,
      payload.Department
    );
    list.push(element);
    setSource(list);
    console.log("Source is ", source);
  };
  const searchSource = (payload) => {
    const data = source.filter(
      (e) =>
        e.FirstName.toLowerCase().includes(payload) ||
        e.LastName.toLowerCase().includes(payload) ||
        e.City.toLowerCase().includes(payload) ||
        e.Department.toLowerCase().includes(payload) ||
        e.Street.toLowerCase().includes(payload) ||
        e.BirthDate.toLowerCase().includes(payload)||
        e.State.toLowerCase().includes(payload)
    );
   
    setFiltredSource(data)
    console.log(data)
    console.log('result ', filtredSource)
  };
  const cleanFilter = () => {
    setFiltredSource(source)
  }
  return (
    <SourceContext.Provider value={{ source, filtredSource, addSource, searchSource, cleanFilter}}>
      {children}
    </SourceContext.Provider>
  );
};
