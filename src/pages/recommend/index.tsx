import React, { useState } from "react";
import { Card, Select, Space, Typography, Tag } from "antd";
import type { SelectProps } from "antd";

const { Title, Text } = Typography;

type MealType = "breakfast" | "lunch" | "dinner" | "snack";
type HealthType = "healthy" | "light" | "vegetarian" | "lowCalorie";

const getMealType = (): string => {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 10) return "早餐";
  if (hour >= 10 && hour < 14) return "午餐";
  if (hour >= 14 && hour < 17) return "下午茶";
  if (hour >= 17 && hour < 21) return "晚餐";
  return "夜宵";
};

const healthOptions: SelectProps["options"] = [
  { value: "healthy", label: "健康" },
  { value: "light", label: "清淡" },
  { value: "vegetarian", label: "素食" },
  { value: "lowCalorie", label: "低卡路里" },
];

const foodRecommendations: Record<MealType, Record<HealthType, string[]>> = {
  breakfast: {
    healthy: ["全麦面包", "燕麦粥", "水煮蛋", "牛奶", "水果沙拉"],
    light: ["白粥", "豆浆", "蒸蛋", "青菜"],
    vegetarian: ["全麦面包", "豆浆", "水果沙拉", "坚果"],
    lowCalorie: ["水煮蛋", "牛奶", "水果沙拉", "燕麦粥"],
  },
  lunch: {
    healthy: ["糙米饭", "鸡胸肉", "西兰花", "胡萝卜"],
    light: ["清炒时蔬", "蒸鱼", "豆腐汤"],
    vegetarian: ["糙米饭", "豆腐", "菌菇", "青菜"],
    lowCalorie: ["鸡胸肉沙拉", "蒸鱼", "水煮青菜"],
  },
  dinner: {
    healthy: ["全麦面条", "三文鱼", "芦笋", "番茄"],
    light: ["清炒时蔬", "蒸鸡胸", "豆腐汤"],
    vegetarian: ["全麦面条", "豆腐", "菌菇", "青菜"],
    lowCalorie: ["鸡胸肉沙拉", "蒸鱼", "水煮青菜"],
  },
  snack: {
    healthy: ["水果", "坚果", "酸奶", "全麦饼干"],
    light: ["水果", "酸奶", "全麦饼干"],
    vegetarian: ["水果", "坚果", "全麦饼干"],
    lowCalorie: ["水果", "酸奶", "全麦饼干"],
  },
};

const Recommend: React.FC = () => {
  const [selectedHealth, setSelectedHealth] = useState<HealthType[]>([]);
  const currentMealType = getMealType();

  const getRecommendations = () => {
    const mealKey =
      currentMealType === "早餐"
        ? "breakfast"
        : currentMealType === "午餐"
        ? "lunch"
        : currentMealType === "晚餐"
        ? "dinner"
        : "snack";

    if (selectedHealth.length === 0) {
      return Object.values(foodRecommendations[mealKey]).flat();
    }

    return selectedHealth
      .map((health) => foodRecommendations[mealKey][health])
      .flat();
  };

  return (
    <div>
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        <Title level={2}>吃什么</Title>

        <Card>
          <Space direction="vertical" size="middle">
            <div>
              <Text>当前时间：</Text>
              <Tag color="blue">{currentMealType}</Tag>
            </div>

            <div>
              <Text>选择偏好：</Text>
              <Select
                mode="multiple"
                placeholder="请选择饮食偏好"
                value={selectedHealth}
                onChange={setSelectedHealth}
                options={healthOptions}
                style={{ width: "100%" }}
              />
            </div>

            <div>
              <Text>推荐食物：</Text>
              <Space wrap>
                {getRecommendations().map((food, index) => (
                  <Tag key={index} color="green">
                    {food}
                  </Tag>
                ))}
              </Space>
            </div>
          </Space>
        </Card>
      </Space>
    </div>
  );
};

export default Recommend;
