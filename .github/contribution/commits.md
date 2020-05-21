# Commits

## Commit Message

We're using conventional commits to ensure consistency of commit messages.

Always assign a prefix to your first commit in a new branch.

For more information, check the [convention](https://www.conventionalcommits.org/en/v1.0.0/).

Please see [https://chris.beams.io/posts/git-commit/](https://chris.beams.io/posts/git-commit/) for information on how to write commit messages.

## Commit History

We are using merge to master with squashing commits.

**Bad:**

```
* Add React
* add react-dom
* fix deps
* another fix
* fix test
```

**Good:**

```
* feat: adding React & React-Dom
* fix: resolve peer dependencies of React
```
