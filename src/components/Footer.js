import { useMemo } from "react";
import ShareAlt from "./ShareAlt";

const Footer = ({
  dimensionCode,
  longArrowRight1,
  propBorderRadius,
  propBorder,
  propBoxSizing,
  propHeight,
  propDisplay,
  propFlexDirection,
  propAlignItems,
  propJustifyContent,
  propPadding,
  propGap,
  propTop,
  propLeft,
}) => {
  const buttonsSecondaryAnimateStyle = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
      border: propBorder,
      boxSizing: propBoxSizing,
      height: propHeight,
      display: propDisplay,
      flexDirection: propFlexDirection,
      alignItems: propAlignItems,
      justifyContent: propJustifyContent,
      padding: propPadding,
      gap: propGap,
    };
  }, [
    propBorderRadius,
    propBorder,
    propBoxSizing,
    propHeight,
    propDisplay,
    propFlexDirection,
    propAlignItems,
    propJustifyContent,
    propPadding,
    propGap,
  ]);

  const shareAlt1Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div
      className="rounded box-border h-9 flex flex-row items-center justify-center py-2.5 px-4 gap-[10px] text-left text-sm text-text-dark font-desktop-bodytext-regular-21 border-[2px] border-solid border-text-dark1"
      style={buttonsSecondaryAnimateStyle}
    >
      {!longArrowRight1 && (
        <img
          className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
          alt=""
          src={dimensionCode}
        />
      )}
      <div className="relative">Compartir</div>
      <ShareAlt
        shareAltWidth="20px"
        shareAltHeight="20px"
        shareAltPosition="relative"
        shareAltFlexShrink="0"
        shareAltTop="6.5%"
        shareAltLeft="11%"
      />
    </div>
  );
};

export default Footer;
