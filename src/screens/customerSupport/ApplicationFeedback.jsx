import React from "react";
import DashboardInnerTitle from "../../components/dashboard/DashboardInnerTitle";
import RadioInput from "../../components/ui/RadioInput";
import TextareaInput from "../../components/ui/TextareaInput";
import "../../styles/dashboard/ApplicationFeedback.css";
import FeedbackTableCard from "../../components/dashboard/FeedbackTableCard";
import ButtonMain from "../../components/ui/ButtonMain";

const ApplicationFeedback = () => {
  // dummy data

  const businessObervation = [
    { name: "Business Growth" },
    { name: "Good for startup" },
    { name: "Helpful for Business Growth" },
  ];
  const usability = [
    { name: "Is this application usefull" },
    { name: "Good for startup" },
    { name: "Helpful for Business Growth" },
  ];

  return (
    <>
      <div className="ApplicationFeedback sectionContainer">
        <h6 className="headTitle">Application Feedback</h6>
        <div className="contact_detail valuesBoxes ">
          <DashboardInnerTitle name="Contact Details of Person" />
          <div className="details">
            {/* name */}
            <div className="both fields">
              <label htmlFor="" className="fieldLabel">
                Name
              </label>
              <div className="col_2">
                <div className="fieldBox">
                  <input type="text" value="Rajat" />
                  <p className="hint">First Name</p>
                </div>
                <div className="fieldBox">
                  <input type="text" value="Pradhan" />
                  <p className="hint">Last Name</p>
                </div>
              </div>
            </div>

            {/* email */}
            <div className="single fields">
              <label htmlFor="" className="fieldLabel">
                E-mail
              </label>
              <div className="fieldBox">
                <input type="text" value="Prajat917@gmail.com" />
                <p className="hint">example@example.com</p>
              </div>
            </div>
            {/* Phone Number */}
            <div className="single fields">
              <label htmlFor="" className="fieldLabel">
                Phone Number
              </label>
              <div className="col_2 phone">
                <div className="fieldBox">
                  <input type="text" value="91" />
                  <p className="hint">Area Code</p>
                </div>
                <div className="fieldBox">
                  <input type="text" value="7024393158" />
                  <p className="hint">Phone Number</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="valuesBoxes overall">
          <div className="fieldBox selectOption">
            <label htmlFor="" className="fieldLabel">
              Which application part you attend?
              <span className="redAsterisk">*</span>
            </label>
            <select className="valuesBoxes_select" name="" id="">
              <option value="">Please Select</option>
            </select>
          </div>

          <div className="col_2">
            {/* left */}
            <div className="left">
              <div className="number_value">
                <label htmlFor="" className="fieldLabel">
                  Overall, how easy application was the?
                  <span className="redAsterisk">*</span>
                </label>
                <div className="number_value_circle">
                  <div className="circle_card">
                    <span className="circle">1</span>
                    <p>Not Easy</p>
                  </div>
                  <div className="circle_card">
                    <span className="circle">2</span>
                  </div>
                  <div className="circle_card">
                    <span className="circle">3</span>
                  </div>
                  <div className="circle_card">
                    <span className="circle">4</span>
                  </div>
                  <div className="circle_card">
                    <span className="circle">5</span>
                  </div>
                  <div className="circle_card">
                    <span className="circle">6</span>
                  </div>
                  <div className="circle_card">
                    <span className="circle">7</span>
                  </div>
                  <div className="circle_card">
                    <span className="circle">8</span>
                  </div>
                  <div className="circle_card">
                    <span className="circle">9</span>
                  </div>
                  <div className="circle_card">
                    <span className="circle">10</span>
                    <p>Very Easy</p>
                  </div>
                </div>
              </div>
              <div className="number_value">
                <label htmlFor="" className="fieldLabel">
                  Do you feel the application provided value for money services?
                  <span className="redAsterisk">*</span>
                </label>
                <div className="number_value_circle">
                  <div className="circle_card">
                    <span className="circle">1</span>
                    <p>Not at all</p>
                  </div>
                  <div className="circle_card">
                    <span className="circle">2</span>
                  </div>
                  <div className="circle_card">
                    <span className="circle">3</span>
                  </div>
                  <div className="circle_card">
                    <span className="circle">4</span>
                  </div>
                  <div className="circle_card">
                    <span className="circle">5</span>
                  </div>
                  <div className="circle_card">
                    <span className="circle">6</span>
                  </div>
                  <div className="circle_card">
                    <span className="circle">7</span>
                  </div>
                  <div className="circle_card">
                    <span className="circle">8</span>
                  </div>
                  <div className="circle_card">
                    <span className="circle">9</span>
                  </div>
                  <div className="circle_card">
                    <span className="circle">10</span>
                    <p>Definitely</p>
                  </div>
                </div>
              </div>

              <div className="radioOptions number_value">
                <label htmlFor="" className="fieldLabel">
                  Would you recommend a similar application to a friend?
                  <span className="redAsterisk">*</span>
                </label>
                <div className="radioOptions_box">
                  <RadioInput labelName="Yes, definitely" />
                  <RadioInput labelName="Maybe, if the content was changed" />
                  <RadioInput labelName="Maybe, if it was cheaper" />
                  <RadioInput labelName="No, never" />
                </div>
              </div>
            </div>
            {/* right */}
            <div className="right">
              <div className="number_value">
                <label htmlFor="" className="fieldLabel">
                  After using the application, how did you feel?
                  <span className="redAsterisk">*</span>
                </label>
                <div className="number_value_circle">
                  <div className="circle_card">
                    <span className="circle">1</span>
                    <p>None</p>
                  </div>
                  <div className="circle_card">
                    <span className="circle">2</span>
                  </div>
                  <div className="circle_card">
                    <span className="circle">3</span>
                  </div>
                  <div className="circle_card">
                    <span className="circle">4</span>
                  </div>
                  <div className="circle_card">
                    <span className="circle">5</span>
                  </div>
                  <div className="circle_card">
                    <span className="circle">6</span>
                  </div>
                  <div className="circle_card">
                    <span className="circle">7</span>
                  </div>
                  <div className="circle_card">
                    <span className="circle">8</span>
                  </div>
                  <div className="circle_card">
                    <span className="circle">9</span>
                  </div>
                  <div className="circle_card">
                    <span className="circle">10</span>
                    <p>Good</p>
                  </div>
                </div>
              </div>
              <div className="radioOptions number_value">
                <label htmlFor="" className="fieldLabel">
                  What was the single best part of the application?
                  <span className="redAsterisk">*</span>
                </label>
                <div className="radioOptions_box">
                  <RadioInput labelName="Option 1" />
                  <RadioInput labelName="Option 2" />
                  <RadioInput labelName="Option 3" />
                  <RadioInput labelName="Option 4" />
                  <RadioInput labelName="Option 5" />
                  <RadioInput labelName="Other" />
                </div>
                <TextareaInput />
              </div>
            </div>
          </div>
        </div>

        {/* review question */}

        <div className="given_review valuesBoxes ">
          <DashboardInnerTitle name="Give review below questions" />
          <p className="subInstruction">
            Check the only one box in each question
          </p>

          <div className="feedbackTable">
            <div className="col_2">
              <FeedbackTableCard
                labelName="Business Observation "
                rowAr={businessObervation}
              />
              <FeedbackTableCard labelName="Usability " rowAr={usability} />
              <FeedbackTableCard labelName="UI & UX  " rowAr={usability} />
              <FeedbackTableCard labelName="Pricing " rowAr={usability} />
            </div>
          </div>
        </div>
        {/* Application Security */}

        <div className="application valuesBoxes ">
          <DashboardInnerTitle name="Application Security" />
          <div className="radioOptions number_value">
            <label htmlFor="" className="fieldLabel">
            Overall, were you satisfied with the security of the application?
              <span className="redAsterisk">*</span>
            </label>
            <div className="radioOptions_box">
              <RadioInput labelName="Yes" />
              <RadioInput labelName="No" />
            </div>
          </div>

          {/* What problems did you encounter? */}
          <div className="single fields">
              <label htmlFor="" className="fieldLabel">
              What problems did you encounter?
              </label>
              <div className="fieldBox">
                <input type="text" value="" />
              </div>
            </div>

            <div className="col_2">
            {/* left */}
            <div className="left">
            <div className="number_value">
                <label htmlFor="" className="fieldLabel">
                How was the security of the application?
                  <span className="redAsterisk">*</span>
                </label>
                <div className="number_value_circle">
                  <div className="circle_card">
                    <span className="circle">1</span>
                    <p>Terrible</p>
                  </div>
                  <div className="circle_card">
                    <span className="circle">2</span>
                  </div>
                  <div className="circle_card">
                    <span className="circle">3</span>
                  </div>
                  <div className="circle_card">
                    <span className="circle">4</span>
                  </div>
                  <div className="circle_card">
                    <span className="circle">5</span>
                  </div>
                  <div className="circle_card">
                    <span className="circle">6</span>
                  </div>
                  <div className="circle_card">
                    <span className="circle">7</span>
                  </div>
                  <div className="circle_card">
                    <span className="circle">8</span>
                  </div>
                  <div className="circle_card">
                    <span className="circle">9</span>
                  </div>
                  <div className="circle_card">
                    <span className="circle">10</span>
                    <p>Great</p>
                  </div>
                </div>
              </div>
              <div className="radioOptions number_value">
                <label htmlFor="" className="fieldLabel">
                  What was the single best part of the application?
                </label>
                <TextareaInput />
              </div>
            </div>
            {/* right */}
            <div className="right">

            <div className="radioOptions number_value">
                <label htmlFor="" className="fieldLabel">
                  What was the single best part of the application?
                  <span className="redAsterisk">*</span>
                </label>
                <div className="radioOptions_box">
                  <RadioInput labelName="Option 1" />
                  <RadioInput labelName="Option 2" />
                  <RadioInput labelName="Option 3" />
                  <RadioInput labelName="Option 4" />
                  <RadioInput labelName="Option 5" />
                  <RadioInput labelName="Other" />
                </div>
                <TextareaInput />
              </div>
            </div>
          </div>


        </div>


        {/* Final Thoughts? */}

        <div className="application valuesBoxes ">
          <DashboardInnerTitle name="Final Thoughts?" />


            <div className="col_2">
            {/* left */}
            <div className="left">
            <div className="single fields">
              <label htmlFor="" className="fieldLabel">
              If you were running the application, what would you have done differently?
              </label>
              <div className="fieldBox">
                <input type="text" value="" />
              </div>
            </div>
            <div className="single fields">
              <label htmlFor="" className="fieldLabel">
              Any final comments?
              </label>
              <div className="fieldBox">
                <input type="text" value="" />
              </div>
            </div>
            </div>
            {/* right */}
            <div className="right">

            <div className="single fields">
              <label htmlFor="" className="fieldLabel">
              Any suggestions for future event topics?
              </label>
              <div className="fieldBox">
                <input type="text" value="" />
              </div>
            </div>
            </div>
          </div>


        </div>
        <div className="centerBtns">
          <ButtonMain btnColor='green' name='Make as a read' />
        </div>


      </div>
    </>
  );
};

export default ApplicationFeedback;
