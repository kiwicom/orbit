const utils = `const toast = () => createToast("Toast message", { icon: <Icons.Notification /> });`;

const code = `
<>
  {/* For the example to work as expected, you should also import the Toast Utils before the return. */}

  <Button onClick={toast}>Add toast</Button>
  <ToastRoot dismissTimeout={3000} placement="bottom-center" />
</>
`;

export default [
  {
    group: "Toast",
    name: "Utils",
    code: utils,
  },
  {
    group: "Toast",
    name: "Toast",
    code,
  },
];
