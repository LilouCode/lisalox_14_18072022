import { states } from "../../data/dataStates";
import { Departments } from "../../data/dataDepartments";
import { useState } from "react";
import "./form.scss";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ModalLibrary } from "../molecules/ModalLibrary";
import { useSource } from "../../utils/hooks";
import { ParagraphError } from "../atoms/inputs/ParagraphError";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const schema = yup.object().shape({
  FirstName: yup
    .string()
    .required("this field is required")
    .min(2, "this field requires a minimum of 2 characters")
    .max(30, "this field requires a minimum of 30 characters"),
  LastName: yup
    .string()
    .required("this field is required")
    .min(2, "this field requires a minimum of 2 characters")
    .max(30, "this field requires a minimum of 30 characters"),
  BirthDate: yup
    .date("this field is required")
    .required("this field is required"),
  StartDate: yup
    .date("this field is required")
    .required("this field is required"),
  Street: yup
    .string()
    .required("this field is required")
    .min(2, "this field requires a minimum of 2 characters")
    .max(30, "this field requires a minimum of 30 characters"),
  City: yup
    .string()
    .required("this field is required")
    .min(2, "this field requires a minimum of 2 characters")
    .max(30, "this field requires a minimum of 30 characters"),
  State: yup.string().required("this field is required"),
  ZipCode: yup.number("must be a number").required("this field is required"),
  Department: yup.string().required("this field is required"),
});
export const Form = () => {
  const { addSource, source } = useSource();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [hideModal, setModal] = useState(true);
  const onSubmit = (data, e) => {
    console.log(data, e);
    console.log("data is ", data);
    addSource(data);
    console.log(source);
    setModal(false);
    return source;
  };
  const onError = (errors, e) => console.log(errors, e);

  return (
    <div>
      <form className="form" onSubmit={handleSubmit(onSubmit, onError)}>
        <section className="form__section">
          <div className="field">
            <label className="label" htmlFor="FirstName">
              First Name
            </label>
            <input
              name="FirstName"
              type="text"
              label="First Name"
              className="input"
              id="FirstName"
              {...register("FirstName")}
            />
            <ParagraphError error={errors.FirstName?.message} />
          </div>

          <div className="field">
            <label className="label" htmlFor="LastName">
              Last Name
            </label>
            <input
              name="LastName"
              id="LastName"
              type="text"
              label="Last Name"
              className="input"
              {...register("LastName")}
            />
            <ParagraphError error={errors.LastName?.message} />
          </div>

          <div className="field">
            <label className="label" htmlFor="BirthDate">
              Date of Birth
            </label>
            <Controller
              control={control}
              name="BirthDate"
              id="BirthDate"
              defaultValue={null}
              render={({ field }) => (
                <DatePicker
                  id="BirthDate"
                  name="BirthDate"
                  className="input"
                  placeholderText="Select date"
                  onChange={(e) => {
                    field.onChange(e);
                  }}
                  selected={field.value}
                />
              )}
              {...register("BirthDate")}
            />
            <ParagraphError error={errors.BirthDate?.message} />
          </div>

          <div className="field">
            <label className="label" htmlFor="StartDate">
              Date of Start
            </label>
            <Controller
              control={control}
              name="StartDate"
              id="StartDate"
              defaultValue={null}
              render={({ field }) => (
                <DatePicker
                  name="StartDate"
                  id="StartDate"
                  className="input"
                  placeholderText="Select date"
                  onChange={(e) => {
                    field.onChange(e);
                  }}
                  selected={field.value}
                />
              )}
              {...register("StartDate")}
            />
            <ParagraphError error={errors.StartDate?.message} />
          </div>
        </section>

        <section className="form__section">
          <div className="field">
            <label className="label" htmlFor="Street">
              Street
            </label>
            <input
              name="Street"
              id="Street"
              type="text"
              label="Street"
              className="input"
              {...register("Street")}
            />
            <ParagraphError error={errors.Street?.message} />
          </div>

          <div className="field">
            <label className="label" htmlFor="City">
              City
            </label>
            <input
              name="City"
              id="City"
              type="text"
              label="City"
              className="input"
              {...register("City")}
            />
            <ParagraphError error={errors.City?.message} />
          </div>

          <div className="field">
            <label className="label" htmlFor="State">
              State
            </label>
            <select name="State" id="State" {...register("State")}>
              {states?.map((state) => {
                return (
                  <option key={state.value} value={state.label}>
                    {state.label}
                  </option>
                );
              })}
            </select>
            <ParagraphError error={errors.State?.message} />
          </div>

          <div className="field">
            <label className="label" htmlFor="ZipCode">
              ZipCode
            </label>
            <input
              name="ZipCode"
              id="ZipCode"
              type="text"
              label="Zip Code"
              className="input"
              {...register("ZipCode")}
            />
            <ParagraphError error={errors.ZipCode?.message} />
          </div>
        </section>

        <div className="field">
          <label className="label" htmlFor="Department">
            Department
          </label>
          <select name="Department" id="Department" {...register("Department")}>
            {Departments?.map((department) => {
              return (
                <option key={department.value} value={department.label}>
                  {department.label}
                </option>
              );
            })}
          </select>
          <ParagraphError error={errors.Department?.message} />
        </div>

        <input className="btn btn--cta" type="submit" value="Send" />
      </form>
      {!hideModal ? (
        <div className="home__modal">
          <ModalLibrary />
        </div>
      ) : null}
    </div>
  );
};
