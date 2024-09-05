"use client";
import { getWixClient } from '@app/hooks/useWixClientServer';
import { formatDate } from '@app/utils/date-formatter';
import { WixMediaImage } from '@app/components/Image/WixMediaImage';
import testIds from '@app/utils/test-ids';
import { data } from '@app/jsondata';
import SearchBar from './SearchBar';
import { useCallback, useState } from 'react';
export default async function News() {
  // const wixClient = await getWixClient();
  // const { items } = await wixClient.items
  //   .queryDataItems({
  //     dataCollectionId: 'News',
  //   })
  //   .find();
  const items = data;
  const [filteredItems, setFilteredItems] = useState(data);

  const handleSearch = useCallback((query: string) => {
    const lowercaseQuery = query.toLowerCase();
    const filtered = data.filter(
      (item) =>
        item.title.toLowerCase().includes(lowercaseQuery) ||
        item.body.toLowerCase().includes(lowercaseQuery)
    );
    setFilteredItems(filtered);
  }, []);

  return (
    <div className="relative">
      {/* <div className="w-full h-[400px] relative">
        <WixMediaImage
          media="https://static.wixstatic.com/media/0b340f_0b4d1813105145bfa782ce1d7a379151~mv2_d_5760_3840_s_4_2.jpg/v1/fill/w_1920,h_492,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0b340f_0b4d1813105145bfa782ce1d7a379151~mv2_d_5760_3840_s_4_2.jpg"
          alt="news"
          sizes="100vw"
          objectFit="cover"
          disableZoom={true}
        />
      </div> */}
      <div className="max-w-7xl mx-auto relative bg-white px-8 sm:px-20">
        <div className='py-2 flex flex-col md:flex-row justify-between items-center'>
        <h1
          className="text-center  text-blue-site font-site"
          data-testid={testIds.NEWS_PAGE.HEADER}
        >
          News & Updates
        </h1>
        {/* Search bar */}
        <SearchBar onSearch={handleSearch}/>
        </div>
        

        <p className="pt-2 max-w-3xl text-sm text-center mx-auto">
          Read the latest news and stay up to date about our organization, our
          projects, our events, and the impact we’re making.
        </p>
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-7 grid-flow-row mt-10"
          data-testid={testIds.NEWS_PAGE.NEWS_LIST}
        >
          {/* {items!.map((item) => (
            <div
              key={item._id}
              className="relative border"
              data-testid={testIds.NEWS_PAGE.NEWS_ITEM_CONTAINER}
            >
              <div className="h-[320px] relative">
                <WixMediaImage
                  media={item.data!.image}
                  alt={item.data!.title}
                  objectFit="cover"
                  disableZoom={true}
                />
                <span className="bg-blue-site text-white px-6 py-2 absolute bottom-[-20px]">
                  {formatDate(
                    new Date(item.data!.date?.$date ?? item.data!.date)
                  )}
                </span>
              </div>
              <div className="bg-white relative mt-10 px-8 pb-10">
                <h2 className="mb-10 font-site">{item.data!.title}</h2>
                <p className="text-sm mb-6">{item.data!.short_description}</p>
                <a
                  data-testid={testIds.NEWS_PAGE.NEWS_ITEM_CTA}
                  href={`/news/${item.data!.slug}`}
                  className="text-purple-site py-6 font-site"
                >
                  Read More
                </a>
              </div>
            </div>
          ))} */}

          {filteredItems!.map((item) => (
            <div
              key={item.id}
              className="relative border"
              data-testid={testIds.NEWS_PAGE.NEWS_ITEM_CONTAINER}
            >
              <div className="h-[320px] relative">
                <WixMediaImage
                  media="https://static.wixstatic.com/media/0b340f_d146a1cff38b4503ae5e6ccc9aa86368~mv2_d_5184_3456_s_4_2.jpg/v1/fill/w_434,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0b340f_d146a1cff38b4503ae5e6ccc9aa86368~mv2_d_5184_3456_s_4_2.jpg"
                  alt={'item.title'}
                  objectFit="cover"
                  disableZoom={true}
                />
                <span className="bg-blue-site text-white px-6 py-2 absolute bottom-[-20px]">
                  {/* {formatDate(
                    new Date(item.data!.date?.$date ?? item.data!.date)
                  )} */}
                  10-12-2024
                </span>
              </div>
              <div className="bg-white relative mt-6 px-2 pb-10">
                <h2 className="mb-4 font-site">{item.title}</h2>
                <p className="text-sm mb-6">{item.body}</p>
                <a
                  data-testid={testIds.NEWS_PAGE.NEWS_ITEM_CTA}
                  href={`/news/aa`}
                  className="text-purple-site py-6 font-site"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
