/// <reference path="typings/jquery/jquery.d.ts" />
/// <reference path="typings/knockout/knockout.d.ts" />
/// <reference path="mediaelementplayer.d.ts" />
(function ($) {
    var viewModel;
    // telop color
    var foreground = '#ff0000';
    var background = '#ffffff';
    var t = $('textarea:first').val(); // タイムタグ付きテキスト
    var lyrics = new Lyrics(t);
    var player = new MediaElementPlayer('#player1', {
        plugins: ['flash', 'silverlight'],
        pluginPath: '/build/',
        flashName: 'flashmediaelement.swf',
        silverlightName: 'silverlightmediaelement.xap',
        alwaysShowControls: false,
    });
    viewModel = {
        lyrics: ko.observableArray(lyrics.lines),
    };
    ko.applyBindings(viewModel);
    var lineIndex;
    var widths = []; // 1行の各文字の幅 (px)
    var words = []; // 1行の単語
    var progressWidth;
    var wordIndex;
    var startTime; // プレイ開始時間
    var timerId;
    var telopMoveUpOffset = "-90px"; // 一行表示終了時の上への移動量。ディスプレイ解像度によって要調整
    function tick() {
        var elapsed = Date.now() - startTime; // MEMO: player.getCurrentTime() は精度が低いので使えない
        if (elapsed < words[0].offset) {
            return;
        }
        var lineEnd = true;
        for (var i = wordIndex; i < words.length - 1; i++) {
            if (words[i].offset <= elapsed && elapsed < words[i + 1].offset) {
                wordIndex = i;
                var d1 = words[i + 1].offset - words[i].offset;
                var d2 = elapsed - words[i].offset;
                var progress = Math.ceil(progressWidth + d2 / d1 * widths[i]);
                var g = 'linear-gradient(to right, ' + foreground + ' 0, ' + foreground + ' ' + progress + 'px, ' + background + ' ' + progress + 'px, ' + background + ' 100%)';
                $('.current').css('background', g).css('-webkit-background-clip', 'text');
                lineEnd = false;
                break;
            }
            progressWidth += widths[i];
        }
        if (lineEnd) {
            // 1行表示終了時の処理
            $('.current').css('background', background);
            $('.current').css('opacity', 0);
            $('.current').parent('.line').prev('.line:first').hide();
            $('.current').removeClass('current');
            // next line
            ++lineIndex;
            if (lineIndex >= lyrics.lines.length) {
                clearInterval(timerId);
                return;
            }
            $('.telop').eq(lineIndex).addClass('current');
            // 強制上移動
            $('.line').css('top', telopMoveUpOffset);
            // reset
            progressWidth = 0;
            wordIndex = 0;
            // next words
            words = lyrics.lines[lineIndex].words;
            // calc widths
            widths = [];
            $('.current>span').each(function () {
                widths.push($(this).width());
            });
        }
    }
    $('#start').click(function () {
        // reset
        lineIndex = 0;
        progressWidth = 0.0;
        wordIndex = 0;
        // next words
        words = lyrics.lines[lineIndex].words;
        // calc widths
        widths = [];
        $('.telop:first').addClass('current').find('span').each(function () {
            widths.push($(this).width());
        });
        startTime = Date.now();
        player.play();
        timerId = setInterval(tick, 50);
    });
    $(document).ready(function() {
        // 読み込み時の処理
        console.log("ready");

        // media contorol 非表示
        $('#mep_0').hide();
        $('#start').hide();
        
        // 自動再生
        $('#start').trigger('click');
    });
})(jQuery);
//# sourceMappingURL=main.js.map