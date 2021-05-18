import React, { useState } from 'react';
import { FaHome, FaStore, FaSquare } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { SelectItemMenuAdmin } from '../../store/modules/menuAdmin/actions';
import colors from '../../styles/colors';
import { useHistory } from 'react-router-dom';

import {
    Container,
    //MENU LATERAL
    MenuLateral,
        //HEADER MENU LATERAL
        HearderMenuLateral,
        TituloMenuLateral,
        //INFO USER
        ContainerInfoUser,
        ContentInfoUser,
        ContentImageUser,
        ImageUser,
        DescInfoUser,
        NameUser,
        InfoUser,
        IconFimItemInfoUser,
        //LISTA MENU LATERAL
        ListaMenuLateral,
        ContainerItem,
        ContentItem,
        IconInicioItem,
        ContentTitleItem,
        TitleItem,
        IconFimItem,
    //CONTENT DASHBOARD
    ContentDashboard

} from './styles';

function Dashboard(props) {
    const dispatch = useDispatch();
    let history = useHistory();
    const { children } = props;
    const [ itensMenu, setItensMenu ] = useState([
        {   
            path:"dashboard",
            name:"Home",
            icon:<FaHome style={{flex:2}} size={22} color={colors.white} />
        },
        {
            path:"dashboard",
            name:"Produtos Loja",
            icon:<FaStore style={{flex:2}} size={22} color={colors.white} />
        },
        {
            path:"dashboard",
            name:"teste3",
            icon:<FaSquare style={{flex:2}} size={22} color={colors.white} />
        },
        {
            path:"dashboard",
            name:"teste4",
            icon:<FaSquare style={{flex:2}} size={22} color={colors.white} />
        }
    ]);
    const { user, users, loading, errors, status } = useSelector(({ UserReducer }) => UserReducer);
    const { item_selected } = useSelector(({ MenuAdminReducer }) => MenuAdminReducer);
    console.log("item_selected: ",item_selected);

    function selectItemMenu(item,index) {
        item.index = index;
        dispatch(SelectItemMenuAdmin(item));
        history.push(item.path);
    }

    return (
        <Container>

            {/* MENU LATERAL DO LAYOUT */}
            <MenuLateral>

                {/* HEADER DO MENU LATERAL */}
                <HearderMenuLateral>
                    {
                        user&&
                        (
                            <TituloMenuLateral>
                            {user.nickname}
                            </TituloMenuLateral>
                        )
                    }
                </HearderMenuLateral>

                {/* INFORMACOES DO USUARIO DO MENU LATERAL */}
                {
                    user&&
                    (
                        <ContainerInfoUser>
                            <ContentInfoUser>
                                <ContentImageUser>
                                    <ImageUser src="https://as2.ftcdn.net/v2/jpg/00/65/77/27/1000_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg" />
                                </ContentImageUser>
                                <DescInfoUser>
                                    {/* <NameUser> */}
                                        {user.name}
                                    {/* </NameUser> */}
                                    <br></br>
                                    {/* <InfoUser> */}
                                        {user.active?"usuário ativo":"usuário inativo"}
                                    {/* </InfoUser> */}
                                </DescInfoUser>
                                <IconFimItemInfoUser />
                            </ContentInfoUser>
                        </ContainerInfoUser>
                    )
                }

                {/* LISTA DE SUBMENUS DO MENU LATERAL */}
                <ListaMenuLateral>
                    {
                        itensMenu.map((item,index)=>(
                            <ContainerItem selected={item_selected && item_selected.index == index} onClick={()=>selectItemMenu(item,index)} >
            
                                <ContentItem>
                                    {item.icon}
                                    {/* <IconInicioItem /> */}
                                    <ContentTitleItem title={item.name}>
                                        {/* <TitleItem> */}
                                            {item.name}
                                        {/* </TitleItem> */}
                                    </ContentTitleItem>
                                    <IconFimItem />
                                </ContentItem>
            
                            </ContainerItem>
                        ))
                    }
                </ListaMenuLateral>

            </MenuLateral>

            {/* CORPO DA PAGINA ENVIADA AO LAYOUT */}
            <ContentDashboard>
                {children}
            </ContentDashboard>

        </Container>
    );
}

export default Dashboard;