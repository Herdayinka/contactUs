import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <div className="container">
        <div className="small">
          <h3>Contact Us</h3>

          <div className="user">
            <div className="widthBy2">
              <form>
                <label>
                  First Name <span>*</span>
                </label>
                <br />
                <input type="text" />
              </form>
            </div>
            <div className="widthBy2">
              <form>
                <label>
                  Last Name <span>*</span>
                </label>
                <br />
                <input type="text" />
              </form>
            </div>
          </div>

          <div className="user2">
            <div className="widthBy4">
              <form>
                <label>
                  Email Address <span>*</span>
                </label>
                <br />
                <input type="text" />
              </form>
            </div>
          </div>

          <div className="radioSection">
            <section>
              <label>
                Query Type <span>*</span>
              </label>
            </section>
            <div className="user1">
              <div className="roundedDiv">
                <form action="/submit-form" method="post">
                  <div className="radioButton">
                    <input
                      type="radio"
                      id="option1"
                      name="options"
                      value="Option 1"
                    />
                    <label>General Enquiry</label>
                  </div>
                </form>
              </div>
              <div className="roundedDiv small">
                <div className="radioButton">
                  <input
                    type="radio"
                    id="option2"
                    name="options"
                    value="Option 2"
                  />
                  <label>Support Request</label>
                </div>
              </div>
            </div>
          </div>
          <div className="user3">
            <div className="widthBy5">
              <form>
                <label>
                  Message <span>*</span>
                </label>
                <br />
                <textarea type="text" />
              </form>
            </div>
          </div>
          <div className="check">
            <form>
              <input
                type="checkbox"
                id="option1"
                name="options"
                value="Option 1"
              />
              <label>I consent to being contracted by the team *</label>
            </form>
          </div>
          <div className="btn">
            <button>submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
