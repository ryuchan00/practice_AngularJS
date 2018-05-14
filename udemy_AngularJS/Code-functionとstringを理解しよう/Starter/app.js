// 一つの配列でバラバラの型が入っているものは珍しくない
let things = [1, '2', function () {
    alert('アラート!');
}];

things[2]();
