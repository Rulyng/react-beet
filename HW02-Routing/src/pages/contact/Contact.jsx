import { Link } from "react-router-dom";

import { isMobile } from "react-device-detect";
function Contact() {
  if (isMobile) {
    return (
      <>
        <div className="page">
          <section>
            <h2>Mobile Contact section</h2>
            Contact
          </section>
          <section>
            <h2> section 2</h2>
            section 2
          </section>
          <section>
            <h2> section 3</h2>
            section 3
          </section>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="page">
          <section>
            <h2>Desctop Contact section</h2>
            Contact
          </section>
          <section>
            <h2> section 2</h2>
            section 2
          </section>
          <section>
            <h2> section 3</h2>
            section 3
          </section>
        </div>
      </>
    );
  }
}

export default Contact;
