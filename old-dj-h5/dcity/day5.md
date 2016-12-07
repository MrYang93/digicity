### 第五天的课程

### link 样式

{% highlight css %}
a {
  display: block;
  text-decoration: none;
  color: green;
  float: left;
  margin-left: 19px;
}
a:hover {
  color: red;
  background: #bada55;
}
{% endhighlight %}


### 今天的页面，制作 navbar 导航栏

<http://c.haoduoshipin.com/dcity/1000/day5/>

### 安装 sublime 的 emmet 插件

- <http://www.imooc.com/video/6401>
- <https://packagecontrol.io/> 装 package control 包管理工具是第一步
- 拷贝 sublime 2 的命令，然后到 sublime 敲 ctrl+~ 打开 sublime 终端，粘贴命令执行就好
- 然后，到 sublime 中，shift-control-p 然后输入 `install package`
- 接下来输入 `emmet` 回车，就可成功安装 emmet 了。


### 安装 github 客户端，来操作 gitcafe

下载： <http://windows.github.com>

- 需要注册一个 github.com 的账号，后面用来登陆 github 客户端
  - 如果不登录，后续操作可能会失败，因为没有 user.name user.email 的设置

安装之后，要添加 ssh key:

- 参考：<https://help.github.com/articles/generating-ssh-keys/> 但是步骤会略有不同，如下：
- 生成 ssh key 的命令： `ssh-keygen.exe` 就行了，不用加任何参数。后面直接回车几次，就行了。
- 图形界面中，C 盘-> 用户 -> Administrator.SC.20.... 找到 .ssh/id_rsa.pub 来添加就好了
- 添加到 gitcafe.com -> edit profile （ 编辑个人信息 ) -> ssh key
- 打开 git 命令行，这样默认的当前位置是 D 盘-> 我的文档 -> Github 文件夹里面
- 跳转到桌面 `cd C:\Users\Administrator\Desktop`
- 运行 `git clone git@gitcafe.com:xiaopeng/xiaopeng.git`
- 这样可以把 gitcafe 上的仓库克隆到本地
- 下一步到 github 客户端，点击左上角的加号，选择 add 这一项，找到 xiaopeng 这个文件夹，添加进来
- 这样，以后再往 xiaopeng 中添加新的文件夹或者图片都是可以的了
- 加完之后，到客户端中，先做版本，然后 sync 一下就可以了


### 扩展阅读

- <http://webfing.github.io/>
- <http://www.imooc.com/view/73>
- <http://haoduoshipin.com/v/121>
- <慕课网宣传视频：http://www.imooc.com/view/73>
