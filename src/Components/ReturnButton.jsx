
import { useNavigate } from "react-router";
import { MdHome } from "react-icons/md";

const ReturnButton = ({ className = "" }) => {
  const nav = useNavigate();

  const returnHome = () => {
    nav("/");
  };

  return (
    <>
      <div onClick={returnHome} className={className}>
        <MdHome /> 
      </div>
    </>
  );
};
export default ReturnButton;
