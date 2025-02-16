import Footer from "~/components/Footer";
import Header from "~/components/Header";

export const metadata = {
  title: "Crafts & Busy Gifts",
  description: "Crafts & Busy Gifts"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
