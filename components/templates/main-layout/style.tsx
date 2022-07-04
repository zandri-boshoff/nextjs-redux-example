import { Layout, Card } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import styled from 'styled-components';

const { Sider } = Layout;

export const CustomLayout = styled(Layout)`
  min-height: 100vh;
`;

export const MainLayoutCard = styled(Card)`
  height: 94%;
  border: none;
  margin: 2em;
  margin-left: '110px';
  transition: margin 0.2s;

  @media (max-width: 576px) {
    .ant-table {
      font-size: 15px;
    }
    margin: 0;
    margin-left: 80px;
  }
`;

export const CustomHeader = styled(Header)`
  padding: 0 1em;
  background: red;
  > div {
    float: right;
    padding: 0;
    margin: 0;
  }
`;
