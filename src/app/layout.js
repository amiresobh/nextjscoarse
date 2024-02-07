import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: {
    default: 'مرکز طب کار آیین',
    template: 'مرکز طب کار آیین | %s'
  },
  description: "مرکز طب کار آیین، ارائه کلیه خدمات سلامت شغلی",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body className="font-EstedadLight text-TextColor ml-2 lg:mt-5  lg:px-[50px]">
        <div className=" w-full m-auto min-h-[100vh] flex flex-col justify-between">
          <Navbar />
          <div className="mx-5 lg:mx-0 pt-20">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
