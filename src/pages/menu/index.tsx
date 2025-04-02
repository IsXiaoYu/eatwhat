import React from "react";
import { Card, Row, Col, Typography, Image } from "antd";
import { useNavigate } from "react-router";

const { Title, Text } = Typography;

interface Dish {
  id: string;
  name: string;
  image: string;
  description: string;
}

interface Category {
  id: string;
  name: string;
  dishes: Dish[];
}

const categories: Category[] = [
  {
    id: "chinese",
    name: "中餐",
    dishes: [
      {
        id: "mapo-tofu",
        name: "麻婆豆腐",
        image:
          "https://img.freepik.com/free-photo/mapo-tofu-chinese-dish_23-2148751857.jpg",
        description: "经典川菜，麻辣鲜香",
      },
      {
        id: "kungpao-chicken",
        name: "宫保鸡丁",
        image:
          "https://img.freepik.com/free-photo/kung-pao-chicken-chinese-dish_23-2148751856.jpg",
        description: "口感鲜辣，配料丰富",
      },
    ],
  },
  {
    id: "western",
    name: "西餐",
    dishes: [
      {
        id: "pasta",
        name: "意大利面",
        image:
          "https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg",
        description: "经典意式美食",
      },
      {
        id: "steak",
        name: "牛排",
        image:
          "https://img.freepik.com/free-photo/grilled-beef-steak-with-vegetables_23-2148751858.jpg",
        description: "鲜嫩多汁的牛排",
      },
    ],
  },
  {
    id: "dessert",
    name: "甜点",
    dishes: [
      {
        id: "cake",
        name: "蛋糕",
        image:
          "https://img.freepik.com/free-photo/fresh-tasty-cake_144627-16201.jpg",
        description: "美味可口的蛋糕",
      },
      {
        id: "ice-cream",
        name: "冰淇淋",
        image:
          "https://img.freepik.com/free-photo/ice-cream-with-chocolate-sprinkles_144627-16202.jpg",
        description: "清凉解暑的冰淇淋",
      },
    ],
  },
];

const MenuPage: React.FC = () => {
  const navigate = useNavigate();

  const handleDishClick = (dishId: string) => {
    navigate(`/menu/dish/${dishId}`);
  };

  return (
    <div>
      <Title level={2}>菜谱大全</Title>
      {categories.map((category) => (
        <div key={category.id} style={{ marginBottom: "40px" }}>
          <Title level={3}>{category.name}</Title>
          <Row gutter={[16, 16]}>
            {category.dishes.map((dish) => (
              <Col xs={24} sm={12} md={8} lg={6} key={dish.id}>
                <Card
                  hoverable
                  cover={
                    <Image
                      alt={dish.name}
                      src={dish.image}
                      style={{ height: 200, objectFit: "cover" }}
                    />
                  }
                  onClick={() => handleDishClick(dish.id)}
                >
                  <Card.Meta title={dish.name} description={dish.description} />
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </div>
  );
};

export default MenuPage;
