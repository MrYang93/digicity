---
title: nodejs 安装
---

安装 node 的方式很多，这里推荐用 nvm 装 node。

安装 nvm 可以直接到 github 上找到 [nvm](https://github.com/creationix/nvm#install-script) 这个仓库查看安装命令

```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
```

接下来就可以用nvm 去安装 nodejs 了

```bash
nvm ls-remote 查看可以选择安装的 node 版本

nvm install v7.4.0 安装 7.4.0 的 nodejs

```
