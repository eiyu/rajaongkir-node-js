const curry = (f, arr = []) => (...args) =>
(a => a.length === f.length ?
  f(...a) :
  curry(f, a)
)([...arr, ...args]);

const _with = curry((api, type, headers, path, method) => Object.assign({}, headers, {
    "path": type === 'pro' ? `/api${path}`:`/${type}${path}`
}, method, {"headers": {"key":api}}))
module.exports = _with
