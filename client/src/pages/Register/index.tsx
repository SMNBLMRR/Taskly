import React, { useEffect } from "react";
import Header from "../../ui/molecules/Header";
import { useForm } from "react-hook-form";
import { doRegister } from "../../services/auth";
import { Link, useNavigate } from "react-router-dom";
import { AxiosResponse } from "axios";
import userStore from "../../store/user";

interface RegisterProps {}

interface FormData {
  username: string;
  email: string;
  password: string;
}

const Register: React.FC<RegisterProps> = () => {
  // Hooks
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>();
  const user = userStore(state => state?.user);

  useEffect(() => {
    if (user) navigate("/todo");
  }, [navigate, user]);

  const onSubmit = (data: FormData) => {
    doRegister(data)
      .then((res: AxiosResponse) => {
        navigate("/login");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <>
      <Header />
      <div className="w-full h-screen flex items-center justify-center m-auto flex-col">
        <form className="shadow-shadow-ligth flex flex-col p-4 rounded w-96 bg-black" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email" className="text-white">
            Email
          </label>
          <input
            id="email"
            className="shadow-shadow-ligth py-2 px-3 appearance-none rounded my-4 focus:outline-none focus:shadow-outline"
            placeholder="my@email.com"
            type="email"
            {...register("email", { required: true })}
          />
          <label htmlFor="username" className="text-white">
            Username
          </label>
          <input
            id="username"
            className="shadow-shadow-ligth py-2 px-3 appearance-none rounded my-4 focus:outline-none focus:shadow-outline"
            placeholder="user9991"
            type="text"
            {...register("username", { required: true })}
          />
          <label htmlFor="password" className="text-white">
            Password
          </label>
          <input
            id="password"
            className="shadow-shadow-ligth py-2 px-3 appearance-none rounded my-4 focus:outline-none focus:shadow-outline"
            placeholder="***************"
            type="password"
            {...register("password", { required: true })}
          />
          <div className="flex justify-between items-center w-full">
            <button className="bg-primary-button text-white rounded shadow-shadow-ligth px-2 py-1" type="button" onClick={() => reset()}>
              Clear
            </button>
            <button className="bg-[#cddc39] text-white rounded shadow-shadow-ligth px-2 py-1" type="submit">
              Submit
            </button>
          </div>
        </form>
        <div className="my-4">
          <span>
            Possiedi già un'account{" "}
            <Link to="/login">
              <strong className="text-cyan-950 underline cursor-pointer">Log in</strong>
            </Link>
          </span>
        </div>
        {(errors?.email || errors?.password) && <span className="text-red-500">Invalid Credentials</span>}
      </div>
    </>
  );
};

export default Register;
