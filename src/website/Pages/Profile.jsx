
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header1 from '../Components/Header1';


function profile() {


  
  return (
    <div className="container-xxl bg-white p-0">
      <Header1 />
      <div className="inner-banner py-5">
                    <section className="w3l-breadcrumb text-left py-sm-5 ">
                        <div className="container">
                            <div className="w3breadcrumb-gids">
                                <div className="w3breadcrumb-left text-left">
                                    <h2 className="inner-w3-title">
                                        Artist Details </h2>
                                    <p className="inner-page-para mt-2">
                                        Beauty Care for Everyone</p>
                                </div>
                                <div className="w3breadcrumb-right">
                                    <ul className="breadcrumbs-custom-path">
                                        <li><Link to="/">Home</Link></li>
                                        <li className="active"><span className="fas fa-angle-double-right mx-2" />Artist Details</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
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
                  <h5>Name : </h5>
                  <span>Email : </span><br /><br />
                  <span>ID : </span><br /><br />
                  <span>Mobile : </span><br /><br />
                  {/* <button className='btn btn-primary' onClick={() => editdata(data.id)} data-bs-toggle="modal" data-bs-target="#myModal">Edit Profile</button> */}
                  <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#myModal">Edit Profile</button>

                  <div className="modal" id="myModal">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        {/* Modal Header */}
                        <div className="modal-header">
                          <h4 className="modal-title">Edit Profile</h4>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" />
                        </div>
                        {/* Modal body */}
                        <div className="modal-body">
                          <div className='container'>
                            <form action="" method="post" >
                              <div className="row g-3">
                                <div className="col-md-6">
                                  <div className="form-floating">
                                    <input className="form-control" name="name" id="name" placeholder="Your Name" />
                                    <label htmlFor="name">Your Name</label>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-floating">
                                    <input type="email" className="form-control" id="email" placeholder="Your Email" />
                                    <label htmlFor="email">Your Email</label>
                                  </div>
                                </div>

                                <div className="col-md-6">
                                  <div className="form-floating">
                                    <input type="number" className="form-control" name="contact" placeholder="Your contact" />
                                    <label htmlFor="number">Your Mobile</label>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="form-floating">
                                    <input type="url" className="form-control" name="images" id="images" placeholder="Upload Images" />
                                    <label htmlFor="url">Your Image</label>
                                  </div>
                                </div>

                                <div className="col-12">
                                  <button data-bs-dismiss="modal" className="btn btn-primary w-100  col-3" type="submit">Save</button>
                                  <button type="button" className="btn btn-danger  col-3 ml-3" data-bs-dismiss="modal">Close</button>

                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                        {/* Modal footer */}
                        <div className="modal-footer">
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
     
                            <section className="w3l-gallery" id="gallery">
                    <div className="destionation-innf py-5">
                        <div className="container py-lg-5 py-md-4 py-2 HomePageGallery">
                            <div className="title-content text-center">
                                <h6 className="title-subw3hny text-center">Gallery</h6>
                                <h3 className="title-w3l mb-5 text-center">Our Happy Clients</h3>
                            </div>
                            {/*/grids-grids*/}
                            <ul className="gallery_agile">
                                <li>
                                    <div className="w3_agile_portfolio_grid">
                                        <a href="#">
                                        <img src="https://i.pinimg.com/736x/fb/d6/cc/fbd6cc0b87b540d3cb726ae2189decf8.jpg" alt=" " className="img-fluid radius-image" />
                                            <div className="portfolio-info">
                                                <h4>Gallery 1</h4>
                                                <i className="fas fa-plus details-link" />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="w3_agile_portfolio_grid mt-4">
                                        <a href="#">
                                        <img src="https://i.pinimg.com/originals/c1/e4/97/c1e497d545cfdb2d6ba727a1dcd15a6a.jpg" alt=" " className="img-fluid radius-image" />
                                            <div className="portfolio-info">
                                                <h4>Gallery 2</h4>
                                                <i className="fas fa-plus details-link" />
                                            </div>
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className="w3_agile_portfolio_grid">
                                        <a href="#">
                                        <img src="https://i.pinimg.com/736x/26/00/6d/26006d980976ad7f24642c14bff44be5.jpg" alt=" " className="img-fluid radius-image" />
                                            <div className="portfolio-info">
                                                <h4>Gallery 3</h4>
                                                <i className="fas fa-plus details-link" />
                                            </div>
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className="w3_agile_portfolio_grid">
                                        <a href="#">
                                        <img src="https://image.wedmegood.com/resized-nw/700X/wp-content/uploads/2019/05/1535925084_image1357.jpg" alt=" " className="img-fluid radius-image" />
                                            <div className="portfolio-info">
                                                <h4>Gallery 4</h4>
                                                <i className="fas fa-plus details-link" />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="w3_agile_portfolio_grid mt-4">
                                        <a href="#">
                                        <img src="https://cdn-fpjnk.nitrocdn.com/vVKtIfSlUsfxaPluxGDJIBsqXIZVzyZJ/assets/images/optimized/rev-b8e55b4/www.makeuupsalon.in/wp-content/uploads/2023/01/makeup-artist-in-Delhi-Connaught.jpg" alt=" " className="img-fluid radius-image" />
                                            <div className="portfolio-info">
                                                <h4>Gallery 5</h4>
                                                <i className="fas fa-plus details-link" />
                                            </div>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                            {/*//grids-grids*/}
                        </div>
                    </div>
                </section>
      <Footer />
    </div>
  )
}

export default profile