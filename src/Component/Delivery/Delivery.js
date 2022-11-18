import React from 'react'

const Delivery = () => {
  return (
    <>
    <div>
    <h1>Delivery</h1>
    <hr />
    <div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-light">Free</button>
  <button type="button" class="btn btn-light">Express:$9.99</button>
  
</div>
<hr />
<p>Delivery date : June 242022</p>

<div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-light text-muted">Promocode</button>
  <button type="button" class="btn btn-light">Apply</button>
  
</div>
<p>20% off discount</p>
<div className='row'>
<p className=' col-6 fw-bold text-dark'>Subtotal</p>
<p className='col-6'>$80.96</p>

</div>
<div>
<p className='fw-bold text-muted'>Discount</p>
<p>$80.96</p>

</div>
<div>
<p className='fw-bold text-muted'>Delivery</p>
<p>$80.96</p>

</div>
<div>
<p className='fw-bold text-muted'>Tax</p>
<p>$80.96</p>

</div>
    </div>
    <div class="card">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">Delivery</h5>
    <hr />
    <div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-light d-flex justify-content-left">Free</button>
  <button type="button" class="btn btn-light d-flex justify-content-left">Express:$9.99</button>
  
</div>
<p>Delivery date : June 242022</p>
<div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-light text-muted">Promocode</button>
  <button type="button" class="btn btn-light">Apply</button>
  
</div>
<p>20% off discount</p>
<div className='row'>
<p className=' col-6 fw-bold text-dark'>Subtotal</p>
<p className='col-6'>$80.96</p>
<div className='row'>
<p className=' col-6 fw-bold text-dark'>Discount</p>
<p className='col-6'>$80.96</p><div className='row'>
<p className=' col-6 fw-bold text-dark'>Subtotal</p>
<p className='col-6 fw-bold'>$80.96</p>

</div>
<div className='row'>
<p className=' col-6 fw-bold text-dark'>Discount</p>
<p className='col-6'>(20%)-$16.19</p>

</div>

<div className='row'>
<p className=' col-6 fw-bold text-dark'>Delivery</p>
<p className='col-6'>$0.00</p>

</div><div className='row'>
<p className=' col-6 fw-bold text-dark'>Tax</p>
<p className='col-6'>$14.96</p>

</div>
<div className='row'>
<p className=' col-6 fw-bold text-dark'>Total</p>
<p className='col-6 fw-bold text-dark'>$78.76</p>

</div>
</div>
</div>

   
    <a href="#" class="btn btn-primary">Proceed to checkout</a>
    <a href="#" class="btn btn-light">Continue Shoping</a>

  </div>
</div>
</>
  )
}

export default Delivery