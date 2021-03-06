# colour-utils

Utility library for colour manipulation.

## Installation

```
npm install colour-utils
```

## Usage

### `mix`

Mixes 2 colours according to the provided ratio.

#### Arguments

- **colourA (string)**: The first colour to mix, in hex format (e.g. `'#000000'`).
- **colourB (string)**: The second colour to mix, in hex format (e.g. `'#000000'`).
- **\[ratio = 0.5\] (number)**: The ratio of colourB in the resulting mix. Should be between `0` and `1`, inclusive.

#### Return

**(string)**: The colour resulting from mixing colourA and colourB, in hex format (e.g. `'#000000'`).

#### Example

```
import { mix } from 'colour-utils';

mix('#000000', '#444444', .25);
// '#111111'
```
