// src/components/CardQueFem.jsx
import React from "react";

export default function CardQueFem({ title, excerpt, featuredImage, link, content }) {
  return (
    <div className="card card--quefem">
      
      <div className="card__content card__content--quefem">
        <div className="card__content--quefem--containerTitle">
        <h3 className="card__title card__title--quefem">{title}</h3>
        </div>
        
        <div className="card__content--quefem--containerImg">
          {featuredImage && (
          <img src={featuredImage} alt={title} className="card__image card__image--quefem" />
          )}
          <div className="card__content--quefem--containerText">
            <div
                className="card__excerpt"
                dangerouslySetInnerHTML={{ __html: excerpt }}
              />
              <div>
                
              </div>
              <div className="card__content--quefem--containerText--link">          
              {link && (
                <a href={link} className="card__link card__link--quefem" target="_blank" rel="noopener noreferrer">
                  Llegeix més →
                </a>
              )}
              </div>
            </div>
          </div>
      </div>
        
    </div>
  );
}