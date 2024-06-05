import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Single_blog() {

    const { bid } = useParams()
    const [data, setdata] = useState(undefined)
    const fetchData = async () => {
        try {
            const res = await axios.get(`https://beaidal.com/view_blog.php`);
            if (res.status === 200) {
                const blog = res.data.filter(item => item.id == bid)
                // setdata(data[0])
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
  return (
    <>
     {/*/inner-page*/}
     <div className="inner-banner py-5">
                    <section className="w3l-breadcrumb text-left py-sm-5 ">
                        <div className="container">
                            <div className="w3breadcrumb-gids">
                                <div className="w3breadcrumb-left text-left">
                                    <h2 className="inner-w3-title">
                                        Blog</h2>
                                    <p className="inner-page-para mt-2">
                                        Beauty Care for Everyone</p>
                                </div>
                                <div className="w3breadcrumb-right">
                                    <ul className="breadcrumbs-custom-path">
                                        <li><Link to="/">Home</Link></li>
                                        <li className="active"><span className="fas fa-angle-double-right mx-2" /> Blog</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                {/*//inner-page*/}
                {/*/bottom-3-grids*/}
                {data !== undefined ?
                    <div className="w3l-3-grids py-5" id="grids-3">
                        <div className="container py-md-5 py-2">
                            <center>
                                <div className="abin-top-content text-center mb-md-5 mb-4">
                                    <h3 className="title-w3l mb-3">{data.title}</h3>
                                </div>
                                <div className="aboyt-ininf">

                                    <div className="about-img">
                                        <img src={data.image} alt className="img-fluid radius-image" />
                                    </div>
                                </div>
                                <div className="abin-top-content text-center mb-md-5 my-4">
                                    <p className="abinfo-para">{data.description}</p>
                                </div>
                            </center>
                        </div>
                    </div> : <center className='my-5'><img src="https://media.tenor.com/_62bXB8gnzoAAAAj/loading.gif" alt="loading" className='my-5' width={"50px"} /></center>}



    </>
  )
}

export default Single_blog