const { updateStatuses } = require("../../../services/component-statuses");

module.exports = async () => {
  await updateStatuses();
};
