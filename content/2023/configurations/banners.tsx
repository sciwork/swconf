import { BannerProps } from '@/components/Banner';
import Button from '@/components/Button';

type ShowBannerPageConfigType = {
  path: string;
  props: BannerProps;
};

const showBannerPageConfigs: ShowBannerPageConfigType[] = [
  {
    path: '/',
    props: {
      title: 'sciwork conference',
      subTitle:
        'December 9th to 10th\nNational Yang Ming Chiao Tung University',
      children: (
        <Button to="/cfp" variant="action">
          Call for Proposals
        </Button>
      ),
    },
  },
  {
    path: '/cfp',
    props: {
      title: 'Call for Proposals',
      children: (
        <Button to="https://pretalx.sciwork.dev/sw23/submit/" variant="action">
          Submit a Proposal
        </Button>
      ),
    },
  },
];

export const isPageHasBanner = (path: string) => {
  return showBannerPageConfigs.some((config) => config.path === path);
};

export const getBannerProps = (path: string) => {
  const props = showBannerPageConfigs.find(
    (config) => config.path === path,
  )?.props;
  if (!props) {
    return {
      title: 'sciwork 2023',
      showIcon: true,
    };
  } else {
    return props;
  }
};
