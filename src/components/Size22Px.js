import { useMemo } from "react";

const Size22Px = ({
  arrowLeft,
  arrowRight,
  arrowLeftIcon,
  arrowRightIcon,
  size22PxBorder,
  size22PxBorderRadius,
  size22PxBoxSizing,
  size22PxHeight,
  size22PxDisplay,
  size22PxFlexDirection,
  size22PxAlignItems,
  size22PxJustifyContent,
  size22PxPadding,
  size22PxGap,
  pillLabelsColor,
}) => {
  const size22PxStyle = useMemo(() => {
    return {
      border: size22PxBorder,
      borderRadius: size22PxBorderRadius,
      boxSizing: size22PxBoxSizing,
      height: size22PxHeight,
      display: size22PxDisplay,
      flexDirection: size22PxFlexDirection,
      alignItems: size22PxAlignItems,
      justifyContent: size22PxJustifyContent,
      padding: size22PxPadding,
      gap: size22PxGap,
    };
  }, [
    size22PxBorder,
    size22PxBorderRadius,
    size22PxBoxSizing,
    size22PxHeight,
    size22PxDisplay,
    size22PxFlexDirection,
    size22PxAlignItems,
    size22PxJustifyContent,
    size22PxPadding,
    size22PxGap,
  ]);

  const pillLabelsStyle = useMemo(() => {
    return {
      color: pillLabelsColor,
    };
  }, [pillLabelsColor]);

  return (
    <div
      className="rounded-31xl box-border w-[84px] h-[22px] flex flex-row items-center justify-center p-2.5 gap-[5px] text-center text-sm text-icons-light-dark font-desktop-bodytext-regular-21 border-[1px] border-solid border-icons-light-dark"
      style={size22PxStyle}
    >
      {!arrowLeftIcon && (
        <img
          className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
          alt=""
          src={arrowLeft}
        />
      )}
      <div className="flex-1 relative" style={pillLabelsStyle}>
        Pill labels
      </div>
      {!arrowRightIcon && (
        <img
          className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
          alt=""
          src={arrowRight}
        />
      )}
    </div>
  );
};

export default Size22Px;
