const kuisSidebar = [
  { text: "Ülesseadmine", link: "/kuis/" },
  { text: "Deploy", link: "/kuis/deploy" },
  { text: "Navigatsioon", link: "/kuis/navi" },
]

module.exports = {
  title: "Vitepress'i õpe", // appended to all page titles
  base: '/vitepress-est/',

  themeConfig: {
    nav: [
      { text: 'Koitsa', link: '/' },
      { text: 'No kuidas, kurat?', link: '/kuis/' },
      { text: 'Asi Githubi', link: '/git/' },
    ],
    sidebar:
        {
            "/kuis/": kuisSidebar,
            "/kuis/deploy": kuisSidebar,
        },
  },
};
