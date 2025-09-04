export default function ContentWrapper({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-auto" style={{ maxWidth: "1280px", minHeight: "100vh" }}>{children}</div>
  )
}