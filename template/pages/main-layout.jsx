export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen">
          <div className="w-64">{/* Insert Navigation here */}</div>
          <div className="flex-grow p-12">{children}</div>
        </div>
      </body>
    </html>
  );
}
