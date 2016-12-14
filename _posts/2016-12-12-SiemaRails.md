---
layout: post
title:  "siema-rails"
date:   2016-12-12 13:29:12 -0700
categories: diary
---

### Powerd by [Siema](https://pawelgrzybek.com/siema/)
<div class='siema'>
  <div><img src="/images/siema1.png" alt="siema1"></div>
  <div><img src="/images/siema3.png" alt="siema1"></div>
  <div><img src="/images/siema2.png" alt="siema1"></div>
</div>

<button class="prev">prev</button>
<button class="next">next</button>

## Siema, Super Light Carousel(English)

I have found a beautiful and lovely library written,<br>
which is super light and written in pure Javascript. Beautiful...<br>
The library have been built by [Pawel Grzybek](https://github.com/pawelgrzybek) recently, so there was no rails integration for it.<br>
I, who wanted to make a gem, built [siema-rails](https://github.com/Naggi-Goishi/siema-rails) quickly and [PR](https://github.com/pawelgrzybek/siema/pull/7) that I want [siema](https://pawelgrzybek.com/siema/) to introduce it.(2ed photo)<br>
[Grzybek](https://github.com/pawelgrzybek) pleasantly merge it and introduce [siema-rails](https://github.com/Naggi-Goishi/siema-rails), suprisingly, with my name.(3rd photo)<br>
Happy Happy, Thank you, [Grzybek](https://github.com/pawelgrzybek).

## 超軽量carousel, Siema(Japanese)

こんな素敵なライブラリを発見しました。
超軽量で生Javascriptで書かれたcarousel。美しい・・・<br>
これはとっても最近できたばかりなので、railsのgemとしてはありませんでした。<br>
なので、前々からgemを作ってみたかった僕が早急に[siema-rails](https://github.com/Naggi-Goishi/siema-rails)作って、本家[siema](https://pawelgrzybek.com/siema/)に、このgemを紹介してほしいと[PR](https://github.com/pawelgrzybek/siema/pull/7)を出してみました。（二枚目画像）<br>

そしたら、なんと、数分のうちに喜んでもらえた趣旨の返信が帰ってきて、僕の名前付きで紹介してくれました。(三枚目の画像)<br>
嬉しい。





<script>
  mySiema = new Siema();
  document.querySelector('.prev').addEventListener('click', () => mySiema.prev());
  document.querySelector('.next').addEventListener('click', () => mySiema.next());
</script>

