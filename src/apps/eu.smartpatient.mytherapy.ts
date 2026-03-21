import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'eu.smartpatient.mytherapy',
  name: 'MyTherapy',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      rules: [
        {
          key: 0,
          activityIds: 'com.google.android.gms.ads.AdActivity',
          matches:
            'View[childCount=3] + View > Button[clickable=true][index=parent.childCount.minus(1)][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/26159508',
            'https://i.gkd.li/i/26159509',
          ],
          exampleUrls: 'https://e.gkd.li/012e3aca-4d19-46e4-8873-5e4b15cec187',
        },
        {
          key: 1,
          activityIds: 'com.google.android.gms.ads.AdActivity',
          matches:
            'View[childCount=2] > TextView + View > Button[clickable=true][index=parent.childCount.minus(1)][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/26159510',
          exampleUrls: 'https://e.gkd.li/631c83f3-097b-43e2-a05a-b5349ef211fc',
        },
      ],
    },
  ],
});
