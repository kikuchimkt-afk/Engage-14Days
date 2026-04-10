const fs = require('fs');
const path = require('path');

var dirs = [
    path.join(__dirname, '..', '..', 'data', 'field1'),
    path.join(__dirname, '..', '..', 'data', 'field2')
];
var grandTotal = 0;

dirs.forEach(function(dir) {
    var files = fs.readdirSync(dir).filter(function(f) { return f.match(/^chapter\d+\.json$/); }).sort();
    files.forEach(function(fname) {
        var data = JSON.parse(fs.readFileSync(path.join(dir, fname), 'utf8'));
        var total = 0;
        var fourChoice = 0;
        data.sections.forEach(function(s) {
            s.questions.forEach(function(q) {
                total++;
                if (q.type === '4択') fourChoice++;
            });
        });
        grandTotal += total;
        console.log('Ch' + String(data.chapter).padStart(2, '0') + ' ' + data.chapter_title + ': ' + total + '問 (4択: ' + fourChoice + ', sec: ' + data.sections.length + ')');
    });
});
console.log('---');
console.log('合計: ' + grandTotal + '問');
