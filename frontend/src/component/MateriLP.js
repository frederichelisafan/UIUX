import React, { useState } from "react";

const MateriLP = () => {
  const [showCard] = useState("all");

  //   const handleProject = (category) => {
  //     setShowCard(category);
  //   };

  return (
    <>
      <section className="pb-12 lg:pb-[90px] dark:bg-dark z-20">
        <div className="mx-auto">
          <div className="flex flex-wrap mx-4">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[600px] text-center">
                <h2 className="text-[#443091] mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">
                  Materi yang dapat dipelajari
                </h2>
                <p className="text-body-color text-base dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap mx-4">
            <PortfolioCard
              ImageHref="https://i.ibb.co/64WfFPt/image-01.jpg"
              category="1"
              title="User Experience"
              desc="Belajar"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="https://i.ibb.co/PT7ghRs/image-06.jpg"
              category="2"
              title="User Interface"
              desc="Belajar"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="https://i.ibb.co/vkt8C1P/image-02.jpg"
              category="3"
              title="Arsitektur Informasi"
              desc="Belajar"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="https://i.ibb.co/3FKqS1G/image-03.jpg"
              category="4"
              title="User Research"
              desc="Belajar"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="https://i.ibb.co/m6dq2fX/image-04.jpg"
              category="5"
              title="Strategi UX Design"
              desc="Belajar"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="https://i.ibb.co/mCPjBsH/image-05.jpg"
              category="6"
              title="Figma Design"
              desc="Belajar"
              buttonHref="#"
              showCard={showCard}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default MateriLP;

const PortfolioCard = ({ showCard, category, ImageHref, title, desc }) => {
  return (
    <>
      <div
        className={`w-full px-4 md:w-1/2 xl:w-1/3 ${
          showCard === "all" || showCard === category.toLowerCase()
            ? "block"
            : "hidden"
        }`}
      >
        <div className="relative mb-12 transform duration-500 hover:scale-110">
          <div className="overflow-hidden rounded-[10px]">
            <img src={ImageHref} alt="portfolio" className="w-full" />
          </div>
          <div className="relative z-10 mx-7 border-2 border-[#D9D9D9] -mt-20 rounded-lg bg-white dark:bg-dark-2 py-[34px] px-3 text-center shadow-portfolio dark:shadow-box-dark">
            <span className="mb-2 block text-sm font-bold text-[#6D51AB]">
              {category}
            </span>
            <h3 className="text-primary mb-5 text-xl font-bold">{title}</h3>
            <a className="text-body-color hover:border-primary hover:bg-primary inline-block rounded-md border  border-[#D01FB3] dark:border-dark-3 py-[10px] px-7 text-sm font-medium transition no-underline text-[#D01FB3]">
              {desc}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
