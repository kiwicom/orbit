# Orbit tracking

**_Orbit tracking_** is a simple cli tool, which clones and parses selected repositories with [react-scanner](https://github.com/moroshko/react-scanner). The output is a json file or files with collected data from gitlab and **react-scanner**.

## Installation

```bash
# NPM
npm install --save-dev @kiwicom/orbit-tracking

# Yarn
yarn add -D @kiwicom/orbit-tracking
```

_Packages requires gitlab api token, you have to add it to `.env` file:_

```
  GITLAB_TOKEN=token
```

## Usage

Running the command without arguments will fetch and parse all available repositories

```sh
  orbit-tracking
```

You can fetch and parse only specific repositories from the [scope](###scope) with `--scope` argument:

```sh
  orbit-tracking --scope frontend booking
```

By default the output will be saved to gitlab repo, but you can specify the path with `--output` argument:

```sh
  orbit-tracking --output path/to/folder
```

[react-scanner](https://github.com/moroshko/react-scanner) requires a [config file](https://github.com/moroshko/react-scanner#config-file) to make it work, orbit-tracking has a default config inside, but if you will need, you can use your own config:

```sh
  orbit-tracking --config path/to/config
```

You can run `orbit-tracking --help` to get a list of available options and examples

## Scope

| repository                                                   |
| :----------------------------------------------------------- |
| [booking](https://gitlab.skypicker.com/frontend/booking)     |
| [search](https://gitlab.skypicker.com/frontend/search)       |
| [smart-faq](https://gitlab.skypicker.com/frontend/smart-faq) |
| [core](https://gitlab.skypicker.com/frontend/core)           |
| [frontend](https://gitlab.skypicker.com/frontend/frontend)   |
| [mmb](https://gitlab.skypicker.com/frontend/mmb)             |
| [account](https://gitlab.skypicker.com/frontend/account)     |
