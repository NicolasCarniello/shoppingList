import React, { useEffect, useState } from 'react'
import './index.css'
import Article from './Article'

const List = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    getPost()
  }, [])

  const getPost = () => {
    async function dataFtn() {
      const response = await fetch('https://fakestoreapi.com/products/')
      const res = await response.json()
      return res
    }
    dataFtn()
      .then((res) => setData(res))
      .catch((err) => console.error(err))
  }

  return (
    <>
      <h3>Currently there are: {data.length} articles </h3>
      {!data.length && <div>Fill the list by clicking the button</div>}
      <div className="columns">
        {data.map((article) => {
          const { id, title, image, price } = article
          return <Article id={id} title={title} img={image} price={price} />
        })}
      </div>
      {data.length ? (
        <button onClick={() => setData([])}>Empty cart</button>
      ) : (
        <button onClick={getPost}>Fill cart</button>
      )}
    </>
  )
}

export default List
