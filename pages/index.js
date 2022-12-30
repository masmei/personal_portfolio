import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { useState } from "react";
import Image from "next/image";
import avatar from "../public/avatar.jpeg";
import nftmarketplace from "../public/nftmarketplace.png";
import littlepepper from "../public/littlepepper.png";
import pursuitconnect from "../public/pursuitconnect.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Mason Mei</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between border-b">
            <h1 className="text-xl font-burtons  dark:text-white">
              developedbymm
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl  dark:text-white"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-blue-500 to-blue-500 text-white px-4 py-2 rounded-lg ml-8"
                  href="https://docs.google.com/document/d/1COB4ZrwQhKSpu5N0uMkg8vZr6n2ExjHP/edit"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-700 font-medium md:text-6xl  dark:text-white">
              Mason Mei
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              FullStack Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-700 md:text-xl max-w-6xl mx-auto dark:text-white">
              Welcome to my website! My name is Mason and I am a software
              engineer with a background in business management and
              entrepreneurship. I have always been passionate about using
              technology to make a positive impact on the world. I have a
              diverse skill set that includes full-stack development, project
              management, and business development. I have worked on various
              projects ranging from web applications to blockchain-based
              platforms, and have experience in languages such as JavaScript,
              HTML/CSS, and Solidity. I also have experience working with
              different frameworks such a React/Redux and Next.js. In addition
              to my technical skills, I have a strong understanding of product
              development and user experience design.
            </p>
            <p className="text-md py-5 leading-8 text-gray-700 md:text-xl max-w-3xl mx-auto dark:text-white">
              In my free time, I enjoy staying up to date with the latest
              technologies and trends in the tech industry. I am also an avid
              reader and enjoy exploring new ways to combine my technical and
              business knowledge to create innovative solutions. Thank you for
              visiting my website. I hope you find my work and experience
              interesting and feel free to contact me if you have any questions
              or would like to collaborate on a project.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-black-600">
            <a
              href="https://twitter.com/Dapp_Boy"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillTwitterCircle className=" dark:text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/masonmei/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin className=" dark:text-white" />
            </a>
            <a
              href="https://github.com/masmei"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub className=" dark:text-white" />
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={avatar} layout="fill" objectFit="cover" />
          </div>
        </section>

        <section className="py-7 mx-auto">
          <div>
            <h2 className="text-4xl py-2 text-teal-700 font-medium md:text-4xl  dark:text-white">
              My Projects
            </h2>
          </div>
          <div className="2xl:flex gap-10">
            <div className="2xl:max-w-[31%] text-center shadow-lg p-2 rounded-xl my-10 py-5 dark:bg-gray-200">
              <Image
                className="rounded-xl"
                src={nftmarketplace}
                width={600}
                height={375}
              />
              <h3 className="text-2xl py-2 font-bold">NFT Marketplace</h3>
              <div className="py-2">
                <a
                  className="bg-gradient-to-r from-blue-500 to-blue-500 text-white px-4 py-2 rounded-lg mr-1"
                  href="https://pursuitnfts.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Site
                </a>

                <a
                  className="bg-gradient-to-r from-blue-500 to-blue-500 text-white px-4 py-2 rounded-lg ml-1"
                  href="https://github.com/masmei/nft_marketplace"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </div>
              <h4 className="text-xl pt-3 text-teal-600 font-semibold">
                Tech Stack:
              </h4>
              <p className="text-gray-800 py-1 text-lg font-semibold italic">
                Solidity | Ethers.js | React | Javascript | Bootstrap | Express
                | PSQL{" "}
              </p>

              <p className="px-10">
                NFT Marketplace created with React. It has web3 integration,
                connected to the Ethereum main-net and smart contracts written
                with Solidity. Users are able to Create, Buy and Sell NFTs
                directly on the app as well as connect with other users.
              </p>
            </div>
            <div className="2xl:max-w-[31%] text-center shadow-lg p-2 rounded-xl my-10 py-5 dark:bg-gray-200">
              <Image
                className="rounded-xl"
                src={littlepepper}
                width={600}
                height={375}
              />
              <h3 className="text-2xl  py-2 font-bold">
                Recipe Finder | Health Tracker
              </h3>
              <div className="py-2">
                <a
                  className="bg-gradient-to-r from-blue-500 to-blue-500 text-white px-4 py-2 rounded-lg mr-1"
                  href="https://littlepepper.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Site
                </a>

                <a
                  className="bg-gradient-to-r from-blue-500 to-blue-500 text-white px-4 py-2 rounded-lg ml-1"
                  href="https://github.com/masmei/A-Little-Pepper-FE"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </div>
              <h4 className="text-xl pt-3 text-teal-600 font-semibold">
                Tech Stack:
              </h4>
              <p className="text-gray-800 py-1 text-lg font-semibold italic">
                React | Javascript | Bootstrap | Express | PSQL | API
              </p>
              <p className="px-10">
                Recipe finder and Health Tracker built with React using the
                spoonacular API. This app aims to help users find recipes with
                their desired ingredients to help them with healthier homemade
                meals, less food wastage and keep track of their consumption
                with the built in nutrition tracker.
              </p>
            </div>
            <div className="2xl:max-w-[31%] text-center shadow-lg p-2 rounded-xl my-10 py-5 dark:bg-gray-200">
              <Image
                className="rounded-xl"
                src={pursuitconnect}
                width={600}
                height={375}
              />
              <h3 className="text-2xl  py-2 font-bold">
                Social Networking App
              </h3>
              <div className="py-2">
                <a
                  className="bg-gradient-to-r from-blue-500 to-blue-500 text-white px-4 py-2 rounded-lg mr-1"
                  href="https://masonmei.wixsite.com/pursuitconnect"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Site
                </a>

                <h4 className="text-xl pt-3 text-teal-600 font-semibold">
                  Tech Stack:
                </h4>
                <p className="text-gray-800 py-1 text-lg font-semibold italic">
                  Velo | Wix
                </p>
              </div>
              <p className="px-10">
                1st Place Winner for Pursuit Hackathon hosted by Major League
                Hacking. With a team of 5 over a span of a weekend we created
                this social networking app for Pursuit fellows and Recruiters
                using Velo by Wix. Features include forums, job postings, news
                feed, live chat, online courses, community events as well as
                gamified profiles using badges earned through achievements
                within the application.
              </p>
            </div>
          </div>
        </section>
        {/* <section>
          <div>
            <h3 className="text-3xl py-1">Portolio</h3>
            <p className="text-md py-5 leading-8 text-gray-700">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the <span className="text-teal-500">1500s</span>, when
              an unknown printer took a galley of type and scrambled it to make
              a type specimen book.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                src={web1}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web2}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web3}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web4}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web5}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web5}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
          </div>
        </section> */}
        <section className="text-center border-t p-10 my-10">
          <div className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons  dark:text-white">
              developedbymm
            </h1>
            <div className="text-lg dark:text-white">
              <p>Built using Next.js && Tailwind</p>
              <p>Copyright © masonmei</p>
            </div>
            <div className="text-lg dark:text-white">
              <p>Get in touch with me at:</p>
              <p>masonxingmei@gmail.com</p>
              <p>or my socials below...</p>
            </div>
          </div>
          <div className="text-4xl flex justify-center gap-16 text-black-600  dark:text-white">
            <a
              href="https://twitter.com/Dapp_Boy"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillTwitterCircle />
            </a>
            <a
              href="https://www.linkedin.com/in/masonmei/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="https://github.com/masmei"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
