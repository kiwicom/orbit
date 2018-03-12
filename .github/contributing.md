# Contribution guide

## Table of Contents

* [Commit Message](#commit-message)
* [Commit history](#commit-history)

---

## Commit Message

Please see https://chris.beams.io/posts/git-commit/ for information on how to write commit messages.

## Commit History

We are using merges in this project without squashing. Please pay attention that your commits make sense and aren't broken up into illogical chunks. Please squash WIP commits, or adjust them so that it is clear what their purpose was.

#### Bad:

```
- Add React
- add react-dom
- fix deps
- another fix
- fix test
```

#### Good:

```
- add React & React-Dom
- resolve peer dependencies of React
```
