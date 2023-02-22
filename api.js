const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const s = require("./controller/siswa")
const user = require("./controller/user")
const p = require("./controller/pelanggaran")
const p_s = require("./controller/pelanggaran_siswa")
// const detail_p_s = require("./controller/detail_pelanggaran_siswa")
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(s)
app.use(user)
app.use(p_s)
// app.use(detail_p_s)
app.use(p)

app.listen(8000, () => {
    console.log("on port 8000")
})