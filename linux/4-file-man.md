---
title: 文件操作
---

文件操作也包括文件夹操作（ Linux 系统下万物皆文件）。主要涉及：

- 文件创建：atom/touch
- 文件夹创建： mkdir
- 文件夹删除：rm -r folder
- 文件移动： mv file ../
- 文件删除： rm file

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

```
mv 被移动的文件或者文件夹的路径  不存在的位置/文件名
```

这样进行的就是原来文件的重命名操作。

### 复制粘贴

用 `cp` 这个命令。

```
cp 被拷贝的的文件  目标位置
```

拷贝文件夹

```
cp -r 被拷贝的的文件夹 目标位置
```

### 操作案例

把 aaa/ 文件夹中的所有文件，都拷贝到 bbb 文件夹中

```
$ ls aaa
aa bb cc
$ ls bbb
$ mv  aaa/* bbb
$ ls aaa
$ ls bbb
aa bb cc
```


### 参考资料

- [驾驭命令行怪兽](http://haoqicat.com/ride-cli-monster)
