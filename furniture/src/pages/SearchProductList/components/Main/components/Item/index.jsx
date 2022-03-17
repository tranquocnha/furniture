import { Alert, Button, Card, Col, Rate, Row, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { connect } from 'react-redux';
import {
  addWishlistTaskAction,
  deleteWishlistTaskAction,
  addCartTaskAction,
  editCartTaskAction,
} from '../../../../../../redux/actions';
import history from '../../../../../../utils/history';
import { ROUTERS } from '../../../../../../constants/router';
import './item.css';
function Item({
  searchResultItem,
  itemInRow,
  productListItem,
  categoryId,
  averageRate
}) {
  console.log("🚀 ~ file: index.jsx ~ line 33 ~ categoryId", categoryId)

  const { Meta } = Card;

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  // const [isAddWishlist, setIsAddWishlist] = useState(false);

  const { Title } = Typography;
  const marginBot = {
    marginBottom: 20,
  }
  let originPrice = 0;
  let initialPrice = 0;

  if (searchResultItem.colors.length === 0 && searchResultItem.sizes.length === 0) {
    originPrice = searchResultItem.productPrice.toLocaleString();
    initialPrice = (searchResultItem.productPrice * (1 - searchResultItem.productDiscount)).toLocaleString();
  } else if (searchResultItem.colors.length === 0) {
    originPrice = ((searchResultItem.productPrice + searchResultItem.sizes[0].price)).toLocaleString();
    initialPrice = ((searchResultItem.productPrice + searchResultItem.sizes[0].price) * (1 - searchResultItem.productDiscount)).toLocaleString();
  } else if (searchResultItem.sizes.length === 0) {
    originPrice = ((searchResultItem.productPrice + searchResultItem.colors[0].price)).toLocaleString();
    initialPrice = ((searchResultItem.productPrice + searchResultItem.colors[0].price) * (1 - searchResultItem.productDiscount)).toLocaleString();
  } else {
    originPrice = ((searchResultItem.productPrice + searchResultItem.colors[0].price + searchResultItem.sizes[0].price)).toLocaleString();
    initialPrice = ((searchResultItem.productPrice + searchResultItem.colors[0].price + searchResultItem.sizes[0].price) * (1 - searchResultItem.productDiscount)).toLocaleString();
  }

  function renderFourCard() {
    return (
      <>
        <Col span={6}>
          <Card
            style={{
              // width: 250
            }}
            className="main-container__card"
            hoverable
            cover={
              <>{
                searchResultItem.productDiscount > 0 && (
                  <div className="main-container__card__discount" style={{ width: '50px', height: '50px' }}>
                    {-searchResultItem.productDiscount * 100} %
                  </div>
                )
              }

                <img
                  src={searchResultItem.productImage[0]}
                  className="main-container__card__img"
                  style={{
                    height: "250px"
                  }}
                />
              </>
            }
            onClick={() => { history.push(`/home/${searchResultItem.categoryId}/${searchResultItem.id}`) }}
          >

            <div className="card__container">
              <Meta
                title={<span className="main-container__card__title">{searchResultItem.productName}</span>}
              />

              <div className="main-container__card__price">
                <span className="main-container__card__price__old">{originPrice} vnđ</span>
                <span className="main-container__card__price__current">{initialPrice} vnđ</span>
                <Rate  disabled value={averageRate} />
              </div>
            </div>
          </Card >
        </Col >
      </>

    );
  }
  function renderOneCard() {
    return (
      <>
        <Col span={12}>
          <img
            src={searchResultItem.productImage[0]}
            // className="main-container__card__img"
            style={{
              width: "100%",
              height: "auto"
            }}
          />
        </Col>
        <Col span={12}>
          <Row style={marginBot}>
            <Title level={2}>
              {searchResultItem.productName}
            </Title>
          </Row>
          <Row style={marginBot} className="d-flex align-items-center">
            <span className="main-container__card__price__old mr-2">{originPrice} vnđ</span>
            <span className="main-container__card__price__current">{initialPrice} vnđ</span>
          </Row>
          <Row style={marginBot, { textAlign: "justify" }}>
            <p>{searchResultItem.productShortDescription}</p>
          </Row>
          <Row>
            <Button
              type="primary"
              className="view-detail-btn"
              onClick={() => { history.push(`/product/${searchResultItem.id}`) }}
            >
              Xem chi tiết
            </Button>

          </Row>
        </Col>
      </>

    );
  }
  return (
    // 1-24 4-6
    <>
      {
        itemInRow === 6
          ? renderFourCard()
          : renderOneCard()
      }
    </>
  );
}
export default Item;