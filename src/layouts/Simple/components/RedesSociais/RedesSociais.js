import React, { useState, useEffect } from 'react';
import { Container, Content, IconButton } from './styles';
import { FaDiscord } from 'react-icons/fa';
import { AiOutlineFacebook, AiFillYoutube, AiOutlineInstagram } from 'react-icons/ai';
import { IconContext } from "react-icons";
import { FiTwitter } from 'react-icons/fi';
export default function RedesSociais({}){
    
    return (
        <Container>
            <Content>
                    <IconButton>
                        <a href="https://discord.gg/TcJjX7E" target="_blank">
                            <IconContext.Provider value={{ color: "white", size: '2em'}}>
                                <div>
                                    <FaDiscord/>
                                </div>
                            </IconContext.Provider>
                        </a>
                    </IconButton>
                    <IconButton>
                        <a href="http://facebook.com/teamjokerzcsgo" target="_blank">
                            <IconContext.Provider value={{ color: "white", size: '2em'}}>
                                <div>
                                    <AiOutlineFacebook/>
                                </div>
                            </IconContext.Provider>
                        </a>
                    </IconButton>
                    <IconButton>
                        <a href="https://twitter.com/team_jokerz" target="_blank">
                            <IconContext.Provider value={{ color: "white", size: '2em'}}>
                                <div>
                                    <FiTwitter/>
                                </div>
                            </IconContext.Provider>
                        </a>
                    </IconButton>
                    <IconButton>
                        <a href="https://youtube.com/teamjokerz/storyvnow?sub_confirmation=1" target="_blank">
                            <IconContext.Provider value={{ color: "white", size: '2em'}}>
                                <div>
                                    <AiFillYoutube/>
                                </div>
                            </IconContext.Provider>
                        </a>
                    </IconButton>
                    <IconButton>
                        <a href="https://www.instagram.com/teamjokerzcsgo/" target="_blank">
                            <IconContext.Provider value={{ color: "white", size: '2em'}}>
                                <div>
                                    <AiOutlineInstagram/>
                                </div>
                            </IconContext.Provider>
                        </a>
                    </IconButton>
            </Content>
        </Container>

    )
}