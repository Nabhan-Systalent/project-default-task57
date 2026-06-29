import React from 'react';
import { ProjectBoard } from './board/ProjectBoard';

/**
 * Page for story-5 — synthesised by the AEGIS pipeline so the generated
 * component is mounted by the SPA router. Props are safe placeholders; the
 * integration pass upgrades this into a data-wired container.
 */
export default function Page(): React.ReactElement {
  const props: any = {
    initialTasks: [],
  };
  return (
    <div>
      <h1>Story 5</h1>
      <ProjectBoard {...props} />
    </div>
  );
}
