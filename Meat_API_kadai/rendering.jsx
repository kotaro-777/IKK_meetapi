// 選択されたファイルのプレビューを表示する
function imageFileRendering(file) {
    // 前回表示画像を取り除く
    $('imageContainer').remove();
    // 指定されたファイルが画像じゃない、またはファイルの指定がない場合
    if (file === undefined || !file.type.match('image.*')) {
        // 送信ボタンを非活性にする
        $('#sendAction').prop('disabled', true);
        return false;
    }
    // プレビュー画像のレンダリング
    ReactDOM.render(
        <img id="previewImage" src={URL.createObjectURL(file)} />,
        document.getElementById('imageContainer')
    );

    // 送信ボタンを活性にする
    $('#sendAction').prop('disabled', false);

    return true;
};

// APIのResponseのスコアをレンダリングする
function scoreRendering(score) {
    // TODO: スコアをレンダリングする。
    ReactDOM.render(
        <p>{score}</p>,
        document.getElementById('result')
        );
}

// 他ファイルからも試用できるようwindowに登録
window.imageFileRendering = imageFileRendering;
window.scoreRendering = scoreRendering;