import React from 'react'
import styled from "styled-components";
import prasanth from "../assets/prasanth.jpg";
import brahmendar from "../assets/brahmendhar.jpg";
import uday from "../assets/uday.jpg";

export default function About() {
  return (
    <Section id="testimonials">
      <div className="title">
        <h2>Executive Team</h2>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <div className="info">
            <img src={prasanth} alt="" />
            <div className="details">
              <h4>Prasanth Nalluri</h4>
              <span>Project Lead</span>
              <p>
          Hi this is prasanth Nalluri , iam the team lead of this project
          </p>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <div className="info">
            <img src={brahmendar} alt="" />
            <div className="details">
              <h4>Shailk Brahmendar</h4>
              <span>Web Developer</span>
              <p>
          It takes time to get a good frontend development project
          </p>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <div className="info">
            <img src={uday} alt="" />
            <div className="details">
              <h4>Uday</h4>
              <span>Web Developer</span>
              <p>
          It takes time to learn  about web development
                  </p>
            </div>
          </div>
        </div>
            </div>
           
            <h4> This is a skill development project based on Travel Tourism and Hospitality designed by students of sophomore at Kl University.</h4>
 
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























// import React from 'react'
// import Card from './Card';



// var profiles = [
//  {
//   //  img: Prasanth,   
//   name: ' Nalluri Prasanth ',
//   title: 'TeamLead',
//   bio: 'Hi this is prasanth Nalluri , iam the team lead of this project'
//  },

//  {
//   //  img: Brahmendar,   
//   name: 'Brahmendar',
//   title: ' developer',
//   bio: 'It takes time to get a good frontend development project '
//  },

//  {
//   //  img: Uday,
//   name: 'Uday',
//   title: 'Developer',
//   bio: ' It takes time to learn  about web development'

//  }];

// function About(){
//  return(

//   <div>

    
//    <h5>Executive Team</h5>
//    {profiles.map((profile, index)=>
//     <Card
//        img={profile.img}
//      name = {profile.name}
//      title={profile.title}
//      bio={profile.bio}
//      key={index} /> 
//    )}
//   </div>
//  );

// }



// export default About
