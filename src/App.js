import { Card, Row, Col, Divider } from "antd";
import "./App.css";
import BasicBinarySearch from "./BasicBinarySearch";
import BinarySearchConditional from "./BinarySearchConditional";
import BinarySearchEuler from "./BinarySearchEuler";
import BinarySearchFirstOccurrence from "./BinarySearchFirstOccurrence";
import BinarySearchLastOccurrence from "./BinarySearchLastOccurrence";
import BinarySearchFirstOfGreaterOccurrence from "./BinarySearchFirstOfGreaterOccurrence";
import BinarySearchGreaterOfLesserOccurrence from "./BinarySearchGreaterOfLesserOccurrence";
import { GithubOutlined } from "@ant-design/icons";
import { useState } from "react";

const App = () => {
  const [spin, setSpin] = useState(false);
  return (
    <div className="AppWrapper">
      <Row justify="center">
        <Col span={16}>
          <Card bordered={true} className="AppCard">
            <a
              style={{
                position: "absolute",
                left: "95%",
                cursor: "pointer",
                color: "black",
              }}
              href="https://github.com/vladisov/binary-search-visualisation"
            >
              <GithubOutlined
                onMouseOver={() => {
                  setSpin(true);
                }}
                onMouseLeave={() => {
                  setSpin(false);
                }}
                spin={spin}
                style={{ fontSize: 18, cursor: "pointer", zIndex: 0 }}
              />
            </a>

            <h1
              style={{
                textAlign: "center",
                marginBottom: "40px",
              }}
            >
              Choose your binary search! 🤖
            </h1>

            <Col gutter={16}>
              <Divider>Inclusive One</Divider>
              <Row justify="center">
                <BasicBinarySearch />
              </Row>
              <Divider>Same shit, but shorter</Divider>
              <Row justify="center">
                <BinarySearchEuler />
              </Row>
              <Divider>Search me or Insert me!</Divider>
              <Row justify="center">
                <BinarySearchConditional />
              </Row>
              <Divider>Try to the find first occurrence</Divider>
              <Row justify="center">
                <BinarySearchFirstOccurrence />
              </Row>
              <Divider>This one is for the last</Divider>
              <Row justify="center">
                <BinarySearchLastOccurrence />
              </Row>
              <Divider>Search the one greater than target</Divider>
              <Row justify="center">
                <BinarySearchFirstOfGreaterOccurrence />
              </Row>
              <Divider>Or less than target</Divider>
              <Row justify="center">
                <BinarySearchGreaterOfLesserOccurrence />
              </Row>
            </Col>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default App;
