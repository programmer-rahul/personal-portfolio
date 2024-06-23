export default function CircularLightEffect() {
  return (
    <div className="before:bg-gradient-radial after:bg-gradient-conic z-[-1] before:absolute before:h-[200px] before:w-[180px] before:-translate-x-1/2 before:rounded-full before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:from-main after:via-main after:blur-2xl after:content-[''] before:lg:h-[400px] xl:before:h-[300px] xl:before:w-[400px] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-main before:dark:opacity-10 after:dark:from-main after:dark:via-main after:dark:opacity-40"></div>
  );
}
