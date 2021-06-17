import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ScaleLoader from "react-spinners/ScaleLoader";
import { Footer, HeaderDashBoard } from '../../../components';
import { SelectItemMenuAdmin } from '../../../store/modules/menuAdmin/actions';
import { createRewardsAction, loadRewards, setResponseRewards, setStatusRewards } from '../../../store/modules/rewards/actions';
import { loadInfoUser } from '../../../store/modules/user/actions';
import { FormCadReward } from './components';

import {
    Content,
    BackgroundColor,
    ContentBodyDash
} from './styles';

function CreateReward({history}) {
    const dispatch = useDispatch();
    const { user, users, loading:loadingUser } = useSelector(({ UserReducer }) => UserReducer);
    const { rewards , totalPages, currentPage, loading:loadingRewards, errors, status } = useSelector(({ RewardsReducer }) => RewardsReducer);
    console.log("user: ",user);

    useEffect(()=>{
        console.log('loadInfoUser CreateReward');
        dispatch(loadInfoUser());
        dispatch(SelectItemMenuAdmin({index:5.1}));
    },[]);

    useEffect(()=>{
      if (loadingRewards == false && status == 201 && errors.length == 0) {
        dispatch(setStatusRewards(0));
        dispatch(setResponseRewards({}));
        dispatch(loadRewards({page:1,last:true}));
        history.push('/dashboard/rewards');
      }
    },[status]);

    function registerReward(values) {
        console.log("values: ",values);
        dispatch(createRewardsAction(values));
    }

    return (
        <Content>
            <BackgroundColor>
                
                    {
                        loadingUser || loadingRewards?
                        (
                            <ScaleLoader
                                // css={override}
                                color="#DC143C"
                                height={60}
                                width={7}
                                margin={7}
                                loading={true}
                            />
                        ):
                        (
                            <ContentBodyDash>
                                <HeaderDashBoard
                                    title={"Cadastrar reward"}
                                    subtitle={"Áre para cadastrar um novo reward."}
                                />
                                <FormCadReward registerReward={registerReward}/>
                            </ContentBodyDash>
                        )
                    }
                {/* <Footer/> */}
            </BackgroundColor>
        </Content>
    );
}

export default CreateReward;