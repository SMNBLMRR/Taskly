export interface PriorityInterface {
  color: string;
}

export const priority: Record<string, PriorityInterface> = {
  LOW: {
    color: "#D7E363"
  },
  MEDIUM: {
    color: "#008F81"
  },
  HIGH: {
    color: "#45050C"
  }
};
