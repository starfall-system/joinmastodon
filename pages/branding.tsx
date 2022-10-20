import BasicPage from "../components/BasicPage"
import Head from "next/head"
import Hero from "../components/Hero"
import loadIntlMessages from "../utils/loadIntlMessages"
import classNames from "classnames"
import Layout from "../components/Layout"
import heroImage from "../public/illustrations/apps_hero_desktop.png"
import Image from "next/image"

import screenshotComposeLight from "../public/screenshots/iphone-13-pro-max/Compose.light.1.iPhone 13 Pro Max_1_FB1EB7D6-DEF2-462D-9F4F-D622DF75032C.png"
import screenshotHomeLight from "../public/screenshots/iphone-13-pro-max/Home.light.1.iPhone 13 Pro Max_1_E97CFEC9-A24C-4B12-87ED-D2CCD8F17A69.png"
import screenshotProfileLight from "../public/screenshots/iphone-13-pro-max/Profile.light.1.iPhone 13 Pro Max_1_EB8AD280-7875-47A1-A556-D433BE7590E7.png"
import screenshotServerRulesLight from "../public/screenshots/iphone-13-pro-max/ServerRules.light.1.iPhone 13 Pro Max_1_9B7DD752-9F56-4CA5-8A92-4E19B9FEB281.png"
import screenshotThreadLight from "../public/screenshots/iphone-13-pro-max/Thread.light.1.iPhone 13 Pro Max_1_3C6768BF-C8B6-452B-8DD0-4C7919FBBE2F.png"

const BrandSection = ({
  title,
  copy,
  ctas,
  preview,
}: {
  title: React.ReactNode | string
  copy?: React.ReactNode
  ctas?: React.ReactNode
  preview: React.ReactNode
}) => (
  <section className="text-center">
    <div className="full-width-bg">
      <div className="full-width-bg__inner flex flex-col items-center justify-center py-20">
        <h2 className="h3 max-w-[17ch]">{title}</h2>
        {copy && (
          <div className="b1 mt-2 flex max-w-[50ch] flex-col gap-8">{copy}</div>
        )}
        {ctas && <div className="mt-12 flex justify-center gap-12">{ctas}</div>}
      </div>
    </div>
    <div className="full-width-bg flex flex-col items-center justify-center pb-20">
      <div className="full-width-bg__inner">{preview}</div>
    </div>
  </section>
)

const Logo = ({ label, src, className }: { label: string, src: string, className?: string }) => (
  <div className="flex items-center justify-center rounded-md bg-[url('/ui/void.png')] border border-gray-4 col-span-12 md:col-span-4">
    <a
      download
      title={label}
      href={src}
      className={classNames("flex items-center w-full h-full rounded-md justify-center p-8 transition-colors", className)}
    >
      <img
        src={src}
        alt=""
        className="h-16 w-auto md:h-18 lg:h-20"
      />
    </a>
  </div>
)

