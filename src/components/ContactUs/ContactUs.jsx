import React from "react";
import {
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBValidation,
    MDBValidationItem,
} from "mdb-react-ui-kit";

const ContactUs = () => {
    return (
        <div>
            {/* Build a Contact us form using bootstrap or material ui classes */}
            {/* <h1>Contact Us</h1> */}
            {/* <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="well well-sm">
                            <form>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="name">
                                                Name</label>
                                            <input type="text" className="form-control" id="name" placeholder="Enter name" required="required" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">
                                                Email Address</label>
                                            <div className="input-group">
                                                <span className="input-group-addon"><span className="glyphicon glyphicon-envelope"></span>
                                                </span>
                                                <input type="email" className="form-control" id="email" placeholder="Enter email" required="required" /></div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="subject">
                                                Subject</label>
                                            <select id="subject" name="subject" className="form-control" required="required">
                                                <option value="na" selected="">Choose One:</option>
                                                <option value="service">General Customer Service</option>
                                                <option value="suggestions">Suggestions</option>
                                                <option value="product">Product Support</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="name">
                                                Message</label>
                                            <textarea name="message" id="message" className="form-control" rows="9" cols="25" required="required"

                                                placeholder="Message"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <button type="submit" className="btn btn-primary pull-right" id="btnContactUs">
                                            Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <form>
                            <legend><span className="glyphicon glyphicon-globe"></span> Our office</legend>
                            <address>
                                <strong>Twitter, Inc.</strong><br />
                                795 Folsom Ave, Suite 600<br />
                                San Francisco, CA 94107<br />
                                <abbr title="Phone">
                                    P:</abbr>
                                (123) 456-7890
                            </address>
                            <address>
                                <strong>Full Name</strong><br />
                                <a href="mailto:#">

                                </a>
                            </address>
                        </form>
                    </div>
                </div>
            </div> */}

            {/* <form id="contact-form" method="POST">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" rows="5"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form> */}
            <div
                style={{
                    margin: "10vh",
                    // backgroundColor: "orange",
                }}
            >
                <MDBValidation
                    noValidate
                    id="form"
                    className="text-center"
                    style={{
                        width: "100%",
                        maxWidth: "500px",
                        margin: "auto",
                        border: "2px solid black",
                        padding: "5vh 5vh",
                        background: "linear-gradient(70deg, rgba(255, 226, 172, 0), rgb(255 164 46))",
                        //add hover effect
                        hover: {
                            background: "linear-gradient(70deg, rgba(255,226,172,1), rgba(255,256,198,0))",

                        },

                        // :hover: {
                        //     background: "linear-gradient(70deg, rgba(255,226,172,0), rgba(255,256,198,1))",
                        // },
                        // background-image: "linear-gradient(to right, rgba(255,226,172,0), rgba(255,226,172,1))",
                    }}
                >
                    <h2 style={{ margin: "15px px   15px" }}>Contact us</h2>

                    <MDBValidationItem invalid feedback="Please provide your name.">
                        <MDBInput
                            label="Name"
                            v-model="name"
                            wrapperClass="mb-4"
                            required
                        />
                    </MDBValidationItem>

                    <MDBValidationItem invalid feedback="Please provide your email.">
                        <MDBInput
                            type="email"
                            label="Email address"
                            v-model="email"
                            wrapperClass="mb-4"
                            required
                        />
                    </MDBValidationItem>

                    <MDBValidationItem invalid feedback="Please provide mail subject.">
                        <MDBInput
                            label="Subject"
                            v-model="subject"
                            wrapperClass="mb-4"
                            required
                        />
                    </MDBValidationItem>

                    <MDBValidationItem invalid feedback="Please provide a message text.">
                        <textarea wrapperClass="mb-4" label="Message" required />
                    </MDBValidationItem>

                    <MDBValidationItem feedback="">
                        <MDBCheckbox
                            wrapperClass="d-flex justify-content-center"
                            label="Send me copy"
                        />
                    </MDBValidationItem>

                    <MDBBtn type="submit" color="primary" block className="my-4">
                        Send
                    </MDBBtn>
                </MDBValidation>
            </div>
        </div >
    );
};

export default ContactUs;
