import React from "react";
import { useParams, useNavigate } from "react-router";
import { Card, Typography, Steps, Button, Image } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;
const { Step } = Steps;

interface Step {
  title: string;
  description: string;
  image?: string;
}

interface DishDetail {
  id: string;
  name: string;
  image: string;
  description: string;
  ingredients: string[];
  steps: Step[];
}

const dishDetails: Record<string, DishDetail> = {
  "mapo-tofu": {
    id: "mapo-tofu",
    name: "麻婆豆腐",
    image:
      "https://img.freepik.com/free-photo/mapo-tofu-chinese-dish_23-2148751857.jpg",
    description: "经典川菜，麻辣鲜香",
    ingredients: [
      "嫩豆腐 300g",
      "猪肉末 100g",
      "花椒 适量",
      "干辣椒 适量",
      "豆瓣酱 2勺",
      "生抽 1勺",
      "老抽 1勺",
      "盐 适量",
      "葱花 适量",
    ],
    steps: [
      {
        title: "准备材料",
        description: "将豆腐切成小块，准备好所有配料。",
        image:
          "https://img.freepik.com/free-photo/ingredients-for-cooking_23-2148751859.jpg",
      },
      {
        title: "炒制肉末",
        description: "锅中放油，爆香花椒和干辣椒，加入肉末炒至变色。",
        image:
          "https://img.freepik.com/free-photo/cooking-process_23-2148751860.jpg",
      },
      {
        title: "加入豆腐",
        description: "加入豆腐块，倒入调味料，翻炒均匀。",
        image:
          "https://img.freepik.com/free-photo/cooking-process_23-2148751861.jpg",
      },
      {
        title: "收汁",
        description: "大火收汁，撒上葱花即可出锅。",
        image:
          "https://img.freepik.com/free-photo/finished-dish_23-2148751862.jpg",
      },
    ],
  },
  // 其他菜品的详情数据...
};

const DishDetail: React.FC = () => {
  const { dishId } = useParams<{ dishId: string }>();
  const navigate = useNavigate();
  const dish = dishDetails[dishId || ""];

  if (!dish) {
    return <div>菜品不存在</div>;
  }

  return (
    <div>
      <Button
        type="link"
        icon={<ArrowLeftOutlined />}
        onClick={() => navigate("/menu")}
        style={{ marginBottom: 16 }}
      >
        返回菜谱
      </Button>

      <Card>
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <Image
            src={dish.image}
            alt={dish.name}
            style={{ maxWidth: "100%", maxHeight: 400, objectFit: "cover" }}
          />
          <Title level={2}>{dish.name}</Title>
          <Text>{dish.description}</Text>
        </div>

        <Title level={3}>食材</Title>
        <ul>
          {dish.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>

        <Title level={3}>制作步骤</Title>
        <Steps direction="vertical" current={-1}>
          {dish.steps.map((step, index) => (
            <Step
              key={index}
              title={step.title}
              description={
                <div>
                  <Text>{step.description}</Text>
                  {step.image && (
                    <div style={{ marginTop: 8 }}>
                      <Image
                        src={step.image}
                        alt={step.title}
                        style={{
                          maxWidth: "100%",
                          maxHeight: 200,
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  )}
                </div>
              }
            />
          ))}
        </Steps>
      </Card>
    </div>
  );
};

export default DishDetail;
