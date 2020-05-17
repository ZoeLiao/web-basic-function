let url_ = Deno.args[1];
console.log(url_)
const res = await fetch(url_);
const body = new Uint8Array(await res.arrayBuffer());
await Deno.stdout.write(body);
