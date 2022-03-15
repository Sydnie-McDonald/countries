import React from 'react';
import './CountryCard.css';

export default function BlogCard({ title, subtitle, text, image }) {
    return (
        <div className="country-card">
            <div className="details">
                <div className="title">{title}</div>
                <div className="subtitle">{subtitle}</div>
                <div className="text">{text}</div>
            </div>
            <div className="image">
                <img src={image} />
            </div>
        </div>
    );
}
