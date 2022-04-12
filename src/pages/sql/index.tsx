import React from 'react';
import SQLEditor from '@/components/Editor/SQLEditor';
import { Button, Divider } from '@arco-design/web-react';
import axios from 'axios';
import { loader } from '@monaco-editor/react';

export default function SQLQuery() {
  return (
    <div>
      <h3>SQL查询</h3>
      <SQLEditor />
      <Divider />
      <Button onClick={() => handleSQLQuery()} type="primary">
        执行查询
      </Button>
    </div>
  );

  /**
   * SQL 查询处理事件函数
   */
  function handleSQLQuery() {
    // 获取Monaco实例
    const editorRef = loader.__getMonacoInstance().editor;
    const models = editorRef.getModels();
    const sqlModel = models[0];
    console.log(sqlModel.id);
    const sql = sqlModel.getValue();
    const data = {
      sql: sql,
    };

    // 发送 post 查询请求
    axios
      .post(`/api/query`, data)
      .then((res) => {
        console.log(res.data);
      })
      .finally(() => {
        // do nothing
      });
  }
}
