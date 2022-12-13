import React from 'react'

const ContactUs = () => {
  return (
    <div className='container-fluid pt-5 h-100'>
      <div class="container">
          <h1>Contact Us</h1>
          <form class="row g-3">
            <div class="col-md-6">
              <label for="firstName" class="form-label">First Name</label>
              <input type="text" class="form-control" id="firstName" required/>
            </div>
            <div class="col-md-6">
              <label for="lastName" class="form-label">Last Name</label>
              <input type="text" class="form-control" id="lastName" required/>
            </div>
            <div class="col-md-8">
              <label for="emailInfo" class="form-label">E-mail</label>
              <input type="email" class="form-control" id="emailInfo" required/>
            </div>
            <div class="col-md-4">
              <label for="phoneNumber" class="form-label">Phone Number</label>
              <input type="text" class="form-control" id="phoneNumber" placeholder="+1 (234) 567-8910"/>
            </div>
            <div class="col-md-12">
              <label for="comments" class="form-label">Comments, questions?</label>
              <textarea class="form-control" id="comments" rows="3" required></textarea>
            </div>
            <div class="col-md-12">
              <button type="submit" class="btn btn-warning">Submit</button>
            </div>
          </form>
      </div>
    </div>
  )
}

export default ContactUs