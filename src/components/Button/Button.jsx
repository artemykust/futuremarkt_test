// eslint-disable-next-line react/prop-types
const Button = ({ type, text, className, onClick }) => {
  const buttonType = type === "transparent" ? "transparent" : "solid";

  return (
    <button onClick={onClick} className={`${className} ${buttonType}`}>
      <div className="btn_text">
        <span>{text}</span>
      </div>
      <div className="btn_icon">
        <svg
          // width="22"
          // height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 4.29346V20.952H4.37326M20.9618 21L1 1"
            stroke={buttonType === "transparent" ? "#FFF" : "#0B3461"}
            strokeWidth="2"
          />
        </svg>
      </div>
    </button>
  );
};

export default Button;
