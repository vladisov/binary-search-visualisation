import { Card, Row, Col, Divider } from "antd";
import "./App.css";
import BasicBinarySearch from "./BasicBinarySearch";
import BinarySearchConditional from "./BinarySearchConditional";
import BinarySearchEuler from "./BinarySearchEuler";
import BinarySearchFirstOccurrence from "./BinarySearchFirstOccurrence";
import BinarySearchLastOccurrence from "./BinarySearchLastOccurrence";
import BinarySearchFirstOfGreaterOccurrence from "./BinarySearchFirstOfGreaterOccurrence";

const App = () => {
  return (
    <div className="AppWrapper">
      <Row justify="center">
        <Col span={16}>
          <Card bordered={true}>
            <Col gutter={16}>
              <Divider>Try find</Divider>
              <Row justify="center">
                <BasicBinarySearch />
              </Row>
              <Divider>Same but shorter</Divider>
              <Row justify="center">
                <BinarySearchEuler />
              </Row>
              <Divider>Search or Insert</Divider>
              <Row justify="center">
                <BinarySearchConditional />
              </Row>
              <Divider>Search first occurrence</Divider>
              <Row justify="center">
                <BinarySearchFirstOccurrence />
              </Row>
              <Divider>Search last occurrence</Divider>
              <Row justify="center">
                <BinarySearchLastOccurrence />
              </Row>
              <Divider>Search first of greater than target</Divider>
              <Row justify="center">
                <BinarySearchFirstOfGreaterOccurrence />
              </Row>
            </Col>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default App;
