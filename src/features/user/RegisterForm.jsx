import FormInput from "@ui/FormInput";
import SubmitBtn from "@ui/SubmitBtn";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-28 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign up to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <FormInput type="text" label="username" />
          <FormInput type="email" label="email address" />
          <FormInput type="password" label="password" />
          <SubmitBtn text="Sign up" />
        </form>
        <p className="mt-10 text-center text-sm text-gray-500">
          already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
