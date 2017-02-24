---
layout: post
title:  "本を無料で貰えるサイトを作る No.5"
date:   2017-02-24 03:45:12 -0700
categories: diary hpbooks
description: "最近は、TECH::CAMPに沢山コミットしたり、将棋にハマって、NHK将棋杯を片っ端からみたりしています。"
---

![card](/images/hpbooks_card.png)

前回の更新から、結構時間立っちゃいました。

最近は、TECH::CAMPに沢山コミットしたり、将棋にハマって、NHK将棋杯を片っ端からみたりしています。秘密にしておきたいところですが、学校への時間があまり取れてません。

さて、前回にユーザーの登録を出来るようにしたので、今回はユーザーが登録した後のページを作成したいと思います。

ユーザー登録した後は、そのサイトのホーム画面に行くのが極めて自然だと思いますので、ホーム画面ですね。

さて、このホーム画面にどのような情報を載せるか考えたところ、「誰がどの本がほしい」という情報を載せることにしました。

そこで、形式なのですが、Facebookのカード形式のようなレイアウトでそのような情報をまとめたいと思います。

ひとまず、そのカードから作っていこうおと思い、軽く紙にイメージ図を起こして、コーディングしていきました。そして出来上がったのが上にある画像です。デザインナーの人がみたらいろいろフィードバックが来るんだろうなーと思いながら掲載してます（FBください）。

今回、学んだことは、Sinatraでの `render partial` の仕方です。ルーターと同じようにファイルを呼び出すだけなのですが・・・笑

{% highlight slim %}

h1 Hello
== slim :my_partial

{% endhighlight %}

そして、今回ハマったのが、 `slim` の記法です。これがまた、お恥ずかしい話なのですが、 `==` と `=` の違いを知らなくて、生のHTMLが画面に表示されて参りました。 `==` で、エスケープされてない文字列を所得することが出来ます。

上記のエラーで、Sinatraのソースコードを読んだのですが、 [`Tilt`](https://github.com/rtomayko/tilt) というクラスを使っていまして、これまた勉強になりました。僕の [playground](https://github.com/Naggi-Goishi/playground/tree/master/ruby/tilt)でいろいろ遊んでみまして、これを使いますと、railsなどの、 `reder` メソッドを再現できますね。これを気に、[ActionViewのコード](https://github.com/rails/rails/blob/master/actionview/lib/action_view/renderer/partial_renderer.rb)を読んでみましたが、どうやらこのライブラリは使われてないようでした。

{% highlight ruby %}

require 'tilt'
template = Tilt.new('my_view.slim')
# これが my_view.slim を htmlとして返してくれる。
template.render

{% endhighlight %}