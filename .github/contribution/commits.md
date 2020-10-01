# Commits

## Commit Messages

We're using [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) to ensure consistency of commit messages. We set up a git hook which makes sure that your commit message follows this format.

Please see [https://chris.beams.io/posts/git-commit/](https://chris.beams.io/posts/git-commit/) for information on how to write good commit messages.

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

## Commit History

We usually merge pull requests by squashing them, when changes belong together. In that case feel free to use GitHub's "Update branch" button to merge latest changes from the main branch into your branch.

Sometimes, though, some sets of changes aren't really related and should ideally be committed separately, in that case make sure to [keep your history tidy with git rebase](https://silvenon.com/blog/better-git-history/rebasing) so we can merge your pull request without squashing. However, we're aware that git isn't everyone's strong suit, so we will never ask this of you. 😉
