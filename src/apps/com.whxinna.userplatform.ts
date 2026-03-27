import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.whxinna.userplatform',
  name: '住理生活',
  groups: [
    {
      key: 1,
      name: '通知提示-公告',
      rules: [
        {
          activityIds: 'com.whxinna.webview.WebViewActivity',
          matches:
            '@Button[clickable=true][width<150 && height<150] - * >3 [text="温馨提示"]',
          snapshotUrls: 'https://i.gkd.li/i/26308642',
        },
      ],
    },
  ],
});
