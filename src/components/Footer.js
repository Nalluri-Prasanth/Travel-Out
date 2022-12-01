import React from "react";
import styled from "styled-components";
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
export default function Footer() {
  return (
    <FooterContainer>
      <span>Copyright &copy; 2021 TravelOut. All rights reserved</span>
      <ul className="links">
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/WeekEndPlanner">WeekEndPlanner</a>
        </li>
        <li>
          <a href="/BudgetCalculator">BudgetCalculator</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
      <ul className="social__links">
        <li> 
          <a href="https://www.facebook.com/">
        <BsFacebook />  
        </a>
        </li>
      
        <li>
        <a href="https://www.instagram.com/?hl=en">
          <AiFillInstagram />
          </a>
        </li>
        <li>
        <a href="https://www.linkedin.com/posts/prasanth-nalluri_sdp-kluniversity-traveling-activity-6851506961326891008-g2cI">
          <BsLinkedin />
          </a>
        </li>
      </ul>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-evenly;
  background-color: #ffffffce;
  border-radius: 0.5rem;
  padding: 2.5rem;

  ul {
    display: flex;
    list-style-type: none;
    gap: 2rem;
    li {
      a {
        text-decoration: none;
        color: black;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #DA0037;
        }
      }
      svg {
        font-size: 1.3rem;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #DA0037;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
    ul {
      flex-direction: column;
    }
    .social__links {
      flex-direction: row;
    }
  }
`;




































// import React from "react";
// import {
//   Box,
//   Container,
//   Row,
//   Column,
//   FooterLink,
//   Heading,
// } from "./FooterStyles";
  
// const Footer = () => {
//   return (
//     <Box>
//       <h1 style={{ color: "orangered", 
//                    textAlign: "center", 
//                    marginTop: "-50px" }}>
//         Trav Out
//       </h1>
//       <Container>
//         <Row> 
//           <Column>
//             <Heading>Our Services</Heading>
//             <FooterLink href="/VirtualTour">VirtualTour</FooterLink>
//             <FooterLink href="/WeekEndPlanner">WeekEndPlanner</FooterLink>
//             <FooterLink href="/BudgetCalculator">BudgetCalculator</FooterLink>
//             <FooterLink href="/Ratings">Ratings</FooterLink>
//           </Column>

//           <Column>
//             <Heading>Social Media</Heading>
//             <FooterLink href="#">
//               <i className="fab fa-facebook-f">
//                 <span style={{ marginLeft: "10px" }}>
//                   Facebook
//                 </span>
//               </i>
//             </FooterLink>
//             <FooterLink href="#">
//               <i className="fab fa-instagram">
//                 <span style={{ marginLeft: "10px" }}>
//                   Instagram
//                 </span>
//               </i>
//             </FooterLink>
//             <FooterLink href="https://www.linkedin.com/posts/prasanth-nalluri_sdp-kluniversity-traveling-activity-6851506961326891008-g2cI">
//               <i className="fab fa-twitter">
//                 <span style={{ marginLeft: "10px" }}>
//                   LinkedIn
//                 </span>
//               </i>
//             </FooterLink>
//             <FooterLink href="#">
//               <i className="fab fa-youtube">
//                 <span style={{ marginLeft: "10px" }}>
//                   Youtube
//                 </span>
//               </i>
//             </FooterLink>
//           </Column>
//           <Column>
//             <Heading>Subscribe</Heading>
//             <FooterLink href="#"><input type="email" id="form5Example2" class="form-control" />
//             <label class="form-label" for="form5Example2">Email address</label></FooterLink>
//             <FooterLink href="Login"><button type="button" class="btn btn-light">Subscribe</button></FooterLink>
//           </Column>
//         </Row>
//       </Container>
//     </Box>
//   );
// };
// export default Footer;