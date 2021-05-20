import React from 'react';
import { FaBell, FaHome, FaBackward } from 'react-icons/fa';
import { useHistory } from 'react-router';
import colors from '../../styles/colors';

import {
    Container,
    ContentTitleHeader,
    TitleHeader,
    SubTitleHeader,
    ContentIconsHeader,
    ContentIcons
} from './styles';

function HeaderDashBoard({title,subtitle}) {
    const history = useHistory();
    
    function backSite() {
        history.push("/home");
    }

    return (
        <Container>
            <ContentTitleHeader>
                <SubTitleHeader>
                    {subtitle}
                </SubTitleHeader>
                <TitleHeader>
                    {title}
                </TitleHeader>
            </ContentTitleHeader>
            <ContentIconsHeader>
                <ContentIcons onClick={backSite}>
                    <FaBackward size={30} color={colors.black}/>
                </ContentIcons>
                <ContentIcons>
                    <FaBell size={30} color={colors.black}/>
                </ContentIcons>
                <ContentIcons>
                    <FaHome size={30} color={colors.black}/>
                </ContentIcons>
            </ContentIconsHeader>
        </Container>
    );
}

export default HeaderDashBoard;