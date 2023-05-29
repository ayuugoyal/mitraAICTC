import PropTypes from "prop-types";
import "./style.css";

export function PartnerCards({ link, image, date, desc, name }) {
  return (
    <div className="blog-item">
      <a href={link}>
        <div className="icon">
          <img src={image} alt="" />
        </div>
        <div className="content">
          <div className="title">
            {name}
            <span className="blog-date">{date}</span>
          </div>
          <div className="rounded"></div>
          <p>{desc}</p>
        </div>
        <div className="item-arrow">
          <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
        </div>
      </a>
    </div>
  );
}

PartnerCards.defaultProps = {
  link: "#",
};

PartnerCards.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string,
};

PartnerCards.displayName = "/src/widgets/layout/partner-card.jsx";

export default PartnerCards;
