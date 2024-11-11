import React from "react";
import SliderComponent from "./common/SliderComponent";

const SliderSelect = ({ data, setData }) => {
  const Bank_Limit = 10000;
  console.log(data);
  return (
    <div>
      <SliderComponent
        amount={data.homeValue}
        unit="$"
        DefaultValue={data.homeValue}
        min={1000}
        max={Bank_Limit}
        label="Home Value"
        step={100}
        value={data.homeValue}
        onChange={(e, value) =>
          setData({
            //spread operator
            ...data,
            homeValue: value,
            downPayment: value * 0.2,
            laonAmount: value * 0.8,
          })
        }
      />

      <SliderComponent
        amount={data.downPayment}
        unit="$"
        DefaultValue={data.downPayment}
        value={data.downPayment}
        min={0}
        max={data.homeValue}
        label="Down Payment"
        step={100}
        onChange={(e, value) =>
          setData({
            //spread operator
            ...data,
            downPayment: value,
            laonAmount: data.homeValue - value,
          })
        }
      />

      <SliderComponent
        amount={data.laonAmount}
        unit="$"
        DefaultValue={data.laonAmount}
        value={data.laonAmount}
        min={1000}
        max={data.homeValue}
        label="Loan Amount"
        step={100}
        onChange={(e, value) =>
          setData({
            //spread operator
            ...data,
            laonAmount: value,
            downPayment: data.homeValue - value,
          })
        }
      />

      <SliderComponent
        unit="%"
        amount={data.interestRate}
        DefaultValue={data.interestRate}
        value={data.interestRate}
        min={2}
        max={18}
        label="Interest Rate"
        step={0.5}
        onChange={(e, value) =>
          setData({
            //spread operator
            ...data,
            interestRate: value

          })
        }
      />
    </div>
  );
};

export default SliderSelect;
