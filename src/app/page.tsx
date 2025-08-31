// app/page.tsx (Server Component is fine)
import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
    <main style={{ height: '100vh' }}>
      <Spline scene="https://prod.spline.design/8IGDlNkB15m3mO5K/scene.splinecode" />
    </main>
  );
}
