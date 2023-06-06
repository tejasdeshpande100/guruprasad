import Meta from './meta'

const Layout = ({ preview, children }) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
