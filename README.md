# Chariot Blog

个人博客，使用 Astro 和 Fuwari 主题构建，通过 GitHub Actions 发布到 GitHub Pages。

## 本地开发

```sh
npm install
npm run dev
```

## 发布文章

```sh
npm run new-post -- article-name
```

然后编辑 `src/content/posts/article-name.md`，提交并推送到 `main` 分支即可自动发布。

## 构建

```sh
npm run check
npm run build
```

网站地址：<https://blog.chariot.top/>

主题基于 MIT 许可的 [Fuwari](https://github.com/saicaca/fuwari)，许可证见 `LICENSE`。
