import React from "react";
import stacks from "../../../assets/stacks/stacks-badges.json";
import comet from "../../../assets/images/comet.png";

type stackBadges = {
  title: string;
  url: string;
};

const Stacks: React.FC = () => {
  return (
    <section className="stacks container" id="stacks">
      <div className="stacks-content">
        <div className="stacks-left-content">
          <h2>Minhas stacks ✨</h2>
          <div className="tech-badges" data-aos="fade-right">
            {stacks.map((badge: stackBadges) => (
              <img
                key={badge.title}
                src={badge.url}
                alt={badge.title}
                title={badge.title}
              />
            ))}
          </div>
        </div>
        <img className="comet" src={comet} alt="" data-aos="fade-up" />
      </div>
    </section>
  );
};

export default Stacks;
