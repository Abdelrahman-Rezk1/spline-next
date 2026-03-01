// app/page.tsx (Server Component is fine)
import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
    <main style={{ height: '100vh' }}>
      <Spline scene="/spline/scene.splinecode" />
    </main>
  );
}
