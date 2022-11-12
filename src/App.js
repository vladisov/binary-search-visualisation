import { Card, Row, Col, Divider } from "antd";
import "./App.css";
import BasicBinarySearch from "./BasicBinarySearch";
import BinarySearchConditional from "./BinarySearchConditional";
import BinarySearchEuler from "./BinarySearchEuler";

const App = () => {
  return (
    <div className="AppWrapper">
      <Row justify="center">
        <Col span={16}>
          <Card bordered={true}>
            <Col gutter={16}>
              <Divider>Option #1</Divider>
              <Row justify="center">
                <BasicBinarySearch />
              </Row>
              <Divider>Option #2</Divider>
              <Row justify="center">
                <BinarySearchConditional />
              </Row>
              <Divider>Option #3</Divider>
              <Row justify="center">
                <BinarySearchEuler />
              </Row>
            </Col>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default App;
