

# 時光图床

時光图床是一个简单的图床应用，允许用户通过浏览器浏览和管理图片。本项目使用 `Node.js` 和 `Express` 构建，并可以轻松部署到 `Vercel`。

详细介绍可参考文章[Vercel搭建图床](https://blog.shiguang666.eu.org/2024/08/28/b416c7847722/)

## 功能特性

- 浏览目录和图片
- 点击图片预览大图
- 支持多层级目录结构

## 安装和运行

### 前提条件

确保你已经安装了 `Node.js` 和 `npm`。

### 安装依赖

```bash
npm install
```

### 运行程序

```bash
node server.js
```

或者

```bash
npm start
```

运行后，打开浏览器访问 `http://localhost:8080`，即可看到图床应用。

## 效果演示

![show](https://github.com/Shiguang-coding/vercel-img/blob/main/public/2024/08/28/show.gif?raw=true)

## 部署到 Vercel

你可以使用 Vercel 一键部署按钮将本项目部署到 Vercel，无需手动配置。

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Shiguang-coding/blogpic)

### 手动部署步骤

1. **创建 Vercel 账户**：如果你还没有 Vercel 账户，首先需要注册一个。
2. **安装 Vercel CLI**（可选）：你可以使用 Vercel CLI 来部署你的项目。

    ```bash
    npm install -g vercel
    ```

3. **登录 Vercel**：

    ```bash
    vercel login
    ```

4. **部署项目**：

    ```bash
    vercel
    ```

    Vercel CLI 会引导你完成部署过程，包括设置项目名称、选择项目类型等。

5. **配置 `vercel.json`**（可选）：如果你需要自定义部署配置，可以在项目根目录下创建一个 `vercel.json` 文件。

    ```json
    {
      "version": 2,
      "builds": [
        {
          "src": "server.js",
          "use": "@vercel/node"
        }
      ],
      "routes": [
        {
          "src": "/(.*)",
          "dest": "/"
        }
      ]
    }
    ```

6. **访问你的应用**：部署完成后，Vercel 会提供一个 URL 来访问你的应用。你可以在 Vercel 仪表板中找到这个 URL，并进行进一步的域名配置。

## 项目结构

```
my-project/
├── public/
│   └── index.html
├── server.js
├── package.json
└── vercel.json
```

