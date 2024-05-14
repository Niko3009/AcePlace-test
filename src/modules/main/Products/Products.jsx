'use client'

import classNames from 'classnames'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import InfiniteScroll from 'react-infinite-scroll-component'
import Button from '@/ui/Button'
import { Spinner } from '@/ui/Loader'
import useDebounce from '@/hooks/useDebounce'

import styles from './styles/Products.module.scss'

import { loadData } from './funcs'

export default function Products() {
  const [orderBasket, setOrderBasket] = useState([])

  const [products, setProducts] = useState([])
  const [hasMore, setHasMore] = useState(true)
  const [page, setPage] = useState(0)

  const loadDelay = 1000
  const getData = useDebounce(
    async (newPage) => {
      try {
        const productsPerPage = 3
        const responseData = await loadData(newPage, productsPerPage)
        const newProducts = responseData?.data.products || []
        setProducts((prevProducts) => [...prevProducts, ...newProducts])
        if (!(newProducts.length === productsPerPage)) setHasMore(false)
        setPage(newPage)
      } catch (error) {
        console.warn(error)
      }
    },
    loadDelay,
    []
  )
  const fetchMoreData = async () => getData(page + 1)

  const addProductToBasket = (addedProductData) => {
    let index = -1
    for (let i = 0; i < orderBasket.length; i++)
      if (orderBasket[i]?.data?.id === addedProductData.id) index = i

    const newOrderBasket = [...orderBasket]
    if (index >= 0) newOrderBasket[index].quantity++
    else newOrderBasket.push({ quantity: 1, data: addedProductData })
    setOrderBasket(newOrderBasket)
  }
  const removeProductToBasket = (removedProductData) => {
    let index = -1
    for (let i = 0; i < orderBasket.length; i++)
      if (orderBasket[i]?.data?.id === removedProductData.id) index = i

    const newOrderBasket = [...orderBasket]
    if (index >= 0) newOrderBasket[index].quantity--
    else {
    }
    setOrderBasket(newOrderBasket)
  }

  const orderBasketObj = {}
  orderBasket.forEach(
    (basketProduct) => (orderBasketObj[basketProduct.data.id] = basketProduct)
  )

  useEffect(() => {
    getData(page + 1)
  }, [])

  console.log(orderBasket)

  return (
    <div className={classNames(styles.module, styles.wrapper)}>
      <InfiniteScroll
        dataLength={products.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<Spinner />}
      >
        <div className={styles.content}>
          <div className={styles.items}>
            {products.map((data, i) => (
              <Product
                data={data}
                order={orderBasketObj[data.id] || null}
                addProductToBasket={addProductToBasket}
                removeProductToBasket={removeProductToBasket}
                key={data.id + '-' + i}
              />
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  )
}
export { Products }

export function Product({
  data,
  order,
  addProductToBasket,
  removeProductToBasket,
}) {
  const { image_url, title, description, price } = data
  const quantityInBasket = order?.quantity || 0
  const isThereProductInBasket = !!quantityInBasket

  return (
    <div className={styles['item-window']}>
      <div className={styles['image-container']}>
        <Image src={image_url} layout="fill" className={styles['image']} />
      </div>
      <h2 className={styles['title']}>{title}</h2>
      <p className={styles['description']}>{description}</p>

      <h2 className={styles['price']}> {`цена: ${price}₽`}</h2>

      <div className={styles['buttons']}>
        {!isThereProductInBasket && (
          <Button onClick={() => addProductToBasket(data)}>{`Купить`}</Button>
        )}
        {isThereProductInBasket && (
          <>
            <Button onClick={() => addProductToBasket(data)}>{`+`}</Button>
            <div className={styles['counter']}>
              <h2>{quantityInBasket}</h2>
            </div>
            <Button onClick={() => removeProductToBasket(data)}>{`-`}</Button>
          </>
        )}
      </div>
    </div>
  )
}
