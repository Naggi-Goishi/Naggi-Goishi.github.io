---
layout: post
title:  "本を無料で貰えるサイトを作る No.4"
date:   2017-02-02 08:37:12 -0700
categories: diary hpbooks
description: "今回はかなり技術的な記事になると思います。サイトの画面が出来上がったり、キャラを作ったりだと、読んでて楽しいと思いますが、今回は完全に技術系になると思います。"
---

今回したこと

- mysql導入
- rake db:migrate
- ユーザーサインアップ

今回はかなり技術的な記事になると思います。サイトの画面が出来上がったり、キャラを作ったりだと、読んでて楽しいと思いますが、今回は完全に技術系になると思います。

前回の記事では、ユーザーを登録できるようにしようと言いましたが、その前にすることがありました。データーベースですね。いやー、悩みました。mysqlを使うか他のに乗り換えるか。普段は、一応mysqlを使っていますが、Railsを使ってる僕は正直中身を理解してません。むやみに新しいのに乗り換えるよりは、mysqlをしっかり理解したほうがいいと思ったので、mysqlにします。

データーベースをmysqlに決めたのならば、早速導入していきましょう。mysql2という素敵なgem（mysqlの操作をrubyから出来るようにしたもの）があるので、それを一度テストとして走らせてみます。

```ruby
require 'mysql2'
client = Mysql2::Client.new(host: => "localhost", username: "root")
result = client.query("CREATE DATABASE TESTING_MYSQL2")
```

こんな感じで、データーベースが作れます。では、実際にhpbooksに導入してみましょう。

これが意外と時間かかりました。何故かと言うと、調子にいろいろ実装してしまったからなんですね。

で、hpbooksでテーブルを作れるようにしたのが一番でかいです。

例えば、今回はUserのテーブルを作成しました、その時のmigration fileはこんな感じです。

```ruby
require_relative '../db_table'

table_name = 'users'
colums = {
  password: :string,
  email: :string,
  first_name: :string,
  middle_name: :string,
  last_name: :string
}

DB_Table.new(table_name, colums);
```

結構わかりやすい記述になっているかと思います。

作りたいテーブルの名前とカラムをハッシュの形で保存して、DB_Tableに渡してあげると、テーブルが作れてます。

このmigrate fileを実行するためには、コマンドで`rake db:migrate`と打てば実行されます。

さて、Userテーブルを作れたところで、実際にレコードを保存できるようにしましょう。

僕自身、ページ遷移が好きではないので、Ajaxで保存したいと思います。まず、ポップアップです。これもいちから実装しても良かったのですが、面倒だったので[vex](http://github.hubspot.com/vex/docs/welcome/)というライブラリを借ります。これを使えば、こんな感じでモーダルの実装がすぐに出来てしまいます。

![user signup](/images/signup.png)

このJavascriptで受け取ったデーターをhpbooksのサーバーに送らなければ　いけません。（この発送に至るのに時間かかった、Ajaxといいます）

どのようにするのかというと、これはJavascripのコードで僕のサーバーにデーターとともに、HTTPリクエストを送ればいいのです。データーをJsonの形にするのを忘れずに・・

で、あとは、Rubyの方でパスワードを暗号化してあげて、データーベースの保存します。

このように流れで、ユーザーの情報は保存されました。

サインアップはようやく完成ですね。