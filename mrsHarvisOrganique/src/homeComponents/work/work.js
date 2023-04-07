import React from 'react'
import "./work.css"
import img1 from '../../img/work/goldenhair.png'
import img2 from '../../img/work/brounhaire.png'
import img3 from '../../img/work/facepack.png'
import img4 from '../../img/work/scrub.png'
import img5 from '../../img/work/face_serum.png'
import img6 from '../../img/work/face_toner.png'
import img7 from '../../img/work/chicklip.png'

const Work = () => {
  return (
   <>
   <div className=''>
    <div className="">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="work__item large__item set-bg">
                  <img src={img1} className="work_image" />
                  <div className="work__item__text">
                  <h6 style={{textAlign:"center"}}>Golden hair wave</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="work__item set-bg">
                  <img src={img2} className="work_image" />
                  <div className="work__item__text">
                  <h6 style={{textAlign:"center"}}>Brown hair wave</h6>
                </div>
              </div>
              <div className="work__item set-bg">
              <img src={img3} className="work_image" />
                <div className="work__item__text">
                  <h6 style={{textAlign:"center"}}>Face Mask</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="work__item large__item set-bg">
          <img src={img4} className="work_image" />
            <div className="work__item__text">
              <h6 style={{textAlign:"center"}}>Face Scrub</h6>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="work__item set-bg">
                <img src={img5} className="work_image" />
                  <div className="work__item__text">
                    <h6 style={{textAlign:"center"}}>Face Toner</h6>
                  </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="work__item set-bg">
                <img src={img6} className="work_image" />
                  <div className="work__item__text">
                    <h6 style={{textAlign:"center"}}>Face Serum</h6>
                  </div>
              </div>
            </div>
              <div className="col-lg-12">
                <div className="work__item set-bg">
                  <img src={img7} className="work_image" />
                  <div className="work__item__text">
                    <h6 style={{textAlign:"center"}}>Lip & Cheeck</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
   </>
  )
}

export default Work