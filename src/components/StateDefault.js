import { useMemo } from "react";

const StateDefault = ({
  rectangle1415,
  rectangleDiv,
  stateDefaultBorderRadius,
  stateDefaultHeight,
  stateDefaultPosition,
  stateDefaultFlexShrink,
  buttonPlayVideoDafult1Left,
}) => {
  const stateDefaultStyle = useMemo(() => {
    return {
      borderRadius: stateDefaultBorderRadius,
      height: stateDefaultHeight,
      position: stateDefaultPosition,
      flexShrink: stateDefaultFlexShrink,
    };
  }, [
    stateDefaultBorderRadius,
    stateDefaultHeight,
    stateDefaultPosition,
    stateDefaultFlexShrink,
  ]);

  const buttonPlayVideoDafult1Style = useMemo(() => {
    return {
      left: buttonPlayVideoDafult1Left,
    };
  }, [buttonPlayVideoDafult1Left]);

  return (
    <div
      className="rounded-3xs h-[131px] overflow-hidden text-left text-[9.74px] text-backgrounds-helper font-montserrat self-stretch"
      style={stateDefaultStyle}
    >
      <img
        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={rectangle1415}
      />
      {!rectangleDiv && (
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-opacities-dark-20 hidden opacity-[0.5]" />
      )}
      <div
        className="absolute top-[calc(50%_-_47.5px)] left-[calc(50%_-_47.5px)] hidden flex-col items-center justify-start p-[18.2662410736084px] gap-[6.09px]"
        style={buttonPlayVideoDafult1Style}
      >
        <img
          className="relative w-[59.1px] h-[59.1px]"
          alt=""
          src="/icon-playdefault.svg"
        />
        <div className="relative font-medium hidden">Vea de que se trata</div>
      </div>
    </div>
  );
};

export default StateDefault;
