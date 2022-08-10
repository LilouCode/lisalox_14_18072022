import { Modal } from "liloucode-just-a-modal";
import Close from "../../assets/icones/Close.svg"
export const ModalLibrary = () => {
  return (
    <Modal
      textContent="New employee has been registered successfully"
      titleContent="Succes !"
      titleColor="#ebf2c5"
      titleFontSize="extra"
      titleFontWeight= "500"
      textColor="white"
      textBtn="Okay"
      btnColor="black"
      btnBackgroundColor="#FF785A"
      btnBorder="transparent solid 0.5px"
      textFontFamily="'Poppins', sans-serif"
      closeIcon= {Close}
      wrapperBackgroundColor= "#181f1c"
    />
  );
};
