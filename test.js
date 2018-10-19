const assert = require('assert');
const { map, curry, compose, Id,
        ifExist,i, assignHostName, mapkey,
        splitBySlashThenReverse, createPath, splitBySlash,
        split,reverse, call, assign,
} = require('./utils')

describe('i', () => {
  it('will returned back the given value', () => {
    assert.equal(i('some/url'), 'some/url')
  })
})

describe('Id Functor', function() {
  it('should holding a context', () => {
    assert.equal(typeof Id('test'), 'object')
  })
  it('should mappable and obey functor laws, identity and composition', () => {
    assert.equal(
          // a->b->c
          Id('some/url')
          .map(splitBySlash)
          .map(reverse)
          .toString(),
          // a->c
          Id('some/url').map(splitBySlashThenReverse).toString()
        )
    assert.equal()
  })
})

describe('split', () => {
  it('will split string based on first argument, while the second argument are the string to be spilt', () => {
    assert(split.call('/','some/url').toString(), ['some', 'url'].toString())
  })
})

describe('splitBySlash', () => {
  it('split a string by slash', () => {
    assert.equal(splitBySlash('some/url').toString(),['some', 'url'].toString())
  })
})

describe('reverse', () => {
  it('reverse an array', () => {
    assert.equal(reverse(['some', 'url']).toString(),['url', 'some'].toString() )
  })
})

describe('splitBySlashThenReverse', () => {
  it('will split a string and reverse the returned value', () => {
    assert.equal(splitBySlashThenReverse('some/url').toString(), ['url', 'some'].toString())
  })
})

describe('compose', () => {
  it('will compose 2 function only', () => {
    assert.equal(compose(reverse, splitBySlash)('some/url').toString(), splitBySlashThenReverse('some/url').toString())
  })
})

describe('call', () =>{
  it('will call function invocation', () => {
    assert.equal(call(split, '/','some/url').toString(), ['some', 'url'].toString())
    assert.equal(call(split, '/')('some/url').toString(), ['some', 'url'].toString())
  })
})

describe('map', () => {
  it('a generic map for any functor', () => {
    assert.equal(map(splitBySlashThenReverse, Id('some/url')).toString(), Id('some/url').map(splitBySlashThenReverse).toString())
  })
})

describe('assign', () => {
  it('will copying 2nd argument then combine 1st argument', () => {
    const obj1 = {foo:'foo'}
    const obj2 = {bar:'bar'}
    const expected = {foo:'foo', bar:'bar'}
    assert.equal(assign(obj1)(obj2).toString(), expected.toString())
  })
})

describe('mapkey', () => {
  const key = 'secret';
  it('will assigning key and content-type properties to headers', () => {
    assert.equal(mapkey(key, {foo:'bar'})(false).toString(),
                             {foo:'bar', key:key }.toString())

    assert.equal(mapkey(key, {foo:'bar'})(true).toString(),
                             {foo:'bar', key:key , "content-type": "application/x-www-form-urlencoded"}.toString())
  })
})

describe('assignHostName', () => {
  it('will assign hostname propery to object based on given first argument', () => {
    assert.equal(assignHostName('basic', {foo:'bar'}).toString(), {
      foo: 'bar',
      hostname: 'api.rajaongkir.com'
    }.toString())
  })
})

describe('createPath', () => {
  it('will create path based on given type account', () => {
    assert.equal(createPath('starter',['query', 'url', 'test']), '/starter/query')
    assert.equal(createPath('basic',['query', 'url', 'test']), '/basic/query')
    assert.equal(createPath('pro',['query', 'url', 'test']), '/api/query')
    assert.equal(createPath('default',['query', 'url', 'test']), '/starter/query')

    assert.equal(createPath('starter',['query', 'url']), '/starter/query')
    assert.equal(createPath('basic',['query', 'url']), '/basic/query')
    assert.equal(createPath('pro',['query', 'url']), '/api/query')
    assert.equal(createPath('default',['query', 'url']), '/starter/query')

    assert.equal(createPath('starter',['query']), '/starter/query')
    assert.equal(createPath('basic',['query']), '/basic/query')
    assert.equal(createPath('pro',['query']), '/api/query')
    assert.equal(createPath('default',['query']), '/starter/query')

    assert.equal(createPath('starter',['']), '/starter/')
    assert.equal(createPath('basic',['']), '/basic/')
    assert.equal(createPath('pro',['']), '/api/')
    assert.equal(createPath('default',['']), '/starter/')
  })
})
