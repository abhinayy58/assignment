import React from 'react';
import { Layout, Space } from 'antd';
import { DashboardOutlined} from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faChartLine ,faMoneyCheckDollar, faRectangleAd, faQuestion,faUser,faChevronRight} from '@fortawesome/free-solid-svg-icons';
import '../style.css'
const { Sider} = Layout;


const siderStyle: React.CSSProperties = {
  // lineHeight: '100px',
  color: '#fff',
  backgroundColor: '#040440',
  width:'25%',
  paddingLeft:'20px',
  minHeight:'100vh'
};

const Sidebar = () => (
  // <Space direction="vertical" size={[0, 48]}>
    <Layout>
    <Sider style={siderStyle}>
      <div className="slider_main">
      <div className='dashboard'>
      <DashboardOutlined style={{paddingRight: '10px'}}/> Dashboard
      </div>
      <div className='dashboard_option active'>
      <FontAwesomeIcon style={{paddingRight: '10px'}} icon={faChartLine} />  Dashboard
    
      </div>
      <div className='dashboard_option'>
      <FontAwesomeIcon style={{paddingRight: '10px'}} icon={ faThumbsUp }  />Product 
      <FontAwesomeIcon style={{float:'right'}} icon={faChevronRight} />
      </div>
      <div className='dashboard_option'>
      <FontAwesomeIcon style={{paddingRight: '10px'}} icon={faUser} />Customers 
      <FontAwesomeIcon style={{float:'right'}} icon={faChevronRight} />
      </div>
      <div className='dashboard_option'>
      <FontAwesomeIcon style={{paddingRight: '10px'}} icon={faMoneyCheckDollar} />Income 
      <FontAwesomeIcon style={{float:'right'}} icon={faChevronRight} />
      </div>
      <div className='dashboard_option'>
      <FontAwesomeIcon  style={{paddingRight: '10px'}} icon={faRectangleAd} />Promote 
      <FontAwesomeIcon style={{float:'right'}} icon={faChevronRight} />
      </div>
      <div className='dashboard_option'>
      <FontAwesomeIcon style={{paddingRight: '10px'}} icon={faQuestion} />help 
      <FontAwesomeIcon style={{float:'right'}} icon={faChevronRight} />
      </div>
      </div>
    </Sider>
    </Layout>
);

export default Sidebar;