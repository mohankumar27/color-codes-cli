# color-codes-cli

> Fetch color codes of all formats based on specified single code

## Install

```sh
npm install --global color-codes-cli
```

## Usage

```sh
color-codes --hex 14E71D
```

## Output

```js
hexResponse {
  hex: '#14E71D',
  rgb: 'rgb(20, 231, 29)',
  hsl: 'hsl(123, 84%, 49%)',
  hsv: 'hsv(123, 91%, 91%)',
  cmyk: 'cmyk(91, 0, 87, 9)',
  name: 'Malachite',
  closest_named_hex: '#0BDA51'
}
```

## Params

| Args  | Default value | Description                        | Example         |
| ----- | ------------- | ---------------------------------- | --------------- |
| --hex | -             | six digit hex code value           | --hex 14E71D    |
| --rgb | []            | rgb color code spearated by spaces | --rgb 20 231 29 |

## API

[The Color API](https://www.thecolorapi.com/)

## Authors

**Mohan Kumar Sagadevan** - [GitHub](https://github.com/mohankumar27)

## License

MIT
