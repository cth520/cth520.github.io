import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  // "/demo/",
  {
    text: "前端博文",
    icon: "https://steingraeber-1259380157.cos.ap-guangzhou.myqcloud.com/public/images/cth/cth_logo.png",
    prefix: "/posts/",
    children: [
      {
        text: "vue",
        icon: "https://steingraeber-1259380157.cos.ap-guangzhou.myqcloud.com/public/images/cth/cth_logo.png",
        prefix: "vue/",
        children: [
          "V001-vue随页面改变title自动改变",
          "V002-去掉console打印",
          "V003-项目中生成二维码"
        ],
      },
      {
        text: "vue3",
        icon: "https://steingraeber-1259380157.cos.ap-guangzhou.myqcloud.com/public/images/cth/cth_logo.png",
        prefix: "vue3/",
        children: [
          {
            text: "vue3中常见修饰符",
            icon: "https://steingraeber-1259380157.cos.ap-guangzhou.myqcloud.com/public/images/cth/cth_logo.png",
            link: "vue3中常见修饰符",
          },
          {
            text: "vue3的setup语法糖",
            icon: "https://steingraeber-1259380157.cos.ap-guangzhou.myqcloud.com/public/images/cth/cth_logo.png",
            link: "vue3的setup语法糖",
          },
        ],
      }
    ],
  },
  {
    text: "后端博文",
    icon: "https://steingraeber-1259380157.cos.ap-guangzhou.myqcloud.com/public/images/cth/cth_logo.png",
    prefix: "/posts/",
    children: [
      {
        text: "服务端",
        icon: "https://steingraeber-1259380157.cos.ap-guangzhou.myqcloud.com/public/images/cth/cth_logo.png",
        prefix: "服务端/docker/",
        children: [
          {
            text: "阿里云服务器安装docker",
            icon: "https://steingraeber-1259380157.cos.ap-guangzhou.myqcloud.com/public/images/cth/cth_logo.png",
            link: "阿里云服务器安装docker",
          },
          {
            text: "Docker 安装 mysql",
            icon: "https://steingraeber-1259380157.cos.ap-guangzhou.myqcloud.com/public/images/cth/cth_logo.png",
            link: "Docker 安装 mysql",
          },
          {
            text: "docker 常用的命令",
            icon: "https://steingraeber-1259380157.cos.ap-guangzhou.myqcloud.com/public/images/cth/cth_logo.png",
            link: "docker 常用的命令",
          },
        ],
      },
    ],
  },

  // {
  //   text: "V2 文档",
  //   icon: "https://steingraeber-1259380157.cos.ap-guangzhou.myqcloud.com/public/images/cth/cth_logo.png",
  //   link: "https://theme-hope.vuejs.press/zh/",
  // },
]);
