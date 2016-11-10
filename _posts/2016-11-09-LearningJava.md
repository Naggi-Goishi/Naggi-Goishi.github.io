---
layout: post
title:  "Java"
date:   2016-11-09 22:20:12 -0700
categories: diary programming
---

&emsp;学校の授業でJavaを勉強している。うん。めんどくさいです。
でも、さっきClassについてRubyと全く違う挙動をするらしいから驚いていた。（僕基本的にRuby描いてる）これはなれるまで苦労しそうだ。

{% highlight ruby %}

class Book
  attr_accessor :title
end

natume = Book.new()
#以下２つの記述はattr_accessorのおかげで出来る。
natume.title = "こころ" #代入（セッターメソッド）
natume.title #=> "こころ"
{% endhighlight %}

上記は、普段僕が見慣れているRubyのコードだ。
.titleというのはメソッドであり、定義しない限り使えない。（今回はattr_accessor使ってるけど）
でもJavaは違う。

{% highlight java %}

class Myapp
{
  static void main(String[] args)
  {
    //Book型のnatumeの宣言
    Book natume;
    natume = new Book();
    natume.title = "こころ"; //代入
    natume.title //=>"こころ"
  }
}

class Book
{
  public String title;
}

{% endhighlight %}

僕は「なん・・だと・・」となりました。
Javaでは、変数の宣言をしてあげなければなりません。それはRubyとは違い煩わしいところです。
ただ、クラスの見てほしい。クラス変数（メンバー変数）を宣言するだけで、セッターメソッドを使えるだと・・・！！（セッターメソッドではない気がするが）
よくわからん。Rubyでいうと、クラスの直下でクラス変数を定義しているようなものに見える。けど挙動が全く違う。
Rubyでは変数の宣言が必要ないから、メソッドで定義する必要性はわかる。でもそういう次元じゃない。
宣言が具体的になにをしているのかを知る必要がありそうだ。
あとで、調べて、ブログにする。