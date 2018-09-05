// 全局的一些配置，包括页面顶部导航栏和页面底部的一些配置
export default {
  defaultLanguage: 'en-us',
  rootPath: '', // 发布到服务器的根目录，需以/开头但不能有尾/，如果只有/，请填写空字符串
  port: 8080, // 本地开发服务器的启动端口
  'en-us': {
    pageMenu: [
      {
        key: 'home',
        text: 'HOME',
        link: '/en-us/index.html',
      },
      {
        key: 'docs',
        text: 'DOCS',
        link: '/en-us/docs/goals.html',
      },
    ],
    disclaimer: {
      title: 'Disclaimer',
      content: 'the disclaimer content',
    },
    documentation: {
      title: 'Documentation',
      list: [
        {
          text: 'Goals',
          link: '/en-us/docs/goals.html',
        },
        {
          text: 'Contents',
          link: '/en-us/docs/contents.html',
        },
        {
          text: 'Metrics',
          link: '/en-us/docs/metrics.html',
        },
      ],
    },
    resources: {
      title: 'Resources',
      list: [
        {
          text: 'Blog',
          link: '/en-us/blog/index.html',
        },
        {
          text: 'Community',
          link: '/en-us/community/index.html',
        },
      ],
    },
    copyright: 'Copyright © 2018 Alibaba',
  },
  'zh-cn': {
    pageMenu: [
      {
        key: 'home',
        text: '首页',
        link: '/zh-cn/index.html',
      },
      {
        key: 'docs',
        text: '文档',
        link: '/zh-cn/docs/goals.html',
      },
    ],
    disclaimer: {
      title: '免责声明',
      content: '免责声明的具体内容',
    },
    documentation: {
      title: '文档',
      list: [
        {
          text: '目标',
          link: '/zh-cn/docs/goals.html',
        },
        {
          text: '内容',
          link: '/zh-cn/docs/contents.html',
        },
        {
          text: '标准',
          link: '/zh-cn/docs/metrics.html',
        }
      ]
    },
    resources: {
      title: '资源',
      list: [
        {
          text: '博客',
          link: '/zh-cn/blog/index.html',
        },
        {
          text: '社区',
          link: '/zh-cn/community/index.html',
        }
      ]
    },
    copyright: 'Copyright © 2018 Alibaba'
  }
};
