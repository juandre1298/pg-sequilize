import React from "react";

export const Home = () => {
  return (
    <section className="homeMain">
      <main>
        <h1>show info in tables</h1>
        <div className="displayModels">
          <div className="project">
            <h2>Projects</h2>
            <ul></ul>
          </div>
          <div className="task">
            <h2>Tasks</h2>
            <div>
              <ul>
                <li>xxx</li>
              </ul>
            </div>
          </div>
          <div className="worker">
            <h2>Workers</h2>
            <div>
              <ul>
                <li>xxx</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};
