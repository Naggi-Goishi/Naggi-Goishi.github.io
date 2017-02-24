---
layout: post
title:  "本を無料で貰えるサイトを作る No.2"
date:   2017-01-26 21:25:12 -0700
categories: diary hpbooks
description: "何をするにせよ、開発していく過程でプロジェクトの名前がないと不便なので仮名として、hpbooksにする。"
---

<small>モデルさんかわいい</small>

![A girl with a book](/images/aWomanReadingABook.png)


Webサイトを作るとなるとさっそくガンガンコード書いていきたいけど、今回はいつもと違ってしっかりと几帳面な開発工程を踏みたい。なので、READMEを書こうかな。（READMEはそのプロジェクトを説明する文献的なもの）

何をするにせよ、開発していく過程でプロジェクトの名前がないと不便なので仮名として、hpbooksにする。語順はHPBを意識し変えて、Happy Presents, books を略した。読み方は、「エイチピーブックス」でいいと思う。

さて、READMEに何を書くかを決めよう。まず、このプロジェクトを１文ぐらいで説明する。僕はこのプロジェクトのテーマを大事にしたいから、テーマを書く。とりあえず、こんなものでいいか。技術系の事とかはすべて、Wikiに収めよう。

出来ました。まだ、何も中身のないのに[readme](https://github.com/Naggi-Goishi/hpbooks/blob/master/README.md)だけ作ってしまいました。こんなプロジェクト初めてみました。でもこれで軽い文献は出来たので実際にコーディングの方に入っていきます。

さて、[前回](2017-01-26-BuildingASite.md)で決まったことといえば開発環境。

[Sinatra](http://www.sinatrarb.com/)を使うことにしました。なので、ひとまずは公式ドキュメントを見て開発を進めていきましょう。

公式ドキュメントでは、hello world(一番単純なコード)の例が載ってました。

{% highlight ruby %}

# myapp.rb
require 'sinatra'

get '/' do
  'Hello world!'
end

{% endhighlight %}

これだけあれば、ホームページは出来てしまいますね。では、さっそく、ルーティングから初めて、Hello hpbooksのコードを書いていきます。

hpbooks.rbというファイルを作り、以下のように記述して、`ruby`コマンドで動かしてみます。

{% highlight ruby %}

require 'sinatra'

get '/' do
  "hello hpbooks! and sinatra"
end

{% endhighlight %}

そして、localhost:4567をブラウザで開いてみるとちゃんと出来てました。ほっ。

この前の過程で、gemfileを作って、もちろん、sinatraをinstallしてます。

あれ、なんか丁寧に解説してしまった。

ひとまず、その後は、`slim`と`scss`をインストールして、終わりました。

ちなみに、今回作ったものは[hpbooks](https://github.com/Naggi-Goishi/hpbooks)においてあります。。


この後は、デザインのレイアウトを決めたいと思います。
