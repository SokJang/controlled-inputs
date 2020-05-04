export const editReduce = (state, action) => {
  switch (action.type) {
    case "reset":
      return {
        reset: true,
        add: false,
        deduct: false,
      };
    case "add":
      return {
        reset: false,
        add: true,
        deduct: false,
      };
    case "deduct":
      return {
        reset: false,
        add: false,
        deduct: true,
      };
    default:
      throw new Error();
  }
};
