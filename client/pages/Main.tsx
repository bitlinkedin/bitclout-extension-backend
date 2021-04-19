import * as React from 'react';
import { Button, PageHeader, Table, message, Upload } from 'antd';
import { useEffect, useState } from 'react';
import axios from 'axios';

const { Column } = Table;
import { UploadOutlined } from '@ant-design/icons';

interface Profile {
  id: string;
  linkedinUrl: string;
  bitcloutUrl: string;
}

const Main = () => {
  const [profiles, setProfiles] = useState<Profile[]>([]);

  useEffect(() => {
    axios
      .get('/api')
      .then((response) =>
        setProfiles((prevState) => response.data),
      );
  }, []);

  const props = {
    name: 'file',
    action: '/api/',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const upload = (
    <Upload {...props}>
      <Button icon={<UploadOutlined />}>Import CSV</Button>
    </Upload>
  );

  return (
    <>
      <PageHeader
        ghost={false}
        title="Title"
        extra={upload}
      />
      <Table dataSource={profiles}>
        <Column title="Id" dataIndex="id" key="id" />
        <Column title="LinkedIn" dataIndex="linkedinUrl" key="linkedinUrl"
                render={(value) => <a target="_blank" href={value}>{value}</a>} />
        <Column title="BitClout" dataIndex="bitcloutUrl" key="bitcloutUrl"
                render={(value) => <a target="_blank" href={value}>{value}</a>} />
      </Table>
    </>
  );
};

export default Main;
