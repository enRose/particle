import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Avatar, Input, Row, Col, Divider } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons'

const { Search } = Input;
const { Meta } = Card;

const FourEachRow = (props:any) => {
  let rows:any = []

  props.numberOfcol = props.numberOfcol || 4

  for (let i = 0, j = -1; i < props.blobs.length; ++i) {
    if (i % props.numberOfcol === 0) {
      rows[++j] = []
    }

    let col:any = (
      <Col
        key={props.blobs[i]._id}
        className='gutter-row'
        span={24 / props.numberOfcol}>
        <Link to={`/blobs/${props.blobs[i]._id}`}>
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
        </Link>
      </Col>)

    rows[j].push(col)
  }

  return rows.map((row:any, index:any) =>
    <Row style={{ marginBottom: "30px" }} 
      key={index} justify='start'
      gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      {row.map((col:any) => col)}
    </Row>
  )
}

export const Catalogue = (props: any) => {
  const style = { background: '#0092ff', padding: '8px 0' }

  return (
    <>
      <Search
        placeholder="input search text"
        onSearch={value => console.log(value)}
        enterButton />

      <Divider
        orientation="left"
        style={{ color: '#333', fontWeight: 'normal' }}>
      </Divider>

      {FourEachRow({numberOfcol: 4})}
    </>
  );
}