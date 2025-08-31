import { Range, getTrackBackground } from "react-range";

const PriceFilter = ({values, setValues}) => {
  const STEP = 1;
  const MIN = 0;
  const MAX = 1000;
  if (!Array.isArray(values) || values.length < 2) return null;
  return (
    <div className="">
      <div className="mb-4">
        <h2 className="text-lg font-bold">Price</h2>
      </div>
      
      <Range
        values={values}                      
        step={STEP}
        min={MIN}
        max={MAX}
        onChange={(val) => setValues(val)}
        renderTrack={({ props, children }) => {
          const { key, ...restProps } = props; // remove key from spread
          return (
            <div
              key={key}
              {...restProps}
              className="h-1 w-full rounded bg-gray-200"
              style={{
                background: getTrackBackground({
                  values,
                  colors: ["#ccc", "black", "#ccc"],
                  min: MIN,
                  max: MAX,
                }),
              }}
            >
              {children}
            </div>
          );
        }}
        renderThumb={({ props }) => {
          const { key, ...restProps } = props;
          return (
            <div
              key={key}
              {...restProps}
              className="h-5 w-5 bg-black rounded-full focus:outline-none"
            />
          );
        }}
      />

      <div className="flex justify-between text-sm mt-3 font-medium">
        <span>${values[0]}</span>
        <span>${values[1]}</span>
      </div>
    </div>
  );
};

export default PriceFilter;
