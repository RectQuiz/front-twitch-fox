import React, { useState } from 'react';
import { GiPopcorn, GiKing } from 'react-icons/gi';
import { MdBlock } from 'react-icons/md';
import { FaPen, FaSave, FaRegTimesCircle } from 'react-icons/fa';

import {
    Container,
    Content,
    ContentItemInfo,
    ItemLabelInfo,
    ItemValueInfo,
    ItemLabelChannels,
    ItemValuesChannels,
    ContentItemInfoChannels,
    ContentValueInfoChannels,
    ItemLabelChannel,
    ContainerValueInfoChannels,
    ContainerSelectTypeAccount,
    TitleSelectAccount,
    ContentValueInfoPerguntas,
    ContainerValuePerguntas,
    ItemLabelInfoPerguntas,
    BodyItem,
    ActionItem,
    InputItem
} from './styles';
import Select from 'react-select';
import { useSelector } from 'react-redux';
import { ListRedeemProducts } from '../../../../components';
import colors from '../../../../styles/colors';

function InfoUser({
    user,
    users,
    typesAccount,
    addTypeAccount,
    typeSelected,
    addPrimaryAccount,
    load_redeem_products,
    editUser
}) {
    const [ tradeLink, setTradeLink ] = useState((user && user.tradelinkSteam)?user.tradelinkSteam:'');
    const [ edit, setEdit ] = useState(false);
    const { redeemProducts, totalPages, currentPage, loading:loadingProducts } = useSelector(({ ProductsReducer }) => ProductsReducer);
    if (users && users.length > 0) {
        users = users.map((user)=>{
            return {
                value:user.name,
                label:user.name,
                id_person:user._id
            }
        });
    }

    // let admin = user.permissions.length > 0?user.permissions.find(permission=>{
    //     return permission.ifo_permission.name == 'admin';
    // }):1;

    const editTradeLink = ()=>{
        setEdit(false);
        editUser({tradelinkSteam:tradeLink});
    }
    
    let admin = true;

    // console.log('user: ',user);
    return (
        <Container>
            {
                user && !(user.type_account == 'pendente')?
                (
                    <Content>

                        {/* TIPO DA CONTA */}
                        <ContentItemInfo>
                            <ItemLabelInfo>
                                    Tipo da conta: 
                            </ItemLabelInfo>
                            <ItemValueInfo>
                                    {(user && user.type_account)?user.type_account:'Não informado'}
                            </ItemValueInfo>
                        </ContentItemInfo>
            
                        {/* NICKNAME */}
                        <ContentItemInfo>
                            <ItemLabelInfo>
                                    Nickname: 
                            </ItemLabelInfo>
                            <ItemValueInfo>
                                    {(user && user.nickname)?user.nickname:'Não informado'}
                            </ItemValueInfo>
                        </ContentItemInfo>
            
                        {/* PONTOS */}
                        <ContentItemInfo>
                            <ItemLabelInfo>
                                    Pontos Totais: 
                            </ItemLabelInfo>
                            <ItemValueInfo style={{color:'orange'}}>
                                    {(user && user.points)?user.points:0} <GiPopcorn/>
                            </ItemValueInfo>
                        </ContentItemInfo>
                        
                        {/* TRADELINK */}
                        <ContentItemInfo>
                            <ItemLabelInfo>
                                    TradeLink: 
                            </ItemLabelInfo>
                            <BodyItem>
                                {
                                    edit?
                                    (
                                        <InputItem
                                            type="text"
                                            name="tradelinkSteam"
                                            id="tradelinkSteam"
                                            value={tradeLink} // We also bind our email value
                                            onChange={(e)=>setTradeLink(e.target.value)}
                                        />
                                    ):
                                    (
                                        <ItemValueInfo>
                                                {(user && user.tradelinkSteam)?user.tradelinkSteam:'Não informado'}
                                        </ItemValueInfo>
                                    )
                                }
                                {
                                    edit?
                                    (
                                        <>
                                            <ActionItem onClick={editTradeLink}>
                                                <FaSave color={colors.dourado} size={20}/>
                                            </ActionItem>
                                            <ActionItem onClick={()=>setEdit(false)}>
                                                <FaRegTimesCircle color={colors.red} size={20}/>
                                            </ActionItem>
                                        </>
                                    ):
                                    (
                                        <ActionItem onClick={()=>setEdit(true)}>
                                            <FaPen color={colors.dourado} size={20}/>
                                        </ActionItem>
                                    )
                                }
                            </BodyItem>
                        </ContentItemInfo>
            
                        {/* CANAIS */}
                        <ContentItemInfoChannels>
                            <ItemLabelChannels>
                                    Canais habilitados
                            </ItemLabelChannels>
                            <ContentValueInfoChannels>
                                {
                                    (user && user.channels)&&
                                    (
                                        user.channels.map((channel,index)=>{
                                            return(
                                                <ContainerValueInfoChannels key={index}> 
                                                    <ItemLabelChannel status={channel.status && user.active}>
                                                        {channel.info_channel.name}: 
                                                    </ItemLabelChannel>
                                                    <ItemValuesChannels status={channel.status && user.active} style={{color:'orange'}}>
                                                        {channel.points} 
                                                        <GiPopcorn/>  
                                                        {channel.banned && <MdBlock style={{color:'red'}}/>}  
                                                        {channel.subscribe && <GiKing style={{color:'yellow'}}/>}
                                                    </ItemValuesChannels>
                                                </ContainerValueInfoChannels>
                                            )
                                        })
                                    )
                                }
                            </ContentValueInfoChannels>
                        </ContentItemInfoChannels>
                        
                        {/* CONTAS SECUNDARIAS */}
                        {
                            user.type_account == 'primary'?
                            (
                                <ContentItemInfoChannels>
                                    <ItemLabelChannels>
                                            Contas secundarias
                                    </ItemLabelChannels>
                                    <ContentValueInfoChannels>
                                        {
                                            (user && user.channels)&&
                                            (
                                                user.secondary_accounts.map((account,index)=>{
                                                    return(
                                                        <ContainerValueInfoChannels key={index}> 
                                                            <ItemLabelChannel status={true}>
                                                                {account.name}: 
                                                            </ItemLabelChannel>
                                                            <ItemValuesChannels style={{color:'orange'}} status={true}>
                                                                {account.points}<GiPopcorn/>
                                                            </ItemValuesChannels>
                                                        </ContainerValueInfoChannels>
                                                    )
                                                })
                                            )
                                        }
                                    </ContentValueInfoChannels>
                                </ContentItemInfoChannels>
                            ):
                            (
                                <ContentItemInfoChannels>
                                    <ItemLabelChannels>
                                            Conta primaria vinculda
                                    </ItemLabelChannels>
                                    <ContentValueInfoChannels>
                                        <ContainerValueInfoChannels> 
                                            <ItemLabelChannel status={true}>
                                                {user.primary_account_ref.name}: 
                                            </ItemLabelChannel>
                                            <ItemValuesChannels style={{color:'orange'}} status={true}>
                                                {user.primary_account_ref.points}<GiPopcorn/> 
                                            </ItemValuesChannels>
                                        </ContainerValueInfoChannels>
                                    </ContentValueInfoChannels>
                                </ContentItemInfoChannels>
                            )
                        }
                        
                        {/* RESGATES */}
                        {
                            user.type_account == 'primary'&&
                            (
                                <ContentItemInfoChannels>
                                    <ItemLabelChannels>
                                            PRODUTOS RESGATADOS
                                    </ItemLabelChannels>
                                    <ContentValueInfoChannels>
                                            {
                                                redeemProducts&&
                                                <ListRedeemProducts
                                                flex={redeemProducts.length > 0?8:0}
                                                load_redeem_products={load_redeem_products}
                                                redeemProducts={redeemProducts}
                                                totalPages={totalPages}
                                                currentPage={currentPage}
                                                loading={loadingProducts}/>
                                            }
                                    </ContentValueInfoChannels>
                                </ContentItemInfoChannels>
                            )
                        }
                        
                        
                        {/* PERGUNTAS */}
                        {
                            // admin?
                            false?
                            (
                                <ContentItemInfoChannels>
                                    <ItemLabelChannels>
                                            PERGUNTAS
                                    </ItemLabelChannels>
                                    <ContentValueInfoPerguntas>
                                        
                                        <ContainerValuePerguntas> 
                                            <ItemLabelInfoPerguntas color={'#B22222'}>
                                                <a  href="/partida">INICIAR PARTIDA</a>
                                            </ItemLabelInfoPerguntas>
                                        </ContainerValuePerguntas>
        
                                        <ContainerValuePerguntas> 
                                            <ItemLabelInfoPerguntas>
                                                <a  href="/perguntas/cadastro">Perguntas</a>
                                            </ItemLabelInfoPerguntas>
                                        </ContainerValuePerguntas>
        
                                        <ContainerValuePerguntas> 
                                            <ItemLabelInfoPerguntas>
                                                <a  href="/premiacao/cadastro">Premiações</a>
                                            </ItemLabelInfoPerguntas>
                                        </ContainerValuePerguntas>
                                        
                                        <ContainerValuePerguntas> 
                                            <ItemLabelInfoPerguntas>
                                                <a  href="/nivel/cadastro">Níveis</a>
                                            </ItemLabelInfoPerguntas>
                                        </ContainerValuePerguntas>
                                        
                                        <ContainerValuePerguntas> 
                                            <ItemLabelInfoPerguntas>
                                                <a  href="/categoria/cadastro">Categorias</a>
                                            </ItemLabelInfoPerguntas>
                                        </ContainerValuePerguntas>
        
                                    </ContentValueInfoPerguntas>
                                </ContentItemInfoChannels>
                            ):
                            (
                                <></>
                            )
                        }
                    
                    </Content>
                ):
                (
                    typeSelected.value == 'secondary'?
                    (
                        <ContainerSelectTypeAccount>
                            <TitleSelectAccount>
                                Selecione a conta primaria que irá se vincular.
                            </TitleSelectAccount>
                            <Select
                                value={typeSelected}
                                onChange={addPrimaryAccount}
                                options={users}
                            />
                        </ContainerSelectTypeAccount>
                    ):
                    (
                        <ContainerSelectTypeAccount>
                            <TitleSelectAccount>
                                Qual o tipo da sua conta?
                            </TitleSelectAccount>
                            <Select
                                value={typeSelected}
                                onChange={addTypeAccount}
                                options={typesAccount}
                            />
                        </ContainerSelectTypeAccount>
                    )
                )
            }
        </Container>
    );
}

export default InfoUser;