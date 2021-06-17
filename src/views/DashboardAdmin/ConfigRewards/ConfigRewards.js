import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ScaleLoader from "react-spinners/ScaleLoader";
import { HeaderDashBoard } from '../../../components';
import { SelectItemMenuAdmin } from '../../../store/modules/menuAdmin/actions';
import { loadInfoUser } from '../../../store/modules/user/actions';
import { ListRewards } from './components';
import colors from '../../../styles/colors';

import {
    Content,
    BackgroundColor,
    ContentBodyDash,
    ContentRowDashBoard,
    ContentColumDashBoard
} from './styles';
import { useHistory } from 'react-router';
import { loadRewards } from '../../../store/modules/rewards/actions';

function ConfigRewards() {
    const history = useHistory();
    const dispatch = useDispatch();
    // const { user, users, loading:loadingUser } = useSelector(({ UserReducer }) => UserReducer);
    const { rewards, totalPages, currentPage, loading:loadingRewards, errors, status } = useSelector(({ RewardsReducer }) => RewardsReducer);

    console.log('rewards DashboardAdmin: ',rewards);
    useEffect(()=>{
        console.log('loadInfoUser DashboardAdmin');
        dispatch(loadInfoUser());
        dispatch(SelectItemMenuAdmin({index:5.1}));
        load_rewards(1);
    },[]);

    const load_rewards = (page)=>{
      dispatch(loadRewards({page:page,last:true}));
    };
    
    return (
        <Content>
            <BackgroundColor>
                
                    {
                        loadingRewards?
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
                                <HeaderDashBoard reload={()=>load_rewards(1)} title={"Sua aréa de listagem rewards"} subtitle={"Aréa de rewards."} />
                                <ContentRowDashBoard>
                                    {
                                        rewards&&<ListRewards
                                        flex={rewards.length > 0?8:0}
                                        load_rewards={load_rewards}
                                        rewards={rewards}
                                        totalPages={totalPages}
                                        currentPage={currentPage}
                                        loading={loadingRewards}/>
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

export default ConfigRewards;