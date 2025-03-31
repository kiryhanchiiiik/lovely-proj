const Button = ({ onClick, children }) => {
  return (
    <div>
      <button onClick={onClick} className="bg-rose-400 mt-10" type="button">
        {children}
      </button>
    </div>
  );
};

export default Button;
