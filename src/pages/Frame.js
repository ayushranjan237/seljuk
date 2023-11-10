import Property1Default2 from "../components/Property1Default2";
import Property1Default1 from "../components/Property1Default1";
import RegistrationFormContainer from "../components/RegistrationFormContainer";
import BlogSection from "../components/BlogSection";

const Frame = () => {
  return (
    <div className="relative bg-black w-full overflow-hidden flex flex-col items-start justify-start py-[195px] px-[107px] box-border gap-[122px]">
      <div className="self-stretch h-[53px] overflow-hidden shrink-0 flex flex-row items-center justify-start gap-[96px]">
        <Property1Default2
          property1DefaultPosition="relative"
          bOOKNOWMargin="0"
        />
        <Property1Default1
          property1DefaultPosition="relative"
          bOOKNOWMargin="0"
        />
      </div>
      <main className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[106px]">
        <RegistrationFormContainer />
        <BlogSection />
      </main>
    </div>
  );
};

export default Frame;
