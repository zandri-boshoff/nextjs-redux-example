import React from 'react';
import { Layout } from 'antd';
import * as S from './style';

const MainLayout = (props: { children: React.ReactNode }) => {
  const { Content } = Layout;

  return (
    <>
      <S.CustomLayout>
        <S.CustomLayout>
          <S.CustomHeader></S.CustomHeader>
          <Content>
            <S.MainLayoutCard>{props.children}</S.MainLayoutCard>
          </Content>
        </S.CustomLayout>
      </S.CustomLayout>
    </>
  );
};

export default MainLayout;
