# colour-utils

Utility library for colour manipulation.

### `mix`

Mixes 2 colours according to the provided ratio.

#### Arguments

- **colourA (string)**: The first colour to mix, in rgb format (e.g. `'#000000'`).
- **colourB (string)**: The second colour to mix, in rgb format (e.g. `'#000000'`).
- **[ratio = 0.5] (number)**: The ratio of colourB in the resulting mix. Should be between `0` and `1`, inclusive.

#### Return

**(string)**: The colour resulting from mixing colourA and colourB, in rgb format (e.g. `'#000000'`).

#### Example

```
mix('#000000', '#444444', .25);
// '#111111
```
