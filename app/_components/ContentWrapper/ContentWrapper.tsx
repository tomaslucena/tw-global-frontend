export default function ContentWrapper({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-auto px-4 lg:px-0" style={{ maxWidth: "1280px" }}>{children}</div>
  )
}