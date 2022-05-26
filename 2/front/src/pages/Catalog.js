import { observer } from 'mobx-react'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Form, Row, Spinner } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import http from '../http'
import MainPage from '../layout/MainPage'
import auth from '../store/auth'
import cart from '../store/cart'
import product from '../store/product'


const Catalog = () => {
  const navigate = useNavigate()
  const [category,setCategory] = useState([])
  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    http.get('/category/')
    .then((values)=>{
      setCategory(values.data)
    })
  },[])
  useEffect(()=>{
    http.get('/product/')
    .then((values)=>{
      product.addItem(values.data.sort((a,b)=>b.id-a.id))
      setLoading(false)
    })
  },[])

  const fetchProudt = (id)=>{
    setLoading(true)
    if(id==='all'){
      return http.get('/product/')
      .then((values)=>{
        product.addItem(values.data.sort((a,b)=>b.id-a.id))
        setLoading(false)
      })
     
    }
    http.get(`/product/cat/${id}`)
    .then((values)=>{
      product.addItem(values.data)
      setLoading(false)
    })
  }

  return (
    <>
      <MainPage>
        <Container className="flex-column d-flex justify-content-center">
          {loading&&<div className='text-center'><Spinner animation='border' /></div>}
          {!loading&&
          <Row sm={1} md={2}>
            <Col md={3} className="pt-5">
              <Form>
                <Form.Label>Категории</Form.Label>
                <Form.Select onChange={(e)=>fetchProudt(e.target.value)} >
                  <option >Выбрать категорию</option>
                  <option value='all'>Все</option>
                  {category.map(item=>(
                    <option key={item.id} value={item.id}>{item.name}</option>
                  ))}
                </Form.Select>
                <Form.Label>Фильтр</Form.Label>
                <Form.Select onChange={(e)=>product.sortItem(e.target.value)}>
                  <option value='new'>По новизне</option>
                  <option value='year'>По году производства</option>
                  <option value='name'>По наименовнию</option>
                  <option value='price'>По цене</option>
                </Form.Select>
              </Form>
            </Col>
            <Col className='m-auto'>
              <Row sm={1} md={2}>
                {product.product.map(item=>(
                <Col key={item.id} className="d-flex justify-content-center pt-5">
                <Card className='text-center' style={{width:'23rem'}} >
                  <Card.Img onClick={()=>navigate(`/product/${item.id}`)} src={`http://localhost:8080/${item.img}`}/>
                  <Card.Title className='mt-auto' onClick={()=>navigate(`/product/${item.id}`)}>{item.name}</Card.Title>
                  <Card.Text className='mt-auto' onClick={()=>navigate(`/product/${item.id}`)}>{item.price} руб.</Card.Text>
                  {auth.user?<Card.Footer className='mt-auto'><Button onClick={()=> cart.addCart(item) } variant='dark'>В корзину</Button></Card.Footer>:<></>}
                </Card>
              </Col>
                ))}

              </Row>
            </Col>
          </Row>
          }
        </Container>
      </MainPage>
    </>
  )
}

export default observer(Catalog)