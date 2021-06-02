import React, { useState } from 'react';
import { FaHome, FaStore, FaSquare } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { SelectItemMenuAdmin } from '../../store/modules/menuAdmin/actions';
import colors from '../../styles/colors';
import { useHistory } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

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
            //ITEM MENU LATERAL
            ContainerItem,
            ContentItem,
            IconInicioItem,
            ContentTitleItem,
            TitleItem,
            IconFimItem,
            inputAccordion,
                //SUBITEM MENU LATERAL
                ContentSubItem,
                LabelSubItem,
    //CONTENT DASHBOARD
    ContentDashboard
} from './styles';
import { Accordion } from './components';
import { ModalError } from '../../components';

function Dashboard(props) {
    const dispatch = useDispatch();
    let history = useHistory();
    const { children } = props;
    const [ itensMenu, setItensMenu ] = useState([
        {   
            name:"Home",
            icon:<FaHome style={{flex:2}} size={22} color={colors.white} />,
            subitens:[
                {
                    name:"Home",
                    path:"/dashboard",
                    index:1.1
                }
            ]
        },
        {
            name:"Produtos Loja",
            icon:<FaStore style={{flex:2}} size={22} color={colors.white} />,
            subitens:[
                {
                    name:"Lista de produtos",
                    path:"/dashboard/loja",
                    index:2.1
                },
                {
                    name:"Cradastrar produto",
                    path:"/dashboard/product/create",
                    index:2.2
                }
            ]
        }
    ]);
    const { user, users, loading, errors, status } = useSelector(({ UserReducer }) => UserReducer);
    const { status_error } = useSelector(({ ErrorReducer }) => ErrorReducer);
    const { item_selected } = useSelector(({ MenuAdminReducer }) => MenuAdminReducer);
    console.log("status_error: ",status_error);
    let isAuth = user?user.streamer:true;
    function selectItemMenu(item) {
        dispatch(SelectItemMenuAdmin(item));
        console.log("item.path: ",item.path);
        history.push(item.path);
    }

    function openConfigUser() {
        history.push(`/dashboard/${user._id}/config`);
    }

    return (
        !isAuth ? (
            <Redirect to={{pathname:'/home', state:{from:props.location}}}  />
        )
        :<Container>
            <ModalError show={status_error}/>

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
                            <ContentInfoUser onClick={openConfigUser}>
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
                            <ContainerItem key={index}>
                                
                                <Accordion
                                    title={item.name}
                                    subitens={item.subitens}
                                    selectItemMenu={selectItemMenu}
                                    item_selected={item_selected}
                                />
            
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