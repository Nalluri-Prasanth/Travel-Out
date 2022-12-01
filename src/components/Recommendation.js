import React from 'react'
import styled from "styled-components";
import prasanth from "../assets/prasanth.jpg";
import brahmendar from "../assets/brahmendhar.jpg";
import uday from "../assets/uday.jpg";

export default function Recommendation() {
  return (
    <Section id="testimonials">
      <div className="title">
        <h2>Happy Customers</h2>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <p>
            A very useful website which helps us to travel the whole world easily 
          </p>
          <div className="info">
            <img src={prasanth} alt="" />
            <div className="details">
              <h4>Prasanth Nalluri</h4>
              <span>Project Lead</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
          This site is very resposive and we recommend to the all the fellow travelers 
          </p>
          <div className="info">
            <img src={brahmendar} alt="" />
            <div className="details">
              <h4>Shailk Brahmendar</h4>
              <span>Web Developer</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
          I recommend this site to the people who are interested in trveling because its simple to use
          </p>
          <div className="info">
            <img src={uday} alt="" />
            <div className="details">
              <h4>Uday</h4>
              <span>Web Developer</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 5rem 0;
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  .testimonials {
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    gap: 2rem;
    .testimonial {
      background-color: white;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      .info {
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        margin-top: 1rem;
        img {
          border-radius: 1rem;
          height: 4rem;
        }
        .details {
          span {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .testimonials {
      flex-direction: column;
      margin: 0;
      .testimonial {
        justify-content: center;
        .info {
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
`;



