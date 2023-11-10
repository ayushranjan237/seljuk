import { useMemo } from "react";

const ShareAlt = ({
  shareAltWidth,
  shareAltHeight,
  shareAltPosition,
  shareAltFlexShrink,
  shareAltTop,
  shareAltLeft,
}) => {
  const shareAltStyle = useMemo(() => {
    return {
      width: shareAltWidth,
      height: shareAltHeight,
      position: shareAltPosition,
      flexShrink: shareAltFlexShrink,
    };
  }, [shareAltWidth, shareAltHeight, shareAltPosition, shareAltFlexShrink]);

  const shareAlt1Style = useMemo(() => {
    return {
      top: shareAltTop,
      left: shareAltLeft,
    };
  }, [shareAltTop, shareAltLeft]);

  return (
    <div
      className="w-6 h-6 overflow-hidden text-center text-base text-dark-gray font-font-awesome-5-pro"
      style={shareAltStyle}
    >
      <div
        className="absolute top-[16.67%] left-[20.83%] leading-[100%]"
        style={shareAlt1Style}
      >
        share-alt
      </div>
    </div>
  );
};

export default ShareAlt;
