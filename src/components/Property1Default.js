import { useMemo } from "react";
import StateDefault from "./StateDefault";
import TypeRound from "./TypeRound";
import TypePrimaryTextFalseFill from "./TypePrimaryTextFalseFill";
import Size22Px from "./Size22Px";
import Footer from "./Footer";
import ExternalLink from "./ExternalLink";

const Property1Default = ({
  arrowLeft,
  arrowRight,
  arrowLeft1,
  pillLabels,
  arrowRight1,
  arrowLeft2,
  pillLabels1,
  arrowRight2,
  commentAltLines,
  prop,
  thumbsUp,
  arrowLeftIcon,
  arrowRightIcon,
  arrowLeftIcon1,
  arrowRightIcon1,
  arrowLeftIcon2,
  arrowRightIcon2,
  pillLabelsBorderRadius,
  pillLabelsBorder,
  pillLabelsBoxSizing,
  pillLabelsHeight,
  pillLabelsDisplay,
  pillLabelsFlexDirection,
  pillLabelsAlignItems,
  pillLabelsJustifyContent,
  pillLabelsPadding,
  pillLabelsGap,
  arrowLeftIconPosition,
  arrowLeftIconWidth,
  arrowLeftIconHeight,
  arrowLeftIconOverflow,
  arrowLeftIconFlexShrink,
  pillLabelsFlex,
  pillLabelsPosition,
  pillLabelsFontSize,
  pillLabelsFontFamily,
  pillLabelsColor,
  pillLabelsTextAlign,
  pillLabelsDisplay1,
  pillLabelsWidth,
  arrowRightIconPosition,
  arrowRightIconWidth,
  arrowRightIconHeight,
  arrowRightIconOverflow,
  arrowRightIconFlexShrink,
  arrowRightIconAlignSelf,
  arrowRightIconBorderTop,
  arrowRightIconBoxSizing,
  arrowRightIconFlexDirection,
  arrowRightIconAlignItems,
  arrowRightIconJustifyContent,
  arrowRightIconPadding,
  pillLabelsBorderRadius1,
  pillLabelsBorder1,
  pillLabelsBoxSizing1,
  pillLabelsWidth1,
  pillLabelsHeight1,
  pillLabelsJustifyContent1,
  pillLabelsPadding1,
  arrowLeftIconWidth1,
  arrowLeftIconHeight1,
  pillLabelsFlex1,
  pillLabelsTextAlign1,
  arrowRightIconPosition1,
  arrowRightIconWidth1,
  arrowRightIconHeight1,
  arrowRightIconOverflow1,
  arrowRightIconFlexShrink1,
  arrowRightIconFlexDirection1,
  arrowRightIconAlignItems1,
  arrowRightIconJustifyContent1,
  arrowRightIconGap,
  pillLabelsBorderRadius2,
  pillLabelsBorder2,
  pillLabelsBoxSizing2,
  pillLabelsWidth2,
  pillLabelsDisplay2,
  pillLabelsFlexDirection1,
  pillLabelsAlignItems1,
  pillLabelsJustifyContent2,
  pillLabelsPadding2,
  pillLabelsGap1,
  pillLabelsPosition1,
  pillLabelsOverflow,
  pillLabelsFlexShrink,
  arrowLeftIconWidth2,
  arrowLeftIconHeight2,
  arrowLeftIconOverflow1,
  arrowLeftIconFlexShrink1,
  arrowLeftIconFontSize,
  arrowLeftIconFontFamily,
  arrowLeftIconColor,
  arrowLeftIconTextAlign,
  pillLabelsFlex2,
  pillLabelsPosition2,
  pillLabelsFontSize1,
  pillLabelsFontFamily1,
  pillLabelsColor1,
  pillLabelsTextAlign2,
  pillLabelsDisplay3,
  pillLabelsBorderRadius3,
  pillLabelsBorder3,
  pillLabelsBoxSizing3,
  pillLabelsHeight2,
  pillLabelsFlexDirection2,
  pillLabelsAlignItems2,
  pillLabelsJustifyContent3,
  pillLabelsPadding3,
  pillLabelsGap2,
  arrowRightIconWidth2,
  arrowRightIconHeight2,
  arrowRightIconPosition2,
  arrowRightIconOverflow2,
  arrowRightIconFlexShrink2,
  arrowRightIconMargin,
  arrowRightIconRight,
  arrowRightIconBottom,
  arrowRightIconBorderRadius,
  arrowRightIconBackgroundColor,
  arrowRightIconBoxShadow,
  arrowRightIconFlexDirection2,
  arrowRightIconAlignItems2,
  arrowRightIconJustifyContent2,
  arrowRightIconPadding1,
  arrowRightIconBoxSizing1,
  arrowRightIconTransform,
  arrowRightIconTransformOrigin,
  arrowRightIconOpacity,
  arrowRightIconZIndex,
  frameDivAlignSelf,
  frameDivBorderTop,
  frameDivBoxSizing,
  frameDivHeight,
  frameDivDisplay,
  frameDivFlexDirection,
  frameDivAlignItems,
  frameDivJustifyContent,
  frameDivPadding,
  frameDivPosition,
  frameDivFontSize,
  frameDivFontFamily,
  frameDivColor,
  frameDivTextAlign,
  frameDivWidth,
  frameDivOverflow,
  frameDivFlexShrink,
  frameDivTransform,
  frameDivTransformOrigin,
  frameDivDisplay1,
  frameDivFlexDirection1,
  frameDivAlignItems1,
  frameDivJustifyContent1,
  frameDivGap,
  frameDivPosition1,
  frameDivWidth1,
  frameDivHeight1,
  frameDivOverflow1,
  frameDivFlexShrink1,
  frameDivTop,
  frameDivLeft,
  frameDivFontSize1,
  frameDivLineHeight,
  frameDivFontFamily1,
  frameDivColor1,
  frameDivTextAlign1,
  commentAltLinesPosition,
  commentAltLinesWidth,
  commentAltLinesHeight,
  commentAltLinesOverflow,
  commentAltLinesFlexShrink,
  commentAltLinesTop,
  commentAltLinesLeft,
  commentAltLinesFontSize,
  commentAltLinesLineHeight,
  commentAltLinesFontFamily,
  commentAltLinesColor,
  commentAltLinesTextAlign,
  commentAltLinesDisplay,
  divPosition,
  divFontSize,
  divFontFamily,
  divColor,
  divTextAlign,
  divDisplay,
  divMargin,
  divRight,
  divBottom,
  divBorderRadius,
  divBackgroundColor,
  divBoxShadow,
  divFlexDirection,
  divAlignItems,
  divJustifyContent,
  divPadding,
  divBoxSizing,
  divTransform,
  divTransformOrigin,
  divOpacity,
  divZIndex,
  frameDivDisplay2,
  frameDivFlexDirection2,
  frameDivAlignItems2,
  frameDivJustifyContent2,
  frameDivGap1,
  frameDivPosition2,
  frameDivWidth2,
  frameDivHeight2,
  frameDivOverflow2,
  frameDivFlexShrink2,
  frameDivTransform1,
  frameDivTransformOrigin1,
  thumbsUpIconPosition,
  thumbsUpIconWidth,
  thumbsUpIconHeight,
  thumbsUpIconOverflow,
  thumbsUpIconFlexShrink,
  thumbsUpIconTop,
  thumbsUpIconLeft,
  thumbsUpIconFontSize,
  thumbsUpIconLineHeight,
  thumbsUpIconFontFamily,
  thumbsUpIconColor,
  thumbsUpIconTextAlign,
  thumbsUpIconDisplay,
}) => {
  const size22PxStyle = useMemo(() => {
    return {
      borderRadius: pillLabelsBorderRadius,
      border: pillLabelsBorder,
      boxSizing: pillLabelsBoxSizing,
      height: pillLabelsHeight,
      display: pillLabelsDisplay,
      flexDirection: pillLabelsFlexDirection,
      alignItems: pillLabelsAlignItems,
      justifyContent: pillLabelsJustifyContent,
      padding: pillLabelsPadding,
      gap: pillLabelsGap,
    };
  }, [
    pillLabelsBorderRadius,
    pillLabelsBorder,
    pillLabelsBoxSizing,
    pillLabelsHeight,
    pillLabelsDisplay,
    pillLabelsFlexDirection,
    pillLabelsAlignItems,
    pillLabelsJustifyContent,
    pillLabelsPadding,
    pillLabelsGap,
  ]);

  const arrowLeftIconStyle = useMemo(() => {
    return {
      position: arrowLeftIconPosition,
      width: arrowLeftIconWidth,
      height: arrowLeftIconHeight,
      overflow: arrowLeftIconOverflow,
      flexShrink: arrowLeftIconFlexShrink,
    };
  }, [
    arrowLeftIconPosition,
    arrowLeftIconWidth,
    arrowLeftIconHeight,
    arrowLeftIconOverflow,
    arrowLeftIconFlexShrink,
  ]);

  const pillLabelsStyle = useMemo(() => {
    return {
      flex: pillLabelsFlex,
      position: pillLabelsPosition,
      fontSize: pillLabelsFontSize,
      fontFamily: pillLabelsFontFamily,
      color: pillLabelsColor,
      textAlign: pillLabelsTextAlign,
      display: pillLabelsDisplay1,
      width: pillLabelsWidth,
    };
  }, [
    pillLabelsFlex,
    pillLabelsPosition,
    pillLabelsFontSize,
    pillLabelsFontFamily,
    pillLabelsColor,
    pillLabelsTextAlign,
    pillLabelsDisplay1,
    pillLabelsWidth,
  ]);

  const arrowRightIconStyle = useMemo(() => {
    return {
      position: arrowRightIconPosition,
      width: arrowRightIconWidth,
      height: arrowRightIconHeight,
      overflow: arrowRightIconOverflow,
      flexShrink: arrowRightIconFlexShrink,
      alignSelf: arrowRightIconAlignSelf,
      borderTop: arrowRightIconBorderTop,
      boxSizing: arrowRightIconBoxSizing,
      flexDirection: arrowRightIconFlexDirection,
      alignItems: arrowRightIconAlignItems,
      justifyContent: arrowRightIconJustifyContent,
      padding: arrowRightIconPadding,
    };
  }, [
    arrowRightIconPosition,
    arrowRightIconWidth,
    arrowRightIconHeight,
    arrowRightIconOverflow,
    arrowRightIconFlexShrink,
    arrowRightIconAlignSelf,
    arrowRightIconBorderTop,
    arrowRightIconBoxSizing,
    arrowRightIconFlexDirection,
    arrowRightIconAlignItems,
    arrowRightIconJustifyContent,
    arrowRightIconPadding,
  ]);

  const size22PxStyle1 = useMemo(() => {
    return {
      borderRadius: pillLabelsBorderRadius1,
      border: pillLabelsBorder1,
      boxSizing: pillLabelsBoxSizing1,
      width: pillLabelsWidth1,
      height: pillLabelsHeight1,
      justifyContent: pillLabelsJustifyContent1,
      padding: pillLabelsPadding1,
    };
  }, [
    pillLabelsBorderRadius1,
    pillLabelsBorder1,
    pillLabelsBoxSizing1,
    pillLabelsWidth1,
    pillLabelsHeight1,
    pillLabelsJustifyContent1,
    pillLabelsPadding1,
  ]);

  const arrowLeftIconStyle1 = useMemo(() => {
    return {
      width: arrowLeftIconWidth1,
      height: arrowLeftIconHeight1,
    };
  }, [arrowLeftIconWidth1, arrowLeftIconHeight1]);

  const pillLabelsStyle1 = useMemo(() => {
    return {
      flex: pillLabelsFlex1,
      textAlign: pillLabelsTextAlign1,
    };
  }, [pillLabelsFlex1, pillLabelsTextAlign1]);

  const arrowRightIconStyle1 = useMemo(() => {
    return {
      position: arrowRightIconPosition1,
      width: arrowRightIconWidth1,
      height: arrowRightIconHeight1,
      overflow: arrowRightIconOverflow1,
      flexShrink: arrowRightIconFlexShrink1,
      flexDirection: arrowRightIconFlexDirection1,
      alignItems: arrowRightIconAlignItems1,
      justifyContent: arrowRightIconJustifyContent1,
      gap: arrowRightIconGap,
    };
  }, [
    arrowRightIconPosition1,
    arrowRightIconWidth1,
    arrowRightIconHeight1,
    arrowRightIconOverflow1,
    arrowRightIconFlexShrink1,
    arrowRightIconFlexDirection1,
    arrowRightIconAlignItems1,
    arrowRightIconJustifyContent1,
    arrowRightIconGap,
  ]);

  const size22PxStyle2 = useMemo(() => {
    return {
      borderRadius: pillLabelsBorderRadius2,
      border: pillLabelsBorder2,
      boxSizing: pillLabelsBoxSizing2,
      width: pillLabelsWidth2,
      display: pillLabelsDisplay2,
      flexDirection: pillLabelsFlexDirection1,
      alignItems: pillLabelsAlignItems1,
      justifyContent: pillLabelsJustifyContent2,
      padding: pillLabelsPadding2,
      gap: pillLabelsGap1,
      position: pillLabelsPosition1,
      overflow: pillLabelsOverflow,
      flexShrink: pillLabelsFlexShrink,
    };
  }, [
    pillLabelsBorderRadius2,
    pillLabelsBorder2,
    pillLabelsBoxSizing2,
    pillLabelsWidth2,
    pillLabelsDisplay2,
    pillLabelsFlexDirection1,
    pillLabelsAlignItems1,
    pillLabelsJustifyContent2,
    pillLabelsPadding2,
    pillLabelsGap1,
    pillLabelsPosition1,
    pillLabelsOverflow,
    pillLabelsFlexShrink,
  ]);

  const arrowLeftIconStyle2 = useMemo(() => {
    return {
      width: arrowLeftIconWidth2,
      height: arrowLeftIconHeight2,
      overflow: arrowLeftIconOverflow1,
      flexShrink: arrowLeftIconFlexShrink1,
      fontSize: arrowLeftIconFontSize,
      fontFamily: arrowLeftIconFontFamily,
      color: arrowLeftIconColor,
      textAlign: arrowLeftIconTextAlign,
    };
  }, [
    arrowLeftIconWidth2,
    arrowLeftIconHeight2,
    arrowLeftIconOverflow1,
    arrowLeftIconFlexShrink1,
    arrowLeftIconFontSize,
    arrowLeftIconFontFamily,
    arrowLeftIconColor,
    arrowLeftIconTextAlign,
  ]);

  const pillLabelsStyle2 = useMemo(() => {
    return {
      flex: pillLabelsFlex2,
      position: pillLabelsPosition2,
      fontSize: pillLabelsFontSize1,
      fontFamily: pillLabelsFontFamily1,
      color: pillLabelsColor1,
      textAlign: pillLabelsTextAlign2,
      display: pillLabelsDisplay3,
      borderRadius: pillLabelsBorderRadius3,
      border: pillLabelsBorder3,
      boxSizing: pillLabelsBoxSizing3,
      height: pillLabelsHeight2,
      flexDirection: pillLabelsFlexDirection2,
      alignItems: pillLabelsAlignItems2,
      justifyContent: pillLabelsJustifyContent3,
      padding: pillLabelsPadding3,
      gap: pillLabelsGap2,
    };
  }, [
    pillLabelsFlex2,
    pillLabelsPosition2,
    pillLabelsFontSize1,
    pillLabelsFontFamily1,
    pillLabelsColor1,
    pillLabelsTextAlign2,
    pillLabelsDisplay3,
    pillLabelsBorderRadius3,
    pillLabelsBorder3,
    pillLabelsBoxSizing3,
    pillLabelsHeight2,
    pillLabelsFlexDirection2,
    pillLabelsAlignItems2,
    pillLabelsJustifyContent3,
    pillLabelsPadding3,
    pillLabelsGap2,
  ]);

  const arrowRightIconStyle2 = useMemo(() => {
    return {
      width: arrowRightIconWidth2,
      height: arrowRightIconHeight2,
      position: arrowRightIconPosition2,
      overflow: arrowRightIconOverflow2,
      flexShrink: arrowRightIconFlexShrink2,
      margin: arrowRightIconMargin,
      right: arrowRightIconRight,
      bottom: arrowRightIconBottom,
      borderRadius: arrowRightIconBorderRadius,
      backgroundColor: arrowRightIconBackgroundColor,
      boxShadow: arrowRightIconBoxShadow,
      flexDirection: arrowRightIconFlexDirection2,
      alignItems: arrowRightIconAlignItems2,
      justifyContent: arrowRightIconJustifyContent2,
      padding: arrowRightIconPadding1,
      boxSizing: arrowRightIconBoxSizing1,
      transform: arrowRightIconTransform,
      transformOrigin: arrowRightIconTransformOrigin,
      opacity: arrowRightIconOpacity,
      zIndex: arrowRightIconZIndex,
    };
  }, [
    arrowRightIconWidth2,
    arrowRightIconHeight2,
    arrowRightIconPosition2,
    arrowRightIconOverflow2,
    arrowRightIconFlexShrink2,
    arrowRightIconMargin,
    arrowRightIconRight,
    arrowRightIconBottom,
    arrowRightIconBorderRadius,
    arrowRightIconBackgroundColor,
    arrowRightIconBoxShadow,
    arrowRightIconFlexDirection2,
    arrowRightIconAlignItems2,
    arrowRightIconJustifyContent2,
    arrowRightIconPadding1,
    arrowRightIconBoxSizing1,
    arrowRightIconTransform,
    arrowRightIconTransformOrigin,
    arrowRightIconOpacity,
    arrowRightIconZIndex,
  ]);

  const frameDivStyle = useMemo(() => {
    return {
      alignSelf: frameDivAlignSelf,
      borderTop: frameDivBorderTop,
      boxSizing: frameDivBoxSizing,
      height: frameDivHeight,
      display: frameDivDisplay,
      flexDirection: frameDivFlexDirection,
      alignItems: frameDivAlignItems,
      justifyContent: frameDivJustifyContent,
      padding: frameDivPadding,
      position: frameDivPosition,
      fontSize: frameDivFontSize,
      fontFamily: frameDivFontFamily,
      color: frameDivColor,
      textAlign: frameDivTextAlign,
      width: frameDivWidth,
      overflow: frameDivOverflow,
      flexShrink: frameDivFlexShrink,
      transform: frameDivTransform,
      transformOrigin: frameDivTransformOrigin,
    };
  }, [
    frameDivAlignSelf,
    frameDivBorderTop,
    frameDivBoxSizing,
    frameDivHeight,
    frameDivDisplay,
    frameDivFlexDirection,
    frameDivAlignItems,
    frameDivJustifyContent,
    frameDivPadding,
    frameDivPosition,
    frameDivFontSize,
    frameDivFontFamily,
    frameDivColor,
    frameDivTextAlign,
    frameDivWidth,
    frameDivOverflow,
    frameDivFlexShrink,
    frameDivTransform,
    frameDivTransformOrigin,
  ]);

  const frameDiv1Style = useMemo(() => {
    return {
      display: frameDivDisplay1,
      flexDirection: frameDivFlexDirection1,
      alignItems: frameDivAlignItems1,
      justifyContent: frameDivJustifyContent1,
      gap: frameDivGap,
      position: frameDivPosition1,
      width: frameDivWidth1,
      height: frameDivHeight1,
      overflow: frameDivOverflow1,
      flexShrink: frameDivFlexShrink1,
      top: frameDivTop,
      left: frameDivLeft,
      fontSize: frameDivFontSize1,
      lineHeight: frameDivLineHeight,
      fontFamily: frameDivFontFamily1,
      color: frameDivColor1,
      textAlign: frameDivTextAlign1,
    };
  }, [
    frameDivDisplay1,
    frameDivFlexDirection1,
    frameDivAlignItems1,
    frameDivJustifyContent1,
    frameDivGap,
    frameDivPosition1,
    frameDivWidth1,
    frameDivHeight1,
    frameDivOverflow1,
    frameDivFlexShrink1,
    frameDivTop,
    frameDivLeft,
    frameDivFontSize1,
    frameDivLineHeight,
    frameDivFontFamily1,
    frameDivColor1,
    frameDivTextAlign1,
  ]);

  const commentAltLinesStyle = useMemo(() => {
    return {
      position: commentAltLinesPosition,
      width: commentAltLinesWidth,
      height: commentAltLinesHeight,
      overflow: commentAltLinesOverflow,
      flexShrink: commentAltLinesFlexShrink,
      top: commentAltLinesTop,
      left: commentAltLinesLeft,
      fontSize: commentAltLinesFontSize,
      lineHeight: commentAltLinesLineHeight,
      fontFamily: commentAltLinesFontFamily,
      color: commentAltLinesColor,
      textAlign: commentAltLinesTextAlign,
      display: commentAltLinesDisplay,
    };
  }, [
    commentAltLinesPosition,
    commentAltLinesWidth,
    commentAltLinesHeight,
    commentAltLinesOverflow,
    commentAltLinesFlexShrink,
    commentAltLinesTop,
    commentAltLinesLeft,
    commentAltLinesFontSize,
    commentAltLinesLineHeight,
    commentAltLinesFontFamily,
    commentAltLinesColor,
    commentAltLinesTextAlign,
    commentAltLinesDisplay,
  ]);

  const divStyle = useMemo(() => {
    return {
      position: divPosition,
      fontSize: divFontSize,
      fontFamily: divFontFamily,
      color: divColor,
      textAlign: divTextAlign,
      display: divDisplay,
      margin: divMargin,
      right: divRight,
      bottom: divBottom,
      borderRadius: divBorderRadius,
      backgroundColor: divBackgroundColor,
      boxShadow: divBoxShadow,
      flexDirection: divFlexDirection,
      alignItems: divAlignItems,
      justifyContent: divJustifyContent,
      padding: divPadding,
      boxSizing: divBoxSizing,
      transform: divTransform,
      transformOrigin: divTransformOrigin,
      opacity: divOpacity,
      zIndex: divZIndex,
    };
  }, [
    divPosition,
    divFontSize,
    divFontFamily,
    divColor,
    divTextAlign,
    divDisplay,
    divMargin,
    divRight,
    divBottom,
    divBorderRadius,
    divBackgroundColor,
    divBoxShadow,
    divFlexDirection,
    divAlignItems,
    divJustifyContent,
    divPadding,
    divBoxSizing,
    divTransform,
    divTransformOrigin,
    divOpacity,
    divZIndex,
  ]);

  const frameDiv2Style = useMemo(() => {
    return {
      display: frameDivDisplay2,
      flexDirection: frameDivFlexDirection2,
      alignItems: frameDivAlignItems2,
      justifyContent: frameDivJustifyContent2,
      gap: frameDivGap1,
      position: frameDivPosition2,
      width: frameDivWidth2,
      height: frameDivHeight2,
      overflow: frameDivOverflow2,
      flexShrink: frameDivFlexShrink2,
      transform: frameDivTransform1,
      transformOrigin: frameDivTransformOrigin1,
    };
  }, [
    frameDivDisplay2,
    frameDivFlexDirection2,
    frameDivAlignItems2,
    frameDivJustifyContent2,
    frameDivGap1,
    frameDivPosition2,
    frameDivWidth2,
    frameDivHeight2,
    frameDivOverflow2,
    frameDivFlexShrink2,
    frameDivTransform1,
    frameDivTransformOrigin1,
  ]);

  const thumbsUpIconStyle = useMemo(() => {
    return {
      position: thumbsUpIconPosition,
      width: thumbsUpIconWidth,
      height: thumbsUpIconHeight,
      overflow: thumbsUpIconOverflow,
      flexShrink: thumbsUpIconFlexShrink,
      top: thumbsUpIconTop,
      left: thumbsUpIconLeft,
      fontSize: thumbsUpIconFontSize,
      lineHeight: thumbsUpIconLineHeight,
      fontFamily: thumbsUpIconFontFamily,
      color: thumbsUpIconColor,
      textAlign: thumbsUpIconTextAlign,
      display: thumbsUpIconDisplay,
    };
  }, [
    thumbsUpIconPosition,
    thumbsUpIconWidth,
    thumbsUpIconHeight,
    thumbsUpIconOverflow,
    thumbsUpIconFlexShrink,
    thumbsUpIconTop,
    thumbsUpIconLeft,
    thumbsUpIconFontSize,
    thumbsUpIconLineHeight,
    thumbsUpIconFontFamily,
    thumbsUpIconColor,
    thumbsUpIconTextAlign,
    thumbsUpIconDisplay,
  ]);

  return (
    <div className="bg-backgrounds-helper shadow-[0px_3px_8px_rgba(0,_0,_0,_0.15)] w-[368px] flex flex-col items-start justify-start relative gap-[24px] text-left text-base text-text-dark font-desktop-bodytext-regular-21">
      <div className="self-stretch flex flex-col items-start justify-start z-[0]">
        <StateDefault
          rectangle1415="/rectangle-1415@2x.png"
          rectangleDiv
          stateDefaultBorderRadius="unset"
          stateDefaultHeight="221px"
          stateDefaultPosition="relative"
          stateDefaultFlexShrink="0"
          buttonPlayVideoDafult1Left="calc(50% - 48px)"
        />
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-4 gap-[12px] mt-[-23px]">
          <TypeRound
            typeRoundTypeRound="/image.svg"
            typeRoundIconWidth="75px"
            typeRoundIconHeight="75px"
            typeRoundIconPosition="relative"
            typeRoundIconFlexShrink="0"
          />
          <div className="flex-1 flex flex-col items-start justify-start pt-[35px] pb-0 pr-[43px] pl-0 gap-[5px]">
            <div className="self-stretch flex flex-row items-start justify-start gap-[5px]">
              <div className="flex-1 flex flex-col items-start justify-start">
                <b className="relative">Cristian Fernández</b>
                <div className="relative text-sm">Derecho penal</div>
              </div>
              <img
                className="relative w-[30px] h-[30px]"
                alt=""
                src="/flags.svg"
              />
            </div>
            <TypePrimaryTextFalseFill />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-4 pb-4 gap-[10px] z-[1] text-text-medium">
        <b className="self-stretch relative text-lg text-text-dark">
          Title of blog post
        </b>
        <div className="self-stretch relative">
          Etiam volutpat sem vitae erat consectetur tincidunt. Pellentesque
          mattis purus sed odio vehicula, vitae maximus nulla venenatis. Duis
          posuere turpis turpis, nec mollis nulla tincidunt sodales.
        </div>
        <div className="flex flex-row items-center justify-start gap-[10px]">
          <Size22Px
            arrowLeft="/arrow-left.svg"
            arrowRight="/arrow-left.svg"
            arrowLeftIcon={false}
            arrowRightIcon={false}
            size22PxBorder="1px solid #a4a4a4"
            size22PxBorderRadius="50px"
            size22PxBoxSizing="border-box"
            size22PxHeight="22px"
            size22PxDisplay="flex"
            size22PxFlexDirection="row"
            size22PxAlignItems="center"
            size22PxJustifyContent="center"
            size22PxPadding="10px"
            size22PxGap="5px"
            pillLabelsColor="#7b7b7b"
          />
          <Size22Px
            arrowLeft="/arrow-left.svg"
            arrowRight="/arrow-left.svg"
            arrowLeftIcon={false}
            arrowRightIcon={false}
            size22PxBorder="1px solid #a4a4a4"
            size22PxBorderRadius="50px"
            size22PxBoxSizing="border-box"
            size22PxHeight="22px"
            size22PxDisplay="flex"
            size22PxFlexDirection="row"
            size22PxAlignItems="center"
            size22PxJustifyContent="center"
            size22PxPadding="10px"
            size22PxGap="5px"
            pillLabelsColor="#7b7b7b"
          />
          <Size22Px
            arrowLeft="/arrow-left.svg"
            arrowRight="/arrow-left.svg"
            arrowLeftIcon={false}
            arrowRightIcon={false}
            size22PxBorder="1px solid #a4a4a4"
            size22PxBorderRadius="50px"
            size22PxBoxSizing="border-box"
            size22PxHeight="22px"
            size22PxDisplay="flex"
            size22PxFlexDirection="row"
            size22PxAlignItems="center"
            size22PxJustifyContent="center"
            size22PxPadding="10px"
            size22PxGap="5px"
            pillLabelsColor="#7b7b7b"
          />
        </div>
        <div
          className="self-stretch box-border h-[46px] flex flex-row items-center justify-between pt-2.5 px-0 pb-0 border-t-[1px] border-solid border-neutral-400"
          style={frameDivStyle}
        >
          <div
            className="flex flex-row items-center justify-start gap-[2.35px]"
            style={frameDiv1Style}
          >
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src={commentAltLines}
              style={commentAltLinesStyle}
            />
            <div className="relative" style={divStyle}>
              {prop}
            </div>
          </div>
          <div
            className="flex flex-row items-center justify-start gap-[2.35px]"
            style={frameDiv2Style}
          >
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src={thumbsUp}
              style={thumbsUpIconStyle}
            />
            <div className="relative">340</div>
          </div>
          <Footer
            dimensionCode="/long-arrow-right2.svg"
            longArrowRight1={false}
          />
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute right-[-49px] bottom-[224px] rounded-[9.82px] bg-error-500 shadow-[0px_8px_15px_rgba(0,_0,_0,_0.15)] flex flex-row items-start justify-start p-[16.363636016845703px] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0] z-[2]">
        <ExternalLink
          externalLinkWidth="39.3px"
          externalLinkHeight="39.3px"
          externalLinkPosition="relative"
          externalLinkFlexShrink="0"
          externalLinkTransform=" rotate(180deg)"
          externalLinkTransformOrigin="0 0"
          externalLinkTop="16.54%"
          externalLinkLeft="16.54%"
          externalLinkFontSize="26.18px"
          externalLinkColor="#f2f2f2"
        />
      </div>
    </div>
  );
};

export default Property1Default;
