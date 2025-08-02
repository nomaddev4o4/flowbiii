import { MessageCircleMore } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface NodeDefinition {
  type: string;
  label: string;
  icon: LucideIcon;
  description: string;
  category?: string;
}

export const NODE_REGISTRY: NodeDefinition[] = [
  {
    type: "message",
    label: "Message",
    icon: MessageCircleMore,
    description: "Add a new message to the canvas.",
    category: "communication",
  },
  // Future node types can be added here:
  // {
  //   type: "condition",
  //   label: "Condition",
  //   icon: GitBranch,
  //   description: "Add conditional logic to your flow.",
  //   category: "logic"
  // },
];
