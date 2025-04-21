import React from "react";
import stacks from "../../assets/images/stacks-badges.json";
import comet from "../../assets/images/comet.png";

type stackBadges = {
  title: string;
  url: string;
};

const Stacks: React.FC = () => {
  return (
    <section className="stacks container">
      <div className="stacks-content">
        <div className="stacks-left-content">
          <h2>Minhas stacks</h2>
          <div className="tech-badges">
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
        <img className="comet" src={comet} alt="" />
      </div>
    </section>
  );
};

export default Stacks;
