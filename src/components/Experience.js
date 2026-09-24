import React, { useState } from "react";

import Section from "../components/Section";
import Title from "../components/Title";

import works from "../utils/works";

import "./styles/Experience.css";

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Section id="experience">
      <div className="tabs__container reveal reveal-right">
        <Title>Where I have worked</Title>
        <div className="tabs">
          <div className="tabs__list">
            {works &&
              works.map(({ company }, i) => (
                <button
                  key={i}
                  className={`tabs__item ${activeTab === i ? "active" : ""}`}
                  onClick={() => setActiveTab(i)}
                >
                  {company}
                </button>
              ))}
          </div>
          <div className="tabs__panel">
            {works &&
              works.map(
                (
                  {
                    company,
                    company_url,
                    position,
                    start_date,
                    end_date,
                    description,
                  },
                  i
                ) => (
                  <div
                    key={i}
                    className={`tabs__panel-item ${
                      activeTab === i ? "active" : ""
                    }`}
                  >
                    <h3>
                      <span>{position}</span> in{" "}
                      <a
                        href={company_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {company}
                      </a>
                    </h3>
                    <p>
                      {start_date} - {end_date}
                    </p>
                    <ul >
                      {description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )
              )}
          </div>
        </div>
      </div>
    </Section>
  );
}
