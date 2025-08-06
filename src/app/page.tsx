import Image from "next/image";
import ProfileHeader from "./components/homePage/components/header";
import AboutSection from "./components/homePage/components/about";
import PostList from "./components/homePage/components/postList";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white px-6 py-10">
      <div className="max-w-3xl mx-auto">
        <ProfileHeader />
        <AboutSection/>
        <PostList />
      </div>
    </main>
  )
}
