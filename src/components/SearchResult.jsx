import React from 'react'
import styled from 'styled-components';

const SearchResult = ({data}) => {
  return (
    <div>
        <FoodCardsContain>
            <div className='incards'>
                {
                    data?.map((element)=>(
          <FoodCards>
            <div className='card'>
                <div className='imgsec'>
                    <img src={element.image} alt='img'></img>
                </div>
                <div className='des'>
                    <h4>{element.name}</h4>
                    <p>{element.text}</p>
                    <div><button>$ {element.price}.00</button></div>
                </div>
            </div>
          </FoodCards>
                    ))
                }
          
          </div>
        </FoodCardsContain>
    </div>
  )
}
const FoodCardsContain =styled.section`
background-image: url('./bg.png');
min-height: calc(100vh - 180px);
max-height: fit-content;
background-size:cover;
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
.incards{
    gap: 20px;
    padding: 4% 10%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;  
    justify-content: center;
}
`;

const FoodCards = styled.div`
display: flex;
justify-content: center;
align-items: center;
.card{
    width: 340px;
    height: 157px;
    display: flex;
    gap: 10px;
    border: 1px solid wheat;
    border-radius:15px;
    background-color:rgba(30, 17, 5, 0.364);
}
.des{
    padding: 9px 0;
}
.des div{
    padding: 20px 30px 10px 0;
    display: flex;
    justify-content: flex-end;
}
p{
    font-size: small;
}
img{
    height: 110px;
    margin: 12px;
}
 button{
  height: 28px;
  background-color: #ff4343;
  border: none;
  border-radius: 5px;
  padding: 0px 12px;
 }
`;
export default SearchResult