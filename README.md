# karaoke-slideshow

karaoke-slideshow

## Overview / 概要

「カラオケ画面」を模したアプリです。

上部 slideshow, 下部にカラオケテロップ（文字）が流れます。

ライブラリ化はしておらず、決め打ちサンプルです。

結婚式の余興の替え歌等に適しているかもしれません
（というか友人の結婚式余興で作ったアプリのサンプル化です）。

## Demo / デモ

https://naohikonaohiko.github.io/karaoke-slideshow/build/start.html

左上の「start」リンククリックで始まります。

解像度1280x720決め打ちです。。
F11 キーで全画面再生するとぴったり表示されます。

![demo_screenshot](https://user-images.githubusercontent.com/41501851/72685726-40367080-3b30-11ea-9265-066ffe802984.png)


## howto / 使い方

### run

```
$ git clone https://github.com/naohikonaohiko/karaoke-slideshow.git
$ cd karaoke-slideshow
$ npm install
$ npm start
```

Open http://localhost:3000

#### 注

単に上記を実施すると音は出ません（スライドショーと文字の色は動きます）。

最近の Chrome はユーザー操作なしの音自動再生をさせないためです。

動作確認環境： Chrome 79

#### 音を出したい場合

案1

本アプリ（ http://localhost:3000 ）を直接開くのではなく、別ページから本アプリへ遷移すると音が出る。


案2

Chrome を --autoplay-policy=no-user-gesture-required の起動引数を付与して起動する。

Mac 例
```
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --autoplay-policy=no-user-gesture-required
```

Windows 例
```
"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --autoplay-policy=no-user-gesture-required
```

### custom

#### スライド画像変更

ファイル: /public/images

ソース: src/App.js

#### 背景画像変更

ファイル: /public/images/bg

ソース: public/index.html

#### BGM 変更

ファイル: /public/audio

ソース: public/index.html

#### 歌詞変更

ソース: public/index.html

歌詞に対しタイムタグを付与します。

タイムタグ仕様 http://hp.vector.co.jp/authors/VA023256/TimeTag.html

タイムタグ付与ツール RhythmicaLyrics http://suwa.pupu.jp/RhythmicaLyrics.html

#### 解像度変更

public/index.html

public/third_party/karaoke-telop/KaraokeTelop/KaraokeTelop/Scripts/main.js

他にもあるかもしれません。。

## 謝辞

本アプリは以下のライブラリ、サンプル、画像、ツール、楽曲を使用し作成しました。感謝申し上げます。

Create React App : https://github.com/facebook/create-react-app

react-slideshow : https://github.com/femioladeji/react-slideshow

karaoke-telop : https://github.com/jz5/karaoke-telop

猫画像 : ぱくたそ（www.pakutaso.com）

こいのぼり歌詞 : 近藤宮子様

こいのぼり曲 : 音楽素材：「こいのぼり（BELL arr.）」[M-Ar007-10]　https://ongakuya.digimx.info
