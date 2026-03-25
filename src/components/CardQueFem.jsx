import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CardQueFem({ title, excerpt, featuredImage, slug, slugBase, onClick }) {
  return (
    <div className="card card--quefem" onClick={onClick} style={onClick ? { cursor: "pointer" } : {}}>
      
      <div className="card__content card__content--quefem">
        <div className="card__content--quefem--containerTitle">
          <h3 className="card__title card__title--quefem" dangerouslySetInnerHTML={{ __html: title }}></h3>
        </div>
        
        <div className="card__content--quefem--containerImg">
          {featuredImage && (
            <img src={featuredImage} alt={title} className="card__image card__image--quefem" />
          )}
          <div className="card__content--quefem--containerText">
            {excerpt && (
              <div
                className="card__excerpt"
                dangerouslySetInnerHTML={{ __html: excerpt }}
              />
            )}
            <div className="card__content--quefem--containerText--link">
              {/* Si es categoría (tiene onClick pero no slug) */}
              {onClick && !slug && (
  <span className="card__link card__link--quefem">
    Veure projectes <span className="arrow-triangle">▶</span>
  </span>
)}
{slug && (
  <Link to={`/${slugBase || "cosim"}/${slug}`} className="card__link card__link--quefem">
    Llegeix més <span className="arrow-triangle">▶</span>
  </Link>
)}
            </div>
          </div>
        </div>
      </div>
        
    </div>
  );
}