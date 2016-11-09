# 2016年11月7号上午

### 为什么要用 Linux ?

北京的（包扩硅谷）的职业开发者一般都用苹果本（ Macbook ）做开发（写代码）。我们是做 Web 开发的，Web 项目要运行在服务器（ server ）上，服务器的业界标准是使用  Linux 做操作系统呢。

幸运的是， MacOS 和 Linux 都是 Unix 的变种，使用起来大同小异。所以我们课程中使用 Linux 做开发也是非常棒一个选择。Peter 本人用 Linux 做开发，用了5年。

### 打开命令行界面

Ctrl-Alt-T 是深度 Linux 系统上打开命令行窗口的快捷键。命令行窗口中可以运行的程序不唯一。默认启动的程序叫做 Bash ，这个是我们这个要学习的核心。在 Bash 下就可以来输入各种 Linux 命令了。

但是，命令行窗口中也能启动其他的程序，例如 Python/Javascript 的解析器。


### 命令行能干什么？

命令行和鼠标（图形化的界面）一样是人类操作电脑的一种方式。基本上鼠标能干得活，命令行都能干（个别的像 Photoshop 的一些操作不太好弄）。

同时，只要命令行能干的事情，都会比鼠标更高效，因为命令行是可以批处理的。实际开发中，我们用命令行最经常的操作就是，创建文件，删除移动文件等。

举个例子，如果我要在桌面上创建一个文件夹，可以用鼠标右键来创建，同时如果用命令行，操作如下

```
cd Desktop
mkdir FolderName
```

最终操作结果是等价的。但是如果要学习命令行操作，第一步就是要掌握文件系统结构。

### 插播一个 Linux 八卦

Linux 系统运行在所有的 Andriod 手机上，全球最强的十台 super computer 其中有九台（或者十台）运行 Linux 。80% 的服务器都用 Linux 。

