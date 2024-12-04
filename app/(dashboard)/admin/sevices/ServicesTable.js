'use client';

import React from 'react';
import { Table } from 'antd';

const ServicesTable = ({ services }) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (text) => new Date(text).toLocaleString(),
    },
    {
      title: 'Updated At',
      dataIndex: 'updatedAt',
      key: 'updatedAt',
      render: (text) => new Date(text).toLocaleString(),
    },
  ];

  return <Table dataSource={services} columns={columns} rowKey="_id" />;
};

export default ServicesTable;
