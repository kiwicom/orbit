# Commits

## Commit Message

Always assign a prefix to your first commit in a new branch.

We use these prefix keywords:

```
FIX: Commit message
NEW: Commit message
UPDATE: Commit message
RELEASE: Commit message
WIP: Commit message
```

Please see [https://chris.beams.io/posts/git-commit/](https://chris.beams.io/posts/git-commit/) for information on how to write commit messages.

## Commit History

We are using merges with squashing commits.

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
* Add React & React-Dom
* Resolve peer dependencies of React
```

## Things to remember during code reviews

- Never click on the grey "Update branch" button on GitHub \* it merges master with the reviewed base branch, which leads to messed up history
- Please make sure you’ve deleted the base branch by clicking on “Delete branch” which appears right after your merge is confirmed