/** This page does not require translations */
const Branding = () => (
  <Layout>
    <div dir="ltr" className="[unicode-bidi:plaintext]">
      <Hero desktopImage={heroImage} mobileImage={heroImage}>
        <h1 className="h1 pt-16 mb-8">Brand Toolkit</h1>
        <p className="sh1">
          Learn our branding guidelines, download our logos and icons, or use our brand colors for&nbsp;your&nbsp;projects.
        </p>
      </Hero>
      <BrandSection
        title="Our Logos"
        copy={
          <p>
            We take pride in the Mastodon logo and hope you do too.
            Please&nbsp;take a moment to think about how you apply it. If you
            want to use our art, please keep it tasteful!
          </p>
        }
        preview={
          <div className="grid grid-cols-12 gap-gutter">
            <div className="col-span-12 lg:col-span-6">
              <h4 className="h4 mb-4">Wordmark</h4>
              <p className="sh1">Please do not modify the marks or use them in a confusing way. If you are unsure, reach out to us.</p>

              <div className="grid grid-cols-12 gap-gutter py-10">
                {[
                  {
                    label: "Download the purple SVG Logo with wordmark",
                    src: "/logos/logo-full-purple.svg",
                    background: "bg-black/70 hocus:bg-black",
                  },
                  {
                    label: "Download the black SVG Logo with wordmark",
                    src: "/logos/logo-full-black.svg",
                    background: "bg-white/70 hocus:bg-white",
                  },
                  {
                    label: "Download the white SVG Logo with wordmark",
                    src: "/logos/logo-full-white.svg",
                    background: "bg-black/70 hocus:bg-black",
                  },
                ].map((image, imageIndex) => (
                  <Logo
                    key={image.src}
                    src={image.src}
                    label={image.label}
                    className={image.background}
                  />
                ))}
              </div>
            </div>

            <div className="col-span-12 lg:col-span-6">
              <h4 className="h4 mb-4">Mark only</h4>
              <p className="sh1">Use these only when the Mastodon brand has been clearly established in the design.</p>

              <div className="grid grid-cols-12 gap-gutter py-10">
                {[
                  {
                    label: "Download the purple SVG Logo",
                    src: "/logos/logo-purple.svg",
                    background: "bg-black/70 hocus:bg-black",
                  },
                  {
                    label: "Download the black SVG Logo",
                    src: "/logos/logo-black.svg",
                    background: "bg-white/70 hocus:bg-white",
                  },
                  {
                    label: "Download the white SVG Logo",
                    src: "/logos/logo-white.svg",
                    background: "bg-black/70 hocus:bg-black",
                  },
                ].map((image, imageIndex) => (
                  <Logo
                    key={image.src}
                    src={image.src}
                    label={image.label}
                    className={image.background}
                  />
                ))}
              </div>
            </div>

            <div className="col-span-12 lg:col-span-6">
              <h4 className="h4 mb-4">Clear space</h4>
              <p className="sh1">
                When using our logo, please ensure that you give it room
                to&nbsp;breathe! At least 36px on all sides please.
              </p>

              <div className="flex flex-col items-center justify-center py-10 sm:flex-row lg:justify-between">
                {["/logos/logo-purple.svg", "/logos/logo-full-purple.svg"].map(
                  (src) => (
                    <div
                      className="relative rounded bg-eggplant p-[36px] text-blurple-600 shadow-[currentColor_0_0_0_1px_inset]"
                      key={src}
                    >
                      {/* everything except for the image is a guide mark */}
                      <div className="absolute top-0 left-0 h-[36px] w-[36px] rounded-full border" />
                      <div className="absolute top-0 right-0 h-[36px] w-[36px] rounded-full border" />
                      <div className="absolute bottom-0 left-0 h-[36px] w-[36px] rounded-full border" />
                      <div className="absolute bottom-0 right-0 h-[36px] w-[36px] rounded-full border" />
                      <div className="absolute top-0 left-0 m-[9px] h-[18px] w-[18px] rounded-full border" />
                      <div className="absolute top-0 right-0 m-[9px] h-[18px] w-[18px] rounded-full border" />
                      <div className="absolute bottom-0 left-0 m-[9px] h-[18px] w-[18px] rounded-full border" />
                      <div className="absolute bottom-0 right-0 m-[9px] h-[18px] w-[18px] rounded-full border" />
                      <div className="absolute border-x inset-block-0 inset-inline-[35px]" />
                      <div className="absolute border-y inset-inline-0 inset-block-[35px]" />
                      <img src={src} alt="" className="w-auto" />
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="col-span-12 lg:col-span-6">
              <h4 className="h4 mb-4 md:mb-14">Usage hierarchy</h4>

              <div className="flex justify-center">
                <ol className="list-decimal text-start">
                  <li className="mb-4">
                    <strong className="block">Purple mark and white wordmark on black background.</strong>
                    This is the preferred option.
                  </li>

                  <li className="mb-4">
                    <strong className="block">White mark and black wordmark on white background.</strong>
                    If the first option is not possible.
                  </li>

                  <li className="mb-4">
                    <strong className="block">Black mark and white wordmark on black background.</strong>
                    If incorporating color is not an option.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        }
      />
      <BrandSection
        title="Our colors"
        preview={
          <div className="grid grid-cols-12 gap-gutter">
            <div className="col-span-12 grid grid-cols-2 gap-gutter lg:col-span-8 lg:col-start-3">
              {["#6364FF", "#563ACC"].map((hex) => (
                <div key={hex} className="flex flex-col gap-2 text-left">
                  <div
                    style={{ backgroundColor: hex }}
                    className="h-20 rounded md:h-24"
                  >
                    <div className="p-4 pt-14 text-white/60 font-black">{hex}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-span-12 grid grid-cols-3 gap-gutter lg:col-span-6 lg:col-start-4">
              {["#17063B", "#2F0C7A", "#858AFA"].map((hex) => (
                <div key={hex} className="flex flex-col gap-2 text-left">
                  <div
                    style={{ backgroundColor: hex }}
                    className="h-20 rounded md:h-24"
                  >
                    <div className="p-4 pt-14 text-white/60 font-black">{hex}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        }
      />
      <BrandSection
        title="Product screenshots"
        copy="Need some screenshots? We've got you covered."
        preview={
          <div className="flex gap-gutter">
            {[
              {
                src: screenshotComposeLight,
                download: "/screenshots/iphone-13-pro-max/Compose.light.1.iPhone 13 Pro Max_1_FB1EB7D6-DEF2-462D-9F4F-D622DF75032C.png",
                title: "Compose, light mode, iPhone 13 Pro Max",
              }, {
                src: screenshotHomeLight,
                download: "/screenshots/iphone-13-pro-max/Home.light.1.iPhone 13 Pro Max_1_E97CFEC9-A24C-4B12-87ED-D2CCD8F17A69.png",
                title: "Home, light mode, iPhone 13 Pro Max",
              }, {
                src: screenshotProfileLight,
                download: "/screenshots/iphone-13-pro-max/Profile.light.1.iPhone 13 Pro Max_1_EB8AD280-7875-47A1-A556-D433BE7590E7.png",
                title: "Profile, light mode, iPhone 13 Pro Max",
              }, {
                src: screenshotServerRulesLight,
                download: "/screenshots/iphone-13-pro-max/ServerRules.light.1.iPhone 13 Pro Max_1_9B7DD752-9F56-4CA5-8A92-4E19B9FEB281.png",
                title: "Server rules, light mode, iPhone 13 Pro Max",
              }, {
                src: screenshotThreadLight,
                download: "/screenshots/iphone-13-pro-max/Thread.light.1.iPhone 13 Pro Max_1_3C6768BF-C8B6-452B-8DD0-4C7919FBBE2F.png",
                title: "Thread, light mode, iPhone 13 Pro Max",
              },
            ].map(screenshot => (
              <a key={screenshot.title} href={screenshot.download} title={screenshot.title} download className="block rounded overflow-hidden border border-gray-4 hocus:ring ring-blurple-500">
                <Image src={screenshot.src} alt="" />
              </a>
            ))}
          </div>
        }
      />
      <BrandSection
        title="Trademark Guidelines"
        preview={
          <div className="grid grid-cols-12 md:gap-x-12 gap-y-24">
            <div className="col-span-12 md:col-span-6 text-start">
              <p className="b1 mb-4">The Mastodon name and logos are trademarks of Mastodon gGmbH. While the software we create is available under a free and open source software license, the copyright license does not include an implied right or license to use our trademarks. </p>
              <p className="b1 mb-4">The role of trademarks is to prevent the exploitation of the good name and reputation of Mastodon by other people and organizations, and to provide assurance about the quality of the products and services associated with it.</p>
              <p className="b1 mb-4">To use our trademarks beyond what is considered &quot;fair&quot; or &quot;nominative&quot; use, you must follow these guidelines.</p>
              <p className="b1">To request the use of the Mastodon name and logos in a way not covered in these guidelines, or to report violations, please contact us at <a href="mailto:hello@joinmastodon.org" className="text-blurple-500 hover:underline">hello@joinmastodon.org</a>.</p>
            </div>

            <div className="col-span-12 md:col-span-6 text-start">
              <h4 className="h6 mb-4">General guidelines</h4>
              <p className="mb-4">In general, avoid creating a likelihood of confusion through your use of the marks.</p>
              <ul className="list-disc mb-8 pl-4">
                <li className="pl-1 mb-4">Do not use the Mastodon marks in any way that could mistakenly imply any official connection with or endorsement by Mastodon gGmbH.</li>
                <li className="pl-1 mb-4">Do not use or register, in whole or in part, the Mastodon marks as part of your own trademark, service mark, domain name, company name, trade name, product name or service name.</li>
                <li className="pl-1 mb-4">You may use the Mastodon word mark in referential phrases such as &quot;for&quot;, &quot;for use with&quot;, or &quot;compatible with&quot;.</li>
                <li className="pl-1">You may use the Mastodon marks when embedding or otherwise displaying user generated content published using the Mastodon software.</li>
              </ul>
              <h4 className="h6 mb-4">Server guidelines</h4>
              <p className="mb-4">If you run your own Mastodon server using the Mastodon software, including modified Mastodon software on the condition that the modifications are limited to switching on or off features already included in the software, minor tweaks in visual appearance, translations into other languages, and bug fixes:</p>
              <ul className="list-disc mb-8 pl-4">
                <li className="pl-1 mb-4">You may (although you are not encouraged to) use the Mastodon word mark in your domain name.</li>
                <li className="pl-1">You may use the Mastodon marks included in the Mastodon server software for the purposes of running the server.</li>
              </ul>
              <h4 className="h6 mb-4">Open source project guidelines</h4>
              <p className="mb-4">If you choose to build on or modify Mastodon&apos;s open-source code, beyond modifications limited to switching on or off features already included in the software, minor tweaks in visual appearance, translations into other languages, and bug fixes:</p>
              <ul className="list-disc mb-8 pl-4">
                <li className="pl-1 mb-4">You must choose your own branding, logos, and trademarks that denote your unique identity so as to clearly signal to users that there is no affiliation with or endorsement by Mastodon gGmbH.</li>
                <li className="pl-1">You may use word marks, but not our logos, to truthfully describe the relationship between your software and ours, for example &quot;this software is derived from the source code of the Mastodon software&quot;.</li>
              </ul>
              <h4 className="h6 mb-4">Social media guidelines</h4>
              <p>The name and handle of your social media account and any and all pages cannot begin with a Mastodon word mark. In addition, Mastodon logos cannot be used in a way that might suggest affiliation with Mastodon.</p>
            </div>
          </div>
        }
      />

      <Head>
        <title>Brand Toolkit - Mastodon</title>
        <meta
          property="og:title"
          content="Brand Toolkit for Mastodon"
        />
        <meta
          property="og:description"
          content="Learn our branding guidelines, download our logos and icons, or use our brand colors for your projects."
        />
        <meta
          property="description"
          content="Learn our branding guidelines, download our logos and icons, or use our brand colors for your projects."
        />
      </Head>
    </div>
  </Layout>
)
export async function getStaticProps(ctx) {
  return {
    props: { intlMessages: await loadIntlMessages(ctx) },
  }
}
export default Branding
