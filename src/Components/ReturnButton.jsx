import { useNavigate } from "react-router";
import { GrReturn } from "react-icons/gr";

const ReturnButton = ({ className = "", children }) => {
  const nav = useNavigate();
  const baseStyle='cursor-pointer';

  const returnHome = () => {
    setTimeout(() => {
      nav("/");
    }, 500);
  };

  return (
    <>
      <div onClick={returnHome} className={`${className} ${baseStyle}`}>
        {!children ? <GrReturn className="active:scale-90 "/> : children}
      </div>
    </>
  );
};
export default ReturnButton;
