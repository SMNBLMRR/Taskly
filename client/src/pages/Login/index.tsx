import React, { useEffect } from "react";
import Header from "../../ui/molecules/Header";
import userStore from "../../store/user";
import { Link, useNavigate } from "react-router-dom";
import { doLogin } from "../../services/auth";
import { useForm } from "react-hook-form";
import { AxiosResponse } from "axios";

interface LoginProps {}

interface FormData {
  email: string;
  password: string;
}

const Login: React.FC<LoginProps> = () => {
  const navigate = useNavigate();
  const { user, setUser } = userStore();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>();

  useEffect(() => {
    if (user) navigate("/todo");
  }, [navigate, user]);

  const onSubmit = (data: FormData) => {
    doLogin(data)
      .then((res: AxiosResponse) => {
        if (res.status === 200) {
          setUser(res?.data);
          navigate(`/todo`);
        }
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
            Se non hai un'account{" "}
            <Link to="/register">
              <strong className="text-cyan-950 underline cursor-pointer">registrati</strong>
            </Link>
          </span>
        </div>
        {(errors?.email || errors?.password) && <span className="text-red-500">Invalid Credentials</span>}
      </div>
    </>
  );
};

export default Login;
