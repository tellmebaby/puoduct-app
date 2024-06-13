import React, { useEffect, useState } from 'react';

const ProductList = () => {
    // state : list
  const [list, setList] = useState([]);

  // hook : useEffect ()
  // useEffect : 아래 3가지 라이프 사이클 매소드를 결합한 리액트 훅(hook>
  // ✅ hook : 리액트의 함수형 컴포너느가 가지는 특별한 의미의 함수
  // - componentDidMount
  // - componentDidUpdate
  // - componentWillUnmount
  useEffect(() => {
    async function fetchData() {
        try{
            const response = await fetch('http://localhost:8080/products');
            const data = await response.json();
            setList(data) // list state 를 업데이트
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    } 
    fetchData();
  }, []);

  return (
    <>
    <div className="container">
        <h1>상품 목록</h1>
        <div className="card-list">
            {list.map(product => (
                <div key={product.id} className='card'>
                    <img src={product.img} alt={product.name}/>
                    <h1>{product.name}</h1>
                    <p>{product.price}</p>
                </div>
            ))}
        </div>
    </div>
    </>
  );
};

export default ProductList;