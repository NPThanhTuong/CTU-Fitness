"use client";

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@/components/midleExport";
import ServiceItem from "./ServiceItem";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import axiosInstance from "@/utils/axiosInstance";
import { BallTriangle } from "react-loader-spinner";

function ServiceTabs({ className }) {
  const [activeTab, setActiveTab] = useState(1);
  const [loading, setLoading] = useState(true);
  const [membershipPackages, setMembershipPackages] = useState([]);

  useEffect(() => {
    const getMembershipPackages = async () => {
      try {
        const res = await axiosInstance.get("/memberships");
        const { data: data } = res.data;
        setMembershipPackages(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    getMembershipPackages();
  }, []);

  if (loading)
    return (
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#ed563b"
        wrapperClass="mt-16"
      />
    );

  return (
    <>
      {/* Desktop */}
      <div
        className={twMerge(
          "hidden lg:block w-full max-w-[980px] mt-",
          className
        )}
      >
        <Tabs value={activeTab} orientation="vertical" className="flex gap-4">
          <TabsHeader className="w-60 bg-primary/100">
            {membershipPackages.map(({ name, id }) => (
              <Tab
                key={id}
                value={id}
                onClick={() => setActiveTab(id)}
                className={twMerge(
                  activeTab === id
                    ? "text-primary transition delay-200"
                    : "text-white",
                  "py-8 text-xl uppercase font-bold"
                )}
              >
                {name}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {membershipPackages.map(
              ({ id, name, illustration, benefits, price, periodOfUsage }) => (
                <TabPanel key={id} value={id} className="py-0">
                  <ServiceItem
                    image={`/images/${illustration}`}
                    title={name}
                    benefits={benefits}
                    price={price}
                    periodOfUsage={periodOfUsage}
                  />
                </TabPanel>
              )
            )}
          </TabsBody>
        </Tabs>
      </div>

      {/* Mobile */}
      <div className={twMerge("block lg:hidden w-full", className)}>
        <Tabs value={activeTab} className="flex flex-col gap-5">
          <TabsHeader className="w-full bg-primary/100">
            {membershipPackages.map(({ name, id }) => (
              <Tab
                key={id}
                value={id}
                onClick={() => setActiveTab(id)}
                className={
                  activeTab === id
                    ? "text-primary transition-all delay-200"
                    : "text-white"
                }
              >
                {name}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {membershipPackages.map(
              ({ id, name, illustration, benefits, price, periodOfUsage }) => (
                <TabPanel key={id} value={id} className="py-0">
                  <ServiceItem
                    image={`/images/${illustration}`}
                    title={name}
                    benefits={benefits}
                    price={price}
                    periodOfUsage={periodOfUsage}
                  />
                </TabPanel>
              )
            )}
          </TabsBody>
        </Tabs>
      </div>
    </>
  );
}

export default ServiceTabs;
