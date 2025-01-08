// 应用全局配置
module.exports = {
  baseUrl: 'http://192.168.2.77:15002',//根据实际更换
  //客户端id
  clientId:'...............',
    //授权模式
  grantType:'password',
    //租户id
  tenantId: '000000',
    //记住我模式
  rememberMe: false,
  // 应用信息
  appInfo: {
    // 应用名称
    name: "...",
    // 应用版本
    version: "1.1.0",
    // 应用logo
    logo: "/static/logo.png",
    // 官方网站
    site_url: "...",
    // 政策协议
    agreements: [{
        title: "隐私政策",
        url: "..."
      },
      {
        title: "用户服务协议",
        url: "..."
      }
    ]
  }
}