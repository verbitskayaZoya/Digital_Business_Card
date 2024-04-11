import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareYoutube, faGithub, faTwitter, faFacebook} from '@fortawesome/free-brands-svg-icons'
import styled from 'styled-components'


const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    background-color: #161619;
    padding: 20px 0;
  
    a {
     font-size: 30px;
     color: #918E9B;
     text-decoration: none;

     &:hover, &:focus {
        cursor: pointer;
        color: whitesmoke;
     }
    }
   
`

export default function Footer() {
    return (
        <StyledFooter>
           <a href="https://www.youtube.com/@seawolveson" target="blank"> <FontAwesomeIcon icon={faSquareYoutube} />    </a>
           <a href="https://github.com/verbitskayaZoya" target="blank"> <FontAwesomeIcon icon={faGithub} />   </a>
           <a href="https://twitter.com/Zoyalita" target="blank"> <FontAwesomeIcon icon={faTwitter} />  </a>
           <a> <FontAwesomeIcon icon={faFacebook} /> </a>
        </StyledFooter>
    )
}