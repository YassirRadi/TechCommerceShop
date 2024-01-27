import { Form, Link } from "react-router-dom";
import FormSelect from "@ui/FormSelect";
import FormRange from "@ui/FormRange";
import FormCheckbox from "@ui/FormCheckbox";
import FilterInput from "@ui/FilterInput";
const Filters = () => {
  return (
    <Form className="bg-base-200 align-element rounded-md mt-16 px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      <FilterInput type="search" label="search product" />
      <FormSelect label="select category" />
      <FormSelect label="select company" />
      <FormSelect label="sort by price" />
      <FormRange label="select price" />
      <FormCheckbox label="free shipping" />
      <button
        type="submit"
        className="text-slate-200 bg-[#057aff] rounded py-1.5"
      >
        search
      </button>
      <Link to="/products" className="bg-lime-300 rounded py-1.5 text-center">
        reset
      </Link>
    </Form>
  );
};
export default Filters;
