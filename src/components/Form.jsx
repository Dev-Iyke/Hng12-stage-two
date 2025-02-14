import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import localforage from "localforage";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const schema = yup.object().shape({
  fullName: yup.string().required("Full Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  avatar: yup.string().url("Invalid URL").required("Avatar URL is required"),
});

const Form = ({ setTicket }) => {
  
  const navigate = useNavigate()

  useEffect(() => {
    const userDetails = localStorage.getItem("userDetails");
    if (!userDetails) {
      toast("Please select ticket type first")
      navigate("/");
    }
  })
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  useEffect(() => {
    // Load stored data on page refresh
    localforage.getItem("formData").then((data) => {
      if (data) {
        setValue("fullName", data.fullName);
        setValue("email", data.email);
        setValue("avatar", data.avatar);
      }
    });
  }, [setValue]);

  const onSubmit = async (data) => {
    await localforage.setItem("formData", data);
    setTicket(data);
    navigate("/ticket");
  };

  return (
    <>
    <h2 className="text-3xl text-center my-12 text-[#eee]">Attendee Details</h2>
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-[85%] sm:w-[80%] md:w-[60%] mx-auto my-8 text-[#eee]">
      <>
      <label>Full Name</label>
      <input type="text" {...register("fullName")} />
      <p className="errors">{errors.fullName?.message}</p>
      </>
      <>
      <label>Email</label>
      <input type="email" {...register("email")} />
      <p className="errors">{errors.email?.message}</p>
      </>
      <>
      <label>Avatar URL (Cloudinary)</label>
      <input type="text" {...register("avatar")} />
      <p className="errors">{errors.avatar?.message}</p>
      </>

      <button type="submit">Generate Ticket</button>
    </form>
    </>
  );
};

export default Form;