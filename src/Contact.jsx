import React from "react";
import { useState } from "react";
const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });
  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `My name is ${data.fullname}. My mobile number is ${data.phone} and email is ${data.email}, Here is what I want to say "${data.msg}"`
    );
  };
  return (
    <>
      <div className="text-right " style={{ marginRight: "40px" }}>
        <img
          style={{ borderRadius: "50%" }}
          src="https://lh3.googleusercontent.com/ogw/ADGmqu_D1c1rPPbjy3ZuH8TdwTEWBkEfj7U5tqFdrnsC=s83-c-mo"
          alt=""
        />
        <h5 style={{ color: "gray", fontWeight: "bold" }}>
          Mobile: (+91) 8999378109{" "}
        </h5>
      </div>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="md-3">
                <label for="exampleFormControlInput1">FullName</label>
                <input
                  type="text"
                  className="form-control"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  id="exampleFormControlInput1"
                  placeholder="Enter your Name"
                  required
                />
              </div>
              <div class="md-3">
                <label for="exampleFormControlInput1">Phone</label>
                <input
                  type="number"
                  className="form-control"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  id="exampleFormControlInput1"
                  placeholder="mobile number"
                  required
                />
              </div>
              <div class="md-3">
                <label for="exampleFormControlInput1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  required
                />
              </div>

              <div class="md-3">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                  rows="3"
                  required
                ></textarea>
              </div>
              <br></br>
              <div className="col-12">
                <button className="btn btn-outline-primary" type="submit">
                  Contact now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <br></br>
    </>
  );
};

export default Contact;
