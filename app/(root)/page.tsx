import Grid from '@/components/Grid/grid.jsx';
import '../globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'pathfinder',
  description: 'Graph algorithm Animation',
};

export default function Home() {
  return (
    <section>
      <Grid />
    </section>
  );
}
