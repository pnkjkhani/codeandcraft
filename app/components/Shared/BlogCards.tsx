import React from 'react';
import testIds from '@app/utils/test-ids';
import { WixMediaImage } from '../Image/WixMediaImage';
interface BlogCardProps {
  image: string;
  date?: string;
  CardTitle: string;
  CardDescription: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  image,
  date,
  CardTitle,
  CardDescription,
}) => {
  return (
    <>
      {/* <div className="w-full px-4 md:w-1/2 lg:w-1/3 bg-white">
        <div className="mb-10 w-full">
          <div className="mb-8 overflow-hidden rounded">
            <img src={image} alt="" className="w-full" />
          </div>
          <div>
            {date && (
              <span className="mb-5 inline-block rounded bg-primary px-4 py-1 text-center text-xs font-semibold leading-loose text-black bg-slate-100">
                {date}
              </span>
            )}
            <h3>
              <a
                href="/#"
                className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
              >
                {CardTitle}
              </a>
            </h3>
            <p className="text-base text-body-color dark:text-dark-6">
              {CardDescription}
            </p>
          </div>
        </div>
      </div> */}
      <div
        className="relative border"
        data-testid={testIds.NEWS_PAGE.NEWS_ITEM_CONTAINER}
      >
        <div className="h-auto relative">
          <div className="overflow-hidden rounded">
            <img src={image} alt="" className="w-full" />
          </div>
          <span className="bg-blue-site text-white px-6 py-2 absolute bottom-[-20px]">
            {date}
          </span>
        </div>
        <div className="bg-white relative mt-8 px-8 pb-10">
          <h2 className="mb-4 font-site">{CardTitle}</h2>
          <p className="text-sm mb-6">{CardDescription}</p>
          <a
            data-testid={testIds.NEWS_PAGE.NEWS_ITEM_CTA}
            href={`/news/${CardTitle}`}
            className="text-purple-site py-6 font-site"
          >
            Read More
          </a>
        </div>
      </div>
    </>
  );
};

const BlogCards: React.FC = () => {
  return (
    <div className="bg-[#fafdff]">
      <section className="flex justify-center p-5 dark:bg-dark lg:pt-5 mt-[10px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[30px] max-w-[510px] text-center lg:mb-10">
                <h2
                  className="text-center py-8 text-blue-site font-site"
                  data-testid={testIds.NEWS_PAGE.HEADER}
                >
                  Our recent news & updates
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-7 grid-flow-row mt-10"
            data-testid={testIds.NEWS_PAGE.NEWS_LIST}
          >
            <BlogCard
              date="Dec 22, 2023"
              CardTitle="Meet AutoManage, the best AI management tools"
              CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              image="https://i.ibb.co/Cnwd4q6/image-01.jpg"
            />
            <BlogCard
              date="Dec 22, 2023"
              CardTitle="Meet AutoManage, the best AI management tools"
              CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              image="https://i.ibb.co/Y23YC07/image-02.jpg"
            />
            <BlogCard
              date="Dec 22, 2023"
              CardTitle="Meet AutoManage, the best AI management tools"
              CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              image="https://i.ibb.co/7jdcnwn/image-03.jpg"
            />
          </div>
        </div>
      </section>
      <div className="flex justify-end mr-4 pb-10">
        {/* <a
          className="inline-flex cursor-pointer rounded-lg bg-[#323435] hover:bg-purple-500 py-3  px-5 text-lg text-white"
          href="/course"
        >
          Read more
        </a> */}
        <a href="/news" className="btn-main text-lg">
            Read more
          </a>
      </div>
    </div>
  );
};

export default BlogCards;
