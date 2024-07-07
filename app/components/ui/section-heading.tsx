export default function SectionHeading({ text }: { text: string }) {
  return (
    <h3 className="text-center font-heading text-5xl md:text-6xl font-bold uppercase text-primary-foreground">
      {text}
    </h3>
  );
}
