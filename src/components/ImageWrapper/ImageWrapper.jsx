const ImageWrapper = ({ css }) => {
  return (
    <div>
      <img
        className={css.heart1}
        width="50"
        height="50"
        src="/heart.svg"
        alt=""
      />
      <img
        className={css.heart2}
        width="57"
        height="57"
        src="/heart-2.svg"
        alt=""
      />
      <img
        className={css.heart3}
        width="57"
        height="57"
        src="/heart-3.svg"
        alt=""
      />
      <img
        className={css.heart4}
        width="50"
        height="50"
        src="/heart-4.svg"
        alt=""
      />
    </div>
  );
};

export default ImageWrapper;
