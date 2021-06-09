import React from 'react';
import { FaBell, FaHome, FaBackward, FaSyncAlt } from 'react-icons/fa';
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

function HeaderDashBoard({title,subtitle, reload = ()=>{}}) {
    const history = useHistory();
    
    function backSite() {
        // history.push("/home");
        history.goBack();
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
                <ContentIcons onClick={reload}>
                    <FaSyncAlt size={30} color={colors.black}/>
                </ContentIcons>
            </ContentIconsHeader>
        </Container>
    );
}

export default HeaderDashBoard;