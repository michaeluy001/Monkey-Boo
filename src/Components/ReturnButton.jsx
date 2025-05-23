import { useNavigate } from "react-router";
import { GrReturn } from "react-icons/gr";

const ReturnButton = ({ className = "", children }) => {
  const nav = useNavigate();

  const returnHome = () => {
    setTimeout(() => {
      nav("/");
    }, 500);
  };

  return (
    <>
      <div onClick={returnHome} className={`${className} `}>
        {!children ? <GrReturn className="active:scale-90"/> : children}
      </div>
    </>
  );
};
export default ReturnButton;
