import '../Styles/CustomArrows.css';

export const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow prev-arrow`}
      onClick={onClick}
    >
      <span className="arrow-text"></span>
    </div>
  );
};

export const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow next-arrow`}
      onClick={onClick}
    >
      <span className="arrow-text"></span>
    </div>
  );
};
