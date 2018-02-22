# Contribution guide

## Table of Contents

* [Commit Message](#commit-message)
* [Commit history](#commit-history)

---

## Commit Message

Given that this is a monorepo it is important, for visual clarity in Git History, to preface your commit message with the project that it affects.

#### Bad:

```
Add React
```

#### Good:

```
BLKN: Add React
```

Please also refer to https://chris.beams.io/posts/git-commit/ for how to write commit messages.

## Commit History

We are using merges in this project without squashing. Please pay attention that your commits make sense and aren't broken up into illogical chunks. Please squash WIP commits, or adjust them so that it is clear what their purpose was.

#### Bad:

```
- BLKN: Add React
- add react-dom
- fix deps
- another fix
- fix test
```

#### Good:

```
- BLKN: add React & React-Dom
- BLKN: resolve peer dependencies of React
```
