export default function SectionHeading({ text }: { text: string }) {
  return (
    <h3 className="text-center text-5xl font-bold uppercase text-primary-foreground">
      {text}
    </h3>
  );
}