所以说 Linux 很牛，但是它的价格是：0元。它的价值是多少？大约200亿美元。到底是谁做成了200亿的东西，却 give it for free 。这个人就是 [Linus](https://en.wikipedia.org/wiki/Linus_Torvalds) 。


Linus 是芬兰人，他父亲是政治家（共产主义者）。Linus 在大二的时候创作 Linux 操作系统。69年出生，今天依然在写代码。

### 继续来聊文件系统（ File System ）

如果我们想对文件进行，增删改查（ touch rm mv vim ），或者说进行文件的创建，删除，移动，重命名等操作，首先要解决是什么呢？要能找到它。或者说，就是要知道文件在文件系统上的位置。

所以，我们首先要聊的是文件系统的结构。实际上就是说一下，Linux 系统默认的那些文件夹的结构。实际上这个结构是非常简单的。

Windows 系统上还分 C/D 盘，Linux 这里其实更简单。所有的文件夹都会存在一个顶级老祖宗文件夹之内。这个老祖宗的名字叫做 `/` 。

![](https://github.com/happypeter/digicity/blob/master/img/file-system.png?raw=true)


图片中，位置非常独特的文件夹还有一个，就是 `/home/peter` ，它通常被称为**用户主目录** ，它还有个外号叫 `~` 。用户默认登陆进系统之后，默认的着陆位置就是这个文件夹。同时，默认用户只是在这个文件夹里有写权限，而在这个之外的地方是没有写权限的。

要真正找到文件，需要我们学会如何在文件系统内做**跳转** 。

### 如何在文件系统内做跳转？

这里我们会使用到的一个核心命令叫 `cd` （ Change Directory 改变文件夹 ) 。所以说文件系统内做跳转，其实就是改变**当前**文件夹。

查看当然文件夹中的内容，就用

```
ls
```

这个命令。我们可以看到的输出结果大概是

```
$ ls
Desktop Application Download
```

那么，现在如果我们想要跳转到桌面（或者说就是把**当然文件夹**改变为桌面），那就来执行

```
cd Desktop
```

这样就可以跳转到桌面了。到桌面执行 `mkdir FolderName` 来看看这个新的文件夹，是否真正创建到了桌面上（ mkdir 全称就是 make Directory ，创建一个文件夹）。

如何跳转到上一级文件夹

```
cd ..
```

其中 `..` 就是**上一级文件夹**的外号。

如何快速的回到**用户主目录**呢?

```
cd ~
```

或者

```
cd  
```

都可以。

知道了，如何在文件系统中跳转了，我们就可以进一步学习各种文件操作了（创建，移动，重命名，删除等等）。

### 创建文件或者文件夹

创建文件夹

```
mkdir project
```

注意：创建的位置要在用户主目录内部，不然会遇到**权限**不够的问题。

进入这个项目文件夹

```
cd project
```

这样，**当前文件夹** 就切换到了 project 之内。

插播一个小技巧：可以用 `pwd` （ Print Working Directory 打印当前文件夹）来显示精确的位置。


创建一个文件，可以用

```
touch fileName
```

注意：Windows 系统上，一般文件都是要有后缀，但是 Linux 下没有这个要求。

但是，一般我们都是用 atom 编辑器来创建文件。

```
atom .
```

注：`.` 代表当前位置（当前文件夹）。


### 删除文件或者文件夹

删除一个文件

```
rm fileName
```

删除一个文件夹

```
rm -r folderName
```

### 移动

移动用到的是 `mv` 命令

```
mv 被移动的文件或者文件夹的路径  目标文件夹位置
```


### 重命名


```git@github.com:happypeter/digicity.git
mv 被移动的文件或者文件夹的路径  不存在的位置/文件名
```

这样进行的就是原来文件的重命名操作。

### 复制粘贴

用 `cp` 这个命令。

```
cp 被拷贝的的文件  目标位置
```

拷贝文件夹git@github.com:happypeter/digicity.git

```
cp -r 被拷贝的的文件夹 目标位置
```


### 参考资料

- [驾驭命令行怪兽](http://haoqicat.com/ride-cli-monster)



# 2016年11月8号

### 回顾命令行基础知识

```
rm -r Directorygit@github.com:happypeter/digicity.git
```

一个命令通常都是由三部分组成：命令本身+选项+一个或者多个参数



### 普通用户和超级用户

普通用户就是我们默认登录用户，例如 peter 。超级用户就是管理员。普通用户可以化身超级用户。这个化身的方式是

```
sudo rm fileName
```

上面的命令可以用超级用户权限来执行一个命令。


```
sudo su
```

可以直接化身超级用户。


总结一下，了解了文件系统结构，了解各类文件操作（ rm mv cp ），再加上 sudo 的使用，那么一个开发者的基本命令行使用能力就有了。那么我们课程的命令行入门部分就可以告一段落。

### Github 的基本使用

Github 就是程序远的微信朋友圈。但是 Github 不是发照片和心情的，Github 上是发项目的。Github 也是一个社交网络平台，可以去粉其他人，可以去追其他高手的项目。而我们自己的 Github 账号，其实就是自己最有力的简历。

首先是 Github 的注册。然后就是使用 Github 的免费服务来托管自己的网站（例如，http://happypeter.github.io/ ）。


Github 的参考资料：可以到 http://haoduoshipin.com/all 下面输入搜索关键字 `github` 得到。



### Github 的正确使用姿势

直接到 Github.com 上点 `New File` 按钮，不是正确的使用方法。要了解正确的 Github 使用方法，首先要知道什么是 Git 。


Git 是一个可以安装到我们自己开发机器之上的软件（ Github 是一个网站）。Git 是一个版本控制工具，通常我们都是通过本地 Git 和 Github 的互动来完成版本控制工作的。


![](https://github.com/happypeter/digicity/blob/master/img/github-git.png?raw=true)


如上图所示，通常我们的 Github 工作流是这样的：

- 第一步，在我们自己的开发机器上安装 Atom 和 Git
- 第二步，注册 Github 账号，并开启新仓库
- 第三步，在开发机上做代码开发
- 第四步，通过 git push 命令来上传代码到 Github


OK，从上面流程可见，如果想要灵活运用 Github ，第一步先要学会 Git 的基本使用技巧。下面几个小节中，我们先来介绍 Git 的使用。


### 安装 Git


```
sudo apt-get update
sudo apt-get install git
```

注：apt-get 是 ubuntu 系统（ deepin 其实就是 ubuntu 的一个变种）的安装软件的命令。装软件的过程其实非常复杂，涉及到软件包依赖关系管理，这个原来 Peter 做过专职的一年的这个工作。这个领域的深入知识，应该是系统管理员（ sys admin ）去掌握，我们开发者没必要学那么深。

验证有没有装好，就敲

```
git --version
```

如果可以正确输出版本号，证明 Git 已经装好了。


### Git 本地工作流

Git 基本**本地工作流**（没有网络操作）可以分为以下几步：


- 第一步，使用 atom 创建并编辑项目
- 第二步，使用 `git init` 命令，把一个**普通项目**变成一个**Git 仓库**
- 第三步，使用 `git add -A` 命令，添加修改内容到 Git
- 第四步，使用 `git commit -m"my commit msg"` 命令，制作一个版本

### 下面来走一个 Git 本地工作流的 Demo


首先，我们先来创建一个项目：


```
mkdir trygit
```


然后进入项目，开始添加一个 index.html 文件


```
cd trygit
atom .
```


现在我们来把一个**普通项目**编程一个**仓库** ，需要执行

```
git init
```

init 是英文 initialization （初始化）的缩写。运行这个命令之后，如果我们敲

```
ls
```

会看到没有任何变化。因为，命令创建的 `.git` 文件夹是一个隐藏文件夹（所有以点开头的文件或者文件夹在 Linux 系统下都是隐藏的）。

要查看隐藏文件夹，可以敲

```
ls -a
```

这样可以看到输出中包含 `.git` 文件夹了。

`.git` 文件夹是 Git 仓库的心脏，未来所有的版本历史都会保存在 .git 文件夹中。所以

```
仓库 == 项目 + .git/改版历史
```

注：**仓库** ，英文是 **Repo** ，是我们使用 Git，Github 必须要了解的一个概念。

如果要制作一个**版本**，一共分两步：添加修改和制作版本。

首先来添加修改到 git ：

```
git add -A
```

注： -A 的意思是添加“所有当前修改内容”

要想把添加的内容制作成版本，还需要执行


```
git commit -m"I add a file"
```

注： `commit` 的意思是”做一件很重要的事”，但是在 git 这里，它的意思就是**版本** 。`-m` 就是 message 的简写，后面的内容是**再版留言** 。

问题来了，新用户首次执行上面的命令，会看到下面的报错信息

```
please tell me who you are
```

解决方法是，运行下面的命令

```
git config --global user.name  "Peter Wang"
git config --global user.email  happypeter1983@gmail.com
```

来设置用户名和邮箱。这样再次执行

```
$ git commit -m"I add a file"
[master (root-commit) dcb0329] I add index.html
 1 file changed, 1 insertion(+)
 create mode 100644 index.html
```

就可以成功制作一个版本了。也就是 Git 本地工作流就完成了一个完整的循序。

后续如果再做第二第三个版本，就是只需要：

- 修改内容用 atom
- git add -A
- git commit -m"msg"

即可。


### 查看改版历史

改版历史中，会包含多个版本。每个版本中起码要包含4个 W （ Who When What Why ）。

那么如何来查看改版历史呢？

```
git log -p
```

`log` 是日志的意思。`-p` 是 patch （补丁，也就是修改内容）的缩写。

![](https://github.com/happypeter/digicity/blob/master/img/4w-git.png?raw=true)


小技巧：`q` 可以退出 `git log -p` 的界面，敲 `j` 可以往下翻，敲 `k` 可以往上翻。


### 什么是“改版历史”？

改版历史（ revision history ）就是由新老各个版本组成的一条线。如下图

![](https://github.com/happypeter/digicity/blob/master/img/git-history.png?raw=true)



# 2016年11月9日


### git clone 命令


要想把 github 上的一个项目代码下载到本地有两种方式，一种就是普通下载（ download ）。但是，开发者基本上会选择另外一种方式，就是 clone 。

```
git clone git@github.com:happypeter/digicity.git
```

clone 的特点就是不仅仅可以得到最新代码，而且可以得到整个改版历史。而普通下载只能得到最新版本。
