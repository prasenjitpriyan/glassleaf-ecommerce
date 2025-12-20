import { auth, signOut } from '@/auth';
import NavbarContent from './navbar-content';

export default async function Navbar() {
  const session = await auth();

  async function handleSignOut() {
    'use server';
    await signOut();
  }

  return <NavbarContent session={session} signOutAction={handleSignOut} />;
}
