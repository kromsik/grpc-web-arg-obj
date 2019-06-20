# Object parser for grpc-web calls

```js
const arg = {
  manufactureCode: 'Some plant code',
  name: 'Some-name',
  ... // may be many keys
}

// before
const request = new CreateRequest() // from gprc-generated-artefacts

request.setManufacturecode(arg.manufactureCode)
request.setName(arg.name)
...

// with `grpc-web-arg-obj`
import { gparse } from 'grpc-web-arg-obj'
const request = new CreateRequest() // from gprc-generated-artefacts


const req = gparse(request, arg) // will return fully-processed request with all the field set

```