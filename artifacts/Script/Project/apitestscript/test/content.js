
//req.body.age = 25

log.info(JSON.stringify(req.body, null, 2))
//log.info(JSON.stringify(req.body));
console.log(req.body);
result = {
    "body":req.body,
    "params": req.params,
    "headers": req.rawHeaders,
    "queries": req.query,
}
console.log(result)
complete();