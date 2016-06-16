const
  express = require('express')
, port    = process.env.PORT || 2001
, app     = express()

app
.use(express.static(__dirname))
.listen(port, () => console.log(`minesweeper listening on ${port}`))
