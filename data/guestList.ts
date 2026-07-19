export type Guest = {
  name: string;
  personalNote: string;
};

export const GUEST_LIST: Record<string, Guest> = {
  alice: {
    name: "Alice",
    personalNote:
      "Thanks for always being my favorite rubber duck debugging partner. Can't wait to celebrate together!",
  },
  bob: {
    name: "Bob",
    personalNote:
      "From late-night coding grinds to graduation. Your support meant everything, see you there!",
  },
  charlie: {
    name: "Charlie",
    personalNote:
      "So glad to have you celebrating this milestone with me. Get ready for some great food!",
  },
};
