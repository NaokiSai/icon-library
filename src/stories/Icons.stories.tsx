import React from 'react';
import { Icons } from '../index';

export default { title: 'Design System/Icons' };

const IconGrid = ({ node, path = '' }: { node: any, path: string }) => {
  const entries = Object.entries(node);
  const icons = entries.filter(([_, v]) => typeof v === 'function');
  const folders = entries.filter(([_, v]) => typeof v === 'object');

  return (
    <div style={{ marginLeft: '1rem' }}>
      <h3 style={{ borderBottom: '1px solid #ddd' }}>{path || 'Root'}</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '1rem' }}>
        {icons.map(([name, Component]: [string, any]) => (
          <div key={name} style={{ textAlign: 'center', padding: '10px', border: '1px solid #f0f0f0' }}>
            <Component width={32} height={32} />
            <div style={{ fontSize: '10px', marginTop: '4px' }}>{name}</div>
          </div>
        ))}
      </div>
      {folders.map(([name, value]) => (
        <IconGrid key={name} node={value} path={path ? `${path} / ${name}` : name} />
      ))}
    </div>
  );
};

export const AllIcons = () => <IconGrid node={Icons} path="" />;