import { useMemo } from "react";

const TypeRound = ({
  typeRoundTypeRound,
  typeRoundIconWidth,
  typeRoundIconHeight,
  typeRoundIconPosition,
  typeRoundIconFlexShrink,
}) => {
  const typeRoundIconStyle = useMemo(() => {
    return {
      width: typeRoundIconWidth,
      height: typeRoundIconHeight,
      position: typeRoundIconPosition,
      flexShrink: typeRoundIconFlexShrink,
    };
  }, [
    typeRoundIconWidth,
    typeRoundIconHeight,
    typeRoundIconPosition,
    typeRoundIconFlexShrink,
  ]);

  return (
    <img
      className="rounded-31xl w-[100px] h-[100px] overflow-hidden"
      alt=""
      src={typeRoundTypeRound}
      style={typeRoundIconStyle}
    />
  );
};

export default TypeRound;
