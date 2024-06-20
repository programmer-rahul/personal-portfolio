export default function AboutSection() {
  return (
    <section>
      <div className="space-y-6 flex flex-col">
        <div>
          <h3 className="text-primary-foreground font-bold text-4xl text-center">
            Who Am I
          </h3>
        </div>

        <div>
          <div className="text-secondary-foreground px-20 space-y-3">
            <p className="text-center">
              Hello, I'm Rahul, a passionate and seasoned programmer deeply
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

        <div className="flex gap-32 self-center uppercase select-none">
          <div className="flex gap-2">
            <p className="text-6xl text-main font-bold">01+</p>
            <div className="flex flex-col items-start tracking-tighter text-xl">
              <span className="text-secondary-foreground">Years Of</span>
              <span className="text-primary-foreground tracking-wider">
                Coding
              </span>
            </div>
          </div>

          <div className="flex gap-2">
            <p className="text-6xl text-main font-bold">07+</p>
            <div className="flex flex-col items-start tracking-tighter text-xl">
              <span className="text-secondary-foreground">Completed</span>
              <span className="text-primary-foreground tracking-wider">
                Projects
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
