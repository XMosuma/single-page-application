import React from "react";
import Typical from "react-typical";
import "./Profile.css";

function Profile(props) {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M{" "}
              <span className="highlighted-text"> Xolani Mosuma</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "React/React Native Dev",
                    1000,
                    "Mobile Dev",
                    1000,
                    "Java Dev",
                    1000,
                    "Python Dev",
                    1000,
                    "Full Stack Dev",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                {" "}
                <h1>About Me</h1>
                <p>
                I'M open to new ideas and fresh perspectives,always<br></br>
                ready to challenge myself,so i never stop improving and<br></br>
                i never stop learning.Constantly striving for excellence,<br></br>
                i take ownership and responsibility. I believe that communication <br></br>
                is at the heart of collaboration. I keep thing simple and <br></br>
                straight forward, make them easy and uncomplicated. I focus <br></br>
                on the transparency and clarity, working with integrity and sincerity.
                <br>
                </br>
                <br>
                </br>
                </p>
                <p>Why i wanna be a developer at SovTech<br></br>
                 Mentor support for the duration of the programme.
                 <br></br>
                Project diversity and the opportunity to take on real responsibility
                <br></br>
                Potential job placements after the programme ends
                <br></br>Continued suppor
                </p>
              </span>
            </span>
          </div>
          <div className="profile-options">
            <a href="CV.pdf" download="Xolani CV.pdf">
              <button className="btn highlighted-btn"> Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
        <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/xolani-mosuma-8944bb182/">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://github.com/XMosuma">
                <i className="fa fa-github"></i>
              </a>
              <a href="https://gitlab.com/XMosuma">
                <i className="fa fa-gitlab"></i>
              </a>
              <a href="https://studio.youtube.com/channel/UCrfrcUqjETG3ui9K_ouKF_w/videos/upload?filter=%5B%5D&sort=%7B%22columnType%22%3A%22date%22%2C%22sortOrder%22%3A%22DESCENDING%22%7D">
                <i className="fa fa-youtube-square"></i>
              </a>
            </div>
          </div>
    </div>
  );
}

export default Profile;
