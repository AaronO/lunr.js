module('lunr.Store')

test('adding document tokens to the document store', function () {
  var docStore = new lunr.Store,
      tokens = ['eggs', 'ham']

  docStore.set(1, tokens)
  deepEqual(docStore.get(1), tokens)
})

test('getting the number of items in the document store', function () {
  var docStore = new lunr.Store

  equal(docStore.length, 0)
  docStore.set(1, 'foo')
  equal(docStore.length, 1)
})

test('pushing a value to an empty key', function () {
  var store = new lunr.Store

  ok(!store.get('foo'))
  store.push('foo', 1)
  ok(!!store.get('foo'))
  deepEqual(store.get('foo'), [1])
})

test('checking whether the store contains a key', function () {
  var store = new lunr.Store

  ok(!store.has('foo'))
  store.set('foo', 1)
  ok(store.has('foo'))
})

test('removing an element from the store', function () {
  var store = new lunr.Store

  store.set('foo', 1)
  ok(store.has('foo'))
  equal(store.length, 1)
  store.remove('foo')
  ok(!store.has('foo'))
  equal(store.length, 0)
})

test('rejecting an element from an array in the store', function () {
  var store = new lunr.Store

  store.push('foo', 1)
  ok(store.has('foo'))
  equal(store.length, 1)
  equal(store.get('foo').length, 1)

  store.reject('foo', function (el) { return el == 1 })
  ok(!store.has('foo'))
  equal(store.length, 0)
})
