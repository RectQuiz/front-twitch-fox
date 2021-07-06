import React, { useEffect, useState } from 'react';
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
    ContainerSelectTypeAccounts,
    ContainerSelectTypeAccount,
    ContainerButtonSelectTypes,
    ContainerButtonVoltar,
    ContainerButtonContinuar,
    TitleSelectAccount,
    ContentValueInfoPerguntas,
    ContainerValuePerguntas,
    ItemLabelInfoPerguntas,
    BodyItem,
    ActionItem,
    InputItem,
    ContentLogoParceiro,
    LogoParceiro,
    ContainerInputCodigo,
    InputCodig,
    LabelForm,
    ContainerAvisoIndicacao,
    ContentAvisoIndicacao
} from './styles';
import Select from 'react-select';
import { useSelector } from 'react-redux';
import { ListRedeemProducts } from '../../../../components';
import colors from '../../../../styles/colors';

function InfoUser({
    user,
    usersPrimary,
    typesAccount,
    addTypeAccount,
    typeSelected,
    addPrimaryAccount,
    load_redeem_products,
    editUser,
    selectTypeAccount,
    selectedPrimaryAccount,
    selectUserPrimary,
    codigo,
    setCodigo
}) {
    const [ tradeLink, setTradeLink ] = useState((user && user.tradelinkSteam)?user.tradelinkSteam:'');
    const [ edit, setEdit ] = useState(false);
    const { redeemProducts, totalPages, currentPage, loading:loadingProducts } = useSelector(({ ProductsReducer }) => ProductsReducer);
    

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
                        {
                            user.picture.length > 0&&
                            (
                                <ContentLogoParceiro>
                                    <LogoParceiro
                                        src={user.picture}
                                    />
                                </ContentLogoParceiro>
                            )
                        }
                        {/* NICKNAME */}
                        <ContentItemInfo>
                            <ItemLabelInfo>
                                    Usuário: 
                            </ItemLabelInfo>
                            <ItemValueInfo>
                                    {(user && user.nickname)?user.nickname:'Não informado'}
                            </ItemValueInfo>
                        </ContentItemInfo>

                        {/* TIPO DA CONTA */}
                        <ContentItemInfo>
                            <ItemLabelInfo>
                                    Tipo da conta: 
                            </ItemLabelInfo>
                            <ItemValueInfo>
                                    {(user && user.type_account)?user.type_account:'Não informado'}
                            </ItemValueInfo>
                        </ContentItemInfo>
            
            
                        {/* PONTOS */}
                        <ContentItemInfo>
                            <ItemLabelInfo>
                                    {user.type_account == 'primary'?'Pontos Totais:':'Total do farm:'}
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
            
                        {/* CONTA VINCULADA */}
                        {
                            user.conta_vinculada&&
                            (
                                <ContentItemInfo>
                                    <ItemLabelInfo>
                                        Conta vinculada:
                                    </ItemLabelInfo>
                                    <ItemValueInfo style={{color:'orange'}}>
                                            {user.conta_vinculada && user.conta_vinculada._id?user.conta_vinculada.name:'Não encontrado'}
                                    </ItemValueInfo>
                                </ContentItemInfo>
                            )
                        }

                        {/* SEU CODIGO */}
                        {
                            
                            user.type_account == 'primary'&&
                            (
                                <ContentItemInfo>
                                    <ItemLabelInfo>
                                            Seu código: 
                                    </ItemLabelInfo>
                                    <BodyItem>
                                        <ItemValueInfo>
                                                {user.idTwitch?user.idTwitch:'Não encontrado'}
                                        </ItemValueInfo>
                                        {/* <ActionItem onClick={()=>setEdit(true)}>
                                            <FaPen color={colors.dourado} size={20}/>
                                        </ActionItem> */}
                                    </BodyItem>
                                </ContentItemInfo>
                            )
                        }

                        {/* CANAIS */}
                        {
                            (user && user.channels.length > 0)&&
                            (
                                <ContentItemInfoChannels>
                                    <ItemLabelChannels>
                                            Canais habilitados
                                    </ItemLabelChannels>
                                    <ContentValueInfoChannels>
                                                {user.channels.map((channel,index)=>{
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
                                                })}
                                    </ContentValueInfoChannels>
                                </ContentItemInfoChannels>
                            )
                        }
                        
                        {/* CONTAS VINCULADAS */}
                        {
                            user.contas_vinculadas.length > 0&&
                            (
                                <ContentItemInfoChannels>
                                    <ItemLabelChannels>
                                            Contas vinculadas
                                    </ItemLabelChannels>
                                    <ContentValueInfoChannels>
                                        {
                                            (user && user.contas_vinculadas)&&
                                            (
                                                user.contas_vinculadas.map((contas,index)=>{
                                                    return(
                                                        <ContainerValueInfoChannels key={index}> 
                                                            <ItemLabelChannel status={contas.status}>
                                                                {contas.info_user && contas.info_user.name?contas.info_user.name:'Não encontrado'}: 
                                                            </ItemLabelChannel>
                                                            <ItemValuesChannels status={contas.status} style={{color:'orange'}}>
                                                                {contas.points || contas.points == 0?contas.points:'Não encontrado'} 
                                                            </ItemValuesChannels>
                                                        </ContainerValueInfoChannels>
                                                    )
                                                })
                                            )
                                        }
                                    </ContentValueInfoChannels>
                                </ContentItemInfoChannels>
                            )
                        }
                        
                        {/* CONTAS SECUNDARIAS */}
                        {
                            user.type_account == 'primary'?
                            (
                                (user && user.channels.length > 0)&&
                                (
                                    <ContentItemInfoChannels>
                                        <ItemLabelChannels>
                                                Contas secundárias
                                        </ItemLabelChannels>
                                        <ContentValueInfoChannels>
                                            {
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
                                            }
                                        </ContentValueInfoChannels>
                                    </ContentItemInfoChannels>
                                )
                            ):
                            (
                                <ContentItemInfoChannels>
                                    <ItemLabelChannels>
                                            Conta primária vinculda
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
                            user.type_account == 'primary' && (redeemProducts && redeemProducts.length > 0) &&
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
                        <ContainerSelectTypeAccounts>
                            <ContainerSelectTypeAccount>
                                <TitleSelectAccount>
                                    Selecione a conta primária que irá se vincular.
                                </TitleSelectAccount>
                                <Select
                                    value={selectedPrimaryAccount}
                                    onChange={selectUserPrimary}
                                    options={usersPrimary}
                                />
                            </ContainerSelectTypeAccount>
                            <ContainerButtonSelectTypes>
                                <ContainerButtonVoltar
                                    onClick={()=>{
                                        selectTypeAccount({ value: '', label: 'SELECIONE::::' });
                                        selectUserPrimary({ value: '', label: 'SELECIONE::::',id_person:''});
                                    }}
                                >
                                    Voltar
                                </ContainerButtonVoltar>
                                <ContainerButtonContinuar
                                    onClick={addTypeAccount}
                                    disabled={selectedPrimaryAccount.value.length == 0}
                                >
                                    Continuar
                                </ContainerButtonContinuar>
                            </ContainerButtonSelectTypes>
                        </ContainerSelectTypeAccounts>
                    ):
                    (
                        <ContainerSelectTypeAccounts>
                            <ContainerSelectTypeAccount>
                                <TitleSelectAccount>
                                    Qual o tipo da sua conta?
                                </TitleSelectAccount>
                                <Select
                                    value={typeSelected}
                                    onChange={selectTypeAccount}
                                    options={typesAccount}
                                />
                                {
                                    typeSelected.value == 'primary' && 
                                    (
                                        <>
                                            <ContainerInputCodigo>
                                                <LabelForm>
                                                    Código do amigo:
                                                </LabelForm>
                                                <InputCodig
                                                    placeholder='Código do amigo'
                                                    type="text"
                                                    name="codigo"
                                                    id="codigo"
                                                    value={codigo} // We also bind our email value
                                                    onChange={(e)=>setCodigo(e.target.value)}
                                                />
                                            </ContainerInputCodigo>
                                            <ContainerAvisoIndicacao>
                                                <ContentAvisoIndicacao>
                                                    Preencha o campo (Código do amigo) apenas se tiver um código, caso não possua clique em continuar.
                                                </ContentAvisoIndicacao>
                                            </ContainerAvisoIndicacao>
                                        </>
                                    )
                                }
                            </ContainerSelectTypeAccount>
                            <ContainerButtonSelectTypes>
                                {/* {
                                    typeSelected.value == 'primary' && 
                                    (
                                        // <ContainerButtonVoltar
                                        //     onClick={()=>selectTypeAccount({ value: '', label: 'SELECIONE::::' })}
                                        // >
                                        //     Voltar
                                        // </ContainerButtonVoltar>
                                    )
                                } */}
                                <ContainerButtonContinuar
                                    onClick={addTypeAccount}
                                    disabled={typeSelected.value != 'primary' && typeSelected.value != 'secondary'}
                                >
                                    Continuar
                                </ContainerButtonContinuar>
                            </ContainerButtonSelectTypes>
                        </ContainerSelectTypeAccounts>
                    )
                )
            }
        </Container>
    );
}

export default InfoUser;