import React, { useState } from 'react';
import {
    Container,
    Content,
    ContainerFiltros,
    ContainerItemTypeFiltro,
    ContentItemType,
    ContentImageFiltro,
    LogoFiltro,
    DividerFiltros,
    ContainerFiltroSecond,
    ContinueLeft,
    ContinueRight,
    LabelFiltro,
    ContainerFiltroGeral,
    ContentFilter,
    ContainerOptionsFiltro,
    ContentOptionFiltro
  } from './styles';
import rifle from '../../../../assets/images/rifle.png';
import Sniper_Rifle from '../../../../assets/images/Sniper_Rifle.png';
import others from '../../../../assets/images/others.png';
import agents from '../../../../assets/images/agents.png';
import stickers from '../../../../assets/images/stickers.png';
import gloves from '../../../../assets/images/gloves.png';
import machineguns from '../../../../assets/images/machineguns.png';
import shotguns from '../../../../assets/images/shotguns.png';
import knife from '../../../../assets/images/knife.png';
import SMGs from '../../../../assets/images/SMGs.png';
import pistols from '../../../../assets/images/pistols.png';

export default function FiltrosLoja({
    user,
    filtros_type,
    filtrarType,
    load_products,
    filterSelect,
    setFilterSelect,
    regra_filtros,
    filtrosGerais,
    filtrarGeral,
    setFilterGeralSelect,
    filterGeralSelect
}){

    function filtroInfoFiltros(filtro) {
        switch (filtro._id) {
            case "Pistol":
                return {
                    nome:"Pistol",
                    image:pistols
                }
            case "Rifle":
                return {
                    nome:"Rifle",
                    image:rifle
                }
            case "Sniper Rifle":
                return {
                    nome:"Sniper Rifle",
                    image:Sniper_Rifle
                }
            case "SMG":
                return {
                    nome:"SMG",
                    image:SMGs
                }
            case "Shotgun":
                return {
                    nome:"Shotgun",
                    image:shotguns
                }
            case "Machinegun":
                return {
                    nome:"Machinegun",
                    image:machineguns
                }
            case "Knife":
                return {
                    nome:"Knife",
                    image:knife
                }
            case "Glove":
                return {
                    nome:"Glove",
                    image:gloves
                }
            case "Sticker":
                return {
                    nome:"Sticker",
                    image:stickers
                }
            case "Agent":
                return {
                    nome:"Agent",
                    image:agents
                }
            case "Other":
                return {
                    nome:"Other",
                    image:others
                }
        
            default:
                return {
                    nome:"Other",
                    image:others
                }
                break;
        }
    }
    
    function setFiltro(filtro) {
        if (filterSelect._id == filtro._id) {
            console.log("sem filtro");
            setFilterSelect({_id:''});
            load_products(1, {_id:''});
        } else {
            console.log("com filtro");
            filtrarType(filtro);
            setFilterSelect(filtro);
        }
    }

    function setFiltroGeral(filtro) {
        console.log("com filtro Geral");
        filtrarGeral(filtro);
        setFilterGeralSelect(filtro);
    }

    return (
        <Container>
            <Content>
                {
                    user?
                    (
                        <ContainerFiltros>
                            <ContinueLeft/>
                            <ContainerItemTypeFiltro>
                                {
                                    filtros_type.map((filtro)=>{
                                            let fintro_order = filtroInfoFiltros(filtro);
                                            return (
                                                <ContentItemType select={filterSelect._id == filtro._id} onClick={()=>setFiltro(filtro)}>
                                                    <ContentImageFiltro>
                                                        <LogoFiltro
                                                            src={fintro_order.image}
                                                        />
                                                    </ContentImageFiltro>
                                                    <LabelFiltro>
                                                        {fintro_order.nome}
                                                    </LabelFiltro>
                                                </ContentItemType>
                                            )
                                    })
                                }
                            </ContainerItemTypeFiltro>
                            
                            <DividerFiltros/>
                            
                            <ContainerFiltroSecond>
                                {
                                    filtrosGerais && 
                                    filtrosGerais.map((filtro)=>{
                                        return(
                                            <ContainerFiltroGeral  nome={filtro.nome}>
                                                <ContentFilter>
                                                    {filtro.nome}
                                                </ContentFilter>
                                                <ContainerOptionsFiltro className={`dropdownFilter_${filtro.nome}`}>
                                                    {
                                                        filtro.options.map((option)=>{
                                                            return (
                                                                <ContentOptionFiltro select={
                                                                    filterGeralSelect.nome == filtro.value &&
                                                                    filterGeralSelect.value == option.value
                                                                }
                                                                    onClick={()=>setFiltroGeral({nome:filtro.value,value:option.value})}>
                                                                    {option.nome}
                                                                </ContentOptionFiltro>
                                                            )
                                                        })
                                                    }
                                                </ContainerOptionsFiltro>
                                            </ContainerFiltroGeral>
                                        )
                                    })
                                }
                            </ContainerFiltroSecond>
                            <ContinueRight/>
                        </ContainerFiltros>
                    ):
                    (null)
                }
            </Content>
        </Container>
    )
}