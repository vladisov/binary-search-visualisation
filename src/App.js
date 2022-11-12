import BasicBinarySearch from "./BasicBinarySearch";
import BinarySearchCond from "./BinarySearchCond";
import { Card, Row, Col } from "antd";
import "./App.css";

const App = () => {
  return (
    <div className="AppWrapper">
      <Row justify="center">
        <Col span={16}>
          <Card bordered={true}>
            <Row justify="center">
              <BasicBinarySearch />
            </Row>
            <Row justify="center">
              <BinarySearchCond />
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default App;
