// import React, { useState } from "react";
// import "../styles/contact.css";
// import { useForm, ValidationError } from "@formspree/react";

// const Contact = () => {
//   const [formDetails, setFormDetails] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [state, handleSubmit] = useForm("mkndjldl");

//   const inputChange = (e) => {
//     const { name, value } = e.target;
//     return setFormDetails({
//       ...formDetails,
//       [name]: value,
//     });
//   };

//   return (
//     <section className="register-section flex-center" id="contact">
//       <div className="contact-container flex-center contact">
//         <h2 className="form-heading">Contact Us</h2>
//         <form onSubmit={handleSubmit} className="register-form ">
//           <input
//             type="text"
//             name="name"
//             className="form-input"
//             placeholder="Enter your name"
//             value={formDetails.name}
//             onChange={inputChange}
//           />
//           <input
//             type="email"
//             name="email"
//             className="form-input"
//             placeholder="Enter your email"
//             value={formDetails.email}
//             onChange={inputChange}
//           />
//           <textarea
//             type="text"
//             name="message"
//             className="form-input"
//             placeholder="Enter your message"
//             value={formDetails.message}
//             onChange={inputChange}
//             rows="8"
//             cols="12"
//           ></textarea>

//           <button type="submit" className="btn form-btn">
//             send
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;

///////////////////////////////////

import React from "react";
import "../styles/contact.css";
import { useForm, ValidationError } from "@formspree/react";
function Contact() {
  const [state, handleSubmit] = useForm("mkndjldl");
  if (state.succeeded) {
    return (
      <section className="register-section flex-center" id="contact">
      <div className="contact-container flex-center contact">
        <h2 className="form-heading">Thanks, Your Message is received.</h2>
        <form onSubmit={handleSubmit} className="register-form ">
          <input
            type="text"
            name="name"
            className="form-input"
            placeholder="Enter your name"
            // value={formDetails.name}
            // onChange={inputChange}
          />
          <ValidationError prefix="name" field="name" errors={state.errors} />
          <input
            type="email"
            name="email"
            className="form-input"
            placeholder="Enter your email"
            // value={formDetails.name}
            // onChange={inputChange}
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <textarea
            type="text"
            name="message"
            className="form-input"
            placeholder="Enter your message"
            // value={formDetails.message}
            // onChange={inputChange}
            rows="8"
            cols="12"
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button
            type="submit"
            className="btn form-btn"
            disabled={state.submitting}
          >
            Submit
          </button>
        </form>
      </div>
    </section>
    );
  }
  return (
    <section className="register-section flex-center" id="contact">
      <div className="contact-container flex-center contact">
        <h2 className="form-heading">Contact Us</h2>
        <form onSubmit={handleSubmit} className="register-form ">
          <input
            type="text"
            name="name"
            className="form-input"
            placeholder="Enter your name"
            // value={formDetails.name}
            // onChange={inputChange}
          />
          <ValidationError prefix="name" field="name" errors={state.errors} />
          <input
            type="email"
            name="email"
            className="form-input"
            placeholder="Enter your email"
            // value={formDetails.name}
            // onChange={inputChange}
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <textarea
            type="text"
            name="message"
            className="form-input"
            placeholder="Enter your message"
            // value={formDetails.message}
            // onChange={inputChange}
            rows="8"
            cols="12"
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button
            type="submit"
            className="btn form-btn"
            disabled={state.submitting}
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
