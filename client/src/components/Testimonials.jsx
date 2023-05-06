import React from "react";
import styled from "styled-components";
import jasonKuo from "../assets/jasonkuo.jpeg";
import williamWong from "../assets/williamwong.jpeg";
import kaiThompson from "../assets/kaithompson.jpeg";
export default function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="title">
        <h2>Happy Customers</h2>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <p>
            With this eco-friendly travel planning service, I traveled
            sustainably and discovered breathtaking destinations guilt-free.
            Highly recommend their expertise!
          </p>
          <div className="info">
            <img src={kaiThompson} alt="" />
            <div className="details">
              <h4>Kai Thompson</h4>
              <span>CEO - Meta Platforms</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
            Thanks to this eco-friendly travel planning service, I was able to
            explore the world while minimizing my carbon footprint.
          </p>
          <div className="info">
            <img src={jasonKuo} alt="" />
            <div className="details">
              <h4>Jason Kuo</h4>
              <span>CEO - Google </span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
            I'm grateful for this service that made my travels more sustainable.
            It's comforting to know that I can explore the world with a lighter
            footprint.
          </p>
          <div className="info">
            <img src={williamWong} alt="" />
            <div className="details">
              <h4>William Wong</h4>
              <span>CEO - Google</span>
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
      background-color: #e8f5e9;
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
          border-radius: 3rem;
          height: 3rem;
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
