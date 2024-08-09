export const validateUsername = (
  username: string,
  country: string
): string | null => {
  switch (country) {
    case "UAE":
      if (!/^[a-zA-Z0-9]{5,}$/.test(username)) {
        return "Username must be alphanumeric and at least 5 characters long";
      }
      break;
    case "India":
      if (!/^[a-zA-Z][a-zA-Z0-9]{5,}$/.test(username)) {
        return "Username must start with a letter and be at least 6 characters long";
      }
      break;
    case "Canada":
      if (!/^[a-zA-Z0-9_.]{8,}$/.test(username)) {
        return "Username must be alphanumeric with underscores or periods, and at least 8 characters long";
      }
      break;
    case "Nigeria":
      if (!/^[a-zA-Z0-9_]{7,}$/.test(username)) {
        return "Username must be alphanumeric, can contain underscores, and must be at least 7 characters long";
      }
      break;
    default:
      return null;
  }
  return null;
};
