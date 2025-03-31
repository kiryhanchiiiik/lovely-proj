const Card = ({ children }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-2 w-100 max-w-xs">
      {children}
    </div>
  );
};

export default Card;
