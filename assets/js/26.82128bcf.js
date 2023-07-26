(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{424:function(s,a,t){"use strict";t.r(a);var n=t(2),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[s._v("#")]),s._v(" 概述")]),s._v(" "),a("p",[s._v("本文介绍了如何在云服务器中搭建服务运行环境")]),s._v(" "),a("blockquote",[a("p",[s._v("以下基于 "),a("code",[s._v("CentOS 7.9")]),s._v(" 环境")])]),s._v(" "),a("h2",{attrs:{id:"安装-node-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-node-js"}},[s._v("#")]),s._v(" 安装 Node.js")]),s._v(" "),a("p",[s._v("官方文档："),a("a",{attrs:{href:"https://github.com/nodejs/help/wiki/Installation",target:"_blank",rel:"nofollow noopener noreferrer"}},[s._v("https://github.com/nodejs/help/wiki/Installation"),a("OutboundLink")],1)]),s._v(" "),a("h3",{attrs:{id:"下载源码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载源码"}},[s._v("#")]),s._v(" 下载源码")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://nodejs.org/zh-cn/",target:"_blank",rel:"nofollow noopener noreferrer"}},[s._v("Node.js"),a("OutboundLink")],1),s._v(" "),a("code",[s._v("v16.15.0")]),s._v(" 下载地址："),a("a",{attrs:{href:"https://nodejs.org/download/release/v16.15.0/",target:"_blank",rel:"nofollow noopener noreferrer"}},[s._v("https://nodejs.org/download/release/v16.15.0/"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("在 linux 指定目录下执行 "),a("code",[s._v("wget https://nodejs.org/download/release/v16.15.0/node-v16.15.0-linux-x64.tar.xz")]),s._v(" 命令下载源码")]),s._v(" "),a("h3",{attrs:{id:"解压"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解压"}},[s._v("#")]),s._v(" 解压")]),s._v(" "),a("p",[s._v("解压安装脚本：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# node 版本")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("VERSION")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("v16.15.0\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 系统版本")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DISTRO")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("linux-x64\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装位置")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LOCATION")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/lib/nodejs\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 以递归方式创建目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LOCATION")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装 node（实际上就是解压文件到指定目录）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-xJvf")]),s._v(" node-"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$VERSION")]),s._v("-"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$DISTRO")]),s._v(".tar.xz "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-C")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LOCATION")]),s._v("\n")])])]),a("blockquote",[a("p",[s._v("需要注意 Node.js 安装包位置与脚本位置")])]),s._v(" "),a("h3",{attrs:{id:"配置环境变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置环境变量"}},[s._v("#")]),s._v(" 配置环境变量")]),s._v(" "),a("p",[s._v("通过 "),a("code",[s._v("echo $SHELL")]),s._v(" 查看服务器当前命令终端类型是什么，到对应的文件进行配置")]),s._v(" "),a("p",[s._v("例如终端类型为 "),a("code",[s._v("/bin/bash")]),s._v("，则需要到 "),a("code",[s._v("~/.bashrc")]),s._v(" 文件中进行配置（添加如下内容）：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# config environment variables")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/lib/nodejs/node-v16.15.0-linux-x64/bin/:"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v("\n")])])]),a("blockquote",[a("p",[s._v("系统环境变量是在 "),a("code",[s._v("/etc/profile")]),s._v(" 中定义的")])]),s._v(" "),a("h2",{attrs:{id:"安装-git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-git"}},[s._v("#")]),s._v(" 安装 Git")]),s._v(" "),a("h3",{attrs:{id:"通过-yum-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过-yum-安装"}},[s._v("#")]),s._v(" 通过 "),a("code",[s._v("yum")]),s._v(" 安装")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装")]),s._v("\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 卸载")]),s._v("\nyum remove "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v("\n")])])]),a("blockquote",[a("p",[s._v("此方式安装 git 版本比较老")])]),s._v(" "),a("h3",{attrs:{id:"通过源码安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过源码安装"}},[s._v("#")]),s._v(" 通过源码安装")]),s._v(" "),a("p",[s._v("linux 镜像："),a("a",{attrs:{href:"https://mirrors.edge.kernel.org/pub/software/scm/git/",target:"_blank",rel:"nofollow noopener noreferrer"}},[s._v("https://mirrors.edge.kernel.org/pub/software/scm/git/"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("windows 镜像："),a("a",{attrs:{href:"https://registry.npmmirror.com/binary.html?path=git-for-windows/",target:"_blank",rel:"nofollow noopener noreferrer"}},[s._v("https://registry.npmmirror.com/binary.html?path=git-for-windows/"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("通过以下脚本安装 git：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下载源码")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://mirrors.edge.kernel.org/pub/software/scm/git/git-2.36.1.tar.xz\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解压（可在末尾添加 -C path，解压到指定目录）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-xJvf")]),s._v(" git-2.36.1.tar.xz\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" git-2.36.1\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 编译")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" configure\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定编译产物存放路径")]),s._v("\n./configure "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--prefix")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/lib/git-2.36.1\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("prefix")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/lib/git-2.36.1\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])])]),a("p",[s._v("遇到的问题 & 解决方案：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# make /bin/sh: autoconf: command not found")]),s._v("\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" autoconf\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git-compat-util.h:1427:18: fatal error: zlib.h: No such file or directory")]),s._v("\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" zlib-devel\n")])])]),a("p",[s._v("在 "),a("code",[s._v(".bashrc")]),s._v(" 中添加环境变量配置（内容紧接安装 Node.js）：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Config environment variables")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/lib/nodejs/node-v16.15.0-linux-x64/bin:"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/lib/git-2.36.1/bin:"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")]),s._v("\n")])])]),a("p",[s._v("验证：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使修改立即生效")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ~/.bashrc\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 验证")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--version")]),s._v("\n")])])]),a("h2",{attrs:{id:"安装-docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-docker"}},[s._v("#")]),s._v(" 安装 Docker")]),s._v(" "),a("p",[s._v("官方文档："),a("a",{attrs:{href:"https://docs.docker.com/engine/install/centos/",target:"_blank",rel:"nofollow noopener noreferrer"}},[s._v("https://docs.docker.com/engine/install/centos/"),a("OutboundLink")],1)]),s._v(" "),a("h3",{attrs:{id:"卸载旧版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#卸载旧版本"}},[s._v("#")]),s._v(" 卸载旧版本")]),s._v(" "),a("p",[s._v("老版本的 Docker 命名为 docker 或 docker-engine，安装新版本的 Docker 之前需要卸载老版本及其依赖项，卸载命令如下：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum remove "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n                docker-client "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n                docker-client-latest "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n                docker-common "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n                docker-latest "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n                docker-latest-logrotate "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n                docker-logrotate "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n                docker-engine\n")])])]),a("p",[s._v("注意：存储在 "),a("code",[s._v("/var/lib/docker/")]),s._v(" 目录下的镜像不会在卸载老版本 Docker 时自动删除")]),s._v(" "),a("h3",{attrs:{id:"通过代码仓安装-推荐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过代码仓安装-推荐"}},[s._v("#")]),s._v(" 通过代码仓安装（推荐）")]),s._v(" "),a("p",[s._v("通过 Docker 代码仓进行安装，后续升级也通过代码仓，官方推荐")]),s._v(" "),a("p",[a("strong",[s._v("1. 在下载代码仓之前，需要安装 "),a("code",[s._v("yum-utils")]),s._v("，它提供了 "),a("code",[s._v("yum-config-manager")]),s._v(" 工具")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" yum-utils\n")])])]),a("p",[s._v("通过 "),a("code",[s._v("yum-config-manager")]),s._v(" 下载代码仓：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum-config-manager "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --add-repo "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  https://download.docker.com/linux/centos/docker-ce.repo\n")])])]),a("p",[s._v("国内镜像：")]),s._v(" "),a("ul",[a("li",[s._v("阿里云：http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo")]),s._v(" "),a("li",[s._v("清华大学：https://mirrors.tuna.tsinghua.edu.cn/docker-ce/linux/centos/docker-ce.repo")])]),s._v(" "),a("blockquote",[a("p",[s._v("代码仓配置文件存放位置："),a("code",[s._v("/etc/yum.repos.d/docker-ce.repo")])])]),s._v(" "),a("p",[a("strong",[s._v("2. 安装最新版本 Docker")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin\n")])])]),a("p",[s._v("安装过程中如果提示是否需要接受 GPG key，验证 "),a("code",[s._v("Fingerprint")]),s._v(" 如果为 "),a("code",[s._v("060a 61c5 1b55 8a7f 742b 77aa c52f eb6b 621e 9f35")]),s._v("时，选择接受，如下：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s2.loli.net/2023/03/05/cBeHlgGZjyUpJ9Y.png",alt:"image.png"}})]),s._v(" "),a("blockquote",[a("p",[s._v("安装完成后，Docker 默认是没有启动的，安装过程中自动创建了 "),a("code",[s._v("docker")]),s._v(" 用户组但没有添加用户")])]),s._v(" "),a("p",[a("strong",[s._v("3. 启动 Docker")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl start "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("\n")])])]),a("blockquote",[a("p",[a("code",[s._v("systemctl")]),s._v(" 命令是 Systemd 中最重要的一个命令，用于对服务进行启动，停止等操作")])]),s._v(" "),a("p",[a("strong",[s._v("4. 验证安装结果")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run hello-world\n")])])]),a("p",[s._v("该命令下载了一个测试镜像并在容器中运行，当测试镜像在容器中运行时，会打印确认成功的信息，如下：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s2.loli.net/2023/03/05/DgWHKuYUABJsxTI.png",alt:"image.png"}})]),s._v(" "),a("h3",{attrs:{id:"通过-rpm-包安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过-rpm-包安装"}},[s._v("#")]),s._v(" 通过 rpm 包安装")]),s._v(" "),a("p",[s._v("此方式需要下载 rpm 包后手动进行安装，后续升级仍需要重复前面操作，适用于无法联网的机器")]),s._v(" "),a("p",[s._v("安装教程参考："),a("a",{attrs:{href:"https://docs.docker.com/engine/install/centos/#install-from-a-package",target:"_blank",rel:"nofollow noopener noreferrer"}},[s._v("https://docs.docker.com/engine/install/centos/#install-from-a-package"),a("OutboundLink")],1)]),s._v(" "),a("h3",{attrs:{id:"通过脚本安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过脚本安装"}},[s._v("#")]),s._v(" 通过脚本安装")]),s._v(" "),a("p",[s._v("参考链接："),a("a",{attrs:{href:"https://docs.docker.com/engine/install/centos/#install-using-the-convenience-script",target:"_blank",rel:"nofollow noopener noreferrer"}},[s._v("https://docs.docker.com/engine/install/centos/#install-using-the-convenience-script"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"安装-nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-nginx"}},[s._v("#")]),s._v(" 安装 nginx")]),s._v(" "),a("p",[s._v("官方开源版下载源："),a("a",{attrs:{href:"https://nginx.org/en/download.html",target:"_blank",rel:"nofollow noopener noreferrer"}},[s._v("https://nginx.org/en/download.html"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("Linux 安装文档："),a("a",{attrs:{href:"https://nginx.org/en/linux_packages.html",target:"_blank",rel:"nofollow noopener noreferrer"}},[s._v("https://nginx.org/en/linux_packages.html"),a("OutboundLink")],1)]),s._v(" "),a("h3",{attrs:{id:"创建-yum-nginx-仓库配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建-yum-nginx-仓库配置文件"}},[s._v("#")]),s._v(" 创建 yum nginx 仓库配置文件")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" /etc/yum.repos.d/nginx.repo\n")])])]),a("h3",{attrs:{id:"修改配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改配置文件"}},[s._v("#")]),s._v(" 修改配置文件")]),s._v(" "),a("p",[s._v("在配置文件中添加以下内容：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("nginx-stable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("nginx stable repo\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("baseurl")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://nginx.org/packages/centos/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$releasever")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$basearch")]),s._v("/\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gpgcheck")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("enabled")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gpgkey")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://nginx.org/keys/nginx_signing.key\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("module_hotfixes")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("nginx-mainline"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("nginx mainline repo\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("baseurl")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://nginx.org/packages/mainline/centos/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$releasever")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$basearch")]),s._v("/\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gpgcheck")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("enabled")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gpgkey")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://nginx.org/keys/nginx_signing.key\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("module_hotfixes")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\n")])])]),a("p",[s._v("默认会使用稳定版 nginx 包，如果要使用开发版（mainline）包，需要运行以下命令：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum-config-manager "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--enable")]),s._v(" nginx-mainline\n")])])]),a("h3",{attrs:{id:"安装-nginx-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-nginx-2"}},[s._v("#")]),s._v(" 安装 nginx")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" nginx\n")])])]),a("p",[s._v("安装过程中如果提示是否需要接受 GPG key，验证 "),a("code",[s._v("Fingerprint")]),s._v(" 如果为 "),a("code",[s._v("573b fd6b 3d8f bc64 1079 a6ab abf5 bd82 7bd9 bf62")]),s._v("时，选择接受")]),s._v(" "),a("h3",{attrs:{id:"验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#验证"}},[s._v("#")]),s._v(" 验证")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("nginx "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# nginx version: nginx/1.22.1")]),s._v("\n")])])]),a("h2",{attrs:{id:"扩展-一-自定义终端命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#扩展-一-自定义终端命令"}},[s._v("#")]),s._v(" 扩展（一）自定义终端命令")]),s._v(" "),a("ol",[a("li",[s._v("本质上 "),a("code",[s._v(".bashrc")]),s._v(" 是一个 shell 脚本，会在打开终端时就执行")]),s._v(" "),a("li",[s._v("只要给文件添加可执行权限："),a("code",[s._v("chmod +x filename")]),s._v("，不管该文件是否有 "),a("code",[s._v(".sh")]),s._v(" 后缀，该文件就是一个 shell 脚本，例如 "),a("code",[s._v(".bashrc")]),s._v("、"),a("code",[s._v(".zshrc")])]),s._v(" "),a("li",[s._v("环境变量是一系列目录的组合，每个目录包含的 shell 脚本在命令行中可以直接执行，例如 Node.js 目录：")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s2.loli.net/2023/03/04/tJceUbjQ2fRG6TO.png",alt:"image.png"}})]),s._v(" "),a("blockquote",[a("p",[a("code",[s._v("npm -> ../lib/node_modules/npm/bin/npm-cli.js")]),s._v(" 表示文件重定向（JS 只要有 Node.js 环境也可以像 "),a("code",[s._v("/bin/bash")]),s._v(" 一样作为一种终端类型）")])]),s._v(" "),a("p",[s._v("在"),a("RouterLink",{attrs:{to:"/operation-system/connect.html#设置命令别名"}},[s._v("连接远程服务器")]),s._v("章节提到的 "),a("code",[s._v("alias")]),s._v(" 方式可以进一步升级，将连接脚本的目录在配置文件（"),a("code",[s._v(".bashrc")]),s._v("、"),a("code",[s._v(".zshrc")]),s._v(" 等）中添加到环境变量中：")],1),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("directory_path:"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")]),s._v("\n")])])]),a("p",[s._v("注意：需要通过 "),a("code",[s._v("chmod +x filename")]),s._v(" 命令给目录下脚本文件添加可执行权限、删除文件后缀，最后重启终端")]),s._v(" "),a("p",[s._v("输入脚本名称即可和 "),a("code",[s._v("node")]),s._v("、"),a("code",[s._v("npm")]),s._v("、"),a("code",[s._v("npx")]),s._v(" 等一样，拥有自己的自定义命令!!!")]),s._v(" "),a("h2",{attrs:{id:"扩展-二-查看-yum-install-后文件存放位置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#扩展-二-查看-yum-install-后文件存放位置"}},[s._v("#")]),s._v(" 扩展（二）查看 yum install 后文件存放位置")]),s._v(" "),a("p",[s._v("参考博客："),a("a",{attrs:{href:"https://blog.csdn.net/wd2014610/article/details/79659073",target:"_blank",rel:"nofollow noopener noreferrer"}},[s._v("如何查看 yum 安装的软件路径（不要再忘了）"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("以 nginx 为例")]),s._v(" "),a("h3",{attrs:{id:"查找安装包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查找安装包"}},[s._v("#")]),s._v(" 查找安装包")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-qa")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" nginx\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# nginx-filesystem-1.20.1-10.el7.noarch")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# nginx-1.22.1-1.el7.ngx.x86_64")]),s._v("\n")])])]),a("blockquote",[a("p",[s._v("rpm：redhat package manager，用于管理套件，更多请参考 "),a("a",{attrs:{href:"https://www.runoob.com/linux/linux-comm-rpm.html",target:"_blank",rel:"nofollow noopener noreferrer"}},[s._v("https://www.runoob.com/linux/linux-comm-rpm.html"),a("OutboundLink")],1)])]),s._v(" "),a("h3",{attrs:{id:"查找安装路径"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查找安装路径"}},[s._v("#")]),s._v(" 查找安装路径")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ql")]),s._v(" nginx-1.22.1-1.el7.ngx.x86_64\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /etc/logrotate.d/nginx")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /etc/nginx")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /etc/nginx/conf.d")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /etc/nginx/conf.d/default.conf")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /etc/nginx/fastcgi_params")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /etc/nginx/mime.types")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /etc/nginx/modules")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /etc/nginx/nginx.conf")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /etc/nginx/scgi_params")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /etc/nginx/uwsgi_params")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /usr/lib/systemd/system/nginx-debug.service")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /usr/lib/systemd/system/nginx.service")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /usr/lib64/nginx")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /usr/lib64/nginx/modules")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /usr/libexec/initscripts/legacy-actions/nginx")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /usr/libexec/initscripts/legacy-actions/nginx/check-reload")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /usr/libexec/initscripts/legacy-actions/nginx/upgrade")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /usr/sbin/nginx")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /usr/sbin/nginx-debug")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /usr/share/doc/nginx-1.22.1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /usr/share/doc/nginx-1.22.1/COPYRIGHT")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /usr/share/man/man8/nginx.8.gz")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /usr/share/nginx")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /usr/share/nginx/html")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /usr/share/nginx/html/50x.html")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /usr/share/nginx/html/index.html")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /var/cache/nginx")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /var/log/nginx")]),s._v("\n")])])]),a("h3",{attrs:{id:"查看-nginx-命令脚本位置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看-nginx-命令脚本位置"}},[s._v("#")]),s._v(" 查看 "),a("code",[s._v("nginx")]),s._v(" 命令脚本位置")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看环境变量")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /usr/local/lib/git-2.36.1/bin:/usr/local/lib/nodejs/node-v16.15.0-linux-x64/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/root/bin")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 对比 rpm 查询的安装路径，不难发现，nginx 命令脚本位于 /usr/sbin/nginx")]),s._v("\n/usr/sbin/nginx "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# nginx version: nginx/1.22.1")]),s._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);