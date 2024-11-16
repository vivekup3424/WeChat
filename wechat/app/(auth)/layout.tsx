const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-violet-300 flex items-start justify-end h-screen">
      {children}
    </div>
  )
}

export default AuthLayout;
