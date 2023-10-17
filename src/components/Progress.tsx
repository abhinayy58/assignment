import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Card, Col, Row, Statistic } from "antd";
import "../style.css";
import * as data from "../data";

const Progress = () => {
  return (
    <div className="progress">
      <Row gutter={[36, 16]}>
        {data?.progressData?.map((item: any) => (
          <Col xs={24} sm={24} md={12} lg={8} xl={6} span={6} key={item.id}>
            <Card bordered={false}>
              <div className="card_block">
                <div
                  className="progress_icon"
                  style={{ background: item.iconBG }}
                >
                  <p style={{ textAlign: "center" }}>
                    <i
                      className={`fa ${item.icon}`}
                      style={{
                        fontSize: 24,
                        color: item.iconColor,
                        marginTop: "25px",
                      }}
                    ></i>
                  </p>
                </div>
                <div className="progress_statics">
                  <p
                    style={{
                      height: "5px",
                      fontSize: "10px",
                      color: "#424242",
                    }}
                  >
                    {item.title}
                  </p>
                  <Statistic
                    title={`$${item.amount}K`}
                    value={item.growthPercentage + "%"}
                    precision={2}
                    valueStyle={{
                      color: item.growth ? "#3f8600" : "#cf1322",
                      fontSize: "10px",
                      width: "100%",
                      fontWeight: "bold",
                    }}
                    prefix={
                      item.growth ? <ArrowUpOutlined /> : <ArrowDownOutlined />
                    }
                    suffix="this month"
                  />
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Progress;
