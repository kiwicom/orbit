export const parseSlackMessages = messages => {
  const onlyWithReactions = messages.filter(({ reactions }) => reactions);
  return onlyWithReactions
    .filter(
      ({ reactions }) =>
        reactions.find(({ name }) => name === "was-done") &&
        reactions.find(({ name }) => name === "react"),
    )
    .map(({ user }) => `<@${user}>`);
};
