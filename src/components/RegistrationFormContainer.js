import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import Size44StateDefaultColor from "./Size44StateDefaultColor";

const RegistrationFormContainer = () => {
  return (
    <div className="rounded-xl bg-backgrounds-helper shadow-[0px_0px_20px_rgba(0,_0,_0,_0.1)] w-[456px] flex flex-col items-start justify-start p-[30px] box-border gap-[20px] text-left text-base text-text-dark font-desktop-bodytext-regular-21">
      <div className="flex flex-col items-start justify-start gap-[10px] text-15xl font-abeezee">
        <h1 className="m-0 flex-1 relative text-inherit font-normal font-inherit inline-block w-[396px]">
          Registration Form
        </h1>
        <div className="self-stretch relative text-base font-desktop-bodytext-regular-21 text-text-medium">{`Register your account here `}</div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-start gap-[5px]">
        <div className="flex-1 relative bg-neutral-500 h-px" />
        <div className="relative">O</div>
        <div className="flex-1 relative bg-neutral-500 h-px" />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[20px] text-sm">
        <div className="w-[396px] h-[72px] flex flex-col items-center justify-start gap-[5px]">
          <div className="self-stretch flex flex-row items-center justify-start gap-[5px]">
            <div className="relative">Email</div>
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
              alt=""
              src="/info-circle.svg"
            />
          </div>
          <Form className="[border:none] bg-[transparent] self-stretch">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" />
          </Form>
        </div>
        <div className="w-[396px] h-[72px] flex flex-col items-start justify-start gap-[5px]">
          <div className="relative">Username</div>
          <Form className="[border:none] bg-[transparent] self-stretch">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" />
          </Form>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[20px] text-sm">
        <div className="w-[396px] h-[75px] flex flex-col items-center justify-start gap-[8px]">
          <div className="self-stretch flex flex-row items-center justify-start gap-[5px]">
            <div className="relative">Password</div>
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
              alt=""
              src="/info-circle.svg"
            />
          </div>
          <div className="self-stretch rounded bg-backgrounds-helper box-border h-12 flex flex-row items-center justify-end py-2.5 px-4 gap-[10px] text-base text-text-medium border-[1px] border-solid border-text-dark1">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
              alt=""
              src="/search.svg"
            />
            <div className="flex-1 relative">Password</div>
            <div className="flex-1 relative hidden">Input text</div>
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/eye.svg"
            />
          </div>
        </div>
        <div className="w-[396px] h-[75px] flex flex-col items-start justify-start gap-[8px]">
          <div className="relative">Confirm Password</div>
          <div className="self-stretch rounded bg-backgrounds-helper box-border h-12 flex flex-row items-center justify-end py-2.5 px-4 gap-[10px] text-base text-text-medium border-[1px] border-solid border-text-dark1">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
              alt=""
              src="/search.svg"
            />
            <div className="flex-1 relative">Confirm Password</div>
            <div className="flex-1 relative hidden">Input text</div>
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/eye.svg"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[20px] text-center text-error-500">
        <Size44StateDefaultColor
          size44StateDefaultColorBorderRadius="unset"
          size44StateDefaultColorBackgroundColor="unset"
          size44StateDefaultColorDisplay="unset"
          size44StateDefaultColorFlexDirection="unset"
          size44StateDefaultColorAlignItems="unset"
          size44StateDefaultColorJustifyContent="unset"
          size44StateDefaultColorPadding="unset"
          size44StateDefaultColorBoxSizing="unset"
          size44StateDefaultColorGap="unset"
        />
        <div className="self-stretch relative [text-decoration:underline]">
          Olvidé mi contraseña
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-start gap-[5px] font-desktop-small-regular-16">
        <div className="flex-1 relative bg-neutral-500 h-px" />
        <div className="relative">o</div>
        <div className="flex-1 relative bg-neutral-500 h-px" />
      </div>
      <div className="self-stretch flex flex-col items-center justify-start gap-[10px]">
        <div className="relative">¿Aún no tienes una cuenta?</div>
        <div className="relative [text-decoration:underline] text-error-500">
          Crea una aquí
        </div>
      </div>
    </div>
  );
};

export default RegistrationFormContainer;
