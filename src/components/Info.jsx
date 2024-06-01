import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { Text } from "./Text.styled"
import zoya from "/src/assets/zoya.jpeg"

const Image  = styled.img`
    width: 300px;
    height: 200px;
    border-radius: 5px;
`
const Header = styled.header`
   text-align: center;

    h1 {
        font-style: bold;
        margin-bottom: 0;
        font-size: 25px;
    }

    p {
        margin-top: 7px;
    }

    a {
        text-decoration: none;
        color: whitesmoke;
    }

    .links-container {
        display: flex;
        justify-content: center;
        gap: 30px;
        margin-top: 30px;
    }

    .links-container > a {
        border-radius: 10px;
        padding: 10px 25px;
        display: flex;
        gap: 10px;
        box-shadow: 0 2px 2px #23252C;
        cursor: pointer;

        &:first-child {
            background-color: #FFFFFF;
            color: black;
        }

        &:nth-child(2) {
            background-color: #5093E2;
        }

        &:hover {
            background-color: #F3BF99;
        }
    }
`

export default function Info() {
    return (
    <>
        <Header>
            <Image src={zoya} alt="Photo of me" />
            <h1> Zoya Verbitskaya </h1>
            <Text $accent> Frontend Developer </Text>
            <nav>
                <a href="https://zoya-verbitskaya-portfolio.netlify.app" target="blank"> zoyaverbitskaya.website </a>
                <div className="links-container">
                    <a href="mailto: verb.zoya@gmail.com"> <FontAwesomeIcon icon={faEnvelope} /> Email </a>
                    <a href="https://www.linkedin.com/in/zoya-verbitskaya-11ab35102/" target="blank"> <FontAwesomeIcon icon={faLinkedin} /> LinkedIn </a>
                </div>
            </nav>
        </Header>
    </ >
        )
}