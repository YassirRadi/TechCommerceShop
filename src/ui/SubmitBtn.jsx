const SubmitBtn = ({ text }) => {
  return (
    <div>
      <button
        type="submit"
        className="capitalize flex w-full justify-center bg-[#057aff] rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        {text}
      </button>
    </div>
  );
};

export default SubmitBtn;
