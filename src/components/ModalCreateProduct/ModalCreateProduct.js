import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

import {
    Container,
    
    ContentCardInfo,
    ContentImage,
    ContentInfoCard,

    ContentInputFile,
    InputFormFile,
    LabelInputfile,
    ImagePremioCad,
    ContentImageInput,
    ContentImageInputEmpty
 } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { 
    setStatusModal
} from '../../store/modules/modal/actions';
import { Button } from 'react-bootstrap';
import { GiPopcorn } from 'react-icons/gi';
import { FaEye, FaInfoCircle } from 'react-icons/fa';
import { FiShoppingBag } from 'react-icons/fi';
import { MdTitle, MdSubtitles } from 'react-icons/md';
import colors from '../../styles/colors';

function ModalCreateProduct({
    show,
    setModal
}) {
    const dispatch = useDispatch();
    const { user } = useSelector(({ UserReducer }) => UserReducer);
    const [ imagePreview, setImagePreview] = useState(null);

    const dimisissModal = (e)=>{
        console.log(e.target);
        console.log(e.currentTarget);
        if (e.target === e.currentTarget) {
            dispatch(setStatusModal(false));
            setModal(false);
            setImagePreview(null);
        }
    }
    
    function handleImageChange(e) {
        e.preventDefault();
        setImagePreview(URL.createObjectURL(e.target.files[0]));
        let reader = new FileReader();
        let file = e.target.files[0];
        if (file) {
          reader.readAsDataURL(file);
        //   setFieldValue('image_premio',file);
        }
    }

    return (
            show && 
            (
                <Container className='fundo' onClick={dimisissModal}>
                    <ContentCardInfo>
                        <ContentImage>
                                {
                                    imagePreview?
                                    (
                                        <ContentImageInput for={`image_produto`}>
                                            <ImagePremioCad  className="profile-pic" src={imagePreview}/>
                                        </ContentImageInput>
                                    ):
                                    (
                                        <ContentImageInputEmpty for={`image_produto`}>
                                            <FaPlus size={40} color={colors.white} />
                                        </ContentImageInputEmpty>
                                    )
                                }

                                <ContentInputFile>
                                    <InputFormFile
                                        type="file"
                                        name={`image_produto`}
                                        id={`image_produto`}
                                        onChange={(e)=>handleImageChange(e)}
                                        // onBlur={handleBlur}
                                        // touched={touched["doc"]}
                                        style={{ display: "flex" }}
                                        // setFieldValue={setFieldValue}
                                        className="file-upload"
                                        accept=".png" 
                                        // {...getFieldProps("doc")}
                                    />
                                </ContentInputFile>

                        </ContentImage>
                        <ContentInfoCard>
                        </ContentInfoCard>
                    </ContentCardInfo>
                </Container>
            )
    );
}

export default ModalCreateProduct;