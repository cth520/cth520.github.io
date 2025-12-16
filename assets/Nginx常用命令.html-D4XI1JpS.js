import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,d as a,o as e}from"./app-nilOxK71.js";const l={};function p(t,s){return e(),i("div",null,[...s[0]||(s[0]=[a(`<h2 id="查找安装路径" tabindex="-1"><a class="header-anchor" href="#查找安装路径"><span>查找安装路径</span></a></h2><h2 id="查看nginx-目录及状态" tabindex="-1"><a class="header-anchor" href="#查看nginx-目录及状态"><span>查看nginx 目录及状态</span></a></h2><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-js"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">nginx</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">t</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="nginx-重启" tabindex="-1"><a class="header-anchor" href="#nginx-重启"><span>nginx 重启</span></a></h2><p>nginx -s reload</p><h4 id="停止nginx" tabindex="-1"><a class="header-anchor" href="#停止nginx"><span>停止nginx</span></a></h4><p>nginx -s stop</p><h4 id="启动nginx" tabindex="-1"><a class="header-anchor" href="#启动nginx"><span>启动nginx</span></a></h4><p>nginx</p><h4 id="查看当前nginx进程" tabindex="-1"><a class="header-anchor" href="#查看当前nginx进程"><span>查看当前nginx进程</span></a></h4><p>ps -ef | grep nginx</p><p>找到你的nginx的 nginx.conf文件 vim 去查看和修改这文件</p><p>vim /www/server/nginx/conf/nginx.conf</p><p>输入vim进入到文件之后，按i键进入INSERT模式，</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-js"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">server</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        listen</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 80</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;  # </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">端口号</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        server_name</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> localhost</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; # </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">有域名就填域名</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">，</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">没有就填ip地址或者本机</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        include</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> /</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">etc</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">/</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">nginx</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">/</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">d</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/*.conf;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        location / {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        root /www/项目目录/build;   # 打包后的文件目录</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        index index.html index.htm;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        try_files $uri $uri/ @router;  # 开启了browserRouter模式就写这个</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        error_page 404 /404.html;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        location = /404.html {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        error_page 500 502 503 504 /50x.html;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        location = /50x.html {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        }</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>按esc键退出输入模式，然后输入:wq保存退出之后再在命令行输入下面指令重启nginx服务</p><p>重启nginx</p><p>nginx -s reload</p><p>或者（可以看到我的安装路径是在 /www/server/nginx，默认在这个目录下，有一个sbin目录，它下面有个nginx文件，这个nginx是个可执行文件，<br> 执行启动命令：</p><p>/www/server/nginx/sbin/nginx）</p><h1 id="端口、防火墙" tabindex="-1"><a class="header-anchor" href="#端口、防火墙"><span>端口、防火墙</span></a></h1><p>CentOS7默认安装了firewalld防火墙，如果系统开启了防火墙，那我们就要手动去开放端口号</p><p>查看防火墙是否开启</p><p>systemctl status firewalld</p><p>开启防火墙</p><p>systemctl start firewalld<br> 关闭防火墙</p><p>systemctl stop firewalld<br> 防火墙开机自启</p><p>systemctl enable firewalld<br> 停止并且禁用防火墙</p><p>systemctl disable firewalld</p><p>查看目前已开放端口</p><p>netstat -anp<br> 查看指定端口是否已经开启-前提是要先开启防火墙</p><p>firewall-cmd --query-port=9090/tcp<br> 对外开放端口号</p><p>firewall-cmd --add-port=123/tcp --permanent # permanent表示永久开放，没有此参数重启后失效</p><h2 id="重新加载添加的端口" tabindex="-1"><a class="header-anchor" href="#重新加载添加的端口"><span>重新加载添加的端口</span></a></h2><p>firewall-cmd --reload<br> 关闭开放端口号</p><p>firewall-cmd --permanent --remove-port=9090/tcp</p><div class="language-conf line-numbers-mode" data-highlighter="shiki" data-ext="conf" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-conf"><span class="line"><span></span></span>
<span class="line"><span>#user  nobody;</span></span>
<span class="line"><span>user  root;</span></span>
<span class="line"><span>worker_processes  1;</span></span>
<span class="line"><span>worker_rlimit_nofile 65535;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>error_log /usr/local/webserver/nginx/logs/nginx_error.log crit;</span></span>
<span class="line"><span>pid /usr/local/webserver/nginx/nginx.pid;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#error_log  logs/error.log;</span></span>
<span class="line"><span>#error_log  logs/error.log  notice;</span></span>
<span class="line"><span>#error_log  logs/error.log  info;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#pid        logs/nginx.pid;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>events {</span></span>
<span class="line"><span>    worker_connections  1024;</span></span>
<span class="line"><span>     use epoll;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>http {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 设置常用的MIME类型</span></span>
<span class="line"><span>    include       mime.types;</span></span>
<span class="line"><span>    default_type  application/octet-stream;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 反向代理及负载均衡配置</span></span>
<span class="line"><span>    upstream backend_server {</span></span>
<span class="line"><span>        server 127.0.0.1:8080;</span></span>
<span class="line"><span>        server 127.0.0.1:8081;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  # server 开始</span></span>
<span class="line"><span>server {</span></span>
<span class="line"><span>    listen       80;</span></span>
<span class="line"><span>    server_name admin.vuereact.com;</span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>        alias  /usr/local/webserver/nginx/html/admin/;</span></span>
<span class="line"><span>        index  index.html index.html;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     location /api/ {</span></span>
<span class="line"><span>        proxy_pass http://vuereact.top:5627/;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    # 重点：解决二级目录部署时，访问css、js等静态资源报404的问题</span></span>
<span class="line"><span>    location /assets/ {</span></span>
<span class="line"><span>            alias  /usr/local/webserver/nginx/html/admin/assets/;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span># server 结束</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    server {</span></span>
<span class="line"><span>    listen       80;</span></span>
<span class="line"><span>    server_name project1.vuereact.com;</span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>        alias  /usr/local/webserver/nginx/html/home/;</span></span>
<span class="line"><span>        index  index.html index.html;</span></span>
<span class="line"><span>     }</span></span>
<span class="line"><span>    location /admin/ {</span></span>
<span class="line"><span>        alias  /usr/local/webserver/nginx/html/admin/;</span></span>
<span class="line"><span>        index  index.html index.html;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   # 重点：解决二级目录部署时，访问css、js等静态资源报404的问题</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            location /assets/ {</span></span>
<span class="line"><span>                   alias  /usr/local/webserver/nginx/html/admin/assets/;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,37)])])}const c=n(l,[["render",p]]),h=JSON.parse('{"path":"/posts/%E6%9C%8D%E5%8A%A1%E7%AB%AF/%E5%89%8D%E7%AB%AF%E8%A6%81%E6%87%82%E5%BE%97%E9%83%A8%E5%88%86Nginx/Nginx%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html","title":"端口、防火墙","lang":"zh-CN","frontmatter":{"description":"查找安装路径 查看nginx 目录及状态 nginx 重启 nginx -s reload 停止nginx nginx -s stop 启动nginx nginx 查看当前nginx进程 ps -ef | grep nginx 找到你的nginx的 nginx.conf文件 vim 去查看和修改这文件 vim /www/server/nginx/con...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"端口、防火墙\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-11-12T06:05:05.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"陈嗯嗯\\",\\"url\\":\\"https://845758376.github.io\\"}]}"],["meta",{"property":"og:url","content":"https://845758376.github.io/posts/%E6%9C%8D%E5%8A%A1%E7%AB%AF/%E5%89%8D%E7%AB%AF%E8%A6%81%E6%87%82%E5%BE%97%E9%83%A8%E5%88%86Nginx/Nginx%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"}],["meta",{"property":"og:site_name","content":"cth个人博客"}],["meta",{"property":"og:title","content":"端口、防火墙"}],["meta",{"property":"og:description","content":"查找安装路径 查看nginx 目录及状态 nginx 重启 nginx -s reload 停止nginx nginx -s stop 启动nginx nginx 查看当前nginx进程 ps -ef | grep nginx 找到你的nginx的 nginx.conf文件 vim 去查看和修改这文件 vim /www/server/nginx/con..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-11-12T06:05:05.000Z"}],["meta",{"property":"article:modified_time","content":"2025-11-12T06:05:05.000Z"}]]},"git":{"createdTime":1762927505000,"updatedTime":1762927505000,"contributors":[{"name":"陈天华","username":"","email":"845758376@qq.com","commits":1}]},"readingTime":{"minutes":2,"words":600},"filePathRelative":"posts/服务端/前端要懂得部分Nginx/Nginx常用命令.md","excerpt":"<h2>查找安装路径</h2>\\n<h2>查看nginx 目录及状态</h2>\\n<div class=\\"language-js line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"js\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code class=\\"language-js\\"><span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">nginx</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\"> -</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">t</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{c as comp,h as data};
