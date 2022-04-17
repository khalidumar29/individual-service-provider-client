import React from "react";
import { Accordion } from "react-bootstrap";

const Faq = () => {
  return (
    <div className='container'>
      <h1 style={{ color: "#514d99", margin: "40px 0" }}>FAQ</h1>
      <Accordion className='mb-3'>
        <Accordion.Item eventKey='0'>
          <Accordion.Header>Where Are You Located?</Accordion.Header>
          <Accordion.Body>Our Locaton Is Dhaka, Bangladeh</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='1'>
          <Accordion.Header>
            can i make changes to an subject i already chose?
          </Accordion.Header>
          <Accordion.Body>
            If you get a faulty, damaged, or incorrect/incomplete product, you
            have 7 days to return it.
            <br />
            If the product was purchased from Daraz Mall, you have 14 days to
            return it. You can request for return if:
            <br />
            1. Product is damaged, defective, or expired
            <br />
            2. Productis incorrect, counterfeit, or not as advertised
            <br />
            3. Product is of incorrect size or does not fit you
            <br />
            4. Product, freebie, or accessory is missing
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='3'>
          <Accordion.Header>
            {" "}
            What are the exciting campaigns on Your Website?
          </Accordion.Header>
          <Accordion.Body>
            Every year we try to bring the below exciting campaigns for our
            valuable students <br />
            Bangla New Year(BNY) Campaign.
            <br />
            11.11” Campaign.FataFati Friday Campaign. 12.12” Campaign.
            <br />
            Happy New Year Campaign.
            <br />
            books Week Campaign Eid Campaigns (Ramadan & Eid Ul Adha)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='4'>
          <Accordion.Header>
            {" "}
            Is tutor going to change its name?
          </Accordion.Header>
          <Accordion.Body>
            No. At this moment; we can say something new is coming up; please
            stay with us. Thanks.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Faq;
