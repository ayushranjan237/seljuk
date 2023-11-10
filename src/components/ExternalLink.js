import { useMemo } from "react";

const ExternalLink = ({
  externalLinkWidth,
  externalLinkHeight,
  externalLinkPosition,
  externalLinkFlexShrink,
  externalLinkTransform,
  externalLinkTransformOrigin,
  externalLinkTop,
  externalLinkLeft,
  externalLinkFontSize,
  externalLinkColor,
}) => {
  const externalLinkStyle = useMemo(() => {
    return {
      width: externalLinkWidth,
      height: externalLinkHeight,
      position: externalLinkPosition,
      flexShrink: externalLinkFlexShrink,
      transform: externalLinkTransform,
      transformOrigin: externalLinkTransformOrigin,
    };
  }, [
    externalLinkWidth,
    externalLinkHeight,
    externalLinkPosition,
    externalLinkFlexShrink,
    externalLinkTransform,
    externalLinkTransformOrigin,
  ]);

  const externalLink1Style = useMemo(() => {
    return {
      top: externalLinkTop,
      left: externalLinkLeft,
      fontSize: externalLinkFontSize,
      color: externalLinkColor,
    };
  }, [
    externalLinkTop,
    externalLinkLeft,
    externalLinkFontSize,
    externalLinkColor,
  ]);

  return (
    <div
      className="w-6 h-6 overflow-hidden text-center text-base text-dark-gray font-font-awesome-5-pro"
      style={externalLinkStyle}
    >
      <div
        className="absolute top-[16.67%] left-[16.67%] leading-[100%]"
        style={externalLink1Style}
      >
        external-link
      </div>
    </div>
  );
};

export default ExternalLink;
