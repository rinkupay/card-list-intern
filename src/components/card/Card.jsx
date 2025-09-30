import { FaCheckCircle } from "react-icons/fa";
import "./Card.css";

const Card = ({ title, content, features, image }) => {
  return (
    <div className="card">
      <div className="card-body">
        {/* Title */}
        <div className="card-title">
          <h5>{title}</h5>
        </div>

        {/* Content */}
        <div className="card-content">
          <p>{content}</p>
        </div>

        {/* List */}
        <div className="card-list">
          <ul>
            {features.map((feature, i) => (
              <li key={i}><FaCheckCircle />  {feature}</li>
            ))}
          </ul>

          <div className="btn">
            <button>Learn More</button>
          </div>
        </div>

        {/* Image */}
        <div className="card-image">
          <img src={image} alt={title} />
        </div>
      </div>
    </div>
  );
};

export default Card;
