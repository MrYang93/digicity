---
title: 添加 SSH KEY 上传代码到 Github.com
---

### 添加 ssh key

为了达成开发机和 github.com 的互信。因为开发过程中，我们需要用本地机器向 github.com 的仓库中
写东西（ git push ），同时我们又不想每次都输入密码，所以我们就用 ssh key 的形式来达成互信，过程
如下：

- 在本地机器上生成一对 ssh key ，一个公钥，一个私钥
- 把公钥添加到 github.com

具体操作如下：

- 首先本地运行 `ssh-keygen` 命令
- 到 `~/.ssh/id_rsa.pub` 也就是公钥文件中，拷贝公钥字符串
- 把字符串粘贴到 github.com -> setting -> ssh keys -> add

这样添加 ssh key 的工作就完成了，以后我们执行 git push 这样的命令就不会看到如下错误了：

```
...permission denied...
...make sure ... correct access right ...
```

大功告成。


### git clone 命令


要想把 github 上的一个项目代码下载到本地有两种方式，一种就是普通下载（ download ）。但是，开发者
基本上会选择另外一种方式，就是 clone 。

```
git clone git@github.com:happypeter/digicity.git
```

clone 的特点就是不仅仅可以得到最新代码，而且可以得到整个改版历史。而普通下载只能得到最新版本。


### git 各个命令的作用


- `git push` 把本地仓库中有，而远端对应仓库中没有的**版本**推送到远端
- `git pull` 把远端仓库中有，而本地对应仓库中没有的**版本**拉到本地
- `git clone` 把远端仓库，克隆到本地


### 学习 Github/Git 的学习目标

- 知道 git 是**版本控制**工具
- 每个同学要有一个 github 仓库
- 已经添加 ssh key 互信，也就是可以从本地仓库推送内容（ git push ）到 github 仓库
- 可以在本地仓库中任意添加，删除，修改文件，并作成版本

这样，github/git 的初级使用我们就有能力完成了。但是，作为成熟开发者，github 上面会发 push request ，本地 git 会开启新分支，都是必备知识。暂时我们先不涉及。

### 承前启后

课程进行到现在，程序员三大基本工具，我们就介绍完毕。

- 编辑器 atom
- 命令行 Linux
- 版本控制 Git/Github


其实呢，这三个工具的学习都不能一蹴而就，都是在实际写代码过程中逐步完善的。但是这里 Peter 有三门课程可以推荐：

- [Atom 爱上 JS](http://haoqicat.com/atom-love-js)
- [驾驭命令行怪兽](http://haoqicat.com/ride-cli-monster)
- [Git 北京](http://haoqicat.com/gitbeijing)

以上三门课程，大家可以根据自己所处的阶段，有选择的学习里面的部分章节。


学习上面三大工具的目的，就是为了更加高效的**写代码** 。
