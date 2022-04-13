import React from 'react';
import Editor from '@monaco-editor/react';

const sqlEditorStyle = {
  width: '100%',
  height: '600px',
  border: '1px solid #ccc',
};

function SQLEditor() {
  return (
    <div style={sqlEditorStyle}>
      <Editor defaultLanguage="sql" defaultValue={sql} theme={'light'} />
    </div>
  );
}

export default SQLEditor;

const date = new Date();
const sql = `
------------------------------ClickHouse SQL Syntax-----------------------------
-- [WITH expr_list|(subquery)]
-- SELECT [DISTINCT [ON (column1, column2, ...)]] expr_list
-- [FROM [db.]table | (subquery) | table_function] [FINAL]
-- [SAMPLE sample_coeff]
-- [ARRAY JOIN ...]
-- [GLOBAL] [ANY|ALL|ASOF] [INNER|LEFT|RIGHT|FULL|CROSS] [OUTER|SEMI|ANTI]
-- JOIN (subquery)|table (ON (expr_list) )|(USING (column_list) )
-- [PREWHERE expr]
-- [WHERE expr]
-- [GROUP BY expr_list] [WITH ROLLUP|WITH CUBE] [WITH TOTALS]
-- [HAVING expr]
-- [ORDER BY expr_list] [WITH FILL] [FROM expr] [TO expr] [STEP expr]
-- [LIMIT [offset_value, ]n BY columns]
-- [LIMIT [n, ]m] [WITH TIES]
-- [SETTINGS ...]
-- [UNION  ...]
-- [INTO OUTFILE filename [COMPRESSION type] ]
-- [FORMAT format]
--------------${date}----------------

select uniqExact(UserID) cnt, Age age
from tutorial.hits_v1
where EventDate = '2014-03-18'
group by Age
order by cnt desc
limit 10;

`;
