const FormRange = ({ label }) => {
  const step = 20;
  const maxPrice = 10000;

  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <span className="label-text capitalize">{label}</span>
        <span>1000</span>
      </label>
      <input
        type="range"
        min={0}
        max={1000}
        step={step}
        value="40"
        className="range range-info"
      />

      <div className="w-full flex justify-between text-xs px-2 mt-2">
        <span className="font-bold text-md">0</span>
        <span className="font-bold text-md">Max : {maxPrice}</span>
      </div>
    </div>
  );
};
export default FormRange;
