import React from "react";

function Address() {
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <div class="card text-center">
              <div class="card-body AdressHover">
                <h5 class="card-title uppercase">
                  Geeta Bhawan Square, Indore
                </h5>
                <div class="text-black">
                  Mansarovar Apartment D-7, Ratlam Kothi, Near Geeta Bhawan
                  Square, Indore
                </div>
                <p class="card-text"></p>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div class="card text-center">
              <div class="card-body AdressHover">
                <h5 class="card-title">Indore, Madhya Pradesh</h5>
                <div class="text-black">
                  15, Lakshya Vihar Kanadia Road, Square, Vaibhav Nagar Sector
                  A, Indore, Madhya Pradesh 452016
                </div>
                <p class="card-text"></p>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div class="card text-center AdressHover">
              <div class="card-body">
                <h5 class="card-title">Vadodara, Gujarat</h5>
                <div class="text-black">
                  11, 2nd floor, Kasper square, Laxmipura Rd, near laxmipura,
                  Laxmipura, muktidham, Vadodara, Gujarat 390021
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Address;
