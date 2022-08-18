import type { AppRouteModule } from '/@/router/types';

import { getParentLayout, LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const learn: AppRouteModule = {
  path: '/learn',
  name: 'LearnDemo',
  redirect: '/learn/icon',
  component: LAYOUT,
  meta: {
    orderNo: 6000,
    icon: 'ion:git-compare-outline',
    title: t('routes.demo.learn.learn'),
  },

  children: [
    {
      path: 'table',
      name: 'Table',
      redirect: '/learn/table/basic',
      component: getParentLayout('Table'),
      meta: {
        title: t('routes.demo.learn.table'),
      },
      children: [
        {
          path: 'basic',
          name: 'BasicTable',
          component: () => import('/@/views/demo/learn/table/index.vue'),
          meta: {
            title: t('routes.demo.learn.basic'),
          },
        },
      ],
    },
  ],
};

export default learn;
