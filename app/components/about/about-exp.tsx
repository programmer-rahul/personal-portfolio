export default function AboutExp() {
  return (
    <div className="flex select-none justify-between w-full uppercase">
      <div className="flex gap-1">
        <p className="text-5xl font-bold text-main">02+</p>
        <div className="flex flex-col items-center justify-center text-base leading-5 tracking-tighter">
          <span className="text-primary-foreground">Years Of</span>
          <span className="tracking-wide text-primary-foreground">Coding</span>
        </div>
      </div>

      <div className="flex gap-1">
        <p className="text-5xl font-bold text-main">07+</p>
        <div className="flex flex-col items-center justify-center text-base leading-5 tracking-tighter">
          <span className="text-primary-foreground">Completed</span>
          <span className="tracking-wide text-primary-foreground">
            Projects
          </span>
        </div>
      </div>
    </div>
  );
}
