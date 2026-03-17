# MMM-QOTD

A [MagicMirror²](https://magicmirror.builders/) module that displays a rotating quote of the day fetched from [zenquotes.io](https://zenquotes.io/).

**No API key required.**

## Features

- Fetches a new quote on a configurable interval
- Displays quote text and author
- Smooth fade transition between quotes

## Installation

```bash
cd ~/MagicMirror/modules
git clone https://github.com/olopez70/MMM-QOTD.git
```

## Configuration

Add to your `config/config.js`:

```js
{
    module: "MMM-QOTD",
    position: "bottom_left",
    config: {
        updateInterval: 60 * 60 * 1000,
    }
}
```

### Options

| Option | Type | Default | Description |
|---|---|---|---|
| `updateInterval` | number | `3600000` | Quote refresh interval in ms (default: 1 hour) |
| `animationSpeed` | number | `2000` | Fade transition duration in ms |

## Dependencies

- [zenquotes.io](https://zenquotes.io/) — free API, no key required
