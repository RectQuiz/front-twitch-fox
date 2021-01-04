import React, { useState } from 'react';

import {
    Container,
    ContainerAjudas,
    ContentAjuda,
    AjudaImg,

    ContainerBotoes,
    ContentBotao,
    ContentBotaoRandom
} from './styles';
import { FaRandom } from 'react-icons/fa';
import image_granada from '../../../../../assets/images/granada_2.png';
import image_defuse from '../../../../../assets/images/defuse.png';
import image_flash from '../../../../../assets/images/flash.png';
import image_molotov from '../../../../../assets/images/molotov.png';
import image_smoke from '../../../../../assets/images/smoke.png';
import { useDispatch } from 'react-redux';
import { atualizarPartida } from '../../../../../store/modules/partida/actions';

function InicioPartida({partida}) {
    const dispatch = useDispatch();

    const [ ajudaSelecionada,  setAjudaSelecionada] = useState(null);
    const [ ajudaAleatoria,  setAjudaAleatoria] = useState(null);
    const ajudas = [
        {
            name:'Granada',
            number: 1,
            image: image_granada
        },
        {
            name:'Flash',
            number: 2,
            image: image_flash
        },
        {
            name:'Molotov',
            number: 3,
            image: image_molotov
        },
        {
            name:'Smoke',
            number: 4,
            image: image_smoke
        }
    ]

    function escolherAjuda(ajuda) {
        if (!ajudaSelecionada) {
            setAjudaSelecionada(ajuda);
            console.log('ajudaSelecionada: ',ajuda);
        }
    }
    
    function escolherAjudaAleatoria() {
        let ajudaRandom = parseInt(Math.random() * (ajudas.length - 0) + 0);
        console.log('ajudaRandom: ',ajudaRandom);
        console.log('ajudas[ajudaRandom].number: ',ajudas[ajudaRandom].number);
        console.log('setAjudaSelecionada.number: ',ajudaSelecionada.number);
        while(ajudas[ajudaRandom].number == ajudaSelecionada.number){
            ajudaRandom = parseInt(Math.random() * (ajudas.length - 0) + 0);
            console.log('entrou: ',ajudas[ajudaRandom]);
        }
        setAjudaAleatoria(ajudas[ajudaRandom]);
        console.log('ajudaRandom: ',ajudas[ajudaRandom]);
    }

    function iniciarPartida() {
        dispatch(atualizarPartida({
            id:partida._id,
            ajudas:[
                {
                    ...ajudaSelecionada
                },
                {
                    ...ajudaAleatoria
                }
            ]
        }))
    }

    return (
        <Container>
            <ContainerAjudas>
                {
                    ajudas.map((ajuda)=>{
                        return (
                            <ContentAjuda
                                onClick={()=>escolherAjuda(ajuda)}
                                selected={ajudaSelecionada&&ajudaSelecionada.number == ajuda.number}
                                random={ajudaAleatoria&&ajudaAleatoria.number == ajuda.number}
                            >
                                <AjudaImg src={ajuda.image}/>
                            </ContentAjuda>
                        )
                    })
                }
            </ContainerAjudas>
            <ContainerBotoes>
                {
                    ajudaSelecionada && !ajudaAleatoria?
                    (
                        <ContentBotaoRandom onClick={escolherAjudaAleatoria}>
                            <FaRandom  size={70} color={'#fff'}/>
                        </ContentBotaoRandom>
                    ):
                    (null)
                }
                {
                    ajudaSelecionada && ajudaAleatoria?
                    (
                        <ContentBotao onClick={iniciarPartida}>
                            INICIAR PARTIDA
                        </ContentBotao>
                    ):
                    (null)
                }
            </ContainerBotoes>
        </Container>
    );
}

export default InicioPartida;