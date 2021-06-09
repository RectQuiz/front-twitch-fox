import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ScaleLoader from "react-spinners/ScaleLoader";
import { HeaderDashBoard } from '../../../components';
import { SelectItemMenuAdmin } from '../../../store/modules/menuAdmin/actions';
import { loadInfoUser } from '../../../store/modules/user/actions';
import { ListResgates } from './components';
import colors from '../../../styles/colors';

import {
    Content,
    BackgroundColor,
    ContentBodyDash,
    ContentRowDashBoard,
    ContentColumDashBoard
} from './styles';
import { useHistory } from 'react-router';
import { loadRedeemPoints } from '../../../store/modules/points/actions';

function ListResgatePoints() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [ modalDetailItem, setModaDetailItem ] = useState(false);
    const { user, users, loading:loadingUser } = useSelector(({ UserReducer }) => UserReducer);
    const { redeemPoints, totalPages, currentPage, loading:loadingPoints, errors, status } = useSelector(({ PointsReducer }) => PointsReducer);

    console.log('redeemPoints DashboardAdmin: ',redeemPoints);
    useEffect(()=>{
        console.log('loadInfoUser DashboardAdmin');
        dispatch(loadInfoUser());
        dispatch(SelectItemMenuAdmin({index:2.1}));
        load_redeem_points(1);
    },[]);

    const load_redeem_points = (page)=>{
      dispatch(loadRedeemPoints({page:page,last:true}));
    };
    
    return (
        <Content>
            <BackgroundColor>
                
                    {
                        loadingUser?
                        (
                            <ScaleLoader
                                // css={override}
                                color={colors.primary_geral}
                                height={60}
                                width={7}
                                margin={7}
                                loading={true}
                            />
                        ):
                        (
                            <ContentBodyDash>
                                <HeaderDashBoard reload={()=>load_redeem_points(1)} title={"Sua aréa de listagem de resgate de pontos"} subtitle={"Aréa de resgate de pontos."} />
                                <ContentRowDashBoard>
                                    {
                                        redeemPoints&&<ListResgates
                                        flex={redeemPoints.length > 0?8:0}
                                        load_redeem_points={load_redeem_points}
                                        redeemPoints={redeemPoints}
                                        totalPages={totalPages}
                                        currentPage={currentPage}
                                        loading={loadingPoints}/>
                                    }
                                </ContentRowDashBoard>
                            </ContentBodyDash>
                        )
                    }
                {/* <Footer/> */}
            </BackgroundColor>
        </Content>
    );
}

export default ListResgatePoints;