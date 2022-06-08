export const timestamp = () => {
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();
  const hour = new Date().getHours();

  return `$${month}-${year}-${hour}`;
};

export const month = new Date().toLocaleString("en-US", { month: "long" });
