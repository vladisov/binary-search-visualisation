import BasicBinarySearch from "./BasicBinarySearch";
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
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default App;
