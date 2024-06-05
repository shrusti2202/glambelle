
import Footer from '../Components/Footer';
import Menubar from '../Components/Menubar';


function Admin_profile() {


  return (
    <div className="container-xxl bg-white p-0">
      <Menubar />
      {/* Team Start */}
      <div className="container-xxl py-5">
        <div className="container py-5 px-lg-5">
          <div className="wow fadeInUp" data-wow-delay="0.1s">
            <p className="section-title text-secondary justify-content-center"><span />My Profile<span /></p>
            <h1 className="text-center mb-5">Edit Profile and Manage Profile</h1>
          </div>
          <div className="row g-4">

            <div className="offset-lg-4 col-lg-4 col-md-6 offset-md-3 wow fadeInUp" data-wow-delay="0.1s">
              <div className="team-item bg-light rounded">
                <div className="text-center border-bottom p-4">
                  <img className="img-fluid rounded-squar mb-4" alt />
                  <span>ID : </span><br /><br />
                  <h5>Name : </h5>
                  <span>Email : </span><br /><br />
                  <span>Mobile : </span><br /><br />
                  <span>Image : </span><br /><br />
                  <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#myModal">Edit Profile</button>

                  <div>

                    {/* The Modal */}
                    <div className="modal" id="myModal">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          {/* Modal Header */}
                          <div className="modal-header">
                            <h4 className="modal-title">Edit Blog</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" />
                          </div>
                          {/* Modal body */}

                          <div className="modal-body">
                            <form>
                              <label > Name:</label><br />
                              <input className="form-control" type='text' name="title" /><br />
                              <label>Email :</label><br />
                              <input className="form-control" type="url" name="image" /><br /><br />
                              <label > Image :</label><br />
                              <input className="form-control" type="text" name="description" /><br /><br />
                              <label > Mobile :</label><br />
                              <input className="form-control" type="text" name="description" /><br /><br />

                            </form>


                          </div>

                          {/* Modal footer */}
                          <div className="modal-footer d-flex">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-success" data-bs-dismiss="modal" >Save</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
      {/* Team End */}
      <Footer />
    </div>
  )
}

export default Admin_profile