import { createPortal } from "react-dom";
interface Props {
  children: React.ReactNode;
}
function Modal({ children }: Props) {
  return createPortal(children, document.body);
}
export default Modal;
