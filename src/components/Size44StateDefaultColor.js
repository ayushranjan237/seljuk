import { useMemo } from "react";

const Size44StateDefaultColor = ({
  size44StateDefaultColorBorderRadius,
  size44StateDefaultColorBackgroundColor,
  size44StateDefaultColorDisplay,
  size44StateDefaultColorFlexDirection,
  size44StateDefaultColorAlignItems,
  size44StateDefaultColorJustifyContent,
  size44StateDefaultColorPadding,
  size44StateDefaultColorBoxSizing,
  size44StateDefaultColorGap,
}) => {
  const size44StateDefaultColorStyle = useMemo(() => {
    return {
      borderRadius: size44StateDefaultColorBorderRadius,
      backgroundColor: size44StateDefaultColorBackgroundColor,
      display: size44StateDefaultColorDisplay,
      flexDirection: size44StateDefaultColorFlexDirection,
      alignItems: size44StateDefaultColorAlignItems,
      justifyContent: size44StateDefaultColorJustifyContent,
      padding: size44StateDefaultColorPadding,
      boxSizing: size44StateDefaultColorBoxSizing,
      gap: size44StateDefaultColorGap,
    };
  }, [
    size44StateDefaultColorBorderRadius,
    size44StateDefaultColorBackgroundColor,
    size44StateDefaultColorDisplay,
    size44StateDefaultColorFlexDirection,
    size44StateDefaultColorAlignItems,
    size44StateDefaultColorJustifyContent,
    size44StateDefaultColorPadding,
    size44StateDefaultColorBoxSizing,
    size44StateDefaultColorGap,
  ]);

  return (
    <div
      className="rounded bg-error-500 flex flex-row items-center justify-center py-2.5 px-8 box-border gap-[10px] text-left text-base text-backgrounds-helper font-desktop-bodytext-regular-21 self-stretch"
      style={size44StateDefaultColorStyle}
    >
      <img
        className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
        alt=""
        src="/long-arrow-right1.svg"
      />
      <div className="relative">Registrate</div>
      <img
        className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
        alt=""
        src="/long-arrow-right1.svg"
      />
    </div>
  );
};

export default Size44StateDefaultColor;
