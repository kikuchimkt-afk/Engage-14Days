var fs = require('fs');
var f = fs.readFileSync('js/data.js', 'utf8');
console.log('data.js size: ' + f.length + ' bytes');
var m = f.match(/"id":/g);
console.log('Total questions: ' + (m ? m.length : 0));

// 各Dayの問題数を確認
var data = eval(f + '; MOCK_DATA');
data.forEach(function(day) {
    console.log(day.title + ': ' + day.questions.length);
});
