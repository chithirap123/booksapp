import React from 'react'

const Addbook = () => {
  return (
    <div>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label for="" className="label-formlabel">Bookstitle</label>
            <input type="text" className="form-control"/>
        </div>
        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label for="" className="label-formlabel">Author</label>
            <input type="text" className="form-control"/>
        </div>
        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label for="" className="label-formlabel">price</label>
            <input type="text" className="form-control"/>
        </div>
        <button className="btn btn-primary">SUBMIT</button>
    </div>
</div>

    </div>
  )
}

export default Addbook