import { Toaster } from "react-hot-toast";
import { Inria_Serif } from "next/font/google";
import "@/app/style/global.css";

const Inria = Inria_Serif({ weight: "300", subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://sploshessence.com/"),
  title: "SploshEssenceAgency",
  applicationName: "SploshEssenceAgency",
  author: "SploshEssenceAgency",
  images: "https://raw.githubusercontent.com/Nolojia-Technologies/splosh-essence-agency/main/public/assets/banner.png",
  description:
    "Get deals and brand promotions , apps and website with us easily and earn as an agent by doing promotions & refferals ",
    metadataBase: new URL("https://sploshessence.com/"),
    keywords: [
    "brand promotion",
    "earn",
    "brand deals",
    " games",
    "earn by referrals",
    "advertise",
    "spin wheels",
    "developer",
    "web design",
    "web developer",
    "programming",
    "graphic design",
  ],
  openGraph: {
    title: "SploshEssenceAgency",
    description:
      "Get deals and brand promotions , apps and website with us easily and earn as an agent by doing promotions & refferals ",
    url: "https://sploshessence.com//",
    siteName: "SploshEssenceAgency",
    images: "https://raw.githubusercontent.com/Nolojia-Technologies/splosh-essence-agency/main/public/assets/banner.png",
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={Inria.className}>
        <Toaster
          position="top-right"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            className: "",
            duration: 8000,
            style: {
              background: "#191919",
              color: "#ffffffff",
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}
