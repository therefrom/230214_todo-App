// Template.js는 전체 컴포넌트를 묶어주는 박스입니다

import React from 'react';
import styled from 'styled-components';

const TemplateBox = styled.div`
  // 전체 박스 스타일 컴포넌트
  margin: 40px auto;
  padding: 50px 40px;
  width: 430px;
  height: 650px;
  border-radius: 30px;
  background-color: #fff;
`

function Template( {children} ) {
  return (
    <TemplateBox>{children}</TemplateBox>
  )
}

export default Template;