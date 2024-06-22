export default function AboutSection() {
  return (
    <section className="bg-main/30 p-4 px-60">
      <div className="flex flex-col space-y-6">
        <div>
          <h3 className="text-center text-6xl font-bold uppercase text-primary-foreground">
            Who am i
          </h3>
        </div>

        <div>
          <div className="space-y-3 px-20 font-secondary text-secondary-foreground">
            <p className="text-center">
              Hello, I&apos;m Rahul, a passionate and seasoned programmer deeply
              immersed in the world of technology. With a strong foundation in
              JavaScript, I excel in crafting dynamic and innovative solutions
              across various web application frameworks. I have a keen interest
              in exploring diverse technologies and thrive on solving complex
              problems.
            </p>
            <p className="text-center">
              My journey in programming has been marked by a relentless drive
              for learning and self-improvement. I am known for my quick
              adaptability and enthusiasm in embracing new challenges. From
              frontend to backend development, I enjoy leveraging my skills to
              create impactful and user-friendly web experiences. I am actively
              seeking opportunities that allow me to apply my expertise and
              creativity.
            </p>
          </div>
        </div>

        <div className="flex select-none gap-32 self-center uppercase">
          <div className="flex gap-2">
            <p className="text-6xl font-bold text-main">02+</p>
            <div className="flex flex-col items-start text-xl tracking-tighter">
              <span className="text-secondary-foreground">Years Of</span>
              <span className="tracking-wider text-primary-foreground">
                Coding
              </span>
            </div>
          </div>

          <div className="flex gap-2">
            <p className="text-6xl font-bold text-main">07+</p>
            <div className="flex flex-col items-start text-xl tracking-tighter">
              <span className="text-secondary-foreground">Completed</span>
              <span className="tracking-wider text-primary-foreground">
                Projects
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
