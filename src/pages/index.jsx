import { Greenbox, Redbox, Yellowbox } from "@/components/boxes";
export default function Home() {
  return (
    <div className="flex gap-2">
      <Redbox />
      <Greenbox />
      <Yellowbox />
      <Redbox />
      <Greenbox />
      <Yellowbox />
      <Redbox />
      <Greenbox />
      <Yellowbox />
    </div>
  );
}
