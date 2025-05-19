const Button = ({
  className ="",
  type = "default",
  children,
  onClick,
}) => {

  const variants = {
    default:  "bg-sky-600 ring-sky-500 shadow-sky-600/100",
    green:  "bg-green-700 ring-green-600 shadow-green-800/100",
    yellow:  "bg-yellow-400 ring-yellow-300 shadow-yellow-600/100",
    red:  "bg-red-700 ring-red-600 shadow-red-600/100",

  }

  const baseStyle = 
    "w-40 h-10 m-auto content-center text-center rounded-lg shadow-md/50 ring-2 hover:scale-110 transition-transform cursor-pointer"
  



  return (
    <>
      <button onClick={onClick} className={ `${className} ${variants[type]} ${baseStyle}`}>
        {children}
      </button>
    </>
  );
};

export default Button;
