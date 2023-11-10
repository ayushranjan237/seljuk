import StateDefault from "./StateDefault";
import TypeRound from "./TypeRound";
import TypePrimaryTextFalseFill from "./TypePrimaryTextFalseFill";

const SectionCardForm = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start z-[0] text-left text-base text-text-dark font-desktop-bodytext-regular-21">
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
  );
};

export default SectionCardForm;
