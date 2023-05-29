import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pb-32 pt-16">
        <div className="absolute top-0 h-full w-full bg-[url('https://images.unsplash.com/photo-1595278069441-2cf29f8005a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                Welcome to Jeevan Mitra
              </Typography>
              <Typography
                variant="h4"
                color="white"
                className="mb-2 font-black"
              >
                AICTE Idea Lab
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                At Jeevan Mitra, we believe in the power of collective action to
                preserve our planet for future generations. Our website is
                dedicated to spreading awareness about waste management and
                providing practical methods to save the environment. We aim to
                empower individuals, communities, and businesses to make
                informed choices that minimize waste and promote sustainable
                practices.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
        <div className="mt-56">
          <div className="container mx-auto">
            <div className="mt-32 flex flex-wrap items-center">
              <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                  <UsersIcon className="h-6 w-6 text-blue-gray-900" />
                </div>
                <Typography
                  variant="h3"
                  className="mb-3 font-bold"
                  color="blue-gray"
                >
                  Why Waste Management Matters?
                </Typography>
                <Typography className="mb-8 font-normal text-blue-gray-500">
                  Waste management is a critical issue that affects the health
                  and well-being of our planet. The improper disposal of waste
                  leads to pollution of our air, water, and soil, contributing
                  to climate change and harming ecosystems. It also depletes
                  natural resources and puts a strain on landfill capacities. By
                  adopting effective waste management practices, we can mitigate
                  these impacts and create a cleaner, healthier world.
                </Typography>
              </div>
              <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
                <Card className="shadow-lg shadow-gray-500/10">
                  <CardHeader className="relative h-56">
                    <img
                      alt="Card Image"
                      src="/img/Picture7.png"
                      className="h-full w-full"
                    />
                  </CardHeader>
                  <CardBody>
                    <Typography
                      variant="h5"
                      color="blue-gray"
                      className="mb-3 font-bold"
                    >
                      Our Mission
                    </Typography>
                    <Typography className="font-normal text-blue-gray-500">
                      At Mitra, our mission is to educate and inspire
                      individuals to take action towards responsible waste
                      management. We believe that everyone has a role to play in
                      protecting our environment, and by working together, we
                      can make a significant difference.
                    </Typography>
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
        <div className="mt-20">
          <div className="container mx-auto">
            <PageTitle heading="What You'll Find on Our Website?"></PageTitle>
            <div className="mt-20">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {featuresData.map(({ color, title, icon, description }) => (
                  <FeatureCard
                    key={title}
                    color={color}
                    title={title}
                    icon={React.createElement(icon, {
                      className: "w-5 h-5 text-white",
                    })}
                    description={description}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 pb-48 pt-20">
        <div className="container mx-auto">
          <PageTitle heading="Here are our heroes"></PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-4">
            {/* <div className="mt-24 flex justify-center gap-24 md:gap-0 xl:gap-0"> */}
            {teamData.map(({ img, name, position, socials }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                position={position}
                socials={
                  <div className="flex items-center gap-2">
                    {socials.map(({ color, name, link }) => (
                      <a href={link}>
                        <IconButton key={name} color={color} variant="text">
                          <i className={`fa-brands text-lg fa-${name}`} />
                        </IconButton>
                      </a>
                    ))}
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Home;
