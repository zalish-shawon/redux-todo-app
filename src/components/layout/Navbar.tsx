const Navbar = () => {
  return (
    <nav className="max-w-5xl mx-auto flex items-center justify-between px-8 py-4 text-black">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img
          src="https://png.pngtree.com/png-vector/20240529/ourmid/pngtree-navs-is-a-brightly-colored-leaf-shaped-logo-with-the-message-vector-png-image_6962929.png"
          alt="Logo"
          className="h-10 w-10 object-cover"
        />
        <h1 className="text-xl font-bold">Todo App</h1>
      </div>
    </nav>
  )
}

export default Navbar
