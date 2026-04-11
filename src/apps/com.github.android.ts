import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.github.android',
  name: 'GitHub',
  groups: [
    {
      key: 1,
      name: '功能类-自动关闭登录批准结果',
      desc: '登录批准/不批准-关闭',
      rules: [
        {
          activityIds: '.twofactor.TwoFactorActivity',
          matches:
            '[text="无法批准" || text="登录已批准"] +n @[clickable=true] > [text="关闭"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/25366549',
            'https://i.gkd.li/i/25366553',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '功能类-PR自动展开详情',
      matchTime: 10000, // 只开头有那一个需要所以说为了节约资源加超时停止匹配
      actionMaximum: 1,
      rules: [
        {
          fastQuery: true,
          activityIds: '.main.MainActivity',
          matches:
            '@[text="阅读更多"][clickable=true][visibleToUser=true] <3 * <2 [vid="container"][childCount=2]',
          snapshotUrls: 'https://i.gkd.li/i/26644420',
          exampleUrls: 'https://e.gkd.li/1a5c6e13-1a77-400e-9e78-e164563824db',
        },
      ],
    },
  ],
});
