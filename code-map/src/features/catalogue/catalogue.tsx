import React from 'react';
import ReactDOM from 'react-dom';
import { Card, Avatar, Input,  } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined} from '@ant-design/icons'

const { Search } = Input;
const { Meta } = Card;

export const Catalogue = () => {

  return (
    <>
    <Search 
      placeholder="input search text" 
      onSearch={value => console.log(value)} 
      enterButton />

    <Card
      style={{ width: 300 }}
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}>
      <Meta
        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
        title="Card title"
        description="This is the description"
      />
    </Card>
    </>
  );
}