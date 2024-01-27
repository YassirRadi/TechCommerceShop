const FormSelect = ({ label }) => {
  return (
    <div className="form-control flex flex-col gap-y-4">
      <label className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option value="">item</option>
      </select>
    </div>
  );
};
export default FormSelect;
