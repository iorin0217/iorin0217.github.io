---
title: "MarkdownとKaTeXのテスト投稿"
subTitle: 日本語も
date: 2019-11-21
modified:
tags: ["markdown","LaTeX","テスト投稿"]
category: test
cover: markdown.png
---

# [Dropbox Paper](https://paper.dropbox.com/)で使うmarkdown

##　リスト
### 番号つき
1. aa
2. bb

### 箇条書き
- cc
- dd

### タスク
- [ ] ee
- [x] ff

## 書式
**太字**と _斜体_ と ~~取り消し~~

## 引用
> blockquote
>
> > nested blockquote
>
> more quotes

## コード
`コード`

```python
print("コードブロック")
```

## KaTeX
インライン数式$E=mc^2$\
アウトライン数式(参照なし)

$$
A = \left( \begin{array}{cccc}
a_{11} & a_{12} & \ldots & a_{1n} \\
a_{21} & a_{22} & \ldots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{m1} & a_{m2} & \ldots & a_{mn}
\end{array} \right) \tag{matrix}
$$

---

# その他
## 表
| Left align | Right align | Center align |
| :--------- | ----------: | :----------: |
| This       |        This |     This     |
| column     |      column |    column    |
| will       |        will |     will     |
| be         |          be |      be      |
| left       |       right |    center    |
| aligned    |     aligned |   aligned    |

## 画像
![markdown](./markdown.png)

## iframe

<iframe src="https://hatenablog-parts.com/embed?url=https%3A%2F%2Fmizchi.hatenablog.com%2Fentry%2F2018%2F10%2F23%2F221446" style="border: 0; width: 100%; height: 190px;" allowfullscreen scrolling="no"></iframe>

※僕の記事ではない