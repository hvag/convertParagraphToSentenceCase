# Convert Paragraph To Sentence Case

Sentence case a paragraph

## Installation

### Node
```
npm i convertparagraphtosentencecase --save
```

## Usage
```node
const convert = require('convertparagraphtosentencecase')

convert('STRING TEST.')     // => 'String test.'
convert('string test.')     // => 'String test.'
convert('StRiNg TeSt.')     // => 'String test.'
```

## License

MIT
