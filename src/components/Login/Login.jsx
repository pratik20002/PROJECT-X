import React from 'react'
import './Login.css'
function Login() {
    return (
        <div>
            {/* <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
                <div className="card card0 border-0">
                    <div className="row d-flex">
                        <div className="col-lg-6">
                            <div className="card1 pb-5">
                                <div className="row">
                                    <img src="https://i.imgur.com/CXQmsmF.png" className="logo" />
                                </div>
                                <div className="row px-3 justify-content-center mt-4 mb-5 border-line">
                                    <img src="https://i.imgur.com/uNGdWHi.png" className="image" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card2 card border-0 px-4 py-5">
                                <div className="row mb-4 px-3">
                                    <h6 className="mb-0 mr-4 mt-2">Sign in with</h6>
                                    <div className="facebook text-center mr-3"><div className="fa fa-facebook" /></div>
                                    <div className="twitter text-center mr-3"><div className="fa fa-twitter" /></div>
                                    <div className="linkedin text-center mr-3"><div className="fa fa-linkedin" /></div>
                                </div>
                                <div className="row px-3 mb-4">
                                    <div className="line" />
                                    <small className="or text-center">Or</small>
                                    <div className="line" />
                                </div>
                                <div className="row px-3">
                                    <label className="mb-1"><h6 className="mb-0 text-sm">Email Address</h6></label>
                                    <input className="mb-4" type="text" name="email" placeholder="Enter a valid email address" />
                                </div>
                                <div className="row px-3">
                                    <label className="mb-1"><h6 className="mb-0 text-sm">Password</h6></label>
                                    <input type="password" name="password" placeholder="Enter password" />
                                </div>
                                <div className="row px-3 mb-4">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input id="chk1" type="checkbox" name="chk" className="custom-control-input" />
                                        <label htmlFor="chk1" className="custom-control-label text-sm">Remember me</label>
                                    </div>
                                    <a href="#" className="ml-auto mb-0 text-sm">Forgot Password?</a>
                                </div>
                                <div className="row mb-3 px-3">
                                    <button type="submit" className="btn btn-blue text-center">Login</button>
                                </div>
                                <div className="row mb-4 px-3">
                                    <small className="font-weight-bold">Don't have an account? <a className="text-danger ">Register</a></small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-blue py-4">
                        <div className="row px-3">
                            <small className="ml-4 ml-sm-5 mb-2">Copyright © 2019. All rights reserved.</small>
                            <div className="social-contact ml-4 ml-sm-auto">
                                <span className="fa fa-facebook mr-4 text-sm" />
                                <span className="fa fa-google-plus mr-4 text-sm" />
                                <span className="fa fa-linkedin mr-4 text-sm" />
                                <span className="fa fa-twitter mr-4 mr-sm-5 text-sm" />
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div id="main-wrapper" className="container pt-5">
                <div className="row justify-content-center mt-5">
                    <div className="col-xl-10">
                        <div className="card border-0">
                            <div className="card-body p-0">
                                <div className="row no-gutters">
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="mb-5">
                                                <h3 className="h4 font-weight-bold text-theme">Login</h3>
                                            </div>
                                            <h6 className="h5 mb-0">Welcome back!</h6>
                                            <p className="text-muted mt-2 mb-5">Enter your email address and password to access admin panel.</p>
                                            <form>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                                    <input type="email" className="form-control" id="exampleInputEmail1" />
                                                </div>
                                                <div className="form-group mb-5">
                                                    <label htmlFor="exampleInputPassword1">Password</label>
                                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                                </div>
                                                <button type="submit" className="btn btn-theme">Login</button>
                                                <a href="#l" className="forgot-link float-right text-primary">Forgot password?</a>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 d-none d-lg-inline-block">
                                        <div className="account-block rounded-right">
                                            <div className="overlay rounded-right" />
                                            <div className="account-testimonial">
                                                <h4 className="text-white mb-4">This  beautiful theme yours!</h4>
                                                <p className="lead text-white">"Best investment i made for a long time. Can only recommend it for other users."</p>
                                                <p>- Admin User</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* end card-body */}
                        </div>
                        {/* end card */}
                        <p className="text-muted text-center mt-3 mb-0">Don't have an account? <a href="register.html" className="text-primary ml-1">register</a></p>
                        {/* end row */}
                    </div>
                    {/* end col */}
                </div>
                {/* Row */}
            </div>



        </div>
    )
}

export default Login
