const Features = () => {
  return (
    <section id="features" className="pt-20 -mt-40 lg:mt-0 lg:pt-0 lg:pb-40 features-bg">
      <div className="pt-48 lg:pt-0 lg:mt-28 lg:flex lg:w-container lg:mx-auto">
        <div className="lg:w-[50%]">
          <h2 className="heading2 text-center w-container mx-auto lg:mx-0 lg:text-left">
            What’s different about Manage?
          </h2>
          <p className="text-center paragraph mt-3 lg:mt-4 mb-12 lg:mb-0 w-container mx-auto lg:mx-0 lg:text-left lg:w-[40ch]">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>

        <div className="lg:w-[50%]">
          <div>
            <div className="flex items-center bg-lightOrange sm:bg-transparent rounded-l-full w-containerLeft ml-auto">
              <h3 className="heading3 number">01</h3>
              <h4 className="heading4">Track company-wide progress</h4>
            </div>
            <p className="paragraph mt-3 mb-11 w-container mx-auto lg:ml-[118px] lg:w-[45ch]">
              See how your day-to-day tasks fit into the wider vision. Go from
              tracking progress at the milestone level all the way done to the
              smallest of details. Never lose sight of the bigger picture again.
            </p>
          </div>

          <div>
            <div className="flex items-center bg-lightOrange sm:bg-transparent rounded-l-full w-containerLeft ml-auto">
              <h3 className="heading3 number">02</h3>
              <h4 className="heading4">Advanced built-in reports</h4>
            </div>
            <p className="paragraph mt-3 mb-11 w-container mx-auto lg:ml-[118px] lg:w-[45ch]">
              Set internal delivery estimates and track progress toward company
              goals. Our customizable dashboard helps you build out the reports
              you need to keep key stakeholders informed.
            </p>
          </div>

          <div>
            <div className="flex items-center bg-lightOrange sm:bg-transparent rounded-l-full w-containerLeft ml-auto">
              <h3 className="heading3 number">03</h3>
              <h4 className="heading4">Everything you need in one place</h4>
            </div>
            <p className="paragraph mt-3 w-container mx-auto lg:ml-[118px] lg:w-[45ch]">
              Stop jumping from one service to another to communicate, store
              files, track tasks and share documents. Manage offers an
              all-in-one team productivity solution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
