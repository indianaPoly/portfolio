import { TextProp } from "../../types/type";

export const XLargeText = ({ textValue }: TextProp) => {
  return <p className=" text-4xl font-bold">{textValue}</p>;
};

export const LargeText = ({ textValue }: TextProp) => {
  return <p className=" text-3xl font-bold">{textValue}</p>;
};

export const MediumText = ({ textValue }: TextProp) => {
  return <p className=" text-xl font-semibold">{textValue}</p>;
};

export const SmallText = ({ textValue }: TextProp) => {
  return <p className=" text-md font-semibold">{textValue}</p>;
};

export const SText = ({ textValue }: TextProp) => {
  return (
    <div className=" w-auto h-[40px] rounded-xl bg-white flex items-center justify-center">
      <p className=" text-lg">{textValue}</p>
    </div>
  );
};
