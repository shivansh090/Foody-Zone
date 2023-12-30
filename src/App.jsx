import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import foodData from './utils/sample'


const App = () => {
  
  return (
    <div>
      <Container>
        <TopContainer>
          <div className='logo'>
            <img src='logo.svg' alt='logo' />
          </div>
          <div className='search'>
            <input  type='text' placeholder='Search Food' />
          </div>
        </TopContainer>
        <FilterContainer>
          <button id='' >All</button>
          <button id='breakfast' >Breakfast</button>
          <button id='lunch' >Lunch</button>
          <button id='dinner' >Dinner</button>
        </FilterContainer>
        
      </Container>
    </div>
  );
}

const Container = styled.div`

`;

const TopContainer = styled.div`
  background-color: #323334;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  min-height: 140px;
  .search input{
    width: 285px;
    height: 40px;
    padding: 0 5px ;
    border: 2px solid red;
    border-radius: 5px;
    font-size: 16px;
    background: transparent;
  }
`;

const FilterContainer = styled.div`
height:40px ;
background-color: #323334;
gap: 10px;
display: flex;
justify-content: center;
 button{
  height: 28px;
  background-color: #ff4343;
  border: none;
  border-radius: 5px;
  padding: 6px 12px;
 }
`;

export default App;