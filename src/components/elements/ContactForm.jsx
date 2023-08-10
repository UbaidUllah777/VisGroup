import React from "react";

const ContactForm = ({ className = "" }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <form onClick={handleSubmit}>
        <div className="row controls">
          <div className="col-12">
            <div className="input-group-meta form-group mb-25">
              <label>Name*</label>
              <input type="text" placeholder="Your Name" name="name" required />
              <div className="help-block with-errors"></div>
            </div>
          </div>
          {/* End .col */}

          <div className="col-12">
            <div className="input-group-meta form-group mb-40">
              <label>Email*</label>
              <input
                type="email"
                placeholder="Enter Your Email"
                name="email"
                required
              />
              <div className="help-block with-errors"></div>
            </div>
          </div>
          {/* End .col */}

          <div className="col-12">
            <div className="input-group-meta form-group flex-column d-flex mb-40">
              <label>Select Service*</label>
              <select
                className="form-select"
                placeholder="Choose a Service...."
                name="category"
                required
              >
                <option value="">Choose a Service....</option>
                <option value="Digital Marketing">Network benchmarking</option>
                <option value="Website Design">
                  field performance testing
                </option>
                <option value="WordPress">infotainment system</option>
                <option value="Web Analytics">mobile app testing</option>
                <option value="Web Programming">full stack development</option>
                <option value="Infographic Design">software testing</option>
                <option value="Infographic Design">other</option>
              </select>
              <div className="help-block with-errors"></div>
            </div>
          </div>
          {/* End .col */}

          <div className="col-12">
            <div className="input-group-meta form-group mb-35">
              <textarea
                placeholder="Your message*"
                name="message"
                required
              ></textarea>
              <div className="help-block with-errors"></div>
            </div>
          </div>
          {/* End .col */}

          <div className="col-12">
            <button className={`theme-btn-one ripple-btn w-100 ${className}`}>
              Send Message
            </button>
          </div>
          {/* End .col */}
        </div>
      </form>
    </>
  );
};

export default ContactForm;
