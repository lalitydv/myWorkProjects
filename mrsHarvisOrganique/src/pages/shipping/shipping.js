import React from "react";
import "./shipping.css";
import logo from "../../img/HarvisImg/logo.png";
import Layout from "../../components/layout";

const Shipping = () => {
  return (
    <>
      <Layout>
        <section className="container">
          <div className="shipping_content">
            <div className="text-center">
              <img src={logo} width="150px"/>
            </div>
            <div>
              <h6 className="text-center">MRS. HARVI'S ORGANIQUE</h6>
            </div>
            <div>
              <h6 className="text-center">SHIPPING POLICY</h6>
            </div>
            <div>
              <h6>How does the delivery process work?</h6>
              <p>
                Once our system processes your order, your products are
                inspected thoroughly to ensure they are in a perfect condition.
                • After they pass through the final round of quality check, they
                are packed and handed over to our trusted delivery partner. •
                Our delivery partners then bring the package to you at the
                earliest possibility. In case, they are unable to reach your
                provided address or at a suitable time, they will contact you to
                resolve the issue.
              </p>
            </div>
            <div>
              <h6>How are items packaged?</h6>
              <p>
                We package our products in boxes, which are covered in a plastic
                layer. Each individual product is packaged in bubble wrap while
                fragile items like bottles are safely secured with additional
                bubble wrap. We pride ourselves on the quality of our packaging.
              </p>
            </div>
            <div>
              <h6>My order has been shipped. Now how can I track it?</h6>
              <p>
                • Once your order has been dispatched, you will receive an email
                with the details of the tracking number and the courier company
                that is processing your order. • You can track the status of
                your package 24 hours after your order is dispatched from our
                warehouse. • Following are some our trusted courier partners: 1.
                Aramex - http://www.aramex.com/ 2. DTDC - http://www.dtdc.in/ 3.
                Bluedart - http://www.bluedart.com/ 4. Ecom Express -
                http://www.ecomexpress.in/ 5. Wow Express -
                http://www.wowexpress.in/ 6. Delhivery -
                http://www.delhivery.com/
              </p>
            </div>
            <div>
              <h6>What is the estimated delivery time?</h6>
              <p>
                We usually dispatch most orders within 1-4 business days
                (excluding Sundays and public holidays) • Though, we keep 95% of
                our catalogue in our inventory, certain products need to be
                sourced directly from the brand itself so that we can live up to
                our promise of providing fresh, non-expired products. • While we
                are trying our best to avoid this situation, these products
                might delay your order. However, in case of international
                orders, product delivery may get delayed due to reasons
                attributable to logistics, public holidays, etc. • If you are
                ordering our products from a Mega Sale event, dispatches may be
                a bit delayed due to increased volumes. We will target to
                dispatch all orders within 5 days of order date.
              </p>
            </div>
            <div>
              <h6>
                My order will be shipped in multiple shipments? What does this
                mean?
              </h6>
              <p>
                Don’t worry! This is a completely normal situation. This just
                means that different parts of your order may have simply been
                shipped from our different warehouse locations. Rest assured,
                you will only have to pay the shipping/COD charge if applicable,
                on the first package you receive.
              </p>
            </div>
            <div>
              <h6>Are there any shipping charges applicable on my order?</h6>
              <p>
                • We have standard shipping charges for most addresses. • India
                shipping charges - A flat Rs.70 charge is applied to all orders
                below Rs.499, while there is free shipping for all orders above
                Rs.499. • We are currently not accepting orders below Rs.299
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Shipping;
