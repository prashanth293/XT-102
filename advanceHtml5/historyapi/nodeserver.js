var express = require('express'),
app = express();

app.use(express.static(__dirname));

app.listen(5000, function() {
console.log('listening on *:3000');
});
//drag ->source
//DragOver->Destination
//dragEnd->source
//dragStart->source
//dragLeav ->destination
//drop->destination