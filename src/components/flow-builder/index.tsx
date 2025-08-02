import FlowBuilderCanvas from "./Canvas";
import Panel from "./panels";

export default function FlowBuilder() {
  return (
    <div className="flex h-full gap-4">
      <main className="flex-1">
        <FlowBuilderCanvas />
      </main>

      <Panel />
    </div>
  );
}
