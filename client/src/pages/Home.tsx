import { StepProps } from "../types/types";
import { useNavigate } from "react-router-dom";
import beeLogo from "../assets/bee.png";
import kyoto from "../assets/images/destinations/kyoto.png";
import { useState } from "react";

function Home({
  currentStep,
  setCurrentStep,
  userInfo,
  setUserInfo,
}: StepProps) {
  const [showAlert, setShowAlert] = useState(false);

  const setFormValues = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setUserInfo?.((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  const handleClick = () => {
    if (
      userInfo?.email !== "" &&
      userInfo?.firstName !== "" &&
      /@/.test(userInfo?.email ?? "")
    ) {
      navigate("/path");
      setShowAlert(false);
    } else setShowAlert(true);
  };

  return (
    <>
      <div className="homeContainer">
        {/* TOP HALF / HERO SECTION */}
        <div className="homeHeroContainer">
          <div className="homeHeroHeaderContainer">
            <img src={beeLogo} alt="dandylion bee logo" />
            <h1>dandylion.ai</h1>
            <button
              className="login"
              style={{
                alignSelf: "center",
                justifySelf: "flex-end",
                margin: "0 12px 0 0",
              }}
            >
              login
            </button>
          </div>

          <div className="homeHeroContentContainer">
            <h2 className="heroText">
              Travel planning
              <br />
              that is
              <span className="heroBold"> so you</span>
            </h2>

            <div className="buttonContainer">
              <div className="formContainer">
                <input
                  type="text"
                  placeholder="First name"
                  value={userInfo?.firstName}
                  name="firstName"
                  onChange={setFormValues}
                />
                <input
                  type="text"
                  placeholder="email"
                  value={userInfo?.email}
                  name="email"
                  onChange={setFormValues}
                />
                <button className="next" onClick={() => handleClick()}>
                  Get started
                </button>
              </div>
            </div>
            {showAlert && (
              <div className="alert">
                <h3>Make sure you've added your name and email.</h3>
              </div>
            )}
          </div>
        </div>

        {/* BOTTOM HALF / CONTENT SECTION */}
        <div className="homeBottomContainer">
          <div className="homeBottomContentContainer">
            <div className="homeBottomTextContainer">
              <h2>Keep it simple.</h2>
              <p>
                A world of possibilities also means a world of decisions.
                Dandylion creates a curated plan that is built just for you.
              </p>
              <p>
                Whether you can’t decide on a destination, or know where you’re
                going but need help figuring out what to do, dandylion will
                guide you. It's just a few simple steps:
              </p>
            </div>
            <div className="homeBottomBoxContainer">
              <div className="homeBottomBox">
                <div className="homeBottomBoxNumber">1</div>
                <h3>Tell us about yourself</h3>
                <p>
                  Help us design your ideal trip by thoughtfully answering a few
                  quick questions.
                </p>
              </div>
              <div className="homeBottomBox">
                <div className="homeBottomBoxNumber">2</div>

                <h3>Explore your custom journey</h3>
                <p>
                  Get destinations tailored to you, with activities,
                  accommodations, and detailed daily plans.
                </p>
              </div>
            </div>
            <div className="homeBottomExampleContainer">
              <img src={kyoto} alt="" style={{ width: "300px" }} />
              <p
                style={{
                  fontSize: "30px",
                  width: "220px",
                  padding: "15px",
                  textAlign: "left",
                }}
              >
                {userInfo?.firstName}, [Results page mockup]
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
