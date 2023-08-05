import React from 'react'
import './contact.scss'
const Contact = () => {
  return (
    <div class="container-fluid main-contact pt-5 ">
  <div class="row d-flex justify-content-center">
    <div class="col-md-4">
      <form class="awesome-form">
        <h2 class="text-center text-primary ">Contact Us</h2>

        <div class="form-group">
          <input type="text" class="form-control" id="name" placeholder="Full Name" />
        </div>

        <div class="form-group">
          <input type="email" class="form-control" id="email" placeholder="Email" />
        </div>

        <div class="form-group">
          <input type="tel" class="form-control" id="phone" placeholder="Phone" />
        </div>

        <div class="form-group">
          <textarea class="form-control" id="message" rows="3" placeholder="Your message..."></textarea>
        </div>

     <div className="text-center">   <button className='button-sub' >
    Submit
</button ></div>
      </form>
    </div>
  </div>
</div>
  )
}

export default Contact