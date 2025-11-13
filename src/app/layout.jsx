import "./globals.css";

export const metadata = {
  title: "Mock Apple MacBook Store",
  description: "Mock Apple MacBook Store Create by Yosri Swidan",
  icons: {
    icon: "/logo.svg"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
