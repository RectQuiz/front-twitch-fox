import React from 'react';
import {
    Container,
    Content,
    Products,
    ButtonStore
  } from './styles';
  import { Link } from 'react-router-dom';


// import logo from '../../../../assets/images/logo.png';
import { CardProduct } from '../../../../components';
import { API_URL } from '../../../../services/config';

export default function Cards({products}){
    // console.log('products: ',products);
    // const [ cards, setCards ] = useState([1,2,3,4]);
    return (
            products.length > 0?(
                <Container>
                    <Content>
                        <Products>
                            {
                            products.map((product,index)=>{
                                    if (index >= 3) {
                                        return false;
                                    }else{
                                        return (
                                            <CardProduct
                                                id={product._id}
                                                floatvalue={product.floatvalue}
                                                handleSelect={()=>{}}
                                                key={index}
                                                image={product.imageurl?product.imageurl:`${API_URL}/${product.imagepath}`}
                                                title={product.name}
                                                type={product.type}
                                                amount={product.amount}
                                                price={product.price}
                                                desc={product.exterior}
                                                inspectLink={product.inspectGameLink}
                                                promo={product.promo}
                                                pricePromo={product.promo?product.pricePromo:null}
                                                stickers={product.stickersinfo?product.stickersinfo:null}
                                                paint={product.paint?product.paint:null}
                                                price_real={product.price_real?product.price_real:null}
                                            />
                                        )
                                    }
                                })
                            }
                        </Products>
                    </Content>
                    <Link to="/loja">
                        <ButtonStore>
                            Ver loja!
                        </ButtonStore>
                    </Link>
                </Container>
            ):(<></>)
    )
}