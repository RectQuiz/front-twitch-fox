import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAlerts } from '../../store/modules/alerts/actions';
import colors from '../../styles/colors';

import {
    Container,
    Content,
    ContainerAlert,
    ContentIconAlert,
    IconAlert,
    IconError,
    IconSuccess,
    ContentTextAlert
} from './styles';

function AlertMessageSimple({layout = 'simple'}) {
    const { alerts } = useSelector(({ AlertsReducer }) => AlertsReducer);
    const dispatch = useDispatch();

    function color(tipo) {
        switch (tipo) {
            case 'error':
                return colors.red_dark
                break;
            case 'warning':
                return colors.yellow
                break;
            case 'success':
                return colors.green_dark
                break;
            default:
                return colors.white
                break;
        }
    }

    function icon(tipo) {
        switch (tipo) {
            case 'error':
                return <IconError size={30} color={colors.white}/>
                break;
            case 'warning':
                return <IconAlert size={30} color={colors.black}/>
                break;
            case 'success':
                return <IconSuccess size={30} color={colors.white}/>
                break;
            default:
                return <IconAlert size={30} color={colors.yellow}/>
                break;
        }
    }
    
    function colorText(tipo) {
        switch (tipo) {
            case 'error':
                return colors.white
                break;
            case 'warning':
                return colors.black
                break;
            case 'success':
                return colors.white
                break;
            default:
                return colors.white
                break;
        }
    }
    
    console.log('alerts: ',alerts);
    
    useEffect(()=>{
        console.log('alerts.length: ',alerts.length);
        if (alerts.length > 0) {
            setTimeout(() => {
                let new_alerts = alerts;
                new_alerts.splice(0,1);
                dispatch(setAlerts(new_alerts));
            }, alerts[0].time);
        }
    },[alerts.length]);

    return (
        <Container layout={layout}>
            <Content>
                    {
                        alerts&&
                        alerts.map((alert,index)=>{
                            return (
                                <ContainerAlert key={index} color={color(alert.tipo)}>
                                    <ContentIconAlert>
                                        {icon(alert.tipo)}
                                    </ContentIconAlert>
                                    <ContentTextAlert color={colorText(alert.tipo)}>
                                            {alert.message}
                                    </ContentTextAlert>
                                </ContainerAlert>
                            )
                        })
                    }
            </Content>
        </Container>
    );
}

export default AlertMessageSimple;