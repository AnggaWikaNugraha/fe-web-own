import PostItem from './components/postItem';

const posts = [
  { date: 'May 30, 2025', title: 'Memory Analysis Introduction | TryHackMe Write-Up' },
  { date: 'May 27, 2025', title: 'DFIR: An Introduction | TryHackMe Write-Up' },
  { date: 'May 20, 2025', title: 'Writing Pentest Reports | TryHackMe Write-Up' },
  { date: 'May 16, 2025', title: 'Jr Security Analyst Intro | TryHackMe Write-Up' },
  { date: 'May 8, 2025', title: 'Pentesting Fundamentals | TryHackMe Write-Up' },
];

const PostList = () => {
  return (
    <div className="mt-10 space-y-3 max-w-xl mx-auto">
      <h3 className="text-lg font-semibold mb-2">Posts</h3>
      {posts.map((post, index) => (
        <PostItem key={index} date={post.date} title={post.title} />
      ))}
    </div>
  );
};

export default PostList;