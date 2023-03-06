module.exports = {
  email: 'proLove0212@gmail.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/proLove0212',
    },
    {
      name: 'Skype',
      url: 'live:.cid.ff68fdc851e4e7a',
    },
    {
      name: 'Slack',
      url: 'proLove0212@gmail.com',
    },
    {
      name: 'Discord',
      url: 'PRO212#2330',
    },
    {
      name: 'Gmail',
      url: 'proLove0212@gmail.com',
    },
  ],

  navLinks: [
    {
      name: '紹介',
      url: '/#about',
    },
    {
      name: '職歴',
      url: '/#jobs',
    },
    {
      name: 'プロジェクト',
      url: '/#projects',
    },
    {
      name: '連絡先',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
