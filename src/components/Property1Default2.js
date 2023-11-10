import { useMemo } from "react";

const Property1Default2 = ({ property1DefaultPosition, bOOKNOWMargin }) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      position: property1DefaultPosition,
    };
  }, [property1DefaultPosition]);

  const bOOKNOWStyle = useMemo(() => {
    return {
      margin: bOOKNOWMargin,
    };
  }, [bOOKNOWMargin]);

  return (
    <div
      className="w-[199px] h-[53px] text-center text-7xl text-backgrounds-helper font-segoe-ui"
      style={property1DefaultStyle}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-10xs bg-primary" />
      <div
        className="absolute top-[calc(50%_-_17.5px)] left-[calc(50%_-_71.5px)] font-semibold"
        style={bOOKNOWStyle}
      >
        BOOK NOW
      </div>
    </div>
  );
};

export default Property1Default2;
