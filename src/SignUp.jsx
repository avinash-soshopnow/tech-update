import React, { useState } from 'react';
import './SignUp.css';
function SignUp() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    referral: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      errs.email = 'Valid email required';
    if (!form.phone.match(/^\d{10}$/))
      errs.phone = 'Valid 10-digit phone number required';
    if (form.password.length < 8)
      errs.password = 'Password must be at least 8 characters';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      console.log('Form submitted:', form);
      // submit to backend/server here
    }
  };

  return (
  <div className="form">
	<div className="signUp" >
    <form onSubmit={handleSubmit} noValidate>
      <h2>Sign Up</h2>

      <div>
        <label htmlFor="name">Name<b style={{ color: 'red' }}>*</b></label><br/>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
      </div>

      <div>
        <label htmlFor="email">Email<b style={{ color: 'red' }}>*</b></label><br/>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <button type="button" onclick="sendVerificationEmail()">Verify</button>
        {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
      </div>

      <div>
        <label htmlFor="phone">Phone<b style={{ color: 'red' }}>*</b></label><br/>
        <input
          type="text"
          id="phone"
          name="phone"
          value={form.phone}
          onChange={handleChange}
        />
        {errors.phone && <div style={{ color: 'red' }}>{errors.phone}</div>}
      </div>

      <div>
        <label htmlFor="password">Password<b style={{ color: 'red' }}>*</b></label><br/>
        <input
          type="password"
          id="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
        {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
      </div>

      <div>
        <label htmlFor="referral">Referral Code</label><br/>
        <input
          type="text"
          id="referral"
          name="referral"
          value={form.referral}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="agree">
          <input type="checkbox" id="agree" />
          {' '}Yes, I agree to{' '}
          <a href="#" data-bs-toggle="modal" data-bs-target="#termsModal">
            Terms & Conditions
          </a>
          <b style={{ color: 'red' }}>*</b>
        </label>
      </div>
      
    
      <button type="submit">Submit</button>
    </form>
    </div>
    </div>
  );
}

export default SignUp;
