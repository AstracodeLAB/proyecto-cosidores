// src/components/CardQueFem.jsx
import React from "react";

export default function CardQueFem({ title, excerpt, featuredImage, link, content }) {
  return (
    <div className="card card--quefem">
      {featuredImage && (
        <img src={featuredImage} alt={title} className="card__image card__image--quefem" />
      )}
      <div className="card__content">
        <h3 className="card__title">{title}</h3>
        <p dangerouslySetInnerHTML={{ __html: content }}></p>
        <div
          className="card__excerpt"
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />
        {link && (
          <a href={link} className="card__link">
            Leer más
          </a>
        )}
      </div>
    </div>
  );
}