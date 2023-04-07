import React from "react";
import "./about.css";
import logo from "../../img/HarvisImg/logo.png";
import Layout from "../../components/layout";

const About = () => {
  return (
    <>
      <Layout>
        <section className="container">
          <div className="about_content">
            {/* harbis about contant */}

            <div className="text-center">
              <img src={logo} width="150px"/>
            </div>

            <div>
              <h6 className="text-center">ABOUT US</h6>
              <p>
                We'd love to tell you a little about us. We are a Daughter
                Mother Venture and our brand name is derived by combining name
                initials of both of us - HARSHITA (HAR) and Vinita (VI), which
                sums up as Mrs. HARVI's. Initially, we started making these
                products for our personal use only. And to our surprise, these
                products actually worked wonder for us. And this led us to share
                these 100% authentic & organic products which are handmade by us
                at home. Our product range is wide and offers solutions for
                everyone without compromising on the quality, purity and cost
                efficiency. The organic products at Mrs. Harvi’s Organique are
                partly made with love, some new age Ayurveda infusions, and
                loads of home remedies Nani Dadi.
              </p>
            </div>

            <div>
              <h6 className="text-center">QUALITY</h6>
              <p>
                We ensure chemical free, non- toxic, cruelty-free testing in our
                product formulations. We focused on a theory that... "When you
                can't put in it your mouth then you shouldn't put it on your
                face!" All products at MHO are non toxic, 100% pure and natural,
                and of food grade. We are pledged to serve the best quality with
                a reasonable prices so that every person can afford their skin
                care and hair care routine. Thank you for choosing MRS. HARVI'S
                ORGANIQUE. We hope you enjoy our products as much as we enjoy
                formulating them for you.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
