import { gparse } from '../index'
test('test it works in normal case', () => {
  const fn1 = jest.fn()
  const fn2 = jest.fn()

  const testObjReq = {
    setManufactureCode: fn1,
    setName: fn2
  }

  const testObjArg = {
    manufactureCode: 'sibt',
    name: 'TOBOLSK'
  }
  gparse(testObjReq, testObjArg)
  // assertions fn1
  expect(fn1).toHaveBeenCalled()
  expect(fn1).toHaveBeenCalledTimes(1)
  expect(fn1).toHaveBeenCalledWith(testObjArg.manufactureCode)
  // assertions fn2
  expect(fn2).toHaveBeenCalled()
  expect(fn2).toHaveBeenCalledTimes(1)
  expect(fn2).toHaveBeenCalledWith(testObjArg.name)
})

test('test it works in corner case', () => {
  const fn1 = jest.fn()
  const fn2 = jest.fn()

  const testObjReq = {
    setManufactureCode: fn1,
    setName: fn2
  }

  const testObjArg = {}
  const result = gparse(testObjReq, testObjArg)
  // assertions fn1
  expect(fn1).not.toHaveBeenCalled()
  // assertions fn2
  expect(fn2).not.toHaveBeenCalled()

  expect(result).toBeUndefined()
})
