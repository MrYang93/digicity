---
title: 展示一个可以查看详情用户的列表
---

本节主要是动手，做出一个用户列表，列表上的每一项都可以点开，查看详情。

### 第一步，先做带链接的用户列表

链接中包含该用户的 id ，链接指向的页面先不做。前台最后生成的内容如下：

```
<a href="/users/xxxxxxx">peter</a>
<a href="/users/xxxxxxx">billie</a>
...
```

要求：大家前台全部把服务器都停下，用 index.html 一个静态文件，导入 bundle.js 就可以。
另外，前面我们使用 a 标签，而不用 react-router 的 Link 也是有意的。后续我们会随着需要的
功能的增加来逐步看一下：

- 第一，前台为何要在运行的时候，也启动自己服务器?
- 第二，Link 比 a 到底好在哪里？

第一个问题，因为我们要用到 react-router ，它要想正常运行，需要一个简单的 express 后台路由服务的支撑。

第二个问题，我们用 React 开发的应用，叫做**单页面应用** ，也就是说，整个网站只有一个页面。
换句话说，就是，整个网站做跳转的时候，没有刷新。使用 Link 就可以达成无刷新的链接。而使用　a
标签，页面是会刷新的，所以一般不用。


### 补充技巧：如何拿到非默认分支的代码

问题是：现在我们想要拿到　021-react-router 这个文件夹，但是这个文件夹是在　old-stuff 分支上，本仓库的默认分支是　gh-pages 。具体操作步骤如下:

第一步，拿到　clone 链接，到仓库页面，http://github.com/happypeter/digicity ，找到
`clone or download` 按钮，点一下，有两种链接可以使用，一种　ssh 协议的（ git@github.com:happypeter/digicity.git ），这种形式的链接有时候只允许项目所有者使用。
如果出现这样的情况，可以使用　HTTPS 协议的链接。

```
git clone https://github.com/happypeter/digicity.git
```

第二步，切换到需要的分支。克隆得到　digicity/ 文件夹，

```
cd digicity
git branch
```

这是只能看到默认分支，gh-pages ，看不到我们需要的　old-stuff 分支，但是依然可以执行：

```
git checkout old-stuff
```

来切换到　old-stuff 分支。可以通过　`git branch -a` 来查看一共有多少分支。
