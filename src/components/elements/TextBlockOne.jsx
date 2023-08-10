import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import heroAvatar from "../../assets/images/home/networktower.jpg";

const TextBlockOne = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="7e90gBu4pas"
        onClose={() => setOpen(false)}
      />
      {/* End ModalVideo */}

      <div className="row">
        <div
          className="col-xxl-5 col-lg-6 ms-auto order-lg-last"
          data-aos="fade-left"
        >
          <div className="text-wrapper pt-0">
            {/* End Video trigger wrapper */}
            <div className="title-style-one">
              <h3 className="title" style={{ marginTop: "1.5rem" }}>
                Your Product and Network <span> Quality </span> is our Passion.
              </h3>
            </div>
            <h4 style={{ marginTop: "1rem" }}>Who we are?</h4>
            <p style={{ fontFamily: "Recoleta", textAlign: "justify" }}>
              Cillum adipisicing enim Lorem mollit minim laborum minim
              reprehenderit. Nisi in nisi veniam irure eiusmod laboris ad ipsum
              anim dolor reprehenderit. Adipisicing mollit laboris ipsum dolor
              minim laboris excepteur.
            </p>
          </div>
        </div>
        {/* End .col */}

        <div className="col-xxl-6 col-lg-6" data-aos="fade-up">
          <div className="img-container position-relative">
            <img src={heroAvatar} alt="hero avatar" className="ceo-avatar" />

            {/* <!-- /.quote-wrapper --> */}
          </div>
        </div>
        {/* End .col */}
      </div>
    </>
  );
};

export default TextBlockOne;
