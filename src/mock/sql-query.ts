import Mock from 'mockjs';
import { isSSR } from '@/utils/is';
import setupMock from '@/utils/setupMock';

if (!isSSR) {
  Mock.XHR.prototype.withCredentials = true;

  setupMock({
    setup: () => {
      // mock SQL 查询
      Mock.mock(new RegExp('/api/query'), () => {
        return Mock.mock([{ totalCount: 100 }, { _EXECUTE_TIME: '64ms' }]);
      });
    },
  });
}
