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
### ローカル
![markdown](./markdown.png)

### リモート

## embed

<iframe src="https://mizchi.hatenablog.com/entry/2018/10/23/221446" width="600" height="400"></iframe>

※僕の記事ではない