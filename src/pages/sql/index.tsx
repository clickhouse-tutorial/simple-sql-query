import React from 'react';
import SQLEditor from '@/components/Editor/SQLEditor';
import { Button, Divider, Space } from '@arco-design/web-react';
import axios from 'axios';
import { loader } from '@monaco-editor/react';
import { format } from 'sql-formatter';

export default function SQLQuery() {
  return (
    <div>
      <h3>SQL查询</h3>
      <SQLEditor />
      <Divider />

      <Space size="medium">
        <Button onClick={() => handleSQLQuery()} type="primary">
          执行查询
        </Button>
        <Button onClick={() => handleFormatSQL()} type="outline">
          格式化SQL
        </Button>
      </Space>
    </div>
  );

  /**
   * 格式化 SQL 函数
   */
  function handleFormatSQL() {
    // 获取 Moncaco 实例
    const editorRef = loader.__getMonacoInstance().editor;
    const models = editorRef.getModels();
    // 获取当前 SQLEditor
    const currentModel = models[0];
    console.log(currentModel.id);
    // 获取当前 SQLEditor 中的值
    const currentValue = currentModel.getValue();
    console.log(currentValue);

    // 调用format()函数执行格式化 currentValue 操作
    const formattedSQL = format(currentValue, {
      language: 'sql', // 标准SQL语法格式化
      uppercase: true, // 关键字转大写
    });
    console.log(formattedSQL);
    //设置编辑器的内容为格式化之后的SQL值
    currentModel.setValue(formattedSQL);
  }

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
