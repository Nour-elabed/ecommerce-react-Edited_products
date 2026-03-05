import Navbar from '@/components/Navbar';
import { Outlet } from 'react-router-dom';

type User = {
  _id: string
  username: string
  email: string
  token: string
}

const RootLayout = ({ user, setUser }: { user: User | null, setUser: React.Dispatch<React.SetStateAction<User | null>> }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar user={user} setUser={setUser} />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout;