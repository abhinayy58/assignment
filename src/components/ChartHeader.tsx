import { Select } from "antd";
import "../style.css";
const ChartHeader = () => {
  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className="chart_header">
      <div className="chart_header_title">
        <div className="chart_overview">
          <p className="overview">Overview</p>
          <p className="earn">Monthly Earning</p>
        </div>
        <div>
          <Select
            placeholder="Quarterly"
            optionFilterProp="children"
            onChange={onChange}
            options={[
              {
                value: "monthly",
                label: "Monthly",
              },
              {
                value: "quarterly",
                label: "Quarterly",
              },
              {
                value: "biyearly",
                label: "Biyearly",
              },
              {
                value: "Yearly",
                label: "Yearly",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartHeader;
