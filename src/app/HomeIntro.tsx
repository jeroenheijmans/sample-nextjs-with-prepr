export default function HomeIntro() {
  return (
    <div className="my-8 mx-auto max-w-screen-xl px-4">
      <h1 className="text-4xl font-bold my-4">
        NextJS with Prepr Headless CMS integration
      </h1>
      <div className="prose">
        <p>
          An open source showcase of how these technologies integrate.
          Opinionated, and sprinkled with a bit of TailwindCSS to ensure the
          sample looks nice too.
        </p>
        <p>
          I’ve created this as an “exemplary example”, so something that I’m
          happy to show others if they wonder how we’d use them in a production
          scenario. In general, such an example should:
        </p>
        <ul>
          <li>Item 1</li>
          <li>Item number two</li>
          <li>Last item in this lit</li>
        </ul>
        <p>
          This style of example is something I often create, and you can see a
          whole range of exemplary examples on GitHub for a whole range of
          technologies.
        </p>
        <p>
          Note that usually these samples are not updated through time. It’s
          advised to check the last commit dates to see how up to date the
          sample is, and adjust your usage accordingly.
        </p>
      </div>
    </div>
  );
}
