beforeEach(() => {
  jest.resetAllMocks()
  jest.restoreAllMocks()
})

test('1', () => {
  jest.useFakeTimers()
  jest.spyOn(global, 'setTimeout')
  jest.useRealTimers()
})

test('2', (done) => {
  setTimeout(done)
})
