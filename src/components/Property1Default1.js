import { useMemo } from "react";

const Property1Default1 = ({ property1DefaultPosition, bOOKNOWMargin }) => {
  const property1Default1Style = useMemo(() => {
    return {
      position: property1DefaultPosition,
    };
  }, [property1DefaultPosition]);

  const bOOKNOW1Style = useMemo(() => {
    return {
      margin: bOOKNOWMargin,
    };
  }, [bOOKNOWMargin]);

  return (
    <div
      className="w-[199px] h-[53px] text-center text-7xl text-backgrounds-helper font-segoe-ui"
      style={property1Default1Style}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-10xs [background:linear-gradient(90deg,_#2fdfec,_#45b0f4_22.27%,_#6272ff_41.55%,_#8959fd_62.9%,_#b43dfb_76.96%,_#f646e5)]" />
      <div
        className="absolute top-[calc(50%_-_17.5px)] left-[calc(50%_-_71.5px)] font-semibold"
        style={bOOKNOW1Style}
      >
        BOOK NOW
      </div>
    </div>
  );
};

export default Property1Default1;
